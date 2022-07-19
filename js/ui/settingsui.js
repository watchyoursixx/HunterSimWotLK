// default buffs for settings go here
var buffslist = [
    
    { id: 0, talented: false }, // might 27141
    { id: 0, talented: false }, // shout 2048
    0, // heroic presence
    0, // lotp/rampage 17007
    { id: 0, talented: false }, // SoE/Horn 25528
    0, // tsa 27066
    0, // swift ret 53648
    0, // feroc insp 75447
    { id: 0, talented: false }, // WF 25587
    { id: 0, talented: false }, // GotW 26991
    0, // bok 25898
    { id: 0, talented: true }, // bow 27143
    { id: 0, talented: false }, // ms totem 25570
    0, // AI 27127
    0, // fel intel 57567
    { id: 0, talented: true }, // PW:F 25392
    
];

var filteredbuffs = [];
var playerconsumes = {
    
};
var petconsumes = {

};

// filters out ids with 0s for the getStatsFromBuffs formula
function removeZeros(){
    
    function filterById(obj) {
      if (Number.isFinite(obj.id) && obj.id !== 0 || obj > 0) 
      {
        return true;
      } 
      return false;
    }
    
    filteredbuffs = buffslist.filter(filterById);
}

// called each time buffs change to filter zeros, get, recalc, and display them
function selectedOptionsResults(){
    removeZeros();
    selectedbuffs = getStatsFromBuffs(filteredbuffs);
    consumestats = getPlayerStatsFromConsumes(playerconsumes);
    petconsumestats = getPetStatsFromConsumes(petconsumes);
    initialize();
    displayStats();
    gearSlotsDisplay();
    storeData();

}

function auraUptimeSettings(){
    let hmuptime = document.getElementById("hmuptime").value;
    let hmbonus = document.getElementById("hmbonus").selected;
    let jowuptime = document.getElementById("jowuptime").value;
    let jocuptime = document.getElementById("jocuptime").value;
    let ffuptime = document.getElementById("ffuptime").value;
    let sauptime = document.getElementById("sauptime").value;
    let sunderapp = document.getElementById("sunderapp").value;
    let ieuptime = document.getElementById("ieuptime").value;
    let bfuptime = document.getElementById("bfuptime").value;
    let manguptime = document.getElementById("manguptime").value;
    let coeuptime = document.getElementById("coeuptime").value;

    debuffs.hm.uptime_g = parseInt(hmuptime);
    debuffs.hm.improved = hmbonus ? true : false;
    debuffs.judgewisdom.uptime_g = parseInt(jowuptime);
    debuffs.judgecrusader.uptime_g = parseInt(jocuptime);
    debuffs.faeriefire.uptime_g = parseInt(ffuptime);
    debuffs.sunder.uptime_g = parseInt(sauptime);
    debuffs.sunder.stacktime = parseInt(sunderapp);
    debuffs.expose.uptime_g = parseInt(ieuptime);
    debuffs.mangle.uptime_g = parseInt(manguptime);
    debuffs.bloodfrenzy.uptime_g = parseInt(bfuptime);
    debuffs.curseofele.uptime_g = parseInt(coeuptime);

    getStatsCapData();
    storeData();
}

function fightSettings(){
    let simulations = document.getElementById("simulations").value;
    let minfight = document.getElementById("minfight").value;
    let maxfight = document.getElementById("maxfight").value;
    let msdelay = document.getElementById("latency").value;
    let playerup = document.getElementById("playeruptime").value;
    let petup = document.getElementById("petuptime").value;
    let weave = document.getElementById("weavetime").value;
    iterations = parseInt(simulations);
    minfighttimer = parseInt(minfight);
    maxfighttimer = parseInt(maxfight);
    latency = parseInt(msdelay)/1000;
    playeruptime = parseInt(playerup);
    petuptime = parseInt(petup);
    weavetime = JSON.parse(weave);
    storeData();

}

// check for might toggle and modifier
function mightCheck() {
    let isChecked = document.getElementById("might").checked;
    let isTalented = document.getElementById("mightmod").selected;
    buffslist[0].id = isChecked ? 27141 : 0;
    buffslist[0].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for battle shout toggle and modifier
function shoutCheck() {
    let isChecked = document.getElementById("shout").checked;
    let isTalented = document.getElementById("shoutmod").selected;
    buffslist[1].id = isChecked ? 2048 : 0;
    buffslist[1].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Heroic Presence toggle
function heroicpresCheck() {
    let isChecked = document.getElementById("heroicpres").checked; 
    buffslist[2] = isChecked ? 6562 : 0;
    selectedOptionsResults();

}

// check for leader of the pack toggle
function lotpCheck() {
    let isChecked = document.getElementById("lotp").checked; 
    buffslist[3] = isChecked ? 17007 : 0;
    selectedOptionsResults();

}
// check for grace of air and strength of earth toggle and modifier
function totemCheck() {
    let soeIsChecked = document.getElementById("soe").checked;
    let isTalented = document.getElementById("imptotem").selected;
    buffslist[4].id = soeIsChecked ? 25528 : 0;
    buffslist[4].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Trueshot Aura toggle
function tsaCheck() {
    let isChecked = document.getElementById("tsa").checked; 
    buffslist[5] = isChecked ? 27066 : 0;
    selectedOptionsResults();

}
// check for Braided Eternium Chain toggle
function swiftretCheck() {
    let isChecked = document.getElementById("swiftret").checked; 
    buffslist[6] = isChecked ? 53648 : 0;
    selectedOptionsResults();

}
// check for ferocious insp Aura toggle
function ferocinspCheck() {
    let isChecked = document.getElementById("ferocinsp").checked; 
    buffslist[7] = isChecked ? 75447 : 0;
    selectedOptionsResults();

}
// check for Windfury Totem toggle and modifier
function windfuryCheck() {
    let isChecked = document.getElementById("windfury").checked;
    let isTalented = document.getElementById("windfurymod").selected;
    buffslist[8].id = isChecked ? 25587 : 0;
    buffslist[8].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Gift of the Wild toggle and modifier
function gotwCheck() {
    let isChecked = document.getElementById("gotw").checked;
    let isTalented = document.getElementById("gotwmod").selected;
    buffslist[9].id = isChecked ? 26991 : 0;
    buffslist[9].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for kings toggle
function kingsCheck() {
    let isChecked = document.getElementById("kings").checked;
    buffslist[10] = isChecked ? 25898 : 0;
    selectedOptionsResults();

}
// check for wisdom toggle and modifier
function wisdomCheck() {
    let isChecked = document.getElementById("wisdom").checked;
    let isTalented = document.getElementById("wisdommod").selected;
    buffslist[11].id = isChecked ? 27143 : 0;
    buffslist[11].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for mana spring toggle
function manaspringCheck() {
    let isChecked = document.getElementById("manaspring").checked; 
    let isTalented = document.getElementById("springmod").selected;
    buffslist[12] = isChecked ? 25570 : 0;
    buffslist[12].talented = isTalented ? true : false;
    selectedOptionsResults();

}
// check for Arcane Brilliance toggle
function aiCheck() {
    let isChecked = document.getElementById("ai").checked; 
    buffslist[13] = isChecked ? 27127 : 0;
    selectedOptionsResults();

}
// check for Fel Intelligence toggle
function felintelCheck() {
    let isChecked = document.getElementById("felintel").checked;
    buffslist[14].id = isChecked ? 57567 : 0;
    selectedOptionsResults();

}
// check for Prayer of Fortitude toggle and modifier
function fortCheck() {
    let isChecked = document.getElementById("fort").checked;
    let isTalented = document.getElementById("fortmod").selected;
    buffslist[15].id = isChecked ? 25392 : 0;
    buffslist[15].talented = isTalented ? true : false;
    selectedOptionsResults();

}

// below functions check if selected check the list of items then call the update
function flaskSelection() {
    let isSelected = document.getElementById("flask").value;
    let flasks = Object.entries(FLASKS)
    switch (isSelected) {
        case "assault":
            playerconsumes.flask = flasks[0];
        break;
        case "wisdom":
            playerconsumes.flask = flasks[1];
        break;
        case "bandit":
            playerconsumes.flask = flasks[2];
        break;
        case "fortification":
            playerconsumes.flask = flasks[3];
        break;
        case "titans":
            playerconsumes.flask = flasks[4];
        break;
        case "none":
            delete playerconsumes.flask;
        break;
    }
    if ((document.getElementById("battle").value != "none" || document.getElementById("guardian").value != "none") && document.getElementById("flask").value != "none") {
        document.getElementById("battle").value = "none";
        document.getElementById("guardian").value = "none";
        delete playerconsumes.battle_elixir;
        delete playerconsumes.guardian_elixir;
    }
    selectedOptionsResults();
}
function battleSelection() {
    let isSelected = document.getElementById("battle").value;
    switch (isSelected) {
        case "majoragi":
            playerconsumes.battle_elixir = 22831;
        break;
        case "mongoose":
            playerconsumes.battle_elixir = 13452;
        break;
        case "demonslaying":
            playerconsumes.battle_elixir = 9224;
        break;
        case "felstrength":
            playerconsumes.battle_elixir = 31679;
        break;
        case "onslaught":
            playerconsumes.battle_elixir = 28102;
        break;
        case "greatagi":
            playerconsumes.battle_elixir = 9187;
        break;
        case "agility":
            playerconsumes.battle_elixir = 8949;
        break;
        case "mastery":
            playerconsumes.battle_elixir = 28104;
        break;
        case "none":
            delete playerconsumes.battle_elixir;
        break;
    }
    if (document.getElementById("flask").value != "none" && document.getElementById("battle").value != "none") {
        document.getElementById("flask").value = "none";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}
function guardSelection() {
    let isSelected = document.getElementById("guardian").value;
    switch (isSelected) {
        case "majormageblood":
            playerconsumes.guardian_elixir = 22840;
        break;
        case "draenicwisdom":
            playerconsumes.guardian_elixir = 32067;
        break;
        case "mageblood":
            playerconsumes.guardian_elixir = 20007;
        break;
        case "intellect":
            playerconsumes.guardian_elixir = 9179;
        break;
        case "fortitude":
            playerconsumes.guardian_elixir = 32062;
        break;
        case "none":
            delete playerconsumes.guardian_elixir;
        break;
    }
    if (document.getElementById("flask").value != "none" && document.getElementById("guardian").value != "none") {
        document.getElementById("flask").value = "none";
        delete playerconsumes.flask;
    }
    selectedOptionsResults();
}
function scrollagiSelection() {
    let isSelected = document.getElementById("scrollagi").value;
    switch (isSelected) {
        case "agi5":
            playerconsumes.agi_scroll = 27498;
        break;
        case "agi4":
            playerconsumes.agi_scroll = 10309;
        break;
        case "agi3":
            playerconsumes.agi_scroll = 4425;
        break;
        case "agi2":
            playerconsumes.agi_scroll = 1477;
        break;
        case "agi1":
            playerconsumes.agi_scroll = 3012;
        break;
        case "none":
            delete playerconsumes.agi_scroll;
        break;
    }
    selectedOptionsResults();
}
function scrollstrSelection() {
    let isSelected = document.getElementById("scrollstr").value;
    switch (isSelected) {
        case "str5":
            playerconsumes.str_scroll = 27503;
        break;
        case "str4":
            playerconsumes.str_scroll = 10310;
        break;
        case "str3":
            playerconsumes.str_scroll = 4426;
        break;
        case "str2":
            playerconsumes.str_scroll = 2289;
        break;
        case "str1":
            playerconsumes.str_scroll = 954;
        break;
        case "none":
            delete playerconsumes.str_scroll;
        break;
    }
    selectedOptionsResults();
}
function foodSelection() {
    let isSelected = document.getElementById("food").value;
    switch (isSelected) {
        case "sporefish":
            playerconsumes.food = 33292;
        break;
        case "mudfish":
            playerconsumes.food = 27664;
        break;
        case "squid":
            playerconsumes.food = 13928;
        break;
        case "ravager":
            playerconsumes.food = 27655;
        break;
        case "crawdad":
            playerconsumes.food = 27677;
        break;
        case "spicytalbuk":
            playerconsumes.food = 33872;
        break;
        case "talbuk":
            playerconsumes.food = 27660;
        break;
        case "warp":
            playerconsumes.food = 27659;
        break;
        case "none":
            delete playerconsumes.food;
        break;
    }
    selectedOptionsResults();
}
function petscrollagiSelection() {
    let isSelected = document.getElementById("petscrollagi").value;
    switch (isSelected) {
        case "agi5":
            petconsumes.agi_scroll = 27498;
        break;
        case "agi4":
            petconsumes.agi_scroll = 10309;
        break;
        case "agi3":
            petconsumes.agi_scroll = 4425;
        break;
        case "agi2":
            petconsumes.agi_scroll = 1477;
        break;
        case "agi1":
            petconsumes.agi_scroll = 3012;
        break;
        case "none":
            delete petconsumes.agi_scroll;
        break;
    }
    selectedOptionsResults();
}
function petscrollstrSelection() {
    let isSelected = document.getElementById("petscrollstr").value;
    switch (isSelected) {
        case "str5":
            petconsumes.str_scroll = 27503;
        break;
        case "str4":
            petconsumes.str_scroll = 10310;
        break;
        case "str3":
            petconsumes.str_scroll = 4426;
        break;
        case "str2":
            petconsumes.str_scroll = 2289;
        break;
        case "str1":
            petconsumes.str_scroll = 954;
        break;
        case "none":
            delete petconsumes.str_scroll;
        break;
    }
    selectedOptionsResults();
}
function petfoodSelection() {
    let isSelected = document.getElementById("petfood").value;
    switch (isSelected) {
        case "kiblers":
            petconsumes.pet_food = 33874;
        break;
        case "sporeling":
            petconsumes.pet_food = 27656;
        break;
        case "none":
            delete petconsumes.pet_food;
        break;
    }
    selectedOptionsResults();
}

// 0 for night elf, 1 for dwarf, 2 for draenei, 3 for orc, 4 for troll, 5 for tauren, 6 for blood elf
function getRace() {
    selectedRace = parseInt(document.getElementById("race").value);
    document.getElementById("racedisplay").innerHTML = races[selectedRace][level].name;
    selectedOptionsResults();
}

function getPet() {
    selectedPet = parseInt(document.getElementById("pet").value);
    //document.getElementById("petdisplay").innerHTML
    selectedOptionsResults();
}


function selectTalents(talent){

    
    let customtalentlink = document.getElementById("customtalent").value;
    let regioncheck = customtalentlink.substr(0,30);
    let customtalents = "";
    if(regioncheck !== "https://www.wowhead.com/wotlk/") {
        customtalents = customtalentlink.slice(51);
    }
    else {
        customtalents = customtalentlink.slice(49);
    }
    
    switch (talent) {
        case "6":
            talents = BM_ImpHM_Track;
            document.getElementById("currtalent").innerHTML = "BM Imp HM Tracking";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "5":
            talents = MM_ImpHM_FA_Track;
            document.getElementById("currtalent").innerHTML = "MM ImpHM Focused Aim";
            document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
        break;
        case "4":
            talents = MM_ImpAS_FA_Track;
            document.getElementById("currtalent").innerHTML = "MM ImpArcane Focused Aim";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "3":
            talents = SV_FA_Resrc_Aimed;
            document.getElementById("currtalent").innerHTML = "SV Focused Aim Resrc Aimed Shot";
            document.getElementById("specimg").src = "images/Ability_Hunter_Camoflauge.png";
        break;
        case "2":
            talents = BM_FA_Track;
            document.getElementById("currtalent").innerHTML = "BM Focused Aim Tracking";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "1":
            talents = BM_FA_Track;
            document.getElementById("currtalent").innerHTML = "BM Focused Aim Tracking";
            document.getElementById("specimg").src = "images/Ability_Hunter_BeastTaming.png";
        break;
        case "0":
            if (customtalentlink !== "") {
                talents = parseTalents(customtalents);
                document.getElementById("currtalent").innerHTML = "custom";
                document.getElementById("specimg").src = "images/Ability_Marksmanship.png";
            }
        break;
    }
    whtalentlink = customtalentlink;
    talentindex = talent;
    glyphs = selectGlyphs(selected_glyphs);
    selectedOptionsResults();
}

function spellEnableCheck(){
    let rapidcheck = document.getElementById("rapidcheck").checked;
    let lustcheck = document.getElementById("lustcheck").checked;
    let runecheck = document.getElementById("runecheck").checked;
    let multicheck = document.getElementById("multicheck").checked;
    let arcanecheck = document.getElementById("arcanecheck").checked;
    let raptorcheck = document.getElementById("raptorcheck").checked;
    let meleecheck = document.getElementById("meleecheck").checked;

    usable_CDs.rapid.enable = rapidcheck;
    usable_CDs.lust.enable = lustcheck;
    usable_CDs.rune.enable = runecheck;
    
    SPELLS.multishot.enable = multicheck;
    SPELLS.arcaneshot.enable = arcanecheck;
    SPELLS.raptorstrike.enable = raptorcheck;
    SPELLS.melee.enable = meleecheck;
    storeData();

}

function spellOffsets(){
    let rapidoffset = document.getElementById("rapidoffset").value;
    let beastoffset = document.getElementById("beastoffset").value;
    let racialoffset = document.getElementById("racialoffset").value;
    let lustoffset = document.getElementById("lustoffset").value;
    let startpotoffset = document.getElementById("startpotoffset").value;

    usable_CDs.rapid.offset = parseInt(rapidoffset);
    usable_CDs.beastwithin.offset = parseInt(beastoffset);
    usable_CDs.berserk.offset = parseInt(racialoffset);
    usable_CDs.bloodfury.offset = parseInt(racialoffset);
    usable_CDs.lust.offset = parseInt(lustoffset);
    usable_CDs.potion.offset = parseInt(startpotoffset);
    storeData();
}

function spellOptions(){
    
    let spellcdoption = document.getElementById("spellcdoption").value;
    switch (spellcdoption) {
        case "2min":
            two_min_cds = 180;
            three_min_cds = 180;
            setSpellCDs();
        break;
        case "3min":
            two_min_cds = 120;
            three_min_cds = 240;
            setSpellCDs();
        break;
        case "CD":
            two_min_cds = 120;
            three_min_cds = 180;
            setSpellCDs();
        break;
    }
    
    storeData();
}