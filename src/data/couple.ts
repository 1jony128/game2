export interface Icouple {
  id: number,
  name: string
  show: boolean
  group_id: number
  complete: boolean
  is_second_name?: boolean
}


export const couples: Icouple[] = [
  {
    'id': 0.7599130416261395,
    'name': 'Адам',
    'show': false,
    'group_id': 1,
    'complete': false
  },
  {
    'id': 0.8160839893401328,
    'name': 'Ева',
    'show': false,
    'group_id': 1,
    'complete': false
  },
  {
    'id': 0.016043315860168272,
    'name': 'Авраам',
    'show': false,
    'group_id': 2,
    'complete': false
  },
  {
    'id': 0.12133429012853436,
    'name': 'Сарра',
    'show': false,
    'group_id': 2,
    'complete': false
  },
  {
    'id': 0.006253731694386033,
    'name': 'Исаак',
    'show': false,
    'group_id': 3,
    'complete': false
  },
  {
    'id': 0.5875708502665018,
    'name': 'Ревека',
    'show': false,
    'group_id': 3,
    'complete': false
  },
  {
    'id': 0.6318800701710399,
    'name': 'Иаков',
    'show': false,
    'group_id': 4,
    'complete': false
  },
  {
    'id': 0.648241707289114,
    'name': 'Рахиль',
    'show': false,
    'group_id': 4,
    'complete': false
  },
  {
    'id': 0.7334378659494973,
    'name': 'Акилла',
    'show': false,
    'group_id': 5,
    'complete': false
  },
  {
    'id': 0.5062255410708638,
    'name': 'Прискилла',
    'show': false,
    'group_id': 5,
    'complete': false
  },
  {
    'id': 0.03262784427939747,
    'name': 'Захария',
    'show': false,
    'group_id': 6,
    'complete': false
  },
  {
    'id': 0.8497603313373012,
    'name': 'Елизавета',
    'show': false,
    'group_id': 6,
    'complete': false
  },
  {
    'id': 0.923752932650717,
    'name': 'Давид',
    'show': false,
    'group_id': 7,
    'complete': false
  },
  {
    'id': 0.5900731845720582,
    'name': 'Вирсавия',
    'show': false,
    'group_id': 7,
    'complete': false
  },
  {
    'id': 0.057843739972655905,
    'name': 'Агриппа',
    'show': false,
    'group_id': 8,
    'complete': false
  },
  {
    'id': 0.5186966792840866,
    'name': 'Вереника',
    'show': false,
    'group_id': 8,
    'complete': false
  },
  {
    'id': 0.47439455402167185,
    'name': 'Иосиф ',
    'show': false,
    'group_id': 9,
    'complete': false
  },
  {
    'id': 0.6422850311866004,
    'name': 'Мария',
    'show': false,
    'group_id': 9,
    'complete': false
  },
  {
    'id': 0.04814551086392038,
    'name': 'Цафнаф ',
    'show': false,
    'group_id': 10,
    'complete': false
  },
  {
    'id': 0.32710146695028874,
    'name': 'Асенефа',
    'show': false,
    'group_id': 10,
    'complete': false
  },
  {
    'id': 0.7197312003405221,
    'name': 'Вооз ',
    'show': false,
    'group_id': 11,
    'complete': false
  },
  {
    'id': 0.5255487474906828,
    'name': 'Руфь',
    'show': false,
    'group_id': 11,
    'complete': false
  },
  {
    'id': 0.36175279427307716,
    'name': 'Раав',
    'show': false,
    'group_id': 12,
    'complete': false
  },
  {
    'id': 0.9626699892695523,
    'name': 'Салмон',
    'show': false,
    'group_id': 12,
    'complete': false
  },
  {
    'id': 0.6101147191847198,
    'name': 'Милка ',
    'show': false,
    'group_id': 13,
    'complete': false
  },
  {
    'id': 0.4630522862050628,
    'name': 'Нахор',
    'show': false,
    'group_id': 13,
    'complete': false
  },
  {
    'id': 0.13687023972211776,
    'name': 'Анания ',
    'show': false,
    'group_id': 14,
    'complete': false
  },
  {
    'id': 0.5336245135854571,
    'name': 'Сапфира',
    'show': false,
    'group_id': 14,
    'complete': false
  },
  {
    'id': 0.9470004262343212,
    'name': 'Есфирь',
    'show': false,
    'group_id': 15,
    'complete': false
  },
  {
    'id': 0.6083035326100339,
    'name': 'Артаксерокс',
    'show': false,
    'group_id': 15,
    'complete': false
  },
  {
    'id': 0.9470004262423423343212,
    'name': 'Моисей',
    'show': false,
    'group_id': 16,
    'complete': false
  },
  {
    'id': 0.6083423432616400339,
    'name': 'Сепфора',
    'show': false,
    'group_id': 16,
    'complete': false
  },
]


export const molodej: Icouple[] = [
  {
    'id': 100,
    'name': 'Новикова',
    'show': false,
    'group_id': 1000+100,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 101,
    'name': 'Аня НЗ',
    'show': false,
    'group_id': 1000+100,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 102,
    'name': 'Новикова',
    'show': false,
    'group_id': 1000+102,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 103,
    'name': 'Валя',
    'show': false,
    'group_id': 1000+102,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 104,
    'name': 'Тютюнник А',
    'show': false,
    'group_id': 1000+104,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 105,
    'name': 'Алина',
    'show': false,
    'group_id': 1000+104,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 106,
    'name': 'Тютюнник К',
    'show': false,
    'group_id': 1000+106,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 107,
    'name': 'Катя',
    'show': false,
    'group_id': 1000+106,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 108,
    'name': 'Шевцова',
    'show': false,
    'group_id': 1000+108,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 109,
    'name': 'Юля',
    'show': false,
    'group_id': 1000+108,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 110,
    'name': 'Новиков А',
    'show': false,
    'group_id': 1000+110,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 111,
    'name': 'Андрей',
    'show': false,
    'group_id': 1000+110,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 112,
    'name': 'Новиков П',
    'show': false,
    'group_id': 1000+112,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 113,
    'name': 'Петр',
    'show': false,
    'group_id': 1000+112,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 114,
    'name': 'Тютюнник И',
    'show': false,
    'group_id': 1000+114,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 115,
    'name': 'Иосиф',
    'show': false,
    'group_id': 1000+114,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 116,
    'name': 'Коновалов',
    'show': false,
    'group_id': 1000+116,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 117,
    'name': 'Юра',
    'show': false,
    'group_id': 1000+116,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 118,
    'name': 'Тютюнник А',
    'show': false,
    'group_id': 1000+0,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 119,
    'name': 'Андрей Т',
    'show': false,
    'group_id': 1000+0,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 120,
    'name': 'Шевцов',
    'show': false,
    'group_id': 1000+2,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 121,
    'name': 'Евгений',
    'show': false,
    'group_id': 1000+2,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 1,
    'name': 'Безвительнова',
    'show': false,
    'group_id': 1000+4,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 2,
    'name': 'Лена',
    'show': false,
    'group_id': 1000+4,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 3,
    'name': 'Будникова',
    'show': false,
    'group_id': 1000+6,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 4,
    'name': 'Люда',
    'show': false,
    'group_id': 1000+6,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 5,
    'name': 'Ланкина',
    'show': false,
    'group_id': 1000+8,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 6,
    'name': 'Василиса',
    'show': false,
    'group_id': 1000+8,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 7,
    'name': 'Гирько',
    'show': false,
    'group_id': 1000+10,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 8,
    'name': 'Фаина',
    'show': false,
    'group_id': 1000+10,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 9,
    'name': 'Жумаева',
    'show': false,
    'group_id': 1000+12,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 10,
    'name': 'Надя',
    'show': false,
    'group_id': 1000+12,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 11,
    'name': 'Каньшина',
    'show': false,
    'group_id': 1000+14,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 12,
    'name': 'Юля',
    'show': false,
    'group_id': 1000+14,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 13,
    'name': 'Коновалова',
    'show': false,
    'group_id': 1000+16,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 14,
    'name': 'Настя',
    'show': false,
    'group_id': 1000+16,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 15,
    'name': 'Ленская',
    'show': false,
    'group_id': 1000+18,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 16,
    'name': 'Аня Л',
    'show': false,
    'group_id': 1000+18,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 17,
    'name': 'Ленская',
    'show': false,
    'group_id': 1000+20,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 18,
    'name': 'Оля',
    'show': false,
    'group_id': 1000+20,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 19,
    'name': 'Новикова',
    'show': false,
    'group_id': 1000+22,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 20,
    'name': 'Наташа',
    'show': false,
    'group_id': 1000+22,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 21,
    'name': 'Олейникова',
    'show': false,
    'group_id': 1000+24,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 22,
    'name': 'Ксения',
    'show': false,
    'group_id': 1000+24,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 23,
    'name': 'Пащенко',
    'show': false,
    'group_id': 1000+26,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 24,
    'name': 'Аня П',
    'show': false,
    'group_id': 1000+26,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 25,
    'name': 'Пащенко',
    'show': false,
    'group_id': 1000+28,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 26,
    'name': 'Люба',
    'show': false,
    'group_id': 1000+28,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 27,
    'name': 'Речкунова',
    'show': false,
    'group_id': 1000+30,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 28,
    'name': 'Даша',
    'show': false,
    'group_id': 1000+30,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 29,
    'name': 'Сотникова',
    'show': false,
    'group_id': 1000+32,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 30,
    'name': 'Люба',
    'show': false,
    'group_id': 1000+32,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 31333,
    'name': 'Новикова',
    'show': false,
    'group_id': 1000+34,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 31,
    'name': 'Наталья',
    'show': false,
    'group_id': 1000+34,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 32,
    'name': 'Тютюнник',
    'show': false,
    'group_id': 1000+36,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 33,
    'name': 'Люба',
    'show': false,
    'group_id': 1000+36,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 34,
    'name': 'Че',
    'show': false,
    'group_id': 1000+38,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 35,
    'name': 'Лия',
    'show': false,
    'group_id': 1000+38,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 36,
    'name': 'Черенкова',
    'show': false,
    'group_id': 1000+40,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 37,
    'name': 'Рита',
    'show': false,
    'group_id': 1000+40,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 38,
    'name': 'Шабалина',
    'show': false,
    'group_id': 1000+42,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 39,
    'name': 'Софья',
    'show': false,
    'group_id': 1000+42,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 40,
    'name': 'Шабалина',
    'show': false,
    'group_id': 1000+44,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 41,
    'name': 'Алиса',
    'show': false,
    'group_id': 1000+44,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 42,
    'name': 'Юдинцева',
    'show': false,
    'group_id': 1000+46,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 43,
    'name': 'Галина',
    'show': false,
    'group_id': 1000+46,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 44,
    'name': 'Бычков',
    'show': false,
    'group_id': 1000+48,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 45,
    'name': 'Михаил',
    'show': false,
    'group_id': 1000+48,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 46,
    'name': 'Бычков',
    'show': false,
    'group_id': 1000+50,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 47,
    'name': 'Коля',
    'show': false,
    'group_id': 1000+50,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 48,
    'name': 'Каньшин',
    'show': false,
    'group_id': 1000+52,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 49,
    'name': 'Дима',
    'show': false,
    'group_id': 1000+52,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 50,
    'name': 'Каньшин',
    'show': false,
    'group_id': 1000+54,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 51,
    'name': 'Рома',
    'show': false,
    'group_id': 1000+54,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 52,
    'name': 'Каньшин',
    'show': false,
    'group_id': 1000+56,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 53,
    'name': 'Миша',
    'show': false,
    'group_id': 1000+56,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 54,
    'name': 'Каньшин',
    'show': false,
    'group_id': 1000+58,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 55,
    'name': 'Вова',
    'show': false,
    'group_id': 1000+58,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 56,
    'name': 'Ланкин',
    'show': false,
    'group_id': 1000+60,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 57,
    'name': 'Влад',
    'show': false,
    'group_id': 1000+60,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 58,
    'name': 'Ленский АЛ',
    'show': false,
    'group_id': 1000+62,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 59,
    'name': 'Алексей',
    'show': false,
    'group_id': 1000+62,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 60,
    'name': 'Ленский Ан',
    'show': false,
    'group_id': 1000+64,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 61,
    'name': 'Андрей Л',
    'show': false,
    'group_id': 1000+64,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 62,
    'name': 'Моргачев',
    'show': false,
    'group_id': 1000+66,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 63,
    'name': 'Тима',
    'show': false,
    'group_id': 1000+66,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 64,
    'name': 'Новик',
    'show': false,
    'group_id': 1000+68,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 65,
    'name': 'Артём',
    'show': false,
    'group_id': 1000+68,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 66,
    'name': 'Новик',
    'show': false,
    'group_id': 1000+70,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 67,
    'name': 'Егор',
    'show': false,
    'group_id': 1000+70,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 68,
    'name': 'Новиков',
    'show': false,
    'group_id': 1000+72,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 69,
    'name': 'Миша',
    'show': false,
    'group_id': 1000+72,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 70,
    'name': 'Носачев ',
    'show': false,
    'group_id': 1000+74,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 71,
    'name': 'Андрей Н',
    'show': false,
    'group_id': 1000+74,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 72,
    'name': 'Новикова А',
    'show': false,
    'group_id': 1000+76,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 73,
    'name': 'Аня Н',
    'show': false,
    'group_id': 1000+76,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 74,
    'name': 'Олейников',
    'show': false,
    'group_id': 1000+78,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 75,
    'name': 'Матвей',
    'show': false,
    'group_id': 1000+78,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 76,
    'name': 'Речкунов',
    'show': false,
    'group_id': 1000+80,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 77,
    'name': 'Виталий',
    'show': false,
    'group_id': 1000+80,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 78,
    'name': 'Черенков А',
    'show': false,
    'group_id': 1000+82,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 79,
    'name': 'Андрей Ч',
    'show': false,
    'group_id': 1000+82,
    'complete': false,
    'is_second_name': false,
  },
  {
    'id': 78212,
    'name': 'Черенков В',
    'show': false,
    'group_id': 1000+8212,
    'complete': false,
    'is_second_name': true,
  },
  {
    'id': 7932132,
    'name': 'Вова',
    'show': false,
    'group_id': 1000+8212,
    'complete': false,
    'is_second_name': false,
  },
]

const arr = ['Новикова', 'Аня',
  'Новикова', 'Валя',
  'Тютюнник', 'Алина',
  'Тютюнник', 'Катя',
  'Шевцова', 'Юля',
  'Новиков', 'Андрей',
  'Новиков', 'Петр',
  'Тютюнник', 'Иосиф',
  'Коновалов', 'Юра']


// arr.map((item, index) => {
//   let group_id = 0
//
//
//   if(isEven(index)){
//     group_id = index + 100
//   } else {
//     group_id = index - 1 + 100
//   }
//   return {
//     'id': index + 100,
//     'name': item,
//     'show': false,
//     'group_id': 1000+group_id,
//     'complete': false
//   }
// })
// function isEven(number: number) {
//   return number % 2 === 0;
// }
// molodej.map((item, index) => {
//   if(isEven(index)){
//     item.group_id = index
//   } else {
//     item.group_id = index - 1
//   }
//
//   return item
// })
export const workers: Icouple[] = [

  {
    'id': 1,
    'name': 'Тавифа',
    'show': false,
    'group_id': 1,
    'complete': false
  },
  {
    'id': 2,
    'name': 'швея',
    'show': false,
    'group_id': 1,
    'complete': false
  },
  {
    'id': 3,
    'name': 'Андрей',
    'show': false,
    'group_id': 2,
    'complete': false
  },
  {
    'id': 4,
    'name': 'рыбак',
    'show': false,
    'group_id': 2,
    'complete': false
  },
  {
    'id': 5,
    'name': 'Самсон',
    'show': false,
    'group_id': 3,
    'complete': false
  },
  {
    'id': 6,
    'name': 'судья',
    'show': false,
    'group_id': 3,
    'complete': false
  },
  {
    'id': 7,
    'name': 'Моисей',
    'show': false,
    'group_id': 4,
    'complete': false
  },
  {
    'id': 8,
    'name': 'вождь народа',
    'show': false,
    'group_id': 4,
    'complete': false
  },
  {
    'id': 9,
    'name': 'Александр',
    'show': false,
    'group_id': 5,
    'complete': false
  },
  {
    'id': 10,
    'name': 'медник',
    'show': false,
    'group_id': 5,
    'complete': false
  },
  {
    'id': 11,
    'name': 'Нимрод',
    'show': false,
    'group_id': 6,
    'complete': false
  },
  {
    'id': 12,
    'name': 'зверолов',
    'show': false,
    'group_id': 6,
    'complete': false
  },
  {
    'id': 13,
    'name': 'Авель',
    'show': false,
    'group_id': 7,
    'complete': false
  },
  {
    'id': 14,
    'name': 'пастух',
    'show': false,
    'group_id': 7,
    'complete': false
  },
  {
    'id': 15,
    'name': 'Каин',
    'show': false,
    'group_id': 8,
    'complete': false
  },
  {
    'id': 16,
    'name': 'земледелец',
    'show': false,
    'group_id': 8,
    'complete': false
  },
  {
    'id': 17,
    'name': 'Тувалкаин',
    'show': false,
    'group_id': 9,
    'complete': false
  },
  {
    'id': 18,
    'name': 'ковач орудий',
    'show': false,
    'group_id': 9,
    'complete': false
  },
  {
    'id': 19,
    'name': 'Захария',
    'show': false,
    'group_id': 10,
    'complete': false
  },
  {
    'id': 20,
    'name': 'священник',
    'show': false,
    'group_id': 10,
    'complete': false
  },
  {
    'id': 21,
    'name': 'Голиаф',
    'show': false,
    'group_id': 11,
    'complete': false
  },
  {
    'id': 22,
    'name': 'воин',
    'show': false,
    'group_id': 11,
    'complete': false
  },
  {
    'id': 23,
    'name': 'Корнилий',
    'show': false,
    'group_id': 12,
    'complete': false
  },
  {
    'id': 24,
    'name': 'сотник',
    'show': false,
    'group_id': 12,
    'complete': false
  },
  {
    'id': 25,
    'name': 'Ахитофел',
    'show': false,
    'group_id': 13,
    'complete': false
  },
  {
    'id': 26,
    'name': 'советник',
    'show': false,
    'group_id': 13,
    'complete': false
  },
  {
    'id': 27,
    'name': 'Закхей',
    'show': false,
    'group_id': 14,
    'complete': false
  },
  {
    'id': 28,
    'name': 'начальник мытарей',
    'show': false,
    'group_id': 14,
    'complete': false
  },
  {
    'id': 29,
    'name': 'Никодим',
    'show': false,
    'group_id': 15,
    'complete': false
  },
  {
    'id': 30,
    'name': 'учитель Израилев',
    'show': false,
    'group_id': 15,
    'complete': false
  },
  {
    'id': 31,
    'name': 'Тимофей',
    'show': false,
    'group_id': 16,
    'complete': false
  },
  {
    'id': 32,
    'name': 'пресвитер',
    'show': false,
    'group_id': 16,
    'complete': false
  },
  {
    'id': 33,
    'name': 'Иона',
    'show': false,
    'group_id': 17,
    'complete': false
  },
  {
    'id': 34,
    'name': 'пророк',
    'show': false,
    'group_id': 17,
    'complete': false
  },
  {
    'id': 35,
    'name': 'Нееман',
    'show': false,
    'group_id': 18,
    'complete': false
  },
  {
    'id': 36,
    'name': 'военачальник',
    'show': false,
    'group_id': 18,
    'complete': false
  },
  {
    'id': 37,
    'name': 'Ездра',
    'show': false,
    'group_id': 19,
    'complete': false
  },
  {
    'id': 38,
    'name': 'книжник',
    'show': false,
    'group_id': 19,
    'complete': false
  },
  {
    'id': 39,
    'name': 'Есфирь',
    'show': false,
    'group_id': 20,
    'complete': false
  },
  {
    'id': 40,
    'name': 'царица',
    'show': false,
    'group_id': 20,
    'complete': false
  },
  {
    'id': 41,
    'name': 'Асаф',
    'show': false,
    'group_id': 21,
    'complete': false
  },
  {
    'id': 42,
    'name': 'псалмопевец',
    'show': false,
    'group_id': 21,
    'complete': false
  },
  {
    'id': 43,
    'name': 'Симон',
    'show': false,
    'group_id': 22,
    'complete': false
  },
  {
    'id': 44,
    'name': 'волхв',
    'show': false,
    'group_id': 22,
    'complete': false
  },
  {
    'id': 45,
    'name': 'Иосиф',
    'show': false,
    'group_id': 23,
    'complete': false
  },
  {
    'id': 46,
    'name': 'премьер-министр',
    'show': false,
    'group_id': 23,
    'complete': false
  },
  {
    'id': 47,
    'name': 'Елиезер',
    'show': false,
    'group_id': 24,
    'complete': false
  },
  {
    'id': 48,
    'name': 'распорядитель дома',
    'show': false,
    'group_id': 24,
    'complete': false
  },
  {
    'id': 49,
    'name': 'Иаир',
    'show': false,
    'group_id': 25,
    'complete': false
  },
  {
    'id': 50,
    'name': 'начальник синагоги',
    'show': false,
    'group_id': 25,
    'complete': false
  },
  {
    'id': 51,
    'name': 'Дарий',
    'show': false,
    'group_id': 26,
    'complete': false
  },
  {
    'id': 52,
    'name': 'царь',
    'show': false,
    'group_id': 26,
    'complete': false
  },
  {
    'id': 53,
    'name': 'Филипп',
    'show': false,
    'group_id': 27,
    'complete': false
  },
  {
    'id': 54,
    'name': 'благовестник',
    'show': false,
    'group_id': 27,
    'complete': false
  },
  {
    'id': 55,
    'name': 'Публий',
    'show': false,
    'group_id': 28,
    'complete': false
  },
  {
    'id': 56,
    'name': 'начальник острова',
    'show': false,
    'group_id': 28,
    'complete': false
  }
]

export const bibles = [
  {
    value: 18,
    text: '4Цар 5:1: "Нееман, военачальник царя Сирийского, был великий человек у господина своего и уважаемый, потому что чрез него дал Господь победу Сириянам; и человек сей был отличный воин, но прокаженный."'
  },
  {
    value: 19,
    text: 'Ездр 7:6: "сей Ездра вышел из Вавилона. Он был книжник, сведущий в законе Моисеевом, который дал Господь Бог Израилев. И дал ему царь все по желанию его, так как рука Господа Бога его была над ним."'
  },
  {
    value: 20,
    text: 'Есф 2:17: "И полюбил царь Есфирь более всех жен, и она приобрела его благоволение и благорасположение более всех девиц; и он возложил царский венец на голову ее и сделал ее царицею на место Астинь."'
  },
  {
    value: 21,
    text: 'Пс 72:1: "Псалом Асафа. Как благ Бог к Израилю, к чистым сердцем!"'
  },
  {
    value: 22,
    text: 'Деян 8:9: "Находился же в городе некоторый муж, именем Симон, который перед тем волхвовал и изумлял народ Самарийский, выдавая себя за кого-то великого."'
  },
  {
    value: 40,
    text: 'Быт 39:1: "Иосиф же отведен был в Египет, и купил его из рук Измаильтян, приведших его туда, Египтянин Потифар, царедворец фараонов, начальник телохранителей."'
  },
  {
    value: 24,
    text: 'Быт 15:2: "Аврам сказал: Владыка Господи! что Ты дашь мне? я остаюсь бездетным; распорядитель в доме моем этот Елиезер из Дамаска."'
  },
  {
    value: 25,
    text: 'Лук 8:41: "И вот, пришел человек, именем Иаир, который был начальником синагоги; и, пав к ногам Иисуса, просил Его войти к нему в дом,"'
  },
  {
    value: 26,
    text: 'Дан 5:31: "и Дарий Мидянин принял царство, будучи шестидесяти двух лет."'
  },
  {
    value: 27,
    text: 'Деян 21:8: "А на другой день Павел и мы, бывшие с ним, выйдя, пришли в Кесарию и, войдя в дом Филиппа благовестника, одного из семи диаконов, остались у него."'
  },
  {
    value: 28,
    text: 'Деян 28:7: "Около того места были поместья начальника острова, именем Публия; он принял нас и три дня дружелюбно угощал."'
  },
  {
    value: 13,
    text: '2Цар 15:12: "Во время жертвоприношения Авессалом послал и призвал Ахитофела Гилонянина, советника Давидова..."'
  },
  {
    value: 12,
    text: 'Деян 10:1: "В Кесарии был некоторый муж, именем Корнилий, сотник из полка, называемого Италийским,"'
  },
]







