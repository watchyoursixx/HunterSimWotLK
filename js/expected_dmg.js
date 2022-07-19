let _combatCritChance = 0;

//calculates the estimated haste at +t seconds into the future
function getHasteRanged(t) {
   hasted_speed = 1;
   rangespeed = BaseRangeSpeed;
   let hasterating = HasteRating;
   
   if (Object.values(haste_auras).length !== 0) {
      hasterating += Object.entries(haste_auras).reduce((acc, [stat, value]) => {
         let hasteval = 0
         if(value.timer > 0) {
            hasteval = value.effect.stats.Haste
         }  
         return acc + hasteval
      }, 0)
      //console.log(hasterating)
   }
   hasted_speed = (auras.berserk?.timer > 0) ? hasted_speed * 1.2 : hasted_speed;  // troll berserking (20% in wotlk)
   hasted_speed = (auras.lust?.timer > 0) ? hasted_speed * 1.3 : hasted_speed; // lust

   let hasteRatingSpeed = (hasterating / HasteRatingRatio / 100) + 1;
   hasted_speed *= hasteRatingSpeed;

   // ranged only
   rangespeed = (auras.rapid?.timer > 0) ? rangespeed / (1+ auras.rapid.effect.rangespeed / 100) : rangespeed; // rapid fire
   rangespeed = (auras.imp_hawk?.timer > 0) ? rangespeed / (1 + talents.imp_hawk) : rangespeed; // quick shots

   rangespeed = rangespeed / hasted_speed;
   //console.log("haste rating: " + hasterating);
   //console.log("range spd: " + (Math.round(rangespeed * 100) / 100));
   return rangespeed;
}

function getHasteMelee(t) {
   hasted_speed = 1;
   meleespeed = BaseMeleeSpeed;
   let hasterating = HasteRating;
   
   if (Object.values(haste_auras).length !== 0) {
      hasterating += Object.entries(haste_auras).reduce((acc, [stat, value]) => {
         let hasteval = 0
         if(value.timer > 0) {
            hasteval = value.effect.stats.Haste
         }  
         return acc + hasteval
      }, 0)
      //console.log(hasterating)
   }
   hasted_speed = (auras.berserk?.timer > 0) ? hasted_speed * 1.2 : hasted_speed;  // troll berserking (20% in wotlk)
   hasted_speed = (auras.lust?.timer > 0) ? hasted_speed * 1.3 : hasted_speed; // lust

   let hasteRatingSpeed = (hasterating / HasteRatingRatio / 100) + 1;
   hasted_speed *= hasteRatingSpeed;

   // melee only
   meleespeed = (auras.mongoose?.timer > 0) ? meleespeed / 1.02 : meleespeed; // mongoose

   meleespeed = meleespeed / hasted_speed;
   //console.log("haste rating: " + hasterating);
   //console.log("melee spd: " + (Math.round(meleespeed * 100) / 100));
   return meleespeed;
}

// handling for dmg mod changes from auras
function exp_updateDamageMod() {
   combatdmgmod = 1;
   physdmgmod = 1;
   magdmgmod = 1;

   if(!!auras.beastwithin && auras.beastwithin.timer > 0) { combatdmgmod *= 1.1;} // beast within
   
   if((debuffs.bloodfrenzy.timer > 0) && !debuffs.bloodfrenzy.inactive) { physdmgmod *= 1.04; } // blood frenzy
   // special mods for non-physical dmg
   if((debuffs.curseofele.timer > 0) && !debuffs.curseofele.inactive) { magdmgmod *= 1.13 } // curse of ele
   return;
}


function exp_dmgMod_Melee() {
   let remainder = 100;
   
   let meleemiss = Math.max(MeleeMissChance,0);
   remainder -= meleemiss;
   
   let meleedodge = Math.min(remainder, DodgeChance);
   remainder -= meleedodge;
   
   let meleeglance = Math.min(remainder, GlanceChance);
   remainder -= meleeglance;
   
   let meleecrit = Math.min(remainder, MeleeCritChance);
   remainder -= meleecrit;

   let meleehit = remainder;
   
   return mainhand_wep.basedmgmod*0.01*physdmgmod*combatdmgmod*(MeleeCritDamage*meleecrit + meleehit + GlanceDmgReduction*meleeglance)*(1-PlyrArmorReduc);
}

function exp_dmgMod_MeleeRaptor() {
   let remainder = 100;
   
   let meleemiss = Math.max(MeleeMissChance,0);
   remainder -= meleemiss;
   
   let meleedodge = Math.min(remainder, DodgeChance);
   remainder -= meleedodge;
   
   let meleecrit = Math.min(remainder, MeleeCritChance + talents.savage_strikes*10);
   remainder -= meleecrit;

   let meleehit = remainder;

   return mainhand_wep.basedmgmod*0.01*physdmgmod*combatdmgmod*(MeleeCritDamage*meleecrit + meleehit)*(1-PlyrArmorReduc);
}


function exp_dmgMod_Range(critbonus) {

   let rangemiss = Math.max(RangeMissChance,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = (_combatCritChance + critbonus)*0.01;

   return range_wep.basedmgmod*physdmgmod*combatdmgmod*rangehit*((RangeCritDamage-1)*rangecrit + 1)*(1-PlyrArmorReduc);
}
function exp_dmgMod_SpecialRange(critbonus) {

   let rangemiss = Math.max(RangeMissChance,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = (_combatCritChance + critbonus)*0.01;

   return range_wep.basedmgmod*physdmgmod*combatdmgmod*rangehit*((SpecialCritDamage-1)*rangecrit + 1)*(1-PlyrArmorReduc);
}

function exp_dmgMod_Magic(critbonus) {

   let rangemiss = Math.max(RangeMissChance,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = (_combatCritChance + critbonus)*0.01;

   return range_wep.basedmgmod*magdmgmod*combatdmgmod*rangehit*((RangeCritDamage-1)*rangecrit + 1);
}
function exp_dmgMod_SpecialMagic(critbonus) {

   let rangemiss = Math.max(RangeMissChance,0)*0.01;
   let rangehit = 1 - rangemiss;
   let rangecrit = (_combatCritChance + critbonus)*0.01;

   return range_wep.basedmgmod*magdmgmod*combatdmgmod*rangehit*((SpecialCritDamage-1)*rangecrit + 1);
}

function exp_update(){
   updateAgi();
   updateAP();
   updateArmorReduction();
   exp_updateDamageMod();
   _combatCritChance = updateCritChance();
   
	
}

function exp_dmg_MeleeSwing(mainhand_wep, combatMAP) {

	let dmg = (mainhand_wep.mindmg + mainhand_wep.maxdmg)*avgConst; // avg damage
    return (dmg + mainhand_wep.flatdmg + combatMAP*mainhand_wep.speed) * exp_dmgMod_Melee(); 
}
function exp_dmg_SteadyShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let steadymod_1 = (!!currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus) ? currentgear.special.gronnstalker_4p_steady_shot_dmg_bonus : 0;
   let steadymod_2 = (!!glyphs.steadyshot) ? glyphs.steadyshot.bonus : 0;
   let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
   let specials_mod = (steadymod_1 > 0) ? (1 + steadymod_1 + sniper_training) * (1 + steadymod_2) : (1 + steadymod_2 + sniper_training);
   let shotDmg = (combatRAP * 0.1 + range_wep.ammodps * 2.8 + dmg + SPELLS.steadyshot.ranks.rankdmg) * specials_mod;

   return (shotDmg * exp_dmgMod_SpecialRange(talents.surv_instincts));
}

function exp_dmg_MultiShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let specials_mod = (!!currentgear.special.multishot_dmg_inc_bonus) ? (1 + currentgear.special.multishot_dmg_inc_bonus + talents.barrage) : (1 + talents.barrage);
   let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg + SPELLS.multishot.ranks.rankdmg) * specials_mod;

   return (shotDmg * exp_dmgMod_Range(talents.imp_barrage * 4));
}

function exp_dmg_ArcaneShot(range_wep, combatRAP) {
   let arc_mod = talents.imp_arc_shot;
   let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
   let specials_mod = (1 + arc_mod + imp_steady_shot);
   let shotDmg = (combatRAP * 0.15 + SPELLS.arcaneshot.ranks.rankdmg) * specials_mod;

   return (shotDmg * exp_dmgMod_SpecialMagic(talents.surv_instincts));
}

function exp_dmg_AimedShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
   let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
   let specials_mod = (1 + imp_steady_shot + sniper_training + talents.barrage);
   let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg + SPELLS.aimedshot.ranks.rankdmg) * specials_mod;
   return (shotDmg * exp_dmgMod_SpecialRange(talents.imp_barrage * 4));
}

function exp_dmg_RaptorStrike(mainhand_wep, combatMAP) {

   let dmg = (mainhand_wep.mindmg + mainhand_wep.maxdmg) * avgConst;
   let outDmg = (combatMAP * mainhand_wep.speed / DmgAPRatio + dmg + mainhand_wep.flatdmg + SPELLS.raptorstrike.ranks.rankdmg);
   return outDmg;
}

   // Mongoose Bite
function exp_dmg_MongooseBite(combatMAP) {

   let outDmg = (combatMAP * 0.2 + SPELLS.mongoose.ranks.rankdmg);
   return outDmg * exp_dmgMod_MeleeRaptor();
}
   // Black Arrow
function exp_dmg_BlackArrow(combatRAP) {

   let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
   let specials_mod = 1 + talents.t_n_t + sniper_training;
   let shotDmg = (combatRAP * 0.1 + SPELLS.blackarrow.ranks.rankdmg) * specials_mod;
   return shotDmg * exp_dmgMod_Magic(0);
}
   // Chimera Shot
function exp_dmg_ChimeraShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let imp_steady_shot = (auras.imp_steady_shot?.timer > 0) ? talents.imp_steady_shot : 0;
   let specials_mod = (1 + imp_steady_shot);
   let shotDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * 1.25 * specials_mod;
   return shotDmg * exp_dmgMod_SpecialMagic(0);
}
   // Explosive Shot
function exp_dmg_ExplosiveShot(combatRAP) {

   let sniper_training = (auras.sniper_training?.timer > 0) ? talents.sniper_training * 2 : 0;
   let dmg = (SPELLS.explosiveshot.mindmg + SPELLS.explosiveshot.maxdmg) * avgConst;
   let specials_mod = 1 + talents.t_n_t + sniper_training;
   let shotDmg = (combatRAP * 0.14 + dmg) * specials_mod;
   return shotDmg * exp_dmgMod_Magic(0);
}
   // Serpent Sting
function exp_dmg_SerpentSting(combatRAP) {

   let serpent_mod = (!!currentgear.special.t8_serpent_dmg_bonus) ? currentgear.special.t8_serpent_dmg_bonus : 0;
   let specials_mod = 1 + talents.imp_stings + serpent_mod;
   let shotDmg = (combatRAP * 0.2 + SPELLS.serpentsting.ranks.rankdmg * 15 / 3) * specials_mod;
   return shotDmg * exp_dmgMod_Magic(0);
}
   // Explosive Trap
function exp_dmg_ExplosiveTrap(combatRAP, dotcheck) {

   let dot = dotcheck;
   let dmg = 0;
   let dotDmg = 0;
   let trapDmg = 0;
   if(!!dot) {
       dotDmg = SPELLS.explosivetrap.tickdmg * 10 + combatRAP;
       return dotDmg * exp_dmgMod_Magic();
   } else {
       dmg = (SPELLS.explosivetrap.mindmg + SPELLS.explosivetrap.maxdmg) * avgConst;
       trapDmg = (combatRAP * 0.10 + dmg);
       return trapDmg * exp_dmgMod_Magic(0);
   }
}
   // Immolation Trap
function exp_dmg_ImmolateTrap(combatRAP) {
   let dmg = (combatRAP * 0.02 + SPELLS.immolatetrap.ranks.rankdmg * 5);
   return dmg * exp_dmgMod_Magic(0);
}
   // Volley
function exp_dmg_Volley(combatRAP) {

   let shotDmg = (combatRAP * 0.0837 + SPELLS.volley.ranks.rankdmg);
   return shotDmg * exp_dmgMod_Magic(0);
}

   // Killshot
function exp_dmg_KillShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let bonusDmg = (combatRAP * 0.4 + SPELLS.killshot.ranks.rankdmg * 2);
   let wepDmg = (combatRAP * 0.2 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * 2;
   let shotDmg = (bonusDmg + wepDmg);
   return shotDmg * exp_dmgMod_SpecialRange(talents.sniper_training*5);
}
   // Silencing Shot, Scatter Shot
function exp_dmg_ScatterSilenceShot(range_wep, combatRAP) {

   let dmg = (range_wep.mindmg + range_wep.maxdmg) * avgConst;
   let shotDmg = (combatRAP * range_wep.speed / 14 + range_wep.ammodps * range_wep.speed + dmg + range_wep.flatdmg) * avgConst;
   return shotDmg * exp_dmgMod_Range(0);
}