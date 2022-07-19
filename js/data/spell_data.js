const AIMED_SHOT = {
    base: {
        cost: 8,
        base_cast: 0.0001,
        base_cd: 10,
        gcd: true,
        spell_name: 'Aimed Shot',
        type: 'physical'
    },
    1: {
        rankdmg: 205,
        level: 70
    },
    2: {
        rankdmg: 408,
        level: 80
    },
}
const ARCANE_SHOT = {
    base: {
        cost: 5,
        base_cast: 0.0001,
        base_cd: 6,
        gcd: true,
        spell_name: 'Arcane Shot',
        type: 'arcane'
    },
    1: {
        rankdmg: 273,
        level: 70
    },
    2: {
        rankdmg: 492,
        level: 80
    },
}
const BLACK_ARROW = {
    base: {
        cost: 6,
        base_cast: 0.0001,
        duration: 15,
        ticks: 3,
        base_cd: 30,
        gcd: true,
        spell_name: 'Black Arrow',
        type: 'shadow'
    },
    1: {
        rankdmg: 296,
        level: 70
    },
    2: {
        rankdmg: 553,
        level: 80
    },
}
const CHIMERA_SHOT = {
    base: {
        cost: 12,
        base_cast: 0.0001,
        base_cd: 10,
        gcd: true,
        spell_name: 'Chimera Shot',
        type: 'nature'
    },
    serpent: {
        rankdmg: 40,
        level: 70
    },
}
const EXPLOSIVE_SHOT = {
    base: {
        cost: 7,
        base_cast: 0.0001,
        duration: 2,
        ticks: 1,
        base_cd: 6,
        gcd: true,
        spell_name: 'Explosive Shot',
        type: 'fire'
    },
    1: {
        min_rankdmg: 221,
        max_rankdmg: 265,
        level: 70
    },
    2: {
        min_rankdmg: 386,
        max_rankdmg: 464,
        level: 80
    },
}
const EXPLOSIVE_TRAP = {
    base: {
        cost: 19,
        base_cast: 0.0001,
        duration: 20,
        ticks: 2,
        base_cd: 30,
        gcd: true,
        spell_name: 'Explosive Trap',
        type: 'fire'
    },
    1: {
        min_rankdmg: 263,
        max_rankdmg: 337,
        dot_dmg: 45,
        level: 70
    },
    2: {
        min_rankdmg: 523,
        max_rankdmg: 671,
        dot_dmg: 90,
        level: 80
    },
}
const IMMOLATION_TRAP = {
    base: {
        cost: 9,
        base_cast: 0.0001,
        duration: 15,
        ticks: 3,
        base_cd: 30,
        gcd: true,
        spell_name: 'Immolation Trap',
        type: 'fire'
    },
    1: {
        rankdmg: 197,
        level: 70
    },
    2: {
        rankdmg: 377,
        level: 80
    },
}
const KILL_SHOT = {
    base: {
        cost: 7,
        base_cast: 0.0001,
        base_cd: 20,
        gcd: true,
        spell_name: 'Kill Shot',
        type: 'physical'
    },
    1: {
        rankdmg: 205,
        level: 80
    },
    2: {
        rankdmg: 325,
        level: 80
    },
}
const MONGOOSE_BITE = {
    base: {
        cost: 3,
        base_cast: 0.0001,
        base_cd: 5,
        gcd: true,
        spell_name: 'Mongoose Bite',
        type: 'physical'
    },
    1: {
        rankdmg: 150,
        level: 70
    },
    2: {
        rankdmg: 280,
        level: 80
    },
}
const MULTI_SHOT = {
    base: {
        cost: 9,
        base_cast: 0.5,
        base_cd: 10,
        gcd: true,
        spell_name: 'Multi Shot',
        type: 'physical'
    },
    1: {
        rankdmg: 205,
        level: 70
    },
    2: {
        rankdmg: 408,
        level: 80
    },
}
const RAPTOR_STRIKE = {
    base: {
        cost: 4,
        base_cast: 0.0001,
        base_cd: 6,
        gcd: false,
        spell_name: 'Raptor Strike',
        type: 'physical'
    },
    1: {
        rankdmg: 170,
        level: 70
    },
    2: {
        rankdmg: 335,
        level: 80
    },
}
const SERPENT_STING = {
    base: {
        cost: 9,
        base_cast: 0,
        duration: 15,
        ticks: 3,
        gcd: true,
        spell_name: 'Serpent Sting',
        type: 'nature'
    },
    1: {
        rankdmg: 132,
        level: 70
    },
    2: {
        rankdmg: 242,
        level: 80
    },
}
const SILENCING_SHOT = {
    base: {
        cost: 6,
        base_cast: 0.0001,
        base_cd: 20,
        gcd: false,
        spell_name: 'Silencing Shot',
        type: 'physical'
    },
}
const SCATTER_SHOT = {
    base: {
        cost: 8,
        base_cast: 0.0001,
        base_cd: 30,
        gcd: true,
        spell_name: 'Scatter Shot',
        type: ''
    },
}
const STEADY_SHOT = {
    base: {
        cost: 5,
        base_cast: 2,
        gcd: true,
        spell_name: 'Steady Shot',
        type: 'physical'
    },
    1: {
        rankdmg: 108,
        level: 70
    },
    2: {
        rankdmg: 252,
        level: 80
    },
}
const VOLLEY = {
    base: {
        cost: 17,
        base_cast: 0.0001,
        duration: 6,
        ticks: 1,
        gcd: true,
        spell_name: 'Volley',
        type: 'arcane'
    },
    1: {
        rankdmg: 168,
        level: 70
    },
    2: {
        rankdmg: 353,
        level: 80
    },
}
const FROST_TRAP = {
    base: {
        cost: 2,
        base_cast: 0.0001,
        base_cd: 30,
        gcd: true,
        spell_name: 'Frost Trap',
        type: 'frost'
    },
}
const SNAKE_TRAP = {
    base: {
        cost: 9,
        base_cast: 0.0001,
        base_cd: 30,
        gcd: true,
        spell_name: 'Snake Trap',
        type: 'physical'
    },
}

var SPELLS = {

    autoshot: {cast:0.5, cd:0, dmg:0, cost:0, duration:0, gcd:false},
    steadyshot: {enable:true, cast:1.5, cd:0, dmg:0, cost:110, duration:0, rankdmg:150, gcd:true},
    multishot: {enable:false, cast:0.5, cd:0, dmg:0, cost:275, duration:0, rankdmg:205, gcd:true},
    arcaneshot: {enable:false, cast:0.0001, cd:0, dmg:0, cost:230, duration:0, rankdmg:273, gcd:true},
    aimedshot: {enable:false, cast:3, cd: 0, dmg:0, cost:370, duration:0, rankdmg:870, gcd:true},
    raptorstrike: {enable:false, cast:0.0, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    melee: {enable:false, cast:0.0, cd:0, dmg:0, gcd:false},
    mongoose: {enable:false, cast:0.0, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    blackarrow: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    chimerashot: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    explosiveshot: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    serpentsting: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    explosivetrap: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    immolatetrap: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    frosttrap: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    snaketrap: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    volley: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    killshot: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    silencingshot: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},
    scattershot: {enable:false, cast:0.0001, cd: 0, dmg:0, cost:120, rankdmg:170,gcd:false},

};

function generateSpellData(){

    SPELLS = {
    
        autoshot: { cast:0, cd:0 },

    }
    console.log(level);
    for (spell in SPELL_DATA_MAPPER) {
        let spellname = SPELL_DATA_MAPPER[spell];
        SPELLS[spell] = spellname.base;
        if(!!spellname['2']) {
            SPELLS[spell].ranks = (level === 70) ? spellname['1'] : spellname['2'];
        }
        SPELLS[spell].cd = 0;
        SPELLS[spell].cast = 0;
    }

}

settings = {
    autoshot: true,
    multishot: true,
    aimedshot: true,
    chimerashot: true,
    steadyshot: true,
    arcaneshot: true,
    serpentsting: true,

}
function buildSpellsObj() {

    generateSpellData();

    for (let spell in SPELLS) {
        let enabled = settings[spell];
        if (enabled) {
            USED_SPELLS[spell] = SPELLS[spell];
        }
    }
}

SPELL_DATA_MAPPER = {
    aimedshot: AIMED_SHOT,
    arcaneshot: ARCANE_SHOT,
    blackarrow: BLACK_ARROW,
    chimerashot: CHIMERA_SHOT,
    explosiveshot: EXPLOSIVE_SHOT,
    explosivetrap: EXPLOSIVE_TRAP,
    immolatetrap: IMMOLATION_TRAP,
    killshot: KILL_SHOT,
    mongoose: MONGOOSE_BITE,
    multishot: MULTI_SHOT,
    raptorstrike: RAPTOR_STRIKE,
    serpentsting: SERPENT_STING,
    silencingshot: SILENCING_SHOT,
    steadyshot: STEADY_SHOT,
    volley: VOLLEY,
    frosttrap: FROST_TRAP,
    snaketrap: SNAKE_TRAP,
}