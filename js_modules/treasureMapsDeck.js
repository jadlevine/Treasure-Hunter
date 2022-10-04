////Treasure Maps////
class Treasure {
  constructor(
    id,
    suit,
    hasBonus, //this can all be removed... all you need is bonusSuit (14,12,10,8,0)...b/c all 14 bonuses = 2, 12bonus =2, 10bonus-1, 8bonus=1
    bonusValue,
    bonusSuit,
    regions,
    gemRegions,
    coconutRegions,
    bananaRegions
  ) {
    this.id = id
    this.suit = suit
    this.hasBonus = hasBonus
    this.bonusValue = bonusValue
    this.bonusSuit = bonusSuit
    this.regions = regions
    this.gemRegions = gemRegions
    this.coconutRegions = coconutRegions
    this.bananaRegions = bananaRegions
  }
}

const t1 = new Treasure(
  't1',
  14,
  true,
  2,
  12,
  [1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16],
  [],
  [],
  [1, 9, 12]
)
const t2 = new Treasure(
  't2',
  14,
  true,
  1,
  10,
  [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16],
  [],
  [],
  [4, 5, 12]
)
const t3 = new Treasure(
  't3',
  14,
  true,
  1,
  8,
  [2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [],
  [],
  [3, 13, 16]
)
const t4 = new Treasure(
  't4',
  14,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [2, 13],
  [5],
  [16]
)
const t5 = new Treasure(
  't5',
  14,
  false,
  0,
  0,
  [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [],
  [5],
  [2, 11]
)
const t6 = new Treasure(
  't6',
  14,
  false,
  0,
  0,
  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [7, 16],
  [],
  [4, 10]
)
const t7 = new Treasure(
  't7',
  14,
  false,
  0,
  0,
  [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [2, 10, 16],
  [],
  [4]
)
const t8 = new Treasure(
  't8',
  14,
  false,
  0,
  0,
  [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16],
  [3, 10, 12],
  [],
  [5]
)
const t9 = new Treasure(
  't9',
  14,
  false,
  0,
  0,
  [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16],
  [7, 10],
  [],
  [6, 16]
)
const t10 = new Treasure(
  't10',
  14,
  false,
  0,
  0,
  [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16],
  [1, 9, 14],
  [],
  [16]
)
const t11 = new Treasure(
  't11',
  14,
  false,
  0,
  0,
  [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16],
  [],
  [13],
  [7, 10]
)
const t12 = new Treasure(
  't12',
  14,
  false,
  0,
  0,
  [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [],
  [7],
  [4, 16]
)
const t13 = new Treasure(
  't13',
  12,
  true,
  2,
  14,
  [1, 2, 3, 4, 5, 8, 9, 12, 13, 14, 15, 16],
  [],
  [],
  [1, 16]
)
const t14 = new Treasure(
  't14',
  12,
  true,
  1,
  10,
  [2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [],
  [],
  [2, 4]
)
const t15 = new Treasure(
  't15',
  12,
  true,
  1,
  8,
  [1, 2, 4, 5, 6, 8, 9, 10, 11, 12, 15, 16],
  [],
  [],
  [6, 8]
)
const t16 = new Treasure(
  't16',
  12,
  false,
  0,
  0,
  [1, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  [4, 13, 16],
  [],
  [1]
)
const t17 = new Treasure(
  't17',
  12,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16],
  [1],
  [6],
  [16]
)
const t18 = new Treasure(
  't18',
  12,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16],
  [14],
  [7],
  [2]
)
const t19 = new Treasure(
  't19',
  12,
  false,
  0,
  0,
  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16],
  [10],
  [],
  [9, 12]
)
const t20 = new Treasure(
  't20',
  12,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15],
  [2, 5, 14],
  [],
  [8]
)
const t21 = new Treasure(
  't21',
  12,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15],
  [10],
  [],
  [5, 12]
)
const t22 = new Treasure(
  't22',
  12,
  false,
  0,
  0,
  [1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  [1, 7, 15],
  [],
  [10]
)
const t23 = new Treasure(
  't23',
  12,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
  [2],
  [13],
  [16]
)
const t24 = new Treasure(
  't24',
  12,
  false,
  0,
  0,
  [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16],
  [16],
  [6],
  [13]
)
const t25 = new Treasure(
  't25',
  10,
  true,
  2,
  14,
  [1, 2, 3, 4, 5, 8, 9, 10, 11, 12],
  [],
  [],
  []
)
const t26 = new Treasure(
  't26',
  10,
  true,
  2,
  12,
  [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
  [],
  [],
  []
)
const t27 = new Treasure(
  't27',
  10,
  true,
  1,
  8,
  [2, 3, 4, 5, 6, 8, 9, 10, 11, 12],
  [],
  [],
  []
)
const t28 = new Treasure(
  't28',
  10,
  false,
  0,
  0,
  [1, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [11],
  [1],
  [4]
)
const t29 = new Treasure(
  't29',
  10,
  false,
  0,
  0,
  [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  [2],
  [],
  [8, 9]
)
const t30 = new Treasure(
  't30',
  10,
  false,
  0,
  0,
  [1, 3, 4, 5, 7, 8, 9, 10, 11, 12],
  [],
  [9],
  [3]
)
const t31 = new Treasure(
  't31',
  10,
  false,
  0,
  0,
  [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  [9, 12],
  [],
  [3]
)
const t32 = new Treasure(
  't32',
  10,
  false,
  0,
  0,
  [1, 2, 3, 4, 6, 7, 9, 10, 11, 12],
  [],
  [3],
  [9]
)
const t33 = new Treasure(
  't33',
  10,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
  [7, 9],
  [],
  [12]
)
const t34 = new Treasure(
  't34',
  10,
  false,
  0,
  0,
  [1, 3, 4, 5, 6, 7, 8, 9, 11, 12],
  [],
  [5],
  [8]
)
const t35 = new Treasure(
  't35',
  10,
  false,
  0,
  0,
  [2, 3, 4, 6, 7, 8, 9, 10, 11, 12],
  [2],
  [],
  [9, 12]
)
const t36 = new Treasure(
  't36',
  10,
  false,
  0,
  0,
  [1, 2, 3, 5, 6, 7, 8, 9, 10, 11],
  [8, 11],
  [],
  [1]
)
const t37 = new Treasure(
  't37',
  8,
  true,
  2,
  14,
  [1, 3, 5, 6, 7, 8, 9, 11],
  [],
  [],
  []
)
const t38 = new Treasure(
  't38',
  8,
  true,
  2,
  12,
  [1, 4, 5, 6, 7, 8, 9, 12],
  [],
  [],
  []
)
const t39 = new Treasure(
  't39',
  8,
  true,
  1,
  10,
  [1, 2, 3, 5, 7, 9, 10, 11],
  [],
  [],
  []
)
const t40 = new Treasure(
  't40',
  8,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 9, 10, 11],
  [],
  [],
  [1]
)
const t41 = new Treasure(
  't41',
  8,
  false,
  0,
  0,
  [1, 3, 4, 5, 6, 7, 8, 10],
  [],
  [1],
  []
)
const t42 = new Treasure(
  't42',
  8,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 10, 11],
  [],
  [8],
  []
)
const t43 = new Treasure(
  't43',
  8,
  false,
  0,
  0,
  [2, 5, 6, 7, 8, 10, 11, 12],
  [],
  [7],
  []
)
const t44 = new Treasure(
  't44',
  8,
  false,
  0,
  0,
  [2, 3, 5, 6, 7, 8, 9, 12],
  [5],
  [],
  [8]
)
const t45 = new Treasure(
  't45',
  8,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 8, 11, 12],
  [12],
  [],
  [1]
)
const t46 = new Treasure(
  't46',
  8,
  false,
  0,
  0,
  [1, 2, 5, 6, 7, 8, 9, 10],
  [],
  [7],
  []
)
const t47 = new Treasure(
  't47',
  8,
  false,
  0,
  0,
  [1, 2, 3, 6, 7, 10, 11, 12],
  [7],
  [],
  [6]
)

const tMapsDeck = [
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
  t7,
  t8,
  t9,
  t10,
  t11,
  t12,
  t13,
  t14,
  t15,
  t16,
  t17,
  t18,
  t19,
  t20,
  t21,
  t22,
  t23,
  t24,
  t25,
  t26,
  t27,
  t28,
  t29,
  t30,
  t31,
  t32,
  t33,
  t34,
  t35,
  t36,
  t37,
  t38,
  t39,
  t40,
  t41,
  t42,
  t43,
  t44,
  t45,
  t46,
  t47
]
export { tMapsDeck }
