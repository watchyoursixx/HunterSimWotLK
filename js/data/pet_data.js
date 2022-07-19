const PET_FAMILY = [
    { 
        name: 'Ravager',//0
        pet_special: 'Ravage',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Cat',//1
        pet_special: 'Rake',
        pet_focus_dump: 'Claw',
        family: 'Ferocity'
    },
    { 
        name: 'Raptor',//2
        pet_special: 'Savage Rend',
        pet_focus_dump: 'Claw',
        family: 'Ferocity'
    },
    { 
        name: 'Bird of Prey',//3
        pet_special: 'Snatch',
        pet_focus_dump: 'Claw',
        family: 'Cunning'
    },
    { 
        name: 'Bat',//4
        pet_special: 'Sonic Blast',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Wind Serpent',//5
        pet_special: 'Lightning Breath',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Wolf',//6
        pet_special: 'Furious Howl',
        pet_focus_dump: 'Bite',
        family: 'Ferocity'
    },
    { 
        name: 'Wasp',//7
        pet_special: 'Sting',
        pet_focus_dump: 'Smack',
        family: 'Ferocity'
    },
    { 
        name: 'Worm',//8
        pet_special: 'Acid Spit',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Warp Stalker',//9
        pet_special: 'Warp',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Turtle',//10
        pet_special: 'Shell Shield',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Tallstrider',//11
        pet_special: 'Dust Cloud',
        pet_focus_dump: 'Claw',
        family: 'Ferocity'
    },
    { 
        name: 'Spore Bat',//12
        pet_special: 'Spore Cloud',
        pet_focus_dump: 'Smack',
        family: 'Cunning'
    },
    { 
        name: 'Spirit Beast',//13
        pet_special: 'Spirit Strike',
        pet_focus_dump: 'Claw',
        family: 'Ferocity'
    },
    { 
        name: 'Silithid',//14
        pet_special: 'Venom Web Spray',
        pet_focus_dump: 'Claw',
        family: 'Cunning'
    },
    { 
        name: 'Serpent',//15
        pet_special: 'Poison Spit',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Spider',//16
        pet_special: 'Web',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Scorpid',//17
        pet_special: 'Scorpid Poison',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Rhino',//18
        pet_special: 'Stampede',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Nether Ray',//19
        pet_special: 'Nether Shock',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Moth',//20
        pet_special: 'Serenity Dust',
        pet_focus_dump: 'Smack',
        family: 'Ferocity'
    },
    { 
        name: 'Hyena',//21
        pet_special: 'Tendon Rip',
        pet_focus_dump: 'Bite',
        family: 'Ferocity'
    },
    { 
        name: 'Gorrilla',//22
        pet_special: 'Pummel',
        pet_focus_dump: 'Smack',
        family: 'Tenacity'
    },
    { 
        name: 'Dragonhawk',//23
        pet_special: 'Fire Breath',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
    { 
        name: 'Devilsaur',//24
        pet_special: 'Monstrous Bite',
        pet_focus_dump: 'Bite',
        family: 'Ferocity'
    },
    { 
        name: 'Crocolisk',//25
        pet_special: 'Bad Attitude',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Crab',//26
        pet_special: 'Pin',
        pet_focus_dump: 'Claw',
        family: 'Tenacity'
    },
    { 
        name: 'Core Hound',//27
        pet_special: 'Lava Breath',
        pet_focus_dump: 'Bite',
        family: 'Ferocity'
    },
    { 
        name: 'Bear',//28
        pet_special: 'Swipe',
        pet_focus_dump: 'Claw',
        family: 'Tenacity'
    },
    { 
        name: 'Boar',//29
        pet_special: 'Gore',
        pet_focus_dump: 'Bite',
        family: 'Tenacity'
    },
    { 
        name: 'Carrion Bird',//30
        pet_special: 'Demoralizing Screech',
        pet_focus_dump: 'Bite',
        family: 'Ferocity'
    },
    { 
        name: 'Chimaera',//31
        pet_special: 'Froststorm Breath',
        pet_focus_dump: 'Bite',
        family: 'Cunning'
    },
];

const PET_BITE = {
    base: {
        cost: 25,
        gcd: true,
        base_cd: 1.5,
        spell_name: 'Bite',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    2: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_CLAW = {
    base: {
        cost: 25,
        gcd: true,
        base_cd: 1.5,
        spell_name: 'Claw',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    2: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_SMACK = {
    base: {
        cost: 25,
        gcd: true,
        base_cd: 1.5,
        spell_name: 'Smack',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 54,
        maxdmg: 76,
        level: 70
    },
    2: {
        mindmg: 118,
        maxdmg: 168,
        level: 80
    },
}
const PET_ACID_SPIT = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Acid Spit',
        ap_mod: 4.9,
        type: 'nature'
    },
    1: {
        mindmg: 58,
        maxdmg: 82,
        level: 70
    },
    2: {
        mindmg: 124,
        maxdmg: 176,
        level: 80
    }
}
const PET_DEMORALIZING_SCREECH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Demoralizing Screech',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    2: {
        mindmg: 85,
        maxdmg: 129,
        level: 80
    }
}
const PET_FIRE_BREATH = {
    base: {
        cost: 20,
        duration: 2,
        tick_rate: 1,
        base_cd: 10,
        gcd: true,
        spell_name: 'Fire Breath',
        ap_mod: 4.9,
        type: 'fire'
    },
    1: {
        mindmg: 20,
        maxdmg: 26,
        dot_mindmg: 44,
        dot_maxdmg: 52,
        level: 70
    },
    2: {
        mindmg: 43,
        maxdmg: 57,
        dot_mindmg: 88,
        dot_maxdmg: 114,
        level: 80
    }
}
const PET_FROSTSTORM_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Froststorm Breath',
        ap_mod: 4.9,
        type: 'frost'
    },
    1: {
        mindmg: 59,
        maxdmg: 81,
        level: 70
    },
    2: {
        mindmg: 128,
        maxdmg: 172,
        level: 80
    }
}
const PET_FURIOUS_HOWL = {
    base: {
        cost: 20,
        base_cd: 40,
        gcd: true,
        spell_name: 'Furious Howl',
        type: 'AP'
    },
    1: {
        AP: 204,
        level: 70
    },
    2: {
        AP: 320,
        level: 80
    }
}
const PET_GORE = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Gore',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 57,
        maxdmg: 75,
        level: 70
    },
    2: {
        mindmg: 122,
        maxdmg: 164,
        level: 80
    }
}
const PET_LAVA_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Lava Breath',
        ap_mod: 4.9,
        type: 'fire'
    },
    1: {
        mindmg: 60,
        maxdmg: 80,
        level: 70
    },
    2: {
        mindmg: 128,
        maxdmg: 172,
        level: 80
    }
}
const PET_LIGHTNING_BREATH = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Lightning Breath',
        ap_mod: 4.9,
        type: 'nature'
    },
    1: {
        mindmg: 40,
        maxdmg: 52,
        level: 70
    },
    2: {
        mindmg: 80,
        maxdmg: 120,
        level: 80
    }
}
const PET_MONSTROUS_BITE = {
    base: {
        cost: 20,
        base_cd: 10,
        gcd: true,
        spell_name: 'Monstrous Bite',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 43,
        maxdmg: 57,
        level: 70
    },
    2: {
        mindmg: 91,
        maxdmg: 123,
        level: 80
    }
}
const PET_NETHER_SHOCK = {
    base: {
        cost: 0,
        base_cd: 40,
        gcd: true,
        spell_name: 'Nether Shock',
        ap_mod: 4.9,
        type: 'shadow'
    },
    1: {
        mindmg: 30,
        maxdmg: 40,
        level: 70
    },
    2: {
        mindmg: 64,
        maxdmg: 86,
        level: 80
    }
}
const PET_PIN = {
    base: {
        cost: 0,
        cast: 4,
        base_cd: 40,
        gcd: true,
        spell_name: 'Pin',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        dot_mindmg: 56,
        dot_maxdmg: 72,
        level: 70
    },
    2: {
        dot_mindmg: 112,
        dot_maxdmg: 144,
        level: 80
    }
}
const PET_POISON_SPIT = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 8,
        tick_rate: 2,
        gcd: true,
        spell_name: 'Poison Spit',
        ap_mod: 4.9,
        type: 'nature'
    },
    1: {
        dot_mindmg: 48,
        dot_maxdmg: 64,
        level: 70
    },
    2: {
        dot_mindmg: 104,
        dot_maxdmg: 136,
        level: 80
    }
}
const PET_RAKE = {
    base: {
        cost: 20,
        duration: 9,
        tick_rate: 3,
        base_cd: 10,
        gcd: true,
        spell_name: 'Rake',
        ap_mod: 1.75,
        type: 'bleed'
    },
    1: {
        mindmg: 22,
        maxdmg: 30,
        dot_mindmg: 21,
        dot_maxdmg: 39,
        level: 70
    },
    2: {
        mindmg: 47,
        maxdmg: 67,
        dot_mindmg: 57,
        dot_maxdmg: 75,
        level: 80
    }
}
const PET_RAVAGE = {
    base: {
        cost: 0,
        base_cd: 10,
        gcd: false,
        spell_name: 'Ravage',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 50,
        maxdmg: 70,
        level: 70
    },
    2: {
        mindmg: 106,
        maxdmg: 150,
        level: 80
    }
}
const PET_SAVAGE_REND = {
    base: {
        cost: 20,
        duration: 15,
        tick_rate: 5,
        base_cd: 60,
        gcd: true,
        spell_name: 'Savage Rend',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 28,
        maxdmg: 38,
        dot_mindmg: 30,
        dot_maxdmg: 36,
        level: 70
    },
    2: {
        mindmg: 59,
        maxdmg: 83,
        dot_mindmg: 63,
        dot_maxdmg: 81,
        level: 80
    }
}
const PET_SCORPID_POISON = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 10,
        tick_rate: 2,
        gcd: true,
        spell_name: 'Scorpid Poison',
        ap_mod: 1.4,
        type: 'nature'
    },
    1: {
        dot_mindmg: 35,
        dot_maxdmg: 65,
        level: 70
    },
    2: {
        dot_mindmg: 100,
        dot_maxdmg: 130,
        level: 80
    }
}
const PET_SNATCH = {
    base: {
        cost: 20,
        base_cd: 60,
        gcd: true,
        spell_name: 'Snatch',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    2: {
        mindmg: 89,
        maxdmg: 125,
        level: 80
    }
}
const PET_SONIC_BLAST = {
    base: {
        cost: 80,
        base_cd: 60,
        gcd: true,
        spell_name: 'Sonic Blast',
        ap_mod: 4.9,
        type: 'nature'
    },
    1: {
        mindmg: 29,
        maxdmg: 41,
        level: 70
    },
    2: {
        mindmg: 62,
        maxdmg: 88,
        level: 80
    }
}
const PET_SPIRIT_STRIKE = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 6,
        tick_rate: 6,
        gcd: true,
        spell_name: 'Spirit Strike',
        ap_mod: 4.9,
        type: 'arcane'
    },
    1: {
        mindmg: 23,
        maxdmg: 29,
        dot_mindmg: 23,
        dot_maxdmg: 29,
        level: 70
    },
    2: {
        mindmg: 49,
        maxdmg: 65,
        dot_mindmg: 49,
        dot_maxdmg: 65,
        level: 80
    }
}
const PET_SPORE_CLOUD = {
    base: {
        cost: 20,
        base_cd: 10,
        duration: 9,
        tick_rate: 3,
        gcd: true,
        spell_name: 'Spore Cloud',
        ap_mod: 14.7, // 4.9 * 3
        type: 'nature'
    },
    1: {
        dot_mindmg: 33,
        dot_maxdmg: 39,
        level: 70
    },
    2: {
        dot_mindmg: 66,
        dot_maxdmg: 84,
        level: 80
    }
}
const PET_STAMPEDE = {
    base: {
        cost: 0,
        base_cd: 60,
        gcd: true,
        spell_name: 'Stampede',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 85,
        maxdmg: 115,
        level: 70
    },
    2: {
        mindmg: 182,
        maxdmg: 246,
        level: 80
    }
}
const PET_STING = {
    base: {
        cost: 20,
        base_cd: 6,
        gcd: true,
        spell_name: 'Sting',
        ap_mod: 4.9,
        type: 'nature'
    },
    1: {
        mindmg: 30,
        maxdmg: 40,
        level: 70
    },
    2: {
        mindmg: 64,
        maxdmg: 86,
        level: 80
    }
}
const PET_SWIPE = {
    base: {
        cost: 20,
        base_cd: 5,
        gcd: true,
        spell_name: 'Swipe',
        ap_mod: 7,
        type: 'physical'
    },
    1: {
        mindmg: 42,
        maxdmg: 58,
        level: 70
    },
    2: {
        mindmg: 90,
        maxdmg: 126,
        level: 80
    }
}
const PET_TENDON_RIP = {
    base: {
        cost: 20,
        base_cd: 20,
        gcd: true,
        spell_name: 'Tendon Rip',
        ap_mod: 0,
        type: 'physical'
    },
    1: {
        mindmg: 33,
        maxdmg: 45,
        level: 70
    },
    2: {
        mindmg: 49,
        maxdmg: 69,
        level: 80
    }
}
const PET_VENOM_WEB_SPRAY = {
    base: {
        cost: 20,
        base_cd: 40,
        duration: 4,
        tick_rate: 1,
        gcd: true,
        spell_name: 'Venom Web Spray',
        ap_mod: 28, // 7 * 4
        type: 'nature'
    },
    1: {
        dot_mindmg: 132,
        dot_maxdmg: 132,
        level: 70
    },
    2: {
        dot_mindmg: 184,
        dot_maxdmg: 184,
        level: 80
    }
}

PET_SPELLS_DATA_MAPPER = {
    bite: PET_BITE,
    claw: PET_CLAW,
    smack: PET_SMACK,
    ravage: PET_RAVAGE,
    rake: PET_RAKE,
    savage_rend: PET_SAVAGE_REND,
    snatch: PET_SNATCH,
    sonic_blast: PET_SONIC_BLAST,
    lightning_breath: PET_LIGHTNING_BREATH,
    furious_howl: PET_FURIOUS_HOWL,
    sting: PET_STING,
    acid_spit: PET_ACID_SPIT,
    //warp: '',
    //shell_shield: '',
    //dust_cloud: '',
    spore_cloud: PET_SPORE_CLOUD,
    spirit_strike: PET_SPIRIT_STRIKE,
    venom_web_spray: PET_VENOM_WEB_SPRAY,
    poison_spit: PET_POISON_SPIT,
    //web: '',
    stampede: PET_STAMPEDE,
    scorpid_poison: PET_SCORPID_POISON,
    nether_shock: PET_NETHER_SHOCK,
    //serenity_dust: '',
    tendon_rip: PET_TENDON_RIP,
    //pummel: '',
    fire_breath: PET_FIRE_BREATH,
    monstrous_bite: PET_MONSTROUS_BITE,
    //bad_attitude: '',
    pin: PET_PIN,
    lava_breath: PET_LAVA_BREATH,
    swipe: PET_SWIPE,
    gore: PET_GORE,
    demoralizing_screech: PET_DEMORALIZING_SCREECH,
    froststorm_breath: PET_FROSTSTORM_BREATH
}

var PET_SPELLS = {}

function generatePetSpellObj(){
    PET_SPELLS = {};

    let pet = PET_FAMILY[selectedPet];
    for (let spell in PET_SPELLS_DATA_MAPPER){
        let spellname = PET_SPELLS_DATA_MAPPER[spell];

        if (pet.pet_special === spellname.base.spell_name) {
            PET_SPELLS.pet_special = spellname.base;
            PET_SPELLS.pet_special.ranks = (level === 70) ? spellname['1'] : spellname['2'];
            PET_SPELLS.pet_special.cd = 0;
        }
        if (pet.pet_focus_dump === spellname.base.spell_name) {
            PET_SPELLS.pet_focus_dump = spellname.base;
            PET_SPELLS.pet_focus_dump.ranks = (level === 70) ? spellname['1'] : spellname['2'];
            PET_SPELLS.pet_focus_dump.cd = 0;
        }
    }
}