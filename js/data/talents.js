const MAX_TALENT_POINTS = 71

const BM_TREE = [
  [
    {
      name: 'Improved Aspect of the Hawk',
      abrv: 'imp_hawk',
      max: 5,
      per_point: 3 / 100
    },
    {
      name: 'Endurance Training',
      abrv: 'end_training',
      max: 5,
      is_modifier: true,
      per_point: 1 / 100
    }
  ],
  [
    {
      name: 'Focused Fire',
      abrv: 'focused_fire',
      max: 2,
    },
    {
      name: 'Improved Aspect of the Monkey',
      abrv: 'imp_monkey',
      max: 3,
      per_point: 2
    },
    {
      name: 'Thick Hide',
      abrv: 'thick_hide',
      max: 3,
    },
    {
      name: 'Improved Revive Pet',
      abrv: 'imp_ress_pet',
      max: 2,
    }
  ],
  [
    {
      name: 'Pathfinding',
      abrv: 'pathfinding',
      max: 2,
      per_point: 4 / 100
    },
    {
      name: 'Aspect Mastery',
      abrv: 'aspect_mast',
      max: 1,
      per_point: 10 / 100
    },
    {
      name: 'Unleashed Fury',
      abrv: 'unleash_fury',
      max: 5,
      is_modifier: true,
      per_point: 3 / 100
    }
  ],
  [
    {
      name: 'Improved Mend Pet',
      abrv: 'imp_mend_pet',
      max: 2,
    },
    {
      name: 'Ferocity',
      abrv: 'ferocity',
      max: 5,
      per_point: 2
    }
  ],
  [
    {
      name: 'Spirit Bond',
      abrv: 'spirit_bond',
      max: 2,
      per_point: 1 / 100
    },
    {
      name: 'Intimidation',
      abrv: 'intimidation',
      max: 1,
    },
    {
      name: 'Bestial Discipline',
      abrv: 'bestial_disc',
      max: 2,
      is_modifier: true,
      per_point: 50 / 100
    }
  ],
  [
    {
      name: 'Animal Handler',
      abrv: 'animal_handler',
      max: 2,
      is_modifier: true,
      per_point: 5 / 100
    },
    {
      name: 'Frenzy',
      abrv: 'frenzy',
      max: 5,
    }
  ],
  [
    {
      name: 'Ferocious Inspiration',
      abrv: 'ferocious_insp',
      max: 3,
      is_modifier: true,
      per_point: 1 / 100
    },
    {
      name: 'Bestial Wrath',
      abrv: 'bestial_wrath',
      max: 1,
    },
    {
      name: 'Catlike Reflexes',
      abrv: 'catlike_reflex',
      max: 3,
    }
  ],
  [
    {
      name: "Invigoration",
      abrv: 'invigoration',
      max: 2,
      per_point: 50 / 100
    },
    {
      name: "Serpent's Swiftness",
      abrv: 'serp_swift',
      max: 5,
      is_modifier: true,
      per_point: 4 / 100
    }
  ],
  [
    {
      name: "Longevity",
      abrv: 'longevity',
      max: 3,
      per_point: 10 / 100
    },
    {
      name: 'The Beast Within',
      abrv: 'beast_within',
      max: 1,
    },
    {
      name: "Cobra Strikes",
      abrv: 'cobra_strike',
      max: 3,
      per_point: 20 / 100
    }
  ],
  [
    {
      name: "Kindred Spirits",
      abrv: 'kindred_spirit',
      max: 5,
      is_modifier: true,
      per_point: 4 / 100
    }
  ],
  [
    {
      name: "Beast Mastery",
      abrv: 'beast_mast',
      max: 1
    }
  ]
]

const MM_TREE = [
  [
    {
      name: 'Improved Concussive Shot',
      abrv: 'imp_conc_shot',
      max: 2,
    },
    {
      name: 'Focused Aim',
      abrv: 'focus_aim',
      max: 3,
    },
    {
      name: 'Lethal Shots',
      abrv: 'lethal_shots',
      max: 5,
    }
  ],
  [
    {
      name: 'Careful Aim',
      abrv: 'careful_aim',
      max: 3,
      per_point: 3333 / 10000
    },
    {
      name: "Improved Hunter's Mark",
      abrv: 'imp_hunter_mark',
      max: 3,
      is_modifier: true,
      per_point: 10 / 100
    },
    {
      name: 'Mortal Shots',
      abrv: 'mortal_shots',
      max: 5,
      is_modifier: true,
      per_point: 6 / 100
    }
  ],
  [
    {
      name: 'Go for the Throat',
      abrv: 'GftT',
      max: 2,
      per_point: 25
    },
    {
      name: 'Improved Arcane Shot',
      abrv: 'imp_arc_shot',
      max: 3,
      per_point: 5 / 100
    },
    {
      name: 'Aimed Shot',
      abrv: 'aimed_shot',
      max: 1,
    },
    {
      name: 'Rapid Killing',
      abrv: 'rapid_killing',
      max: 2,
      per_point: 60
    }
  ],
  [
    {
      name: 'Improved Stings',
      abrv: 'imp_stings',
      max: 3,
      per_point: 10 / 100
    },
    {
      name: 'Efficiency',
      abrv: 'efficiency',
      max: 5,
      per_point: 3 / 100
    }
  ],
  [
    {
      name: 'Concussive Barrage',
      abrv: 'conc_barrage',
      max: 2,
    },
    {
      name: 'Readiness',
      abrv: 'readiness',
      max: 1
    },
    {
      name: 'Barrage',
      abrv: 'barrage',
      max: 3,
      per_point: 4 / 100
    }
  ],
  [
    {
      name: 'Combat Experience',
      abrv: 'combat_exp',
      max: 2,
      is_modifier: true,
      per_point: 2 / 100
    },
    {
      name: 'Ranged Weapon Specialization',
      abrv: 'ranged_weap_spec',
      max: 3,
      per_point: 1.9 / 100
    }
  ],
  [
    {
      name: "Piercing Shots",
      abrv: 'pierce_shot',
      max: 3,
      per_point: 10 / 100
    },
    {
      name: 'Trueshot Aura',
      abrv: 'trueshot_aura',
      max: 1,
      is_modifier: true,
      per_point: 10 / 100
    },
    {
      name: 'Improved Barrage',
      abrv: 'imp_barrage',
      max: 3,
      per_point: 4
    }
  ],
  [
    {
      name: 'Master Marksman',
      abrv: 'master_marksman',
      max: 5,
      per_point: 1 / 100
    },
    {
      name: 'Rapid Recuperation',
      abrv: 'rapid_recup',
      max: 2,
      per_point: 2 / 100
    }
  ],
  [
    {
      name: 'Wild Quiver',
      abrv: 'wild_quiver',
      max: 3,
      per_point: 4 / 100
    },
    {
      name: 'Silencing Shot',
      abrv: 'silencing_shot',
      max: 1
    }, 
    {
      name: 'Improved Steady Shot',
      abrv: 'imp_steady_shot',
      max: 3,
      per_point: 5 / 100
    }
  ],
  [
    {
      name: 'Marked for Death',
      abrv: 'mark_death',
      max: 5,
      per_point: 1 / 100
    },
  ],
  [
    {
      name: 'Chimera Shot',
      abrv: 'chimera_shot',
      max: 1
    },
  ]
]

const SV_TREE = [
  [
    {
      name: 'Improved Tracking',
      abrv: 'imp_tracking',
      max: 5,
      is_modifier: true,
      per_point: 1 / 100
    },
    {
      name: 'Hawk Eye',
      abrv: 'hawk_eye',
      max: 3,
      per_point: 2
    },
    {
      name: 'Savage Strikes',
      abrv: 'savage_strikes',
      max: 2,
      per_point: 10
    }
  ],
  [
    {
      name: 'Surefooted',
      abrv: 'surefooted',
      max: 3,
    },
    {
      name: 'Entrapment',
      abrv: 'entrapment',
      max: 3
    },
    {
      name: 'Trap Mastery',
      abrv: 'trap_mastery',
      max: 3,
      per_point: 10 / 100
    },
    {
      name: 'Survival Instincts',
      abrv: 'surv_instincts',
      max: 2,
      per_point: 2 / 100
    },
  ],
  [
    {
      name: 'Survivalist',
      abrv: 'survivalist',
      max: 5,
      is_modifier: true,
      per_point: 2 / 100
    },
    {
      name: 'Scatter Shot',
      abrv: 'scatter_shot',
      max: 1,
    },
    {
      name: 'Deflection',
      abrv: 'deflection',
      max: 3,
    },
    {
      name: 'Survival Tactics',
      abrv: 'surv_tactics',
      max: 2,
      per_point: 2 / 100
    }
  ],
  [
    {
      name: 'T.N.T.',
      abrv: 't_n_t',
      max: 3,
      per_point: 2 / 100
    },
    {
      name: 'Lock and Load',
      abrv: 'lock_load',
      max: 3,
      per_point: 2 / 100
    }
  ],
  [
    {
      name: 'Hunter vs. Wild',
      abrv: 'hunt_vs_wild',
      max: 3,
      per_point: 10 / 100
    },
    {
      name: 'Killer Instinct',
      abrv: 'killer_instinct',
      max: 3,
      per_point: 1
    },
    {
      name: 'Counterattack',
      abrv: 'counterattack',
      max: 1
    }
  ],
  [
    {
      name: 'Lightning Reflexes',
      abrv: 'light_reflexes',
      max: 5,
      is_modifier: true,
      per_point: 3 / 100
    },
    {
      name: 'Resourcefulness',
      abrv: 'resourcefulness',
      max: 3,
      per_point: 20 / 100
    }
  ],
  [
    {
      name: 'Expose Weakness',
      abrv: 'exp_weakness',
      max: 3
    },
    {
      name: 'Wyvern Sting',
      abrv: 'wyvern_sting',
      max: 1
    },{
      name: 'Thrill of the Hunt',
      abrv: 'TotH',
      max: 3,
    }
  ],
  [
    {
      name: 'Master Tactician',
      abrv: 'master_tact',
      max: 5
    },
    {
      name: 'Noxious Stings',
      abrv: 'nox_stings',
      max: 3,
    }
  ],
  [
    {
      name: 'Point of No Escape',
      abrv: 'no_escape',
      max: 2,
    },
    {
      name: 'Black Arrow',
      abrv: 'exp_weakness',
      max: 1,
    },
    {
      name: 'Sniper Training',
      abrv: 'sniper_training',
      max: 3,
      per_point: 1 / 100
    }
  ],
  [
    {
      name: 'Hunting Party',
      abrv: 'hunt_party',
      max: 3,
      per_point: 1 / 100
    }
  ],
  [
    {
      name: 'Explosive Shot',
      abrv: 'exp_shot',
      max: 1
    }
  ]
]

const TALENT_TREES = [BM_TREE.flat(), MM_TREE.flat(), SV_TREE.flat()]

function loadTalent(obj, talent, points) {
  if (points < 0 || points > talent.max) throw Error(`Tried to put ${points} points in talent "${talent.name}". Must be between 0 and ${talent.max}.`)
  const val = talent.per_point ? points * talent.per_point : points
  obj[talent.abrv] = (talent.is_modifier ? 1 : 0) + val
}

function parseTalents(talentString) {
  const talents = {}
  let treeIdx = 0
  let talentIdx = 0
  let total_points = 0

  // Load all talents with 0 points
  TALENT_TREES.flat().forEach(talent => loadTalent(talents, talent, 0));

  [...talentString].forEach(char => {
    if (char === '-') { // Jump to next talent tree
      ++treeIdx
      talentIdx = 0
    } else { // Load single talent with specified points
      const points = Number(char)
      if (Number.isNaN(points))
        throw new TypeError(`Received invalid character ${char} in the talent string`)

      loadTalent(talents, TALENT_TREES[treeIdx][talentIdx++], points)
      total_points += points
      if (total_points > MAX_TALENT_POINTS) throw new Error(`Too many talent points used! Max is ${MAX_TALENT_POINTS}`)
    }
  })

  return talents
}

const BM_ImpHM_Track = parseTalents('51200201515012243100531151-0050352-5')
const MM_ImpHM_FA_Track = parseTalents('-035005231235010033105001351') //502-035335001230013233135031351-5
const MM_ImpAS_FA_Track = parseTalents('502-035305131030013233135030351-5000002')
const SV_FA_Resrc_Aimed = parseTalents('-035305001-5000032500033330533035001331')
const BM_FA_Track = parseTalents('51200201515012243100531151-0350052-5')