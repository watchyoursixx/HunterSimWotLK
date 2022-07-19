
var sunderstart = 0;
var queueReadiness = false;
var beastwithinreduc = 1;
var sharedtrinketcd = 0;

var debuffs = {
    hm: {uptime_g:0, timer:0, duration:300, improved:false, rap:110, uptime:0},
    judgewisdom: {uptime_g:0, timer:0, duration:20, uptime:0},
    judgecrusader: {uptime_g:0, timer:0, duration:20, crit:3, uptime:0},
    sunder: {uptime_g:0, timer:0, duration:30, stacktime:5, stacks:1, arp:0.04, uptime:0},
    faeriefire: {uptime_g:0, timer:0, duration:300, arp:0.05, uptime:0},
    expose: {uptime_g:0, timer:0, duration:30, arp:0.2, uptime:0},
    bloodfrenzy: {uptime_g:0, timer:0, duration:12, dmgbonus:1.04, uptime:0},
    curseofele: {uptime_g:0, timer:0, duration:120, dmgbonus:1.13, uptime:0},
    mangle: {uptime_g:0, timer:0, duration:60, dmgbonus:1.3, uptime:0}
}

var buff_uptimes = {}

const debuff_uptimes = {
    hm: 0,
    judgewisdom: 0,
    judgecrusader: 0,
    sunder: 0,
    faeriefire: 0,
    expose: 0,
    bloodfrenzy: 0,
    curseofele: 0,
    mangle: 0
}

/** Initializes auras for procs and actives, ran once per sim at start */
function initializeAuras() {
    // sets all uptimes to 0
    Object.values(auras).forEach(key => key.uptime = 0);
    Object.values(debuffs).forEach(key => key.uptime = 0);
    
    debuffs.hm.rap = (level === 70) ? 110 : 500;

    auratimers = buildAuraTimerSteps(auras)
    auracds = buildAuraCdSteps(auras)
    aurauptimes = buildAuraUptimeSteps(auras)
    aura_timer_resets = buildAuraTimerResets(auras)
    aura_cd_resets = buildAuraCdResets(auras)

    buff_uptimes = {} // reset buff uptimes to empty obj, then builds the obj based on auras and sets to 0
    for (let prop in auras) {
        buff_uptimes[prop] = 0
    }
    
    return;
 }


 /** resets cds and timers to 0 or an offset if chosen, ran every iteration */
 function ResetAuras(){
    
    aura_cd_resets(auras)
    aura_timer_resets(auras)
    
    debuffs.hm.timer = 0;
    debuffs.judgewisdom.timer = 0;
    debuffs.judgecrusader.timer = 0;
    debuffs.sunder.timer = 0;
    debuffs.expose.timer = 0;
    debuffs.faeriefire.timer = 0;
    debuffs.bloodfrenzy.timer = 0;
    debuffs.curseofele.timer = 0;
    debuffs.mangle.timer = 0;

    sharedtrinketcd = 0;

    return;
 }

/** Sets cooldowns for certain auras based on spell CD behaviour setting from settings. */
function setSpellCDs(){
    if(!!auras.rapid) auras.rapid.effect.base_cd = (auras.rapid.effect.base_cd === 180) ? three_min_cds : auras.rapid.effect.base_cd;
    if(!!auras.berserk) auras.berserk.effect.base_cd = three_min_cds;

    if(!!auras.bloodfury) auras.bloodfury.effect.base_cd = two_min_cds;
    if(!!auras.trink1) auras.trink1.effect.base_cd = two_min_cds;
    if(!!auras.trink2) auras.trink2.effect.base_cd = two_min_cds;
    if(!!auras.potion) auras.potion.effect.base_cd = two_min_cds;
    if(!!auras.beastwithin) auras.beastwithin.effect.base_cd = two_min_cds;

    return;
}

/** Executes functions related to stepping time values for auras.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function updateAuras(steptime) {
    // set timer of on use AP trinkets

    IntervalAuraHandler();
    stepauras(steptime);
    uptimeCalc();

    beastwithinreduc = (!!auras.beastwithin && (auras.beastwithin.timer > 0)) ? 0.5 : 1;
    auracds(auras);

    return;   
 }

/** Executes steps each aura timer down by steptime.
 * @param steptime Takes the time for the current step to modify auras and cooldowns.
 */
function stepauras(steptime) {
    
    auratimers(auras);

    // the following can go negative so that when it switches from active to inactive the time between steps is kept
    if(debuffs.hm.timer > 0)               { debuffs.hm.timer = debuffs.hm.timer - steptime; }
    if(debuffs.judgewisdom.timer > 0)      { debuffs.judgewisdom.timer = debuffs.judgewisdom.timer - steptime; }
    if(debuffs.judgecrusader.timer > 0)    { debuffs.judgecrusader.timer = debuffs.judgecrusader.timer - steptime; }
    if(debuffs.sunder.timer > 0)           { debuffs.sunder.timer = debuffs.sunder.timer - steptime; }
    if(debuffs.expose.timer > 0)           { debuffs.expose.timer = debuffs.expose.timer - steptime; }
    if(debuffs.faeriefire.timer > 0)       { debuffs.faeriefire.timer = debuffs.faeriefire.timer - steptime; }
    if(debuffs.bloodfrenzy.timer > 0)      { debuffs.bloodfrenzy.timer = debuffs.bloodfrenzy.timer - steptime; }
    if(debuffs.curseofele.timer > 0)      { debuffs.curseofele.timer = debuffs.curseofele.timer - steptime; }
    if(debuffs.mangle.timer > 0)      { debuffs.mangle.timer = debuffs.mangle.timer - steptime; }

    // count down the timer on shared CDs for trinkets
    if(sharedtrinketcd > 0) { sharedtrinketcd = Math.max(sharedtrinketcd - steptime,0); }

    // reset stacks
    //if(auras.naarusliver.timer === 0){ auras.naarusliver.stacks = 0;}

    return;
}

/** totals the uptime in seconds of the buffs to be later extracted for % uptimes */
function uptimeCalc() {
    
    aurauptimes(auras);

    // for debugging debuffs - tracking actual uptime
    if(debuffs.hm.timer > 0 && !debuffs.hm.inactive) { debuffs.hm.uptime += steptime; }
    else if(debuffs.hm.timer < 0) {
       debuffs.hm.uptime += steptime;
    }
    if(debuffs.judgewisdom.timer > 0 && !debuffs.judgewisdom.inactive) { debuffs.judgewisdom.uptime += steptime; }
    else if(debuffs.judgewisdom.timer < 0) {
       debuffs.judgewisdom.uptime += steptime;
    }
    if(debuffs.judgecrusader.timer > 0 && !debuffs.judgecrusader.inactive) { debuffs.judgecrusader.uptime += steptime; }
    else if(debuffs.judgecrusader.timer < 0) {
       debuffs.judgecrusader.uptime += steptime;
    }
    if(debuffs.sunder.timer > 0 && !debuffs.sunder.inactive) { debuffs.sunder.uptime += steptime; }
    else if(debuffs.sunder.timer < 0) {
       debuffs.sunder.uptime += steptime;
    }
    if(debuffs.expose.timer > 0 && !debuffs.expose.inactive) { debuffs.expose.uptime += steptime; }
    else if(debuffs.expose.timer < 0) {
       debuffs.expose.uptime += steptime;
    }
    if(debuffs.faeriefire.timer > 0 && !debuffs.faeriefire.inactive) { debuffs.faeriefire.uptime += steptime; }
    else if(debuffs.faeriefire.timer < 0) {
       debuffs.faeriefire.uptime += steptime;
    }
    if(debuffs.bloodfrenzy.timer > 0 && !debuffs.bloodfrenzy.inactive) { debuffs.bloodfrenzy.uptime += steptime; }
    else if(debuffs.bloodfrenzy.timer < 0) {
       debuffs.bloodfrenzy.uptime += steptime;
    }
    if(debuffs.curseofele.timer > 0 && !debuffs.curseofele.inactive) { debuffs.curseofele.uptime += steptime; }
    else if(debuffs.curseofele.timer < 0) {
       debuffs.curseofele.uptime += steptime;
    }
    if(debuffs.mangle.timer > 0 && !debuffs.mangle.inactive) { debuffs.mangle.uptime += steptime; }
    else if(debuffs.mangle.timer < 0) {
       debuffs.mangle.uptime += steptime;
    }

    return;
}

/** Initializes auras that are triggered on a fixed interval. Sets the refresh rate 
  * and interval for a given fight length. */
function intervalAuraInitializer(){

    // hunters mark
    if(debuffs.hm.uptime_g > 0){
        let hm_total_time = (debuffs.hm.uptime_g === 100) ? fightduration : (fightduration * debuffs.hm.uptime_g) / 100;
        let hm_refresh_int = Math.ceil(hm_total_time / debuffs.hm.duration);
        let hm_refresh_dec = (hm_total_time / debuffs.hm.duration) - Math.floor(hm_total_time / debuffs.hm.duration);
        debuffs.hm.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.hm.inactive = false; // flag for debuff being active or not
        debuffs.hm.interval = (fightduration - hm_total_time) / (hm_refresh_int);; // interval of inactive
        debuffs.hm.full_refresh = hm_refresh_int; // # of applications as whole integer
        debuffs.hm.part_refresh_dur = hm_refresh_dec * debuffs.hm.duration; // duration of a partial refresh to end the fight
    }

    // wisdom
    if(debuffs.judgewisdom.uptime_g > 0){
        let judgewisdom_total_time = (debuffs.judgewisdom.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgewisdom.uptime_g) / 100;
        let judgewisdom_refresh_int = Math.ceil(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_dec = (judgewisdom_total_time / debuffs.judgewisdom.duration) - Math.floor(judgewisdom_total_time / debuffs.judgewisdom.duration);
        let judgewisdom_refresh_partial = judgewisdom_refresh_dec * debuffs.judgewisdom.duration;
        let judgewisdom_remaining_dur_interval = (fightduration - judgewisdom_total_time) / (judgewisdom_refresh_int);
        debuffs.judgewisdom.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgewisdom.inactive = false; // flag for debuff being active or not
        debuffs.judgewisdom.interval = judgewisdom_remaining_dur_interval; // interval of inactive
        debuffs.judgewisdom.full_refresh = judgewisdom_refresh_int; // # of applications as whole integer
        debuffs.judgewisdom.part_refresh_dur = judgewisdom_refresh_partial; // duration of a partial refresh to end the fight
    }

    // crusader
    if(debuffs.judgecrusader.uptime_g > 0){
        let judgecrusader_total_time = (debuffs.judgecrusader.uptime_g === 100) ? fightduration : (fightduration * debuffs.judgecrusader.uptime_g) / 100;
        let judgecrusader_refresh_int = Math.ceil(judgecrusader_total_time / debuffs.judgecrusader.duration);
        let judgecrusader_refresh_dec = (judgecrusader_total_time / debuffs.judgecrusader.duration) - Math.floor(judgecrusader_total_time / debuffs.judgecrusader.duration);
        debuffs.judgecrusader.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.judgecrusader.inactive = false; // flag for debuff being active or not
        debuffs.judgecrusader.interval = (fightduration - judgecrusader_total_time) / (judgecrusader_refresh_int); // interval of inactive
        debuffs.judgecrusader.full_refresh = judgecrusader_refresh_int; // # of applications as whole integer
        debuffs.judgecrusader.part_refresh_dur = judgecrusader_refresh_dec * debuffs.judgecrusader.duration; // duration of a partial refresh to end the fight
    }

    // sunder
    if(debuffs.sunder.uptime_g > 0){
        let sunder_total_time = (debuffs.sunder.uptime_g === 100) ? fightduration : (fightduration * debuffs.sunder.uptime_g) / 100;
        let sunder_refresh_int = Math.ceil(sunder_total_time / debuffs.sunder.duration);
        let sunder_refresh_dec = (sunder_total_time / debuffs.sunder.duration) - Math.floor(sunder_total_time / debuffs.sunder.duration);
        debuffs.sunder.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.sunder.inactive = false; // flag for debuff being active or not
        debuffs.sunder.interval = (fightduration - sunder_total_time) / (sunder_refresh_int); // interval of inactive
        debuffs.sunder.full_refresh = sunder_refresh_int; // # of applications as whole integer
        debuffs.sunder.part_refresh_dur = sunder_refresh_dec * debuffs.sunder.duration; // duration of a partial refresh to end the fight
    }
    // faerie fire
    if(debuffs.faeriefire.uptime_g > 0){
        let faeriefire_total_time = (debuffs.faeriefire.uptime_g === 100) ? fightduration : (fightduration * debuffs.faeriefire.uptime_g) / 100;
        let faeriefire_refresh_int = Math.ceil(faeriefire_total_time / debuffs.faeriefire.duration);
        let faeriefire_refresh_dec = (faeriefire_total_time / debuffs.faeriefire.duration) - Math.floor(faeriefire_total_time / debuffs.faeriefire.duration);
        debuffs.faeriefire.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.faeriefire.inactive = false; // flag for debuff being active or not
        debuffs.faeriefire.interval = (fightduration - faeriefire_total_time) / (faeriefire_refresh_int); // interval of inactive
        debuffs.faeriefire.full_refresh = faeriefire_refresh_int; // # of applications as whole integer
        debuffs.faeriefire.part_refresh_dur = faeriefire_refresh_dec * debuffs.faeriefire.duration; // duration of a partial refresh to end the fight
    }

    // expose
    if(debuffs.expose.uptime_g > 0){
        let expose_total_time = (debuffs.expose.uptime_g === 100) ? fightduration : (fightduration * debuffs.expose.uptime_g) / 100;
        let expose_refresh_int = Math.ceil(expose_total_time / debuffs.expose.duration);
        let expose_refresh_dec = (expose_total_time / debuffs.expose.duration) - Math.floor(expose_total_time / debuffs.expose.duration);
        debuffs.expose.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.expose.inactive = false; // flag for debuff being active or not
        debuffs.expose.interval = (fightduration - expose_total_time) / (expose_refresh_int); // interval of inactive
        debuffs.expose.full_refresh = expose_refresh_int; // # of applications as whole integer
        debuffs.expose.part_refresh_dur = expose_refresh_dec * debuffs.expose.duration; // duration of a partial refresh to end the fight
    }

    // blood frenzy
    if(debuffs.bloodfrenzy.uptime_g > 0){
        let bloodfrenzy_total_time = (debuffs.bloodfrenzy.uptime_g === 100) ? fightduration : (fightduration * debuffs.bloodfrenzy.uptime_g) / 100;
        let bloodfrenzy_refresh_int = Math.ceil(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        let bloodfrenzy_refresh_dec = (bloodfrenzy_total_time / debuffs.bloodfrenzy.duration) - Math.floor(bloodfrenzy_total_time / debuffs.bloodfrenzy.duration);
        debuffs.bloodfrenzy.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.bloodfrenzy.inactive = false; // flag for debuff being active or not
        debuffs.bloodfrenzy.interval = (fightduration - bloodfrenzy_total_time) / (bloodfrenzy_refresh_int); // interval of inactive
        debuffs.bloodfrenzy.full_refresh = bloodfrenzy_refresh_int; // # of applications as whole integer
        debuffs.bloodfrenzy.part_refresh_dur = bloodfrenzy_refresh_dec * debuffs.bloodfrenzy.duration; // duration of a partial refresh to end the fight
    }
    // curse of elements
    if(debuffs.curseofele.uptime_g > 0){
        let curseofele_total_time = (debuffs.curseofele.uptime_g === 100) ? fightduration : (fightduration * debuffs.curseofele.uptime_g) / 100;
        let curseofele_refresh_int = Math.ceil(curseofele_total_time / debuffs.curseofele.duration);
        let curseofele_refresh_dec = (curseofele_total_time / debuffs.curseofele.duration) - Math.floor(curseofele_total_time / debuffs.curseofele.duration);     
        debuffs.curseofele.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.curseofele.inactive = false; // flag for debuff being active or not
        debuffs.curseofele.interval = (fightduration - curseofele_total_time) / (curseofele_refresh_int); // interval of inactive
        debuffs.curseofele.full_refresh = curseofele_refresh_int; // # of applications as whole integer
        debuffs.curseofele.part_refresh_dur = curseofele_refresh_dec * debuffs.curseofele.duration; // duration of a partial refresh to end the fight
    }
    // mangle
    if(debuffs.mangle.uptime_g > 0){
        let mangle_total_time = (debuffs.mangle.uptime_g === 100) ? fightduration : (fightduration * debuffs.mangle.uptime_g) / 100;
        let mangle_refresh_int = Math.ceil(mangle_total_time / debuffs.mangle.duration);
        let mangle_refresh_dec = (mangle_total_time / debuffs.mangle.duration) - Math.floor(mangle_total_time / debuffs.mangle.duration);
        debuffs.mangle.refresh_ct = 0; // incrementing count of refreshes and applications
        debuffs.mangle.inactive = false; // flag for debuff being active or not
        debuffs.mangle.interval = (fightduration - mangle_total_time) / (mangle_refresh_int); // interval of inactive
        debuffs.mangle.full_refresh = mangle_refresh_int; // # of applications as whole integer
        debuffs.mangle.part_refresh_dur = mangle_refresh_dec * debuffs.mangle.duration; // duration of a partial refresh to end the fight
    }

}

/**Handles the debuff timers and stacks. Adds the timer value from IntervalAuraSetTime and prev timer to keep any
 * negative values and carry it over. For example, if a timer ends in 0.2s, but the next step is 0.3,
 * it would start the next timer at "time + (-0.1)" because the debuffs are independent of the player
 * steps and are applied potentially during a step. A timer of 30 would start at 29.9 on the next step.
 */
function IntervalAuraHandler(){

    if((debuffs.hm.timer <= 0) && (debuffs.hm.uptime_g > 0)) { debuffs.hm.timer += IntervalAuraSetTime("hm","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.judgewisdom.timer <= 0) && (debuffs.judgewisdom.uptime_g > 0)) { 
        debuffs.judgewisdom.timer += IntervalAuraSetTime("judgewisdom","debuff"); } // sets the timer to inactive or active

    if((debuffs.judgecrusader.timer <= 0) && (debuffs.judgecrusader.uptime_g > 0)) { 
        debuffs.judgecrusader.timer += IntervalAuraSetTime("judgecrusader","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.sunder.timer <= 0) && (debuffs.sunder.uptime_g > 0)) { 
        debuffs.sunder.timer += IntervalAuraSetTime("sunder","debuff"); } // sets the timer to inactive or active
    let timeforstack = debuffs.sunder.stacktime / 4;
    if ((debuffs.sunder.timer > 0) && (!debuffs.sunder.inactive) && (debuffs.sunder.stacks < 5)) {
        sunderstart = (sunderstart === 0 || ((sunderstart + 30) < steptimeend)) ? steptimeend : sunderstart;
        if ((sunderstart + timeforstack * debuffs.sunder.stacks) < steptimeend) {
            debuffs.sunder.stacks = (debuffs.sunder.stacks < 5) ? debuffs.sunder.stacks + 1 : 5;
        }
    }
    
    if((debuffs.faeriefire.timer <= 0) && (debuffs.faeriefire.uptime_g > 0)) { 
        debuffs.faeriefire.timer += IntervalAuraSetTime("faeriefire","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.expose.timer <= 0) && (debuffs.expose.uptime_g > 0)) { 
        debuffs.expose.timer += IntervalAuraSetTime("expose","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.bloodfrenzy.timer <= 0) && (debuffs.bloodfrenzy.uptime_g > 0)) { 
        debuffs.bloodfrenzy.timer += IntervalAuraSetTime("bloodfrenzy","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.curseofele.timer <= 0) && (debuffs.curseofele.uptime_g > 0)) { 
        debuffs.curseofele.timer += IntervalAuraSetTime("curseofele","debuff"); } // sets the timer to inactive or active
    
    if((debuffs.mangle.timer <= 0) && (debuffs.mangle.uptime_g > 0)) { 
        debuffs.mangle.timer += IntervalAuraSetTime("mangle","debuff"); } // sets the timer to inactive or active
}

/** runs when timer is <= 0 for whichever debuff. Initializes timer as inactive for a set duration
 * given in the debuffInitialize() function and sets that timer to the initial inactive interval. 
 * Once this is called again, the function iterates the refresh count and flags it as active.
 * The active duration timer finishes and called again the timer goes back to inactive, repeating until all
 * full active durations have been used. Final duration is based on the % of remaining time for a full duration.
 * @param name debuff name
 */
function IntervalAuraSetTime(name){

        if(debuffs[name].uptime_g === 100){
            debuffs[name].inactive = true;
            //console.log(name)
        }
        if(debuffs[name].inactive){debuffs[name].refresh_ct++;}
        if(debuffs[name].refresh_ct === debuffs[name].full_refresh && debuffs[name].inactive){ 
            debuffs[name].refresh_ct++; 
        }
        if ((debuffs[name].refresh_ct <= debuffs[name].full_refresh) && (!debuffs[name].inactive)) {
            timer = debuffs[name].interval;
            //console.log(name)
            debuffs[name].inactive = true;
            if(debuffs[name].refresh_ct === debuffs[name].full_refresh){debuffs[name].refresh_ct++;}
            //console.log(timer);
        }
        else if ((debuffs[name].refresh_ct < debuffs[name].full_refresh) && (debuffs[name].inactive)){
            timer = debuffs[name].duration;
            debuffs[name].inactive = false;
            //console.log(timer);
        }
        else if (debuffs[name].refresh_ct > debuffs[name].full_refresh){
            timer = (debuffs[name].part_refresh_dur == 0) ? debuffs[name].duration : debuffs[name].part_refresh_dur;
            debuffs[name].inactive = false;
            //console.log(timer);
        }

    return timer;
}

/**Check for on use spells ready and usable, if ready and usable, set the duration and cooldown timers. */
function onUseSpellCheck(){
    
    if (!!auras.killcommand && (auras.killcommand.cd === 0)) {
        auras.killcommand.stacks = 3;
        auras.killcommand.timer = auras.killcommand.effect.duration; // set timer
        auras.killcommand.cd = auras.killcommand.effect.base_cd - talents.catlike_reflex * 10; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.killcommand.effect_name;
            combatlogindex++;
        }
    }
    if (!!auras.lust && (auras.lust.cd === 0)) {

        auras.lust.timer = auras.lust.effect.duration; // set timer
        auras.lust.cd = auras.lust.effect.base_cd; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.lust.effect_name;
            combatlogindex++;
        }
    }
    if (!!auras.tricksoftrade && (auras.tricksoftrade.cd === 0)) {

        auras.tricksoftrade.timer = auras.tricksoftrade.effect.duration; // set timer
        auras.tricksoftrade.cd = auras.tricksoftrade.effect.base_cd; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.tricksoftrade.effect_name;
            combatlogindex++;
        }
    }
    if (!!auras.hysteria && (auras.hysteria.cd === 0)) {

        auras.hysteria.timer = auras.hysteria.effect.duration; // set timer
        auras.hysteria.cd = auras.hysteria.effect.base_cd; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.hysteria.effect_name;
            combatlogindex++;
        }
    }

    if (!!auras.rapid && (auras.rapid.cd === 0) && auras.rapid.timer == 0) {
        let rapidcost = Math.floor((MAIN_CDS.rapid.cost / 100) * BaseMana * beastwithinreduc);
        if ((currentMana >= rapidcost)) {
            auras.rapid.timer = auras.rapid.effect.duration; // set timer
            auras.rapid.cd = auras.rapid.effect.base_cd - talents.rapid_killing; // set cd
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.rapid.effect_name;
                combatlogindex++;
            }
        }
    }
    if (!!auras.beastwithin && (auras.beastwithin.timer === 0) && beastwithinreduc !== 0) {
        beastwithinreduc = 1;
    }
    if (!!auras.beastwithin && (auras.beastwithin.cd === 0)) {
        let beastcost = Math.floor((MAIN_CDS.beastwithin.cost / 100) * BaseMana);
        if ((currentMana >= beastcost) && auras.beastwithin.timer == 0) {
            auras.beastwithin.timer = auras.beastwithin.effect.duration; // set timer
            auras.beastwithin.cd = auras.beastwithin.effect.base_cd * (1 - talents.longevity); // set cd
            beastwithinreduc = 0.8;
            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.beastwithin.effect_name;
                combatlogindex++;
            }
        }
    }
    // racials
    if (!!auras.berserking && (auras.berserking.cd === 0)) {
        auras.berserking.timer = auras.berserking.effect.duration; // set timer
        auras.berserking.cd = auras.berserking.effect.base_cd; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.berserking.effect_name;
            combatlogindex++;
        }
    }
    else if (!!auras.bloodfury && (auras.bloodfury.cd === 0)) {
        auras.bloodfury.timer = auras.bloodfury.effect.duration; // set timer
        auras.bloodfury.cd = auras.bloodfury.effect.base_cd; // set cd
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.bloodfury.effect_name;
            combatlogindex++;
        }
    }
    else if (!!auras.arcanetorrent && (auras.arcanetorrent.cd === 0)) {
        
        auras.arcanetorrent.cd = auras.arcanetorrent.effect.base_cd; // set cd
        currentMana = Math.min(Mana, CurrentMana + Math.floor((auras.arcanetorrent.effect.mana / 100) * BaseMana))
        if(combatlogRun) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras.arcanetorrent.effect_name;
            combatlogindex++;
        }
    }

    if(!!auras.potion && (auras.potion.cd === 0) && potionHandling()) {
        if(combatlogRun && (auras.potion.potion_type === 'Haste' || auras.potion.potion_type === 'Crit')) {
            combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player used " + auras.potion.potion_type + " Potion";
            combatlogindex++;
        }
    }
    if(!!auras.rune && (auras.rune.cd === 0) && runeHandling()) {}
    
// trinkets on use, if's for non-shared CDs, if-else if's for shared CDs

    if(!!auras.trink1) {
        //trinketOnUseTrigger('trink1')
    }
    if(!!auras.trink2) {
        //trinketOnUseTrigger('trink2')
    }

    if (!!auras.readiness && (auras.readiness.cd === 0) && auras.rapid.cd > 0) {
        if (USED_SPELLS.chimerashot?.cd > 3 || USED_SPELLS.aimedshot?.cd > 3 || USED_SPELLS.multishot?.cd > 3) {
            queueReadiness = true;
        }
        else { queueReadiness = false;
        }
    }
}

function trinketOnUseTrigger(slot) {

    if ((!auras[slot].effect?.is_proc) && (auras[slot].cd === 0)) {
        if ((auras[slot].shares_cd && sharedtrinketcd === 0) || (!auras[slot].shares_cd)) {

            sharedtrinketcd = auras[slot].effect.duration;
            auras[slot].timer = auras[slot].effect.duration; // set timer
            auras[slot].cd = auras[slot].effect.base_cd; // set cd

            if(combatlogRun) {
                combatlogarray[combatlogindex] = steptimeend.toFixed(3) + " - Player gains " + auras[slot].effect_name;
                combatlogindex++;
            }
        }
    }
}

function dotHandler(spellname, source, apply, type, crit_dmg) {

    //console.log("dot handler "+ spellname + " - "+ apply)
    let result = 0;
    let dmg = 0;
    let done = 0;
    let dottype = (type === undefined) ? '' : type;
    let timeapplied = (source === 'player') ? playertimeend : nextpetspell;
    // handle starting the spell damage over time, with apply for using to overwrite
    if (!!apply) {
        //console.log(auras[spellname])
        auras[spellname].timer = auras[spellname].effect.duration; // 10
        auras[spellname].apply_time = timeapplied; // 5
        auras[spellname].next_tick = auras[spellname].effect.tick_rate + auras[spellname].apply_time; // 7
        auras[spellname].ticks = auras[spellname].effect.duration / auras[spellname].effect.tick_rate;
        auras[spellname].damage = (crit_dmg !== undefined) ? crit_dmg * 0.3 : auras[spellname].damage;
        if (spellname === 'pierce_shot') {
            auras.pierce_shot.damage *= (type !== 'nature') ? (1 - PlyrArmorReduc) : 1;
        }
    }
    // timer = 6, ticks 4, dot time = 9
    // if tick ready, roll damage
    if (next_dot_time === auras[spellname].next_tick && auras[spellname].ticks !== 0) { // 9
        //console.log(auras[spellname].ticks)
        if (dottype === 'bleed' || dottype === 'physical') {
            updateDmgMod();
            result = 0;
            let ticks = auras[spellname].effect.duration / auras[spellname].effect.tick_rate;
            dmg = auras[spellname].damage / ticks * bleeddmgmod;
            //console.log(dottype)
        }
        else if (dottype !== 'physical') {
            updateDmgMod();
            let hit_type = source === 'player' ? 'physical' : 'magic'; // used for determining use range hit or spell hit
            let hit = (source === 'player') ? RangeHitChance : pet.spellhit;
            result = rollDamageOverTime(hit, hit_type);
            let ticks = auras[spellname].effect.duration / auras[spellname].effect.tick_rate;
            dmg = auras[spellname].damage / ticks * bleeddmgmod;
        } 
        done = dealdamage(dmg, result, dottype);
        totaldmgdone += done;
        if(combatlogRun) {
            combatlogarray[combatlogindex] = next_dot_time.toFixed(3) + " - Target takes " + done + " damage from " + auras[spellname].effect_name;
            combatlogindex++;
        }
        auras[spellname].ticks -= 1;
        auras[spellname].next_tick += (auras[spellname].timer > 0) ? auras[spellname].effect.tick_rate : 0; // 11

    }
    // set next tick to 0 for sim check
    if (auras[spellname].ticks === 0){
        auras[spellname].next_tick = 0;
    }
}

function dotCheckActive() {

    let blackarrow = auras.blackarrow?.ticks > 0;
    let serpentsting = auras.serpentsting?.ticks > 0;
    let immolatetrap = auras.immolatetrap?.ticks > 0;
    let explosivetrap = auras.explosivetrap?.ticks > 0;
    let explosiveshot = auras.explosiveshot?.ticks > 0;
    let pet_specialcheck = auras.pet_special?.ticks > 0;
    let pierce_shot = auras.pierce_shot?.ticks > 0;

    if (blackarrow || serpentsting || immolatetrap || explosivetrap || explosiveshot 
        || pet_specialcheck || pierce_shot){
            
        return true;
    }
    else { return false; }
}