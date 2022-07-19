
const PetBaseDodge = 6.5;
const PetBaseCrit  = 3.2;
const PetBaseSpeed = 2;
const PetMinDmg = 44;
const PetMaxDmg = 68;
const PetBaseAgi = 54;
const PetBaseStr = 162;
const PetHappiness = 1.25;
const PetFamilyMod = 1.05; // WotLK all pets have same family dmg mod of 5% idk why
const PetHunterAPRatio = 0.22;
const PetAgiToCrit = 30;
const CobraReflexesPenalty = 0.85;
const BaseFocusRegen = 25;
// initial pet object - trying something different from how I did player 1 global object instead of a bunch of variables
var pet = {
    agi: 0,
    ap: 0,
    combatap: 0,
    crit: 0,
    combatcrit:0,
    dmgmod: 1,
    hit: 0,
    spellhit: 0,
    miss: 0,
    dodge: 0,
    expertise: 0,
    speed: 2,
    combatspeed:0,
    str: 0,
    focusregen:0,
    focus: 100,
};
var petconsumestats = {};
var petdmgdone = 0;
var petautodmg = 0;
var petduration = 0;
var petsteptime = 0;
var pet_special = 0;
var pet_focus_dump = 0;
var pet_special_mod = 1;
var beast_tame_weight = false;

var pet_talents = {
    blood_of_rhino: 0,
    bloodthirst: 1,
    boar_speed: 0,
    bullheaded: 0,
    call_of_wild: 1,
    carrion_feeder: 0,
    charge: 0,
    cobra_reflex: 1.3,
    cornered: 0,
    cull_herd: 1.03, // 
    dash: 1,
    dive: 0,
    feed_frenzy: 1,
    grace_mantis: 0,
    great_resist: 0,
    great_stam: 0,
    guard_dog: 0,
    imp_cower: 0,
    intervene: 0,
    last_stand: 0,
    lick_wounds: 0,
    lionheart: 0,
    mobility: 0,
    nat_armor: 0,
    owl_focus: 0,
    pet_barding: 0,
    pheonix: 0,
    rabid: 1,
    roar_recovery: 0,
    roar_sacrifice: 0,
    shark_attack: 1.03, // 
    silverback: 0,
    spider_bite: 0.09, //
    spike_collar: 1.09,
    taunt: 0,
    thunderstomp: 0,
    wild_hunt: 0,
    wolverine_bite: 0
};

var selectedPet = 0;

var petdmg = {
    attackdmg:0,
    specialdmg:0,
    focusdumpdmg: 0
}

function petStatsCalc(){
    if (talents.beast_mast === 0) {
        if(PET_FAMILY[selectedPet].family === 'Ferocity'){
            pet_talents = Ferocitypet;
        }
        else if(PET_FAMILY[selectedPet].family === 'Cunning'){
            pet_talents = Cunningpet;
        }
        else if(PET_FAMILY[selectedPet].family === 'Tenacity'){
            pet_talents = Tenacitypet;
        }
    }
    let racialmod = (selectedRace === 3) ? 1.05 : 1; // 5% pet dmg if orc
    let beasttamers_crit = 0;
    let beasttamers_dmg = 1;
    if (gear.shoulder.id === 30892 || beast_tame_weight) {
        beasttamers_dmg = 1.02;
        beasttamers_crit = 2;
    };
    let group_dmg_mod = (talents.ferocious_insp > 0) ? talents.ferocious_insp : 1;
    pet.dmgmod = PetHappiness * talents.unleash_fury * racialmod * beasttamers_dmg * group_dmg_mod * pet_talents.spike_collar * talents.kindred_spirit * pet_talents.shark_attack;

    pet.str = Math.floor((PetBaseStr + (selectedbuffs.stats.Str || 0) + (petconsumestats.Str || 0)) * selectedbuffs.special.kingsMod);
    pet.agi = Math.floor((PetBaseAgi + (selectedbuffs.stats.Agi || 0) + (petconsumestats.Agi || 0)) * selectedbuffs.special.kingsMod);

    //ap
    let petAPfromplayer = BaseRAP * PetHunterAPRatio;
    let tsa_ap = (talents.trueshot_aura > 1) ? 1 : 1; // fixme
    let apmod = (talents.animal_handler) * (1 + Stam * talents.hunt_vs_wild) * tsa_ap;
    
    pet.ap = ((pet.str - 10) * 2 + (selectedbuffs.stats.MAP || 0) + petAPfromplayer) * apmod;
    //crit
    pet.crit = PetBaseCrit + pet.agi / PetAgiToCrit + talents.ferocity + (selectedbuffs.stats.CritChance || 0) + beasttamers_crit + CritPenalty + pet_talents.spider_bite * 100; // need to add special gear items w/ pet crit
    //hit
    pet.hit = Math.floor(RangeHitChance);
    pet.miss = Math.max(BasePhysicalMiss - pet.hit,0);
    pet.spellhit = Math.floor(RangeHitChance * 2);
    let pet_expertise_scale = PetBaseDodge / ExpertiseReduction / BasePhysicalMiss; // dodge / expertise ratio and max hit value
    pet.expertise = Math.floor(pet_expertise_scale * pet.hit);
    pet.dodge = PetBaseDodge - pet.expertise * ExpertiseReduction;
    //speed
    pet.speed = PetBaseSpeed / talents.serp_swift / pet_talents.cobra_reflex; // 1.3 for cobra reflexes
    
    generatePetSpellObj();
    
    pet.focusregen = BaseFocusRegen * (1 + talents.bestial_disc * 0.5);
}

function petUpdateDmgMod(){
    pet.combatdmgmod = 1;
    magdmgmod = 1;
    physdmgmod = 1;
    pet_special_mod = 1;
    if(auras.beastwithin?.timer > 0) pet.combatdmgmod *= 1 + auras.beastwithin.effect.dmgmod * 5 / 100; // bestial wrath
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) physdmgmod *= debuffs.bloodfrenzy.dmgbonus; // blood frenzy debuff
    if(auras.cullingherd?.timer > 0) pet.combatdmgmod *= pet_talents.cull_herd;
    if(auras.monstrousbite?.timer > 0) pet.combatdmgmod *= Math.pow(1 + auras.monstrousbite.effect.dmgbonus / 100, auras.monstrousbite.stacks);
    if((debuffs.curseofele.timer > 0) && !debuffs.curseofele.inactive) { magdmgmod *= 1.13 } // curse of ele
    if(auras.killcommand?.timer > 0) pet_special_mod = (1 + auras.killcommand.stacks * auras.killcommand.effect.dmgmod / 100);
    if(debuffs.hm.timer > 0 && talents.mark_death > 0) pet_special_mod *= (1 + talents.mark_death);

    return;
}

function petUpdateHaste(){
    pet.combatspeed = pet.speed;
    pet.combatspeed = (auras.frenzy?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // frenzy
    pet.combatspeed = (auras.lust?.timer > 0) ? pet.combatspeed / 1.3 : pet.combatspeed; // lust
    return;
}

function petUpdateStats(){

    pet.combatcrit = pet.crit;
    pet.combatspellcrit = Math.max(0,talents.ferocity + CritPenalty);

    // hunter AP
    let bonusAP = updateAP();
    pet.combatap = bonusAP * PetHunterAPRatio + pet.ap;

    // ******************** Crit *******************
    pet.combatcrit += combatAgi / PetAgiToCrit;
    // pet crit imp crusader
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { 
        pet.combatcrit += debuffs.judgecrusader.crit;
        pet.combatspellcrit += debuffs.judgecrusader.crit;
    } 
    
}

function procPetFocus(playercrit){
    
    // go for the throat
    if(playercrit === true) {
        pet.focus += talents.GftT;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet gains " + talents.GftT + " Focus from Go for the Throat";
            combatlogindex++;
        }
    }
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
    return playercrit = false;
}

function petUpdateFocus(){
    // focus regen per 5s
    pet.focus += pet.focusregen;    
    if(combatlogRun) {
        combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Pet regens " + pet.focusregen + " Focus";
        combatlogindex++;
    }
    
    // cap focus at 100, reset crit flag
    pet.focus = Math.min(100, pet.focus);
}

function petAuras(steptime){
    // update uptime
    
    
}

function petRollAttack(){
    let tmp = 0;
    let roll = rng10k();
    tmp += pet.miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += pet.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += GlanceChance * 100;
    if (roll < tmp) return RESULT.GLANCE;
    tmp += pet.combatcrit * 100;
    if (roll < tmp) return RESULT.CRIT; // 1 roll
    return RESULT.HIT;
}

function petRollSpell(specialcrit){
    let tmp = 0;
    let roll = rng10k();
    let crit = pet.combatcrit + specialcrit;
    tmp += pet.miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += pet.dodge * 100;
    if (roll < tmp) return RESULT.DODGE;
    tmp += (100 - pet.miss - PetBaseDodge) * crit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
    
}

function petRollMagicSpell(){
    let tmp = 0;
    let roll = rng10k();
    let miss = BaseMagicMiss - pet.spellhit;
    tmp += miss * 100;
    if (roll < tmp) return RESULT.MISS;
    tmp += PartialResistRate * 100; // partial resist rate approx. 14.5% based on log data at 0 resistance
    if (roll < tmp) return RESULT.PARTIAL;
    tmp += (100 - miss - PartialResistRate) * pet.combatspellcrit; // pseudo 2 roll
    if (roll < tmp) return RESULT.CRIT;
    return RESULT.HIT;
}

function petAttack(){

    petUpdateStats();
    petUpdateDmgMod();
    
    let dmg = 0;
    let result = petRollAttack(); // check attack table
    spellResultSum(result,'petattack');
    if (result === RESULT.HIT) {
          dmg = petAutoCalc(); // calc damage
    }
    else if (result === RESULT.GLANCE) {
        dmg = petAutoCalc();
        dmg *= GlanceDmgReduction;
    }
    else if (result === RESULT.CRIT) {
        dmg = petAutoCalc();
        dmg *= 2;
        petCrit();
    }
    let spelltype = "physical";
    let done = petdealdamage(dmg,result,spelltype);
    petdmgdone += done;

    petUpdateHaste();
    petsteptime = nextpetattack;
    nextpetattack += pet.combatspeed;

    petautocount++;
    petdmg.attackdmg += done;

    if(combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet Auto " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
    }
    return petsteptime;
}

function petSpell(petspell){

    petUpdateStats();
    petUpdateDmgMod();
    let dmg = 0;
    result = 0;
    let specialcrit = (auras.killcommand?.timer > 0) ? talents.focused_fire * 10 : 0;
    let spelltype = PET_SPELLS[petspell].type;
    let spellname = PET_SPELLS[petspell].spell_name;
    let dot_only_check = (spellname !== 'Venom Web Spray' && spellname !== 'Spore Cloud' && spellname !== 'Poison Spit' && spellname !== 'Scorpid Poison');
    let hit_and_dot_check = (spellname == 'Fire Breath' || spellname == 'Rake' || spellname == 'Savage Rend' || spellname == 'Spirit Strike')
    //if(nextpetattack < nextpetspell){ nextpetspell = nextpetattack; }
    
    if(spelltype === 'physical' && spellname !== 'Pin'){

        result = petRollSpell(specialcrit); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 2;
            petCrit(petspell);
        }

    }
    else if(spelltype === 'bleed') {
        result = petRollSpell(specialcrit); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 2;
            petCrit(petspell);
        }
    }
    else if(spelltype === 'AP') {

    }
    else if(spelltype !== 'physical' && dot_only_check){
        
        result = petRollMagicSpell(); // check attack table
        if(talents.cobra_strike > 0 && pet_special_crit > 0 && result === RESULT.HIT) {
            result = 3;
            pet_special_crit -= 1;
        }
        spellResultSum(result, petspell);
        if (result === RESULT.HIT) {
            dmg = spellPetCalc(petspell); // calc damage
        }
        else if (result === RESULT.CRIT) {
            dmg = spellPetCalc(petspell);
            dmg *= 1.5; // spell crits are 150%
            petCrit();
        }
        else if (result === RESULT.PARTIAL) {
            dmg = spellPetCalc(petspell);
            dmg *= 0.65; // average reduction of 35% on partial resists
        }

    }
    if (!dot_only_check || hit_and_dot_check) {
        // roll for initial hit if dot only
        let hit = (spelltype === 'bleed' || spelltype === 'physical') ? pet.hit : pet.spellhit;
        result = (!dot_only_check) ? rollMagicDoT(hit, spelltype) : result;
        if (result !== RESULT.MISS) {
            let ticks = PET_SPELLS.pet_special.duration / PET_SPELLS.pet_special.tick_rate;
            let ap_mod = (hit_and_dot_check) ? PET_SPELLS.pet_special.ap_mod * ticks : PET_SPELLS.pet_special.ap_mod;
            auras['pet_special'].damage = petSpecialDoTCalc(ap_mod);
            dotHandler('pet_special', 'pet', true, spelltype);
        }
    }

    petsteptime = nextpetspell; // since pet steps don't change time (all instants) set time to current time
    nextpetspell = (PET_SPELLS[petspell].gcd) ? nextpetspell + 1.5 : nextpetspell; // set next available spell time by 1.5
    
    
    let done = petdealdamage(dmg,result,spelltype); // need special case for magic spells pet or player

    petdmgdone += done;
    if (petspell === 'pet_special'){
        petdmg.specialdmg += done;
        petspecialcount++;
    } else if (petspell === 'pet_focus_dump') {
        petdmg.focusdumpdmg += done;
        petfocuscount++;
    }
    
    if(auras.killcommand?.timer > 0 && (result === RESULT.HIT || result === RESULT.CRIT || result === RESULT.PARTIAL)) {
        auras.killcommand.stacks = Math.max(0, auras.killcommand.stacks - 1);
    }
    if(auras.killcommand?.timer > 0 && auras.killcommand.stacks === 0) {
        auras.killcommand.timer = 0;
    }
    
    petUpdateHaste();
    
    if(combatlogRun && !dot_only_check){
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet casts " + PET_SPELLS[petspell].spell_name + " on Target - " + RESULTARRAY[result];
        combatlogindex++;
    } else if (combatlogRun) {
        combatlogarray[combatlogindex] = petsteptime.toFixed(3) + " - Pet " + PET_SPELLS[petspell].spell_name + " " + RESULTARRAY[result] + " for " + done;
        combatlogindex++;
        
    }
    return petsteptime;
}
/** final damage calculation after rolls */
function petdealdamage(dmg, result, spelltype) {
    if (result != RESULT.MISS && result != RESULT.DODGE && spelltype === "physical") {
       // randomizes the result to be always ±1 damage as in-game results show even with fine light crossbow
        let mindmg = Math.floor(dmg * (1 - PetArmorReduc));
        let maxdmg = Math.ceil(dmg * (1 - PetArmorReduc));
        dmg = rng(mindmg,maxdmg);
        return dmg;
    }
    else if (result != RESULT.MISS && (spelltype !== 'physical')){
        let mindmg = Math.floor(dmg);
        let maxdmg = Math.ceil(dmg);
        dmg = rng(mindmg,maxdmg);
        
        return dmg;
    }
    else {
       return 0;
    }
}

function petCrit(petspell){

    let check_spell = (petspell !== undefined) ? petspell : '';
    if (check_spell === 'pet_focus_dump') {
        if(!!auras.cullingherd) {
            auras.cullingherd.timer = auras.cullingherd.effect.duration;
            if (combatlogRun){
                combatlogarray[combatlogindex] = nextpetspell.toFixed(3) + " - Player/Pet gains Culling the Herd";
                combatlogindex++;
            }
        }
    }
    let roll = 0;
    //frenzy
    if (!!auras.frenzy) {
        roll = rng10k();
        let frenzychance = talents.frenzy * 2000;
        auras.frenzy.timer = (roll <= frenzychance) ? 8 : pet.frenzy.timer; // proc check
        if(pet.frenzy.timer === 8) { 
            if(combatlogRun && nextpetspell >= nextpetattack) {
                    combatlogarray[combatlogindex] = nextpetattack.toFixed(3) + " - Pet gains Frenzy";
                    combatlogindex++;
            } 
            else if (combatlogRun){
                combatlogarray[combatlogindex] = nextpetspell.toFixed(3) + " - Pet gains Frenzy";
                combatlogindex++;
            }
        }
    }
    // invigoration
    if (talents.invigoration > 0) {
        roll = rng10k();
        if (roll <= talents.invigoration * 1000) currentMana = Math.min(Mana * 0.01 + currentMana, Mana); // 1% mana restore
    }
}