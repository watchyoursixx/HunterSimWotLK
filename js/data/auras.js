const MAIN_CDS = { // todo
    beastwithin: {
        cost: 10,
        effect: {
            duration: 10,
            base_cd: 120,
            dmgmod: 10
        },
        effect_name: 'The Beast Within'
    },
    tricksoftrade: { //todo
        effect: {
            duration: 6,
            base_cd: 30,
            dmgmod: 15
        },
        effect_name: 'Tricks of the Trade'
    },
    hysteria: { //todo
        effect: {
            duration: 10,
            base_cd: 120,
            dmgmod: 20
        },
        effect_name: 'Hysteria'
    },
    potion: { // todo
        effect: {
            duration: 15,
            base_cd: 60,
        },
        effect_name: 'Potion'
    },
    rune: { // todo
        effect: {
            minMana: 900,
            maxMana: 1500,
            base_cd: 900,
        },
        effect_name: 'Dark Rune'
    },
    bloodfury: {
        stat_type: 'AP',
        effect: {
            duration: 15,
            base_cd: 120,
            stats: {
                RAP: 322,
                MAP: 322
            }
        },
        effect_name: 'Blood Fury'
    },
    berserking: { // todo
        effect: {
            duration: 10,
            base_cd: 180,
            meleespeed: 20,
            rangespeed: 20
        },
        effect_name: 'Berserking'
    },
    rapid: { // todo
        cost: 3,
        effect: {
            duration: 15,
            base_cd: 300,
            rangespeed: 40
        },
        effect_name: 'Rapid Fire'
    },
    lust: { // todo
        effect: {
            duration: 40,
            base_cd: 600,
            meleespeed: 30,
            rangespeed: 30
        },
        effect_name: 'Blood Lust'
    },
    arcanetorrent: { // todo
        is_aura: false,
        effect: {
            base_cd: 120,
            mana: 6
        },
        effect_name: 'Arcane Torrent'
    },
    readiness: { // todo
        is_aura: false,
        effect: {
            base_cd: 180,
        },
        effect_name: 'Readiness'
    },
}
// should be complete
const TRINKET_CDS = {
    swarmguard: {
        shares_cd: false,
        stat_type: 'ArP',
        requires: 21670,
        effect: {
            is_proc: false,
            duration: 30,
            base_cd: 180,
            ppm: 12,
            proc_type: 2,
            stats: {
                ArP: 28
            },
            stacks: 6
        },
        effect_name: 'Insight of the Qiraji'
    },
    tenacity: {
        shares_cd: true,
        stat_type: 'Agi',
        requires: 32658,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                Agi: 150
            }
        },
        effect_name: 'Heightened Reflexes'
    },
    brooch: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 29383,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 278,
                MAP: 278
            }
        },
        effect_name: 'Bloodlust Brooch'
    },
    direbrewmug: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 38287,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 278,
                MAP: 278
            }
        },
        effect_name: 'Empty Mug of Direbrew'
    },
    berserkcall: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 33831,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 360,
                MAP: 360
            }
        },
        effect_name: 'Berserkers Call'
    },
    shadowsong: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 35702,
        effect: {
            is_proc: false,
            duration: 15,
            base_cd: 120,
            stats: {
                RAP: 320,
                MAP: 320
            }
        },
        effect_name: 'Shadowsong Panther Figurine'
    },
    loathebshadow: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 39257,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 670,
                MAP: 670
            }
        },
        effect_name: 'Loatheb\'s Shadow'
    },
    disksofbattle: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 46086,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 752,
                MAP: 752
            }
        },
        effect_name: 'Disks of Battle'
    },
    wrathstone: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 45263,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 856,
                MAP: 856
            }
        },
        effect_name: 'Wrathstone'
    },
    markofsupremacy: {
        shares_cd: true,
        stat_type: 'AP',
        requires: 47734,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                RAP: 1024,
                MAP: 1024
            }
        },
        effect_name: 'Mark of Supremacy'
    },
    abacus: {
        shares_cd: true,
        stat_type: 'Haste',
        requires: 28288,
        effect: {
            is_proc: false,
            duration: 10,
            base_cd: 120,
            stats: {
                Haste: 260
            }
        },
        effect_name: 'Haste (Abacus)'
    },
    thornyrose: {
        shares_cd: true,
        stat_type: 'Haste',
        requires: 43836,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                Haste: 212
            }
        },
        effect_name: 'Bleeding Heart'
    },
    runefinite: {
        shares_cd: true,
        stat_type: 'Haste',
        requires: 38764,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                Haste: 208
            }
        },
        effect_name: 'Infinite Speed'
    },
    disksofswiftness: {
        shares_cd: true,
        stat_type: 'Haste',
        requires: 46088,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                Haste: 375
            }
        },
        effect_name: 'Platinum Disks of Swiftness'
    },
    crystalheart: {
        shares_cd: true,
        stat_type: 'Haste',
        requires: 48722,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                Haste: 512
            }
        },
        effect_name: 'Celerity'
    },
    unyielding: {
        shares_cd: true,
        stat_type: 'ArP',
        requires: 28121,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                ArP: 85
            }
        },
        effect_name: 'Icon of Unyielding Courage'
    },
    incisor: {
        shares_cd: true,
        stat_type: 'ArP',
        requires: 37723,
        effect: {
            is_proc: false,
            duration: 20,
            base_cd: 120,
            stats: {
                ArP: 291
            }
        },
        effect_name: 'Incisor Fragment'
    },
    gnomishlightning: {
        is_aura: false,
        shares_cd: false,
        requires: 41121,
        effect: {
            is_proc: false,
            base_cd: 120,
            mindmg: 1530,
            maxdmg: 1870,
            type: 'Nature'
            
        },
        effect_name: 'Gnomish Lightning Generator'
    }
}
 // todo
const PROFF_CDS = {
    engthermalsapper: {
        is_aura: false,
        shares_bombcd: true,
        requires: 'Engineering',
        effect: {
            is_proc: false,
            base_cd: 300,
            mindmg: 2188,
            maxdmg: 2812,
            type: 'Fire'
            
        },
        effect_name: 'Hand-mounted Pyro Rocket'
    },
    engsaronitebomb: {
        is_aura: false,
        shares_bombcd: true,
        requires: 'Engineering',
        effect: {
            is_proc: false,
            base_cd: 60,
            mindmg: 1150,
            maxdmg: 1500,
            type: 'Fire'
            
        },
        effect_name: 'Hand-mounted Pyro Rocket'
    },
}
 // todo
const PET_CDS = {
    recovery: {
        effect: {
            duration: 9,
            base_cd: 180
        },
        effect_name: 'Roar of Recovery'
    },
    killcommand: {
        effect: {
            duration: 30,
            base_cd: 60,
            stacks: 3,
            dmgmod: 20
        },
        effect_name: 'Kill Command'
    },
    rabid: {
        effect: {
            duration: 20,
            base_cd: 45
        },
        effect_name: 'Rabid'
    },
    callofwild: {
        effect: {
            duration: 20,
            base_cd: 300
        },
        effect_name: 'Call of the Wild'
    },
    furioushowl: {
        stat_type: 'AP',
        effect: {
            duration: 20,
            base_cd: 40,
            stats: {
                RAP: 204,
                MAP: 204
            }
        },
        effect_name: 'Furious Howl'
    },
    serenitydust: {
        effect: {
            duration: 15,
            base_cd: 60
        },
        effect_name: 'Serenity Dust'
    },
}
 // todo
const PET_PROCS = {
    cullingherd: { // todo
        effect: {
            duration: 10,
            dmgbonus: 1,
        },
        effect_name: 'Culling the Herd'
    },
    frenzy: {
        effect: {
            duration: 8,
        },
        effect_name: 'Frenzy'
    },
    monstrousbite: { // todo
        effect: {
            duration: 12,
            stacks: 3,
            dmgbonus: 3
        },
        effect_name: 'Monstrous Bite'
    }
}
// todo DBW, rest should work
const TRINK_PROCS = {
    dragonspine: {
        shares_cd: false,
        stat_type: 'Haste',
        requires: 28830,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            ppm: 1,
            duration: 10,
            base_cd: 20,
            stats: {
                Haste: 325
            }
        },
        effect_name: 'Haste (DST)'
    },
    meteorite: {
        shares_cd: false,
        stat_type: 'Haste',
        requires: 37390,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                Haste: 444
            }
        },
        effect_name: 'Meteorite Whetstone'
    },
    cometstrail: {
        shares_cd: false,
        stat_type: 'Haste',
        requires: 45609,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                Haste: 726
            }
        },
        effect_name: 'Comet\'s Trail'
    },
    tearsofanguish: {
        shares_cd: false,
        stat_type: 'Haste',
        requires: 43573,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                Haste: 410
            }
        },
        effect_name: 'Tears of Bitter Anguish'
    },
    madness: {
        shares_cd: false,
        stat_type: 'ArP',
        requires: 32505,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            ppm: 1,
            duration: 10,
            stats: {
                ArP: 42
            }
        },
        effect_name: 'Forceful Strike'
    },
    grimtoll: {
        shares_cd: false,
        stat_type: 'ArP',
        requires: 40256,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                ArP: 612
            }
        },
        effect_name: 'Grim Toll'
    },
    mjolnir: {
        shares_cd: false,
        stat_type: 'ArP',
        requires: 45931,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                ArP: 665
            }
        },
        effect_name: 'Mjolnir Runestone'
    },
    fatalflaws: {
        shares_cd: false,
        stat_type: 'ArP',
        requires: 50198,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                ArP: 678
            }
        },
        effect_name: 'Fatal Flaws'
    },
    deathanguish: {
        shares_cd: false,
        stat_type: 'Crit',
        requires: 38212,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 10,
            duration: 20,
            base_cd: 45,
            stats: {
                Crit: 15
            },
            stacks: 10
        },
        effect_name: 'Death Knight\'s Anguish'
    },
    chuchus: {
        shares_cd: false,
        stat_type: 'Crit',
        requires: 43838,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                Crit: 258
            }
        },
        effect_name: 'Tentacles'
    },
    jousterfury: {
        shares_cd: false,
        stat_type: 'Crit',
        requires: 45219,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                Crit: 328
            }
        },
        effect_name: 'Glory of the Jouster'
    },
    darkmatter: {
        shares_cd: false,
        stat_type: 'Crit',
        requires: 46038,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            duration: 10,
            base_cd: 45,
            stats: {
                Crit: 612
            }
        },
        effect_name: 'Dark Matter'
    },
    dmcberserk: {
        shares_cd: false,
        stat_type: 'Crit',
        requires: 42989,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 50,
            duration: 12,
            stats: {
                Crit: 35
            },
            stacks: 3
        },
        effect_name: 'Berserker!'
    },
    dmcgreatness: {
        shares_cd: false,
        stat_type: 'Agi',
        requires: 44253,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                Agi: 300
            }
        },
        effect_name: 'Greatness'
    },
    paragon: {
        shares_cd: false,
        stat_type: 'Agi',
        requires: 47115,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                Agi: 450
            }
        },
        effect_name: 'Paragon'
    },
    paragonheroic: {
        shares_cd: false,
        stat_type: 'Agi',
        requires: 47131,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                Agi: 510
            }
        },
        effect_name: 'Paragon'
    },
    whisperingfang: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 50342,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                RAP: 1100,
                MAP: 1100
            }
        },
        effect_name: 'Icy Rage'
    },
    whisperingfangheroic: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 50343,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                RAP: 1250,
                MAP: 1250
            }
        },
        effect_name: 'Icy Rage'
    },
    twilightscale: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 54569,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                RAP: 1304,
                MAP: 1304
            }
        },
        effect_name: 'Piercing Twilight'
    },
    twilightscaleheroic: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 54590,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 35,
            duration: 15,
            base_cd: 45,
            stats: {
                RAP: 1472,
                MAP: 1472
            }
        },
        effect_name: 'Piercing Twilight'
    },
    hourglass: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 28034,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 300,
                MAP: 300
            }
        },
        effect_name: 'Hourglass of the Unraveler'
    },
    tsunami: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 30627,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 340,
                MAP: 340
            }
        },
        effect_name: 'Fury of the Crashing Waves'
    },
    bannervictory: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 47214,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 20,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 1008,
                MAP: 1008
            }
        },
        effect_name: 'Fury'
    },
    mirroroftruth: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 40684,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 1000,
                MAP: 1000
            }
        },
        effect_name: 'Reflection of Torment'
    },
    pyriteinfusion: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 45286,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 1234,
                MAP: 1234
            }
        },
        effect_name: 'Pyrite Infusion'
    },
    bloodoldgod: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 45522,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Crit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 1284,
                MAP: 1284
            }
        },
        effect_name: 'Blood of the Old God'
    },
    dmccrusade: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 31856,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            duration: 10,
            stats: {
                RAP: 6,
                MAP: 6
            },
            stacks: 20
        },
        effect_name: 'Aura of the Crusader'
    },
    fivefights: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 40431,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            duration: 10,
            stats: {
                RAP: 16,
                MAP: 16
            },
            stacks: 20
        },
        effect_name: 'Fury of the Five Fights'
    },
    wartoken: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 50355,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            duration: 10,
            stats: {
                RAP: 17,
                MAP: 17
            },
            stacks: 20
        },
        effect_name: 'Rage of the Fallen'
    },
    naarusliver: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 34427,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 10,
            duration: 20,
            base_cd: 45,
            stats: {
                RAP: 44,
                MAP: 44
            },
            stacks: 10
        },
        effect_name: 'Battle Trance'
    },
    anviltitans: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 44914,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range Hit',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 1000,
                MAP: 1000
            }
        },
        effect_name: 'Strength of Titans'
    },
    ashtongue: {
        shares_cd: false,
        stat_type: 'AP',
        requires: 32487,
        effect: {
            is_proc: true,
            proc_type: 'Steady',
            proc_chance: 15,
            duration: 8,
            stats: {
                RAP: 275,
                MAP: 275
            }
        },
        effect_name: 'Deadly Aim'
    },
}
 // todo
const SET_PROCS = {
    t10_2p_exploit_weakness: { // todo
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Auto',
            proc_chance: 5,
            duration: 20,
            dmgmod: 15,
        },
        effect_name: 'Exploit Weakness (T10 2pc)'
    },
    beast_lord_4p_kc_arp: {
        shares_cd: false,
        stat_type: 'ArP',
        effect: {
            is_proc: true,
            duration: 20,
            stats: {
                ArP: 85
            }
        },
        effect_name: 'Armor Penetration (Beastlord 4pc)'
    },
    t9_4p_pet_ap: { // todo
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Range Hit',
            proc_chance: 15,
            duration: 15,
            stats: {
                MAP: 600
            }
        },
        effect_name: 'Pet AP (T9 4pc)'
    },
    t10_4p_stinger: { // todo
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'SS Tick',
            proc_chance: 5,
            duration: 10,
            apmod: 20
        },
        effect_name: 'Stinger (T10 4pc)'
    },
    t8_4pc_precision_shots: { // todo
        shares_cd: false,
        stat_type: 'AP',
        effect: {
            is_proc: true,
            proc_type: 'Steady',
            proc_chance: 10,
            duration: 15,
            stats: {
                RAP: 600,
                MAP: 600
            }
        },
        effect_name: 'Precision Shots (T8 4pc)'
    },
}
 // todo
const ITEM_PROCS = {
    donsantos: {
        shares_cd: false,
        slot: 'range',
        stat_type: 'AP',
        requires: 31323,
        effect: {
            is_proc: true,
            proc_type: 'Range',
            ppm: 1,
            duration: 10,
            stats: {
                RAP: 250,
                MAP: 250
            }
        },
        effect_name: 'Santos Blessing'
    },
    eternalchamp: {
        shares_cd: false,
        slot: 'ring',
        stat_type: 'AP',
        requires: 29301,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            ppm: 1,
            duration: 10,
            stats: {
                RAP: 160,
                MAP: 160
            }
        },
        effect_name: 'Band of the Eternal Champion'
    },
    frostforgedchamp: { // todo
        shares_cd: false,
        slot: 'ring',
        stat_type: 'AP',
        requires: 50402,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            ppm: 1,
            duration: 10,
            stats: {
                RAP: 480,
                MAP: 480
            }
        },
        effect_name: 'Frostforged Champion'
    },
    edwardtheodd: { // todo
        shares_cd: false,
        slot: 'ring',
        stat_type: 'Haste',
        requires: 44308,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 15,
            base_cd: 45,
            duration: 13,
            stats: {
                Haste: 125
            }
        },
        effect_name: 'Edward\'s Insight'
    }
}
 // several todo
const ENCHANT_AURAS = {
    enghasteglove: { // todo
        shares_cd: true,
        stat_type: 'Haste',
        slot: 'hand',
        requires: 54999,
        effect: {
            is_proc: false,
            duration: 12,
            base_cd: 60,
            stats: {
                Haste: 340
            }
        },
        effect_name: 'Hyperspeed Accelerators'
    },
    engpyrorocket: { // todo
        is_aura: false,
        shares_cd: false,
        slot: 'hand',
        requires: 54998,
        effect: {
            is_proc: false,
            base_cd: 45,
            mindmg: 1654,
            maxdmg: 2020,
            type: 'Fire'
            
        },
        effect_name: 'Hand-mounted Pyro Rocket'
    },
    executioner: {
        shares_cd: false,
        slot: 'mainhand',
        stat_type: 'ArP',
        requires: 42974,
        effect: {
            is_proc: true,
            proc_type: 'Melee',
            ppm: 1,
            duration: 15,
            stats: {
                ArP: 120
            }
        },
        effect_name: 'Executioner'
    },
    mongoose: {
        shares_cd: false,
        slot: 'mainhand',
        stat_type: 'Agi',
        requires: 27984,
        effect: {
            is_proc: true,
            proc_type: 'Melee',
            ppm: 1,
            duration: 15,
            stats: {
                Agi: 120
            },
            meleespeed: 1.03
        },
        effect_name: 'Lightning Speed (Mongoose)'
    },
    righteousness: {
        shares_cd: false,
        requires: 34539,
        slot: 'attachment',
        stat_type: 'AP',
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 10,
            duration: 10,
            base_cd: 45,
            stats: {
                RAP: 300,
                MAP: 300
            }
        },
        effect_name: 'Righteousness'
    },
    swordguard: {
        shares_cd: false,
        slot: 'back',
        stat_type: 'AP',
        requires: 55777,
        effect: {
            is_proc: true,
            proc_type: 'Melee or Range',
            proc_chance: 20,
            duration: 15,
            base_cd: 45,
            stats: {
                RAP: 400,
                MAP: 400
            }
        },
        effect_name: 'Swordguard Embroidery'
    }
}
 // todo
const TALENT_PROCS = {
    imp_hawk: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Auto',
            proc_chance: 10,
            duration: 12,
        },
        effect_name: 'Quick Shots'
    },
    master_tact: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Range Hit',
            proc_chance: 10,
            duration: 8,
        },
        effect_name: 'Master Tactitian'
    },
    imp_steady_shot: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Steady',
            duration: 12,
        },
        effect_name: 'Improved Steady Shot'
    },
    exp_weakness: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Range Crit',
            proc_chance: 33,
            duration: 7,
        },
        effect_name: 'Expose Weakness'
    },
    sniper_training: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Special',
            duration: 15,
            base_cd: 6
        },
        effect_name: 'Sniper Training'
    },
    lock_load: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Special',
            duration: 12,
            base_cd: 22
        },
        effect_name: 'Lock and Load'
    },
    pierce_shot: {
        type: 'bleed',
        effect: {
            duration: 8,
            tick_rate: 1
        },
        effect_name: 'Piercing Shots'
    },
    hunt_party: {
        shares_cd: false,
        effect: {
            is_proc: true,
            proc_type: 'Special',
            duration: 15
        },
        effect_name: 'Replenishment'
    },
}

const AURA_DOTS = {

    blackarrow: {
        type: 'shadow',
        effect: {
            tick_rate: 3,
            duration: 15
        },
        effect_name: 'Black Arrow'
    },
    serpentsting: {
        type: 'nature',
        effect: {
            tick_rate: 3,
            duration: 15
        },
        effect_name: 'Serpent Sting'
    },
    immolatetrap: {
        type: 'fire',
        effect: {
            tick_rate: 3,
            duration: 15
        },
        effect_name: 'Immolation Trap'
    },
    explosivetrap: {
        type: 'fire',
        effect: {
            tick_rate: 2,
            duration: 20
        },
        effect_name: 'Explosive Trap'
    },
    explosiveshot: {
        type: 'fire',
        effect: {
            tick_rate: 1,
            duration: 2
        },
        effect_name: 'Explosive Shot'
    },

}

var auras = {};

// stat total auras used for summing stats only
var ap_auras = {}
var haste_auras = {}
var crit_auras = {}
var arp_auras = {}
var agi_auras = {}

const aura_template = { timer: 0, cd: 0, uptime: 0 };

var usable_CDs = {

    beastwithin: { enable: false, offset: 0, type: 'player'},
    readiness: { enable: true, offset: 0, type: 'player' },
    rapid: { enable: true, offset: 0, type: 'player' },
    rune: { enable: true, offset: 0, type: 'player' },
    lust: { enable: true, offset: 0, type: 'player' },
    tricksoftrade: { enable: false, offset: 0, type: 'player' },
    hysteria: { enable: false, offset: 0, type: 'player' },
    potion: { enable: true, offset: 0, potion_type: 'Haste', type: 'player' },
    berserking: { enable: false, offset: 0, type: 'player' },
    bloodfury: { enable: false, offset: 0, type: 'player' },
    arcanetorrent: { enable: true, offset: 0, type: 'player' },
    engthermalsapper: { enable: true, offset: 0, type: 'player' },
    engsaronitebomb: { enable: false, offset: 0, type: 'player' },

    killcommand: { enable: true, offset: 0, type: 'pet' },
    rabid: { enable: false, offset: 0, type: 'pet' },
    recovery: { enable: true, offset: 0, type: 'pet' },
    callofwild: { enable: true, offset: 0, type: 'pet' },
    furioushowl: { enable: false, offset: 0, type: 'pet' },
    serenitydust: { enable: false, offset: 0, type: 'pet' },

}

function updateUsableCDs() {

    let profession_1 = 'Tailoring';
    let profession_2 = 'Leatherworking';

    if (selectedRace == 3) { // orc
        usable_CDs.bloodfury.enable = false; // fixme
        usable_CDs.berserking.enable = false;
        usable_CDs.arcanetorrent.enable = false;

    } else if (selectedRace == 4){ // troll
        usable_CDs.berserking.enable = true;
        usable_CDs.bloodfury.enable = false;
        usable_CDs.arcanetorrent.enable = false;

    } else if (selectedRace == 6){ // blood elf
        usable_CDs.berserking.enable = false;
        usable_CDs.bloodfury.enable = false;
        usable_CDs.arcanetorrent.enable = true;

    } else {
        usable_CDs.berserking.enable = false;
        usable_CDs.bloodfury.enable = false;
        usable_CDs.arcanetorrent.enable = false;
    }

    if ((profession_1 === 'Engineering') || (profession_2 === 'Engineering')) {
        usable_CDs.engsaronitebomb.enable = true;
        usable_CDs.engthermalsapper.enable = true;
    } else {
        usable_CDs.engsaronitebomb.enable = false;
        usable_CDs.engthermalsapper.enable = false;
    }

    if (selectedPet === 7) {
        usable_CDs.furioushowl.enable = true;
        usable_CDs.serenitydust.enable = false;
    }
    if (selectedPet === 8) {
        usable_CDs.furioushowl.enable = false;
        usable_CDs.serenitydust.enable = true;
    } else {
        usable_CDs.furioushowl.enable = false;
        usable_CDs.serenitydust.enable = false;
    }

    usable_CDs.readiness.enable = (talents.readiness > 0) ? true : false;
    usable_CDs.recovery.enable = (pet_talents.roar_recovery > 0) ? true : false;
    usable_CDs.callofwild.enable = (pet_talents.call_of_wild > 0) ? true : false;
    usable_CDs.rabid.enable = (pet_talents.rabid > 0) ? true : false;

    usable_CDs.potion.potion_type = 'Crit'
    
}

function buildAurasObj(){
    auras = { 
        trink1: {},
        trink2: {}
    }

    // updates aura obj w/ procs from items
    for (let aura_ in ITEM_PROCS) {
        let req = ITEM_PROCS[aura_].requires;
        let slot = ITEM_PROCS[aura_].slot;
        let checkitem = false;

        if (slot == 'ring') {
            checkitem = (gear.ring1.id === req) || (gear.ring2.id === req)
        } else checkitem = (gear[slot].id === req)

        if (checkitem) {
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            auras[aura_].stat_type = ITEM_PROCS[aura_].stat_type;
            auras[aura_].effect = ITEM_PROCS[aura_].effect;
            auras[aura_].effect_name = ITEM_PROCS[aura_].effect_name;
        }
    }
    // check for trink 1 proc/use cd
    if ((Object.keys(auras.trink1)).length === 0) {
        let found_aura = {};
        // search for first aura that matches equipped item in trink procs list
        for (let aura_ in TRINK_PROCS) {
            let req = TRINK_PROCS[aura_].requires;
            let checkitem = false;
            checkitem = (gear.trinket1.id === req)
            
            if (checkitem) {
                found_aura = TRINK_PROCS[aura_];
                break;
            }
        }
        // search for first aura that matches equipped item in trink cds list
        for (let aura_ in TRINKET_CDS) {
            let req = TRINKET_CDS[aura_].requires;
            let checkitem = false;
            checkitem = (gear.trinket1.id === req)
            
            if (checkitem) {
                found_aura = TRINKET_CDS[aura_];
                break;
            }
        }
        // if aura found, store data into trink1 prop for auras - should be empty if none found
        if ((Object.keys(found_aura)).length !== 0) {
            
            auras.trink1 = JSON.parse(JSON.stringify(aura_template));
            auras.trink1.stat_type = found_aura.stat_type;
            auras.trink1.effect = found_aura.effect;
            auras.trink1.effect_name = found_aura.effect_name;
            auras.trink1.shares_cd = found_aura.shares_cd;
            if (!!found_aura.effect.stacks) auras.trink1.stacks = 0;
            else delete auras.trink1.stacks
        }
    }

    // check for trink 2 proc/use cd
    if ((Object.keys(auras.trink2)).length === 0) {
        let found_aura = {};
        // search for first aura that matches equipped item in trink procs list
        for (let aura_ in TRINK_PROCS) {
            let req = TRINK_PROCS[aura_].requires;
            let checkitem = false;
            checkitem = (gear.trinket2.id === req)
            
            if (checkitem) {
                found_aura = TRINK_PROCS[aura_];
                break;
            }
        }
        // search for first aura that matches equipped item in trink cds list
        for (let aura_ in TRINKET_CDS) {
            let req = TRINKET_CDS[aura_].requires;
            let checkitem = false;
            checkitem = (gear.trinket2.id === req)
            
            if (checkitem) {
                found_aura = TRINKET_CDS[aura_];
                break;
            }
        }
        // if aura found, store data into trink2 prop for auras - should be empty if none found
        if ((Object.keys(found_aura)).length !== 0) {
            
            auras.trink2 = JSON.parse(JSON.stringify(aura_template));
            auras.trink2.stat_type = found_aura.stat_type;
            auras.trink2.effect = found_aura.effect;
            auras.trink2.effect_name = found_aura.effect_name;
            auras.trink2.shares_cd = found_aura.shares_cd;
            if (!!found_aura.effect.stacks) auras.trink2.stacks = 0;
            else delete auras.trink2.stacks
        }
    }
    let mainhandcheck = (gear.mainhand.attachment !== undefined) && (gear.mainhand.attachment > 1);
    let offhandcheck = (gear.offhand != undefined) && (gear.offhand.attachment != undefined) && (gear.offhand.attachment > 1);
    
    // updates aura obj w/ procs from enchants
    for (let aura_ in ENCHANT_AURAS) {
        let req = ENCHANT_AURAS[aura_].requires;
        let slot = ENCHANT_AURAS[aura_].slot;
        let checkitem = false;
        if (slot === 'attachment') {
            if ((gear.offhand === undefined) && (gear.mainhand.attachment > 1)) 
                checkitem = (gear.mainhand.attachment === req);
            else if(mainhandcheck && offhandcheck){
                checkitem = (gear.mainhand.attachment === req || gear.offhand.attachment === req);
            } else {
                checkitem = false;
            }
        } else checkitem = (gear[slot].enchant === req);

        if (checkitem) {
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            auras[aura_].stat_type = (!!ENCHANT_AURAS[aura_].stat_type) ? ENCHANT_AURAS[aura_].stat_type : '';
            auras[aura_].effect = ENCHANT_AURAS[aura_].effect;
            auras[aura_].effect_name = ENCHANT_AURAS[aura_].effect_name;
        }
    }

    updateUsableCDs();
    // updates auras with main cds
    let cd_obj = Object.assign(Object.assign(MAIN_CDS,PROFF_CDS),PET_CDS);
    for (let aura_ in cd_obj) {
        if (usable_CDs[aura_].enable === true) {
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            auras[aura_].stat_type = (!!cd_obj[aura_].stat_type) ? cd_obj[aura_].stat_type : '';
            auras[aura_].effect = cd_obj[aura_].effect;
            auras[aura_].offset = usable_CDs[aura_].offset;
            auras[aura_].effect_name = cd_obj[aura_].effect_name;
            if (aura_ === 'killcommand') {
                auras[aura_].stacks = 0;
            }
        }
    }
    
    // updates auras with talent procs
    for (let talent_ in TALENT_PROCS) {
        if (talents[talent_] > 0) {
            auras[talent_] = JSON.parse(JSON.stringify(aura_template));
            auras[talent_].stat_type = (!!TALENT_PROCS[talent_].stat_type) ? TALENT_PROCS[talent_].stat_type : '';
            auras[talent_].effect = TALENT_PROCS[talent_].effect;
            auras[talent_].effect_name = TALENT_PROCS[talent_].effect_name;
            if (talent_ === 'pierce_shot') {
                auras[talent_].apply_time = 0;
                auras[talent_].next_tick = 0;
                auras[talent_].ticks = 0;
                auras[talent_].type = TALENT_PROCS[talent_].type;
                auras[talent_].damage = 0;
            }
        }
    }
    // updates auras with pet procs
    for (let aura_ in PET_PROCS) {
        let checkaura = false;
        if (((aura_ === 'cullingherd') && (pet_talents.cull_herd > 1)) ||
            ((aura_ === 'frenzy') && (talents.frenzy > 0)) ||
            ((aura_ === 'savagerend') && (selectedPet === 2)) ||
            ((aura_ === 'monstrousbite') && (selectedPet === 24))) { 
            checkaura = true;
        }
        if (checkaura) {
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            auras[aura_].stat_type = (!!PET_PROCS[aura_].stat_type) ? PET_PROCS[aura_].stat_type : '';
            auras[aura_].effect = PET_PROCS[aura_].effect;
            auras[aura_].effect_name = PET_PROCS[aura_].effect_name;
            if((aura_ === 'monstrousbite') && (selectedPet === 24)) {
                auras[aura_].stacks = 0;
            }
        }
    }
    // updates auras with set procs
    for (let aura_ in SET_PROCS) {
        let checkitem = false;
        if (currentgear.special[aura_] > 0) checkitem = true;
            
        if (checkitem) {
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            auras[aura_].stat_type = SET_PROCS[aura_].stat_type;
            auras[aura_].effect = SET_PROCS[aura_].effect;
            auras[aura_].effect_name = SET_PROCS[aura_].effect_name;
        }
    }

    // updates auras with dots
    for (let aura_ in AURA_DOTS) {
        let checkaura = false;
        
        if(settings[aura_]) checkaura = true;
        
        if (checkaura){
            auras[aura_] = JSON.parse(JSON.stringify(aura_template));
            //auras[aura_].stat_type = '';
            auras[aura_].effect = AURA_DOTS[aura_].effect;
            auras[aura_].effect_name = AURA_DOTS[aura_].effect_name;
            auras[aura_].type = AURA_DOTS[aura_].type;
            auras[aura_].apply_time = 0;
            auras[aura_].next_tick = 0;
            auras[aura_].ticks = 0;
            auras[aura_].damage = 0;
        }
    }
    
    if (!!PET_SPELLS.pet_special.tick_rate) {
        auras.pet_special = JSON.parse(JSON.stringify(aura_template));
        auras.pet_special.effect = {};
        auras.pet_special.effect.duration = PET_SPELLS.pet_special.duration;
        auras.pet_special.effect.tick_rate = PET_SPELLS.pet_special.tick_rate;
        auras.pet_special.effect_name = PET_SPELLS.pet_special.spell_name;
        auras.pet_special.type = PET_SPELLS.pet_special.type;
        auras.pet_special.apply_time = 0;
        auras.pet_special.next_tick = 0;
        auras.pet_special.ticks = 0;
        auras.pet_special.damage = 0;
    }

    Object.filter = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

    ap_auras = Object.filter(auras, ([key, obj]) => obj.stat_type === 'AP')
    haste_auras = Object.filter(auras, ([key, obj]) => obj.stat_type === 'Haste')
    crit_auras = Object.filter(auras, ([key, obj]) => obj.stat_type === 'Crit')
    arp_auras = Object.filter(auras, ([key, obj]) => obj.stat_type === 'ArP')
    agi_auras = Object.filter(auras, ([key, obj]) => obj.stat_type === 'Agi')

    return;
}

function buildAuraTimerSteps(auras) {
    const conds = Object.keys(auras).map(k =>
      `if(auras.${k}.timer > 0) auras.${k}.timer = Math.max(auras.${k}.timer - steptime,0)`)
    return eval(`(function(auras) {${conds.join(';\n')}})`)
}

function buildAuraCdSteps(auras) {
    const conds = Object.keys(auras).map(k =>
      `if(auras.${k}.cd > 0) auras.${k}.cd = Math.max(auras.${k}.cd - steptime,0)`)
    return eval(`(function(auras) {${conds.join(';\n')}})`)
}

function buildAuraUptimeSteps(auras) {
    const conds = Object.keys(auras).map(k =>
      `if(auras.${k}.timer > 0) auras.${k}.uptime += Math.min(auras.${k}.timer,steptime)`)
    return eval(`(function(auras) {${conds.join(';\n')}})`)
}

function buildAuraTimerResets(auras) {
    const conds = Object.keys(auras).map(k =>
      `auras.${k}.timer = 0`)
    return eval(`(function(auras) {${conds.join(';\n')}})`)
}

function buildAuraCdResets(auras) {
    const conds = Object.keys(auras).map(k =>
      `auras.${k}.cd = (!!auras.${k}.offset) ? auras.${k}.offset : 0`)
    return eval(`(function(auras) {${conds.join(';\n')}})`)
}

var auratimers = buildAuraTimerSteps(auras)
var auracds = buildAuraCdSteps(auras)
var aurauptimes = buildAuraUptimeSteps(auras)
var aura_timer_resets = buildAuraTimerResets(auras)
var aura_cd_resets = buildAuraCdResets(auras)