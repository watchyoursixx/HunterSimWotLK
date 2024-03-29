const GEMS = {
    22459: {
        name: "Void Sphere (+4 Resist)",
        colors: [
            "red",
            "yellow",
            "blue"
        ],
        stats: {},
        Phase: 0,
        quality: "Rare",
        icon: "inv_enchant_voidsphere"
    },
    23097: {
        name: "Delicate Blood Garnet (+6 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 6
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_bloodgem_02"
    },
    23100: {
        name: "Glinting Flame Spessarite (+3 Agi +3 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 3,
            Hit: 3
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_flamespessarite_02"
    },
    23104: {
        name: "Jagged Deep Peridot (+4 Stam +3 Crit)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 4,
            Crit: 3
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_deepperidot_02"
    },
    23106: {
        name: "Dazzling Deep Peridot (+3 Int +1 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 3,
            MP5: 1
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_deepperidot_02"
    },
    23110: {
        name: "Shifting Shadow Draenite (+3 Agi +4 Stam)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 3,
            Stam: 4
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_ebondraenite_02"
    },
    23113: {
        name: "Brilliant Golden Draenite (+6 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 6
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_goldendraenite_02"
    },
    23116: {
        name: "Rigid Golden Draenite (+6 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 6
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_goldendraenite_02"
    },
    23118: {
        name: "Solid Azure Moonstone (+9 Stam)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 9
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_azuredraenite_02"
    },
    23121: {
        name: "Lustrous Azure Moonstone (+2 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 2
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_azuredraenite_02"
    },
    24028: {
        name: "Delicate Living Ruby (+8 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_livingruby_03"
    },
    24031: {
        name: "Bright Living Ruby (+16 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 16,
            RAP: 16
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_livingruby_03"
    },
    24033: {
        name: "Solid Star of Elune (+12 Stam)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 12
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_starofelune_03"
    },
    24037: {
        name: "Lustrous Star of Elune (+3 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 3
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_starofelune_03"
    },
    24047: {
        name: "Brilliant Dawnstone (+8 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_dawnstone_03"
    },
    24048: {
        name: "Smooth Dawnstone (+8 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_dawnstone_03"
    },
    24051: {
        name: "Rigid Dawnstone (+8 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_dawnstone_03"
    },
    24053: {
        name: "Mystic Dawnstone (+8 Resil)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_dawnstone_03"
    },
    24055: {
        name: "Shifting Nightseye (+4 Agi +6 Stam)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 4,
            Stam: 6
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_nightseye_03"
    },
    24061: {
        name: "Glinting Noble Topaz (+4 Agi +4 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 4,
            Hit: 4
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    24065: {
        name: "Dazzling Talasite (+4 Int +2 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 4,
            MP5: 2
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_talasite_03"
    },
    24067: {
        name: "Jagged Talasite (+6 Stam +4 Crit)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Crit: 4
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_talasite_03"
    },
    25894: {
        name: "Swift Skyfire Diamond (+24 AP +8% Speed)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { swift_metagem_run_speed_increase: 1.00 }
            var active = false;

            if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
                bonus.stats = { MAP: 24, RAP: 24 }
                bonus.swift_metagem_run_speed_increase = 1.08
                active = true;
            }

            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_07",
        desc: "1 Red, 2 Yellow"
    },
    25895: {
        name: "Enigmatic Skyfire Diamond (+12 Crit)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red > gemsUsed.yellow) {
                bonus.stats = { Crit: 12 }
                active = true;
            }
            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_07",
        desc: "More Red than Yellow"
    },
    25896: {
        name: "Powerful Earthstorm Diamond (+18 Stam)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.blue >= 3) {
                bonus.stats = { Stam: 18 }
                active = true;
            }
            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_06",
        desc: "3 Blue"
    },
    25901: {
        name: "Insightful Earthstorm Diamond (+12 Int)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
                bonus.stats = { Int: 12 }
                active = true;
            }
            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_06",
        desc: "2 Red, 2 Yellow, 2 Blue"
    },
    27679: {
        name: "Sublime Mystic Dawnstone (+10 Resil)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 10
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_misc_gem_topaz_01"
    },
    27809: {
        name: "Barbed Deep Peridot (+3 Stam +4 Crit)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 3,
            Crit: 4
        },
        Phase: 0,
        quality: "Rare",
        unique: true,
        icon: "inv_misc_gem_deepperidot_01"
    },
    28290: {
        name: "Smooth Golden Draenite (+6 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 6
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_goldendraenite_02"
    },
    28361: {
        name: "Mighty Blood Garnet (+14 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 14,
            RAP: 14
        },
        Phase: 0,
        quality: "Rare",
        unique: true,
        icon: "inv_misc_gem_bloodstone_02"
    },
    28556: {
        name: "Swift Windfire Diamond (+20 AP)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { swift_metagem_run_speed_increase: 1.00 }
            var active = false;
            if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
                bonus.stats = { MAP: 20, RAP: 20 }
                bonus.swift_metagem_run_speed_increase = 1.08
                active = true;
            }

            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_07",
        desc: "2 Yellow, 1 Red"
    },
    28595: {
        name: "Bright Blood Garnet (+12 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 12,
            RAP: 12
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_bloodgem_02"
    },
    30549: {
        name: "Shifting Tanzanite (+5 Agi +6 Stam)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 5,
            Stam: 6
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nightseye_03"
    },
    30550: {
        name: "Sundered Chrysoprase (+5 Crit +2 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Crit: 5,
            MP5: 2
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_talasite_03"
    },
    30553: {
        name: "Pristine Fire Opal (+10 AP +4 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 10,
            RAP: 10,
            Hit: 4
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    30556: {
        name: "Glinting Fire Opal (+5 Agi +4 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 5,
            Hit: 4
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    30574: {
        name: "Brutal Tanzanite (+6 Stam +10 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 6,
            MAP: 10,
            RAP: 10
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nightseye_03"
    },
    30582: {
        name: "Deadly Fire Opal (+8 AP +5 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 8,
            RAP: 8,
            Crit: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    30583: {
        name: "Timeless Chrysoprase (+6 Stam +5 Int)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Int: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_talasite_03"
    },
    30589: {
        name: "Dazzling Chrysoprase (+5 Int +2 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 5,
            MP5: 2
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_talasite_03"
    },
    30591: {
        name: "Empowered Fire Opal (+8 AP +5 Resil)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 8,
            RAP: 8,
            Resil: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    30592: {
        name: "Steady Chrysoprase (+6 Stam +5 Resil)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Resil: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_talasite_03"
    },
    30602: {
        name: "Jagged Chrysoprase (+6 Stam +5 Crit)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Crit: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_talasite_03"
    },
    31118: {
        name: "Pulsing Amethyst (+6 Stam +10 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 6,
            MAP: 10,
            RAP: 10
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nightseye_03"
    },
    31862: {
        name: "Balanced Shadow Draenite (+4 Stam +6 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 4,
            MAP: 6,
            RAP: 6
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_ebondraenite_02"
    },
    31863: {
        name: "Balanced Nightseye (+6 Stam +8 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 6,
            MAP: 8,
            RAP: 8
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_nightseye_03"
    },
    31864: {
        name: "Infused Shadow Draenite (+6 AP +1 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 6,
            RAP: 6,
            MP5: 1
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_ebondraenite_02"
    },
    31865: {
        name: "Infused Nightseye (+8 AP +2 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 8,
            RAP: 8,
            MP5: 2
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_nightseye_03"
    },
    31868: {
        name: "Wicked Noble Topaz (+8 AP +4 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 8,
            RAP: 8,
            Crit: 4
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    31869: {
        name: "Wicked Flame Spessarite (+6 AP +3 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 6,
            RAP: 6,
            Crit: 3
        },
        Phase: 0,
        quality: "Uncommon",
        icon: "inv_misc_gem_flamespessarite_02"
    },
    32194: {
        name: "Delicate Crimson Spinel (+10 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_crimsonspinel_02"
    },
    32200: {
        name: "Solid Empyrean Sapphire (+15 Stam)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 15
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_empyreansapphire_02"
    },
    32202: {
        name: "Lustrous Empyrean Sapphire (+4 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 4
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_empyreansapphire_02"
    },
    32204: {
        name: "Brilliant Lionseye (+10 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_lionseye_02"
    },
    32205: {
        name: "Smooth Lionseye (+10 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_lionseye_02"
    },
    32206: {
        name: "Rigid Lionseye (+10 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_lionseye_02"
    },
    32209: {
        name: "Mystic Lionseye (+10 Resil)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_lionseye_02"
    },
    32212: {
        name: "Shifting Shadowsong Amethyst (+5 Agi +7 Stam)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 5,
            Stam: 7
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_shadowsongamethyst_02"
    },
    32213: {
        name: "Balanced Shadowsong Amethyst (+7 Stam +10 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 7,
            MAP: 10,
            RAP: 10
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_shadowsongamethyst_02"
    },
    32214: {
        name: "Infused Shadowsong Amethyst (+10 AP +2 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 10,
            RAP: 10,
            MP5: 2
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_shadowsongamethyst_02"
    },
    32220: {
        name: "Glinting Pyrestone (+5 Agi +5 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 5,
            Hit: 5
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_pyrestone_02"
    },
    32222: {
        name: "Wicked Pyrestone (+10 AP +5 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 10,
            RAP: 10,
            Crit: 5
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_pyrestone_02"
    },
    32225: {
        name: "Dazzling Seaspray Emerald (+5 Int +2 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 5,
            MP5: 2
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_seasprayemerald_02"
    },
    32226: {
        name: "Jagged Seaspray Emerald (+7 Stam +5 Crit)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 7,
            Crit: 5
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_seasprayemerald_02"
    },
    32409: {
        name: "Relentless Earthstorm Diamond (+12 Agi, +3% Crit Dmg)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { relentless_metagem_crit_dmg_inc: 1.00 }
            var active = false;
            if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
                bonus.stats = { Agi: 12 }
                bonus.relentless_metagem_crit_dmg_inc = 1.03
                active = true;
            }

            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_06",
        desc: "2 Red, 2 Yellow, 2 Blue"
    },
    32410: {
        name: "Thundering Skyfire Diamond (+240 Haste Proc)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red >= 2 && gemsUsed.yellow >= 2 && gemsUsed.blue >= 2) {
                bonus.aura = {
                    stats: { Haste: 240 },
                    is_proc: 'Y',
                    cd: 40,
                    PPM: 1,
                    proc_type: 2,
                    duration: 6,
                }
                active = true;
            }
            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_07",
        desc: "2 Red, 2 Yellow, 2 Blue"
    },
    32634: {
        name: "Unstable Amethyst (+6 Stam +8 AP)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 6,
            MAP: 8,
            RAP: 8
        },
        Phase: 0,
        quality: "Rare",
        unique: true,
        icon: "inv_jewelcrafting_shadowsongamethyst_01"
    },
    32635: {
        name: "Unstable Peridot (+6 Stam +4 Int)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Int: 4
        },
        Phase: 0,
        quality: "Rare",
        unique: true,
        icon: "inv_misc_gem_deepperidot_03"
    },
    32637: {
        name: "Unstable Citrine (+8 AP +4 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 8,
            RAP: 8,
            Crit: 4
        },
        Phase: 0,
        quality: "Rare",
        unique: true,
        icon: "inv_misc_gem_opal_01"
    },
    32640: {
        name: "Potent Unstable Diamond (+24 AP)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.blue > gemsUsed.yellow) {

                bonus.stats = { MAP: 24, RAP: 24 }
                active = true;
            }
            
            return { bonus, active }
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_misc_gem_diamond_07",
        desc: "More Blue than Yellow"
    },
    33131: {
        name: "Crimson Sun (+32 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 32,
            RAP: 32
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_crimsonspinel_02"
    },
    33135: {
        name: "Falling Star (+18 Stam)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 18
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_empyreansapphire_02"
    },
    33143: {
        name: "Stone of Blades (+12 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 12
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_lionseye_02"
    },
    33782: {
        name: "Steady Talasite (+6 Stam +4 Resil)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 6,
            Resil: 4
        },
        Phase: 0,
        quality: "Rare",
        icon: "inv_jewelcrafting_talasite_03"
    },
    34256: {
        name: "Charmed Amani Jewel (+15 Stam)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 15
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_misc_gem_pearl_07"
    },
    32197: {
        name: "Bright Crimson Spinel (+20 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 20,
            RAP: 20
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_crimsonspinel_02"
    },
    35487: {
        name: "Bright Crimson Spinel (+20 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 20,
            RAP: 20
        },
        Phase: 0,
        quality: "Epic",
        icon: "inv_jewelcrafting_crimsonspinel_02"
    },
    28362: {
        name: "Bold Ornate Ruby (+20 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 20,
            RAP: 20
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_misc_gem_ruby_02"
    },
    28363: {
        name: "Inscribed Ornate Topaz (+10 AP +5 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 10,
            RAP: 10,
            Crit: 5
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_misc_gem_opal_01"
    },
    28119: {
        name: "Smooth Ornate Dawnstone (+10 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 10
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_misc_gem_topaz_01"
    },
    30565: {
        name: "Assassin's Fire Opal (+6 Crit +5 Dodge)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Crit: 6
        },
        Phase: 0,
        quality: "Epic",
        unique: true,
        icon: "inv_jewelcrafting_nobletopaz_03"
    },
    36766: {
        name: "Bright Dragon's Eye (68 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 68,
            RAP: 68,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye05"
    },
    36767: {
        name: "Solid Dragon's Eye (51 Sta)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 51,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye04"
    },
    39905: {
        name: "Delicate Bloodstone (12 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_22"
    },
    39906: {
        name: "Bright Bloodstone (24 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 24,
            RAP: 24,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_22"
    },
    39909: {
        name: "Fractured Bloodstone (12 ArP)",
        colors: [
            "red"
        ],
        stats: {
            ArP: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_22"
    },
    39912: {
        name: "Brilliant Sun Crystal (12 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_21"
    },
    39914: {
        name: "Smooth Sun Crystal (12 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_21"
    },
    39915: {
        name: "Rigid Sun Crystal (12 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_21"
    },
    39917: {
        name: "Mystic Sun Crystal (12 Res)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_21"
    },
    39918: {
        name: "Quick Sun Crystal (12 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            Haste: 12
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_21"
    },
    39927: {
        name: "Lustrous Chalcedony (5 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 5,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_24"
    },
    39933: {
        name: "Puissant Shadow Crystal (6 ArP 9 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 9,
            ArP: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_23"
    },
    39935: {
        name: "Shifting Shadow Crystal (6 Agi 9 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 6,
            Stam: 9,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_23"
    },
    39937: {
        name: "Balanced Shadow Crystal (12 AP 9 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 9,
            MAP: 12,
            RAP: 12,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_23"
    },
    39942: {
        name: "Tenuous Shadow Crystal (6 Agi 3 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 6,
            MP5: 3,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_23"
    },
    39944: {
        name: "Infused Shadow Crystal (12 AP 3 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 12,
            RAP: 12,
            MP5: 3,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_23"
    },
    39952: {
        name: "Deadly Huge Citrine (6 Agi 6 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 6,
            Crit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39953: {
        name: "Glinting Huge Citrine (6 Agi 6 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 6,
            Hit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39954: {
        name: "Lucent Huge Citrine (6 Agi 6 Res)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 6,
            Resil: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39955: {
        name: "Deft Huge Citrine (6 Agi 6 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 6,
            Haste: 6
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39960: {
        name: "Wicked Huge Citrine (12 AP 6 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 12,
            RAP: 12,
            Crit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39961: {
        name: "Pristine Huge Citrine (12 AP 6 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 12,
            RAP: 12,
            Hit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39962: {
        name: "Empowered Huge Citrine (12 AP 6 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 12,
            RAP: 12,
            Resil: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39963: {
        name: "Stark Huge Citrine (12 AP 6 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 12,
            RAP: 12,
            Haste: 6
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_20"
    },
    39968: {
        name: "Timeless Dark Jade (6 Int 9 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 9,
            Int: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39974: {
        name: "Jagged Dark Jade (6 Crit 9 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 9,
            Crit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39975: {
        name: "Vivid Dark Jade (6 Hit 9 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 9,
            Hit: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39977: {
        name: "Steady Dark Jade (6 Res 9 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 9,
            Resil: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39978: {
        name: "Forceful Dark Jade (6 Haste 9 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 9,
            Haste: 6
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39985: {
        name: "Sundered Dark Jade (6 Crit 3 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Crit: 6,
            MP5: 3,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39986: {
        name: "Lambent Dark Jade (6 Hit 3 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Hit: 6,
            MP5: 3,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39988: {
        name: "Opaque Dark Jade (6 Res 3 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 3,
            Resil: 6,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39989: {
        name: "Energized Dark Jade (6 Haste 3 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 3,
            Haste: 6
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_19"
    },
    39997: {
        name: "Delicate Scarlet Ruby (16 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_28"
    },
    39999: {
        name: "Bright Scarlet Ruby (32 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 32,
            RAP: 32,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_28"
    },
    40002: {
        name: "Fractured Scarlet Ruby (16 ArP)",
        colors: [
            "red"
        ],
        stats: {
            ArP: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_28"
    },
    40008: {
        name: "Solid Sky Sapphire (24 Sta)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 24,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_27"
    },
    40010: {
        name: "Lustrous Sky Sapphire (6 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_27"
    },
    40012: {
        name: "Brilliant Autumn's Glow (16 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_26"
    },
    40013: {
        name: "Smooth Autumn's Glow (16 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_26"
    },
    40014: {
        name: "Rigid Autumn's Glow (16 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_26"
    },
    40016: {
        name: "Mystic Autumn's Glow (16 Res)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_26"
    },
    40017: {
        name: "Quick Autumn's Glow (16 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            Haste: 16
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_26"
    },
    40023: {
        name: "Shifting Twilight Opal (8 Agi 12 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 8,
            Stam: 12,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_29"
    },
    40024: {
        name: "Tenuous Twilight Opal (8 Agi 4 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 8,
            MP5: 4,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_29"
    },
    40029: {
        name: "Balanced Twilight Opal (16 Ap 12 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 12,
            MAP: 16,
            RAP: 16,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_29"
    },
    40030: {
        name: "Infused Twilight Opal (16 Ap 4 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 16,
            RAP: 16,
            MP5: 4,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_29"
    },
    40033: {
        name: "Puissant Twilight Opal (8 ArP 12 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 12,
            ArP: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_29"
    },
    40043: {
        name: "Deadly Monarch Topaz (8 Agi 8 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 8,
            Crit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40044: {
        name: "Glinting Monarch Topaz (8 Agi 8 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 8,
            Hit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40045: {
        name: "Lucent Monarch Topaz (8 Agi 8 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 8,
            Resil: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40046: {
        name: "Deft Monarch Topaz (8 Agi 8 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 8,
            Haste: 8
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40052: {
        name: "Wicked Monarch Topaz (16 AP 8 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 16,
            RAP: 16,
            Crit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40053: {
        name: "Pristine Monarch Topaz (16 AP 8 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 16,
            RAP: 16,
            Hit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40054: {
        name: "Empowered Monarch Topaz (16 Ap 8 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 16,
            RAP: 16,
            Resil: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40055: {
        name: "Stark Monarch Topaz (16 AP 8 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 16,
            RAP: 16,
            Haste: 8
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_30"
    },
    40085: {
        name: "Timeless Forest Emerald (8 Int 12 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 12,
            Int: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40086: {
        name: "Jagged Forest Emerald (8 Crit 12 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 12,
            Crit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40088: {
        name: "Vivid Forest Emerald (8 Hit 12 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 12,
            Hit: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40090: {
        name: "Steady Forest Emerald (8 Res 12 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 12,
            Resil: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40091: {
        name: "Forceful Forest Emerald (8 Haste 12 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 12,
            Haste: 8
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40094: {
        name: "Dazzling Forest Emerald (8 Int 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 8,
            MP5: 3,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40096: {
        name: "Sundered Forest Emerald (8 Crit 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Crit: 8,
            MP5: 4,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40100: {
        name: "Lambent Forest Emerald (8 Hit 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Hit: 8,
            MP5: 3,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40103: {
        name: "Opaque Forest Emerald (8 Res 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 4,
            Resil: 8,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40105: {
        name: "Energized Forest Emerald (8 Haste 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 4,
            Haste: 8
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_25"
    },
    40112: {
        name: "Delicate Cardinal Ruby (20 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_37"
    },
    40114: {
        name: "Bright Cardinal Ruby (40 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 40,
            RAP: 40,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_37"
    },
    40117: {
        name: "Fractured Cardinal Ruby (20 ArP)",
        colors: [
            "red"
        ],
        stats: {
            ArP: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_37"
    },
    40119: {
        name: "Solid Majestic Zircon (30 Sta)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_42"
    },
    40121: {
        name: "Lustrous Majestic Zircon (10 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_42"
    },
    40123: {
        name: "Brilliant King's Amber (20 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    40124: {
        name: "Smooth King's Amber (20 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    40125: {
        name: "Rigid King's Amber (20 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    40127: {
        name: "Mystic King's Amber (20 Res)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    40128: {
        name: "Quick King's Amber (20 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            Haste: 20
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    40130: {
        name: "Shifting Dreadstone (10 Agi 15 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 10,
            Stam: 15,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_40"
    },
    40131: {
        name: "Tenuous Dreadstone (10 Agi 5 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 10,
            MP5: 5,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_40"
    },
    40136: {
        name: "Balanced Dreadstone (20 AP 15 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 15,
            MAP: 20,
            RAP: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_40"
    },
    40137: {
        name: "Infused Dreadstone (20 AP 5 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 20,
            RAP: 20,
            MP5: 5,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_40"
    },
    40140: {
        name: "Puissant Dreadstone (10 ArP 15 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 15,
            ArP: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_40"
    },
    40147: {
        name: "Deadly Ametrine (10 Agi 10 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 10,
            Crit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40148: {
        name: "Glinting Ametrine (10 Agi 10 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 10,
            Hit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40149: {
        name: "Lucent Ametrine (10 Agi 10 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 10,
            Resil: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40150: {
        name: "Deft Ametrine (10 Agi 10 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 10,
            Haste: 10
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40156: {
        name: "Wicked Ametrine (20 AP 10 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 20,
            RAP: 20,
            Crit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40157: {
        name: "Pristine Ametrine (20 AP 10 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 20,
            RAP: 20,
            Hit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40159: {
        name: "Stark Ametrine (20 AP 10 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 20,
            RAP: 20,
            Haste: 10
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_39"
    },
    40164: {
        name: "Timeless Eye of Zul (10 Int 15 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 15,
            Int: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40165: {
        name: "Jagged Eye of Zul (10 Crit 15 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 15,
            Crit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40166: {
        name: "Vivid Eye of Zul (10 Hit 15 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 15,
            Hit: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40168: {
        name: "Steady Eye of Zul (10 Res 15 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 15,
            Resil: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40169: {
        name: "Forceful Eye of Zul (10 Haste 15 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 15,
            Haste: 10
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40175: {
        name: "Dazzling Eye of Zul (10 Int 5 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 10,
            MP5: 5,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40176: {
        name: "Sundered Eye of Zul (10 Crit 5 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Crit: 10,
            MP5: 5,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40177: {
        name: "Lambent Eye of Zul (10 Hit 5 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Hit: 10,
            MP5: 5,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40178: {
        name: "Opaque Eye of Zul (10 Res 5 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 5,
            Resil: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    40179: {
        name: "Energized Eye of Zul (10 Haste 5 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 5,
            Haste: 10
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_41"
    },
    41285: {
        name: "Chaotic Skyflare Diamond (+21 Crit, +3% Crit Dmg)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { relentless_metagem_crit_dmg_inc: 1.00 }
            var active = false

            if (gemsUsed.blue >= 2) {
                bonus.stats = { Crit: 12 }
                bonus.relentless_metagem_crit_dmg_inc = 1.03
                active = true
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "2 Blue"
    },
    41307: {
        name: "Destructive Skyflare Diamond (25 Crit 1% Spell Reflect)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red >= 1 && gemsUsed.yellow >= 1 && gemsUsed.blue >= 1) {
                bonus.stats = { Crit: 25 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "1 Red, 1 Blue, 1 Yellow"
    },
    41335: {
        name: "Enigmatic Skyflare Diamond (21 Crit 15% Snare/Root Reduced)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red >= 2 && gemsUsed.yellow >= 1) {
                bonus.stats = { Crit: 21 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "2 Red, 1 Yellow"
    },
    41339: {
        name: "Swift Skyflare Diamond (42 AP)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { swift_metagem_run_speed_increase: 1.00 }
            var active = false;

            if (gemsUsed.yellow >= 2 && gemsUsed.red >= 1) {
                bonus.stats = { MAP: 42, RAP: 42 }
                bonus.swift_metagem_run_speed_increase = 1.08
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "2 Yellow, 1 Red"
    },
    41379: {
        name: "Impassive Skyflare Diamond (17 Crit 10% Reduce Fear)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;

            if (gemsUsed.red >= 2 && gemsUsed.blue >= 1) {
                bonus.stats = { Crit: 21 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "2 Red, 1 Blue"
    },
    41381: {
        name: "Persistent Earthsiege Diamond (42 AP 15% Reduced Stun)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;

            if (gemsUsed.yellow >= 2 && gemsUsed.blue >= 1) {
                bonus.stats = { MAP: 42, RAP: 42 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_shadowspirit_02",
        desc: "2 Yellow, 1 Blue"
    },
    41385: {
        name: "Invigorating Earthsiege Diamond (42 AP Regen 2% HP)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;

            if (gemsUsed.blue >= 2 && gemsUsed.red >= 1) {
                bonus.stats = { MAP: 42, RAP: 42 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_shadowspirit_02",
        desc: "2 Blue, 1 Red"
    },
    41397: {
        name: "Powerful Earthsiege Diamond (32 Sta 15% Reduced Stun)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;

            if (gemsUsed.blue >= 3) {
                bonus.stats = { Stam: 32 }
                active = true;
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_shadowspirit_02",
        desc: "3 Blue"
    },
    41398: {
        name: "Relentless Earthsiege Diamond (+21 Agi, +3% Crit Dmg)",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = { relentless_metagem_crit_dmg_inc: 1.00 }
            var active = false

            if (gemsUsed.red >= 1 && gemsUsed.yellow >= 1 && gemsUsed.blue >= 1) {
                bonus.stats = { Agi: 21 }
                bonus.relentless_metagem_crit_dmg_inc = 1.03
                active = true
            }

            return { bonus, active }
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_shadowspirit_02",
        desc: "1 Red, 1 Blue, 1 Yellow"
    },
    41400: {
        name: "Thundering Skyflare Diamond",
        meta: "Y",
        activation: gemsUsed => {
            const bonus = {}
            var active = false;
            if (gemsUsed.red >= 1 && gemsUsed.yellow >= 1 && gemsUsed.blue >= 1) {
                bonus.aura = {
                    stats: { Haste: 480 },
                    is_proc: 'Y',
                    cd: 40,
                    PPM: 1,
                    proc_type: 2,
                    duration: 6,
                }
                active = true;
            }
            return { bonus, active }
          },
        quality: "Rare",
        Phase: 1,
        icon: "inv_jewelcrafting_icediamond_02",
        desc: "1 Red, 1 Yellow, 1 Blue"
    },
    41429: {
        name: "Perfect Wicked Huge Citrine (+14 AP +7 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 14,
            RAP: 14,
            Crit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41433: {
        name: "Perfect Bright Bloodstone (28 AP)",
        colors: [
            "red"
        ],
        stats: {
            MAP: 28,
            RAP: 28,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_16"
    },
    41434: {
        name: "Perfect Delicate Bloodstone (14 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_16"
    },
    41436: {
        name: "Perfect Fractured Bloodstone (12 ArP)",
        colors: [
            "red"
        ],
        stats: {
            ArP: 12,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_16"
    },
    41441: {
        name: "Perfect Solid Chalcedony (21 Sta)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 21,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_17"
    },
    41444: {
        name: "Perfect Brilliant Sun Crystal (14 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_15"
    },
    41445: {
        name: "Perfect Mystic Sun Crystal (14 Res)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_15"
    },
    41446: {
        name: "Perfect Quick Sun Crystal (14 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            Haste: 14
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_15"
    },
    41447: {
        name: "Perfect Rigid Sun Crystal (14 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_15"
    },
    41448: {
        name: "Perfect Smooth Sun Crystal (14 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_15"
    },
    41450: {
        name: "Perfect Balanced Shadow Crystal (14 AP 11 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 11,
            MAP: 14,
            RAP: 14,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_18"
    },
    41454: {
        name: "Perfect Infused Shadow Crystal (14 AP 4 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            MAP: 14,
            RAP: 14,
            MP5: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_18"
    },
    41456: {
        name: "Perfect Puissant Shadow Crystal (7 ArP 11 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Stam: 11,
            ArP: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_18"
    },
    41460: {
        name: "Perfect Shifting Shadow Crystal (7 Agi 11 Sta)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 7,
            Stam: 11,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_18"
    },
    41462: {
        name: "Perfect Tenuous Shadow Crystal (7 Agi 4 Mp5)",
        colors: [
            "red",
            "blue"
        ],
        stats: {
            Agi: 7,
            MP5: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_18"
    },
    41463: {
        name: "Perfect Dazzling Dark Jade (7 Int 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Int: 7,
            MP5: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41465: {
        name: "Perfect Energized Dark Jade (7 Haste 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 4,
            Haste: 7
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41466: {
        name: "Perfect Forceful Dark Jade (7 Haste 11 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 11,
            Haste: 7
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41468: {
        name: "Perfect Jagged Dark Jade (7 Crit 11 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 11,
            Crit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41469: {
        name: "Perfect Lambent Dark Jade (7 Hit 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Hit: 7,
            MP5: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41471: {
        name: "Perfect Opaque Dark Jade (7 Res 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            MP5: 4,
            Resil: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41476: {
        name: "Perfect Steady Dark Jade (7 Res 11 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 11,
            Resil: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41477: {
        name: "Perfect Sundered Dark Jade (7 Crit 4 Mp5)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Crit: 7,
            MP5: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41479: {
        name: "Perfect Timelss Dark Jade (7 Int 11 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 11,
            Int: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41481: {
        name: "Perfect Vivid Dark Jade (7 Hit 11 Sta)",
        colors: [
            "yellow",
            "blue"
        ],
        stats: {
            Stam: 11,
            Hit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_13"
    },
    41484: {
        name: "Perfect Deadly Huge Citrine (7 Agi 7 Crit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 7,
            Crit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41485: {
        name: "Perfect Deft Huge Citrine (7 Agi 7 Haste)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 7,
            Haste: 7
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41487: {
        name: "Perfect Empowered Huge Citrine (14 AP 7 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Resil: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41491: {
        name: "Perfect Glinting Huge Citrine (7 Agi 7 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 7,
            Hit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41493: {
        name: "Perfect Lucent Huge Citrine (7 Agi 7 Res)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            Agi: 7,
            Resil: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41496: {
        name: "Perfect Pristine Huge Citrine (14 AP 7 Hit)",
        colors: [
            "red",
            "yellow"
        ],
        stats: {
            MAP: 14,
            RAP: 14,
            Hit: 7,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    41501: {
        name: "Perfect Stark Huge Citrine (14 AP 7 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            MAP: 14,
            RAP: 14,
            Haste: 7
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_jewelcrafting_gem_14"
    },
    42143: {
        name: "Delicate Dragon's Eye (34 Agi)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye05"
    },
    42146: {
        name: "Lustrous Dragon's Eye (20 Mp5)",
        colors: [
            "blue"
        ],
        stats: {
            MP5: 20,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye04"
    },
    42148: {
        name: "Brilliant Dragon's Eye (34 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye03"
    },
    42149: {
        name: "Smooth Dragon's Eye (34 Crit)",
        colors: [
            "yellow"
        ],
        stats: {
            Crit: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye03"
    },
    42150: {
        name: "Quick Dragon's Eye (34 Haste)",
        colors: [
            "yellow"
        ],
        stats: {
            Haste: 34
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye03"
    },
    42153: {
        name: "Fractured Dragon's Eye (34 ArP)",
        colors: [
            "red"
        ],
        stats: {
            ArP: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye05"
    },
    42156: {
        name: "Rigid Dragon's Eye (34 Hit)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye03"
    },
    42158: {
        name: "Mystic Dragon's Eye (34 Res)",
        colors: [
            "yellow"
        ],
        stats: {
            Resil: 34,
        },
        quality: "Epic",
        Phase: 1,
        icon: "inv_jewelcrafting_dragonseye03"
    },
    42701: {
        name: "Enchanted Pearl (+4 to all stats)",
        colors: [
            "red",
            "yellow",
            "blue"
        ],
        stats: {
            Str: 4,
            Agi: 4,
            Stam: 4,
            Int: 4,
        },
        quality: "Uncommon",
        Phase: 1,
        icon: "inv_misc_gem_pearl_10"
    },
    42702: {
        name: "Enchanted Tear (+6 to all stats)",
        colors: [
            "red",
            "yellow",
            "blue"
        ],
        stats: {
            Str: 6,
            Agi: 6,
            Stam: 6,
            Int: 6,
        },
        quality: "Rare",
        Phase: 1,
        icon: "inv_misc_gem_pearl_12"
    },
    45879: {
        name: "Delicate Stormjewel (20 Agility)",
        colors: [
            "red"
        ],
        stats: {
            Agi: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_37"
    },
    45880: {
        name: "Solid Stormjewel (30 Sta)",
        colors: [
            "blue"
        ],
        stats: {
            Stam: 30,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_42"
    },
    45882: {
        name: "Brilliant Stormjewel (20 Int)",
        colors: [
            "yellow"
        ],
        stats: {
            Int: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    45987: {
        name: "Rigid Stormjewel (20 Hit Rating)",
        colors: [
            "yellow"
        ],
        stats: {
            Hit: 20,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_jewelcrafting_gem_38"
    },
    49110: {
        name: "Nightmare Tear (+10 to all stats)",
        colors: [
            "red",
            "yellow",
            "blue"
        ],
        stats: {
            Str: 10,
            Agi: 10,
            Stam: 10,
            Int: 10,
        },
        quality: "Epic",
        Phase: 3,
        icon: "inv_misc_gem_pearl_12"
    }
};
