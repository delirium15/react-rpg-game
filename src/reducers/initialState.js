const baseParams = {
  strength: {
    title: "Сила",
    value: 0,
    skills: [
      {
        title: "Атака",
        level: 0,
      },
    ],
  },
  agility: {
    title: "Ловкость",
    value: 0,
    skills: [
      {
        title: "Стелс",
        level: 0,
      },
      {
        title: "Стрельба из лука",
        level: 0,
      },
    ],
  },
  intelligence: {
    title: "Интеллект",
    value: 0,
    skills: [
      {
        title: "Обучаемость",
        level: 0,
      },
      {
        title: "Выживание",
        level: 0,
      },
      {
        title: "Медицина",
        level: 0,
      },
    ],
  },
  charisma: {
    title: "Харизма",
    value: 0,
    skills: [
      {
        title: "Запугивание",
        level: 0,
      },
      {
        title: "Проницательность",
        level: 0,
      },
      {
        title: "Внешний вид",
        level: 0,
      },
      {
        title: "Манипулирование",
        level: 0,
      },
    ],
  },
};

const params = {
  life: {
    title: "Жизненная сила",
    value: 3 + baseParams.strength.value,

    remaining: 3 + baseParams.strength.value,
  },
  evasion: {
    title: "Уклонение",
    value: 10 + baseParams.agility.value,
  },
  energy: {
    title: "Энергичность",
    value: baseParams.agility.value + baseParams.intelligence.value,
  },
};

const initialState = {
  freePoints: 10,

  skillLevels: ["Нетренированный", "Новичок", "Ученик", "Адепт", "Экперт", "Мастер"],
  hero: {
    name: "Harry Potter",
    baseParams,
    params,
  },
};

export { baseParams, params, initialState };
