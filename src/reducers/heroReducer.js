import { baseParams, params, initialState } from "./initialState";

function proceedChangeBaseparam(state, action) {
  let changedParamKey = action.param;
  let proceed = null;

  if (changedParamKey) {
    let freePoints = state.freePoints;
    let oldVal = state.hero.baseParams[changedParamKey]["value"];
    let newVal = action[changedParamKey];
    proceed = freePoints - (newVal - oldVal);
  }

  return proceed;
}

function getNewSkillsArray(state, action) {
  let newArr = [];
  state.hero.baseParams[action.baseParam].skills.forEach((element, i) => {
    if (i === action.skillIndex) {
      newArr.push({ title: element.title, level: ++element.level });
    } else {
      newArr.push(element);
    }
  });
  return newArr;
}

export default function heroReducer(state = initialState, action) {
  let proceed = undefined;

  switch (action.type) {
    case "hero/train":
      if (action.baseParam === "strength") {
        let newSkillsArr = getNewSkillsArray(state, action);
        return {
          ...state,
          hero: {
            ...state.hero,
            baseParams: {
              ...state.hero.baseParams,
              strength: {
                ...state.hero.baseParams.strength,
                skills: newSkillsArr,
              },
            },
          },
        };
      }
      if (action.baseParam === "agility") {
        let newSkillsArr = getNewSkillsArray(state, action);
        return {
          ...state,
          hero: {
            ...state.hero,
            baseParams: {
              ...state.hero.baseParams,
              agility: {
                ...state.hero.baseParams.agility,
                skills: newSkillsArr,
              },
            },
          },
        };
      }
      if (action.baseParam === "intelligence") {
        let newSkillsArr = getNewSkillsArray(state, action);
        return {
          ...state,
          hero: {
            ...state.hero,
            baseParams: {
              ...state.hero.baseParams,
              intelligence: {
                ...state.hero.baseParams.intelligence,
                skills: newSkillsArr,
              },
            },
          },
        };
      }
      if (action.baseParam === "charisma") {
        let newSkillsArr = getNewSkillsArray(state, action);
        return {
          ...state,
          hero: {
            ...state.hero,
            baseParams: {
              ...state.hero.baseParams,
              charisma: {
                ...state.hero.baseParams.charisma,
                skills: newSkillsArr,
              },
            },
          },
        };
      }
      break;

    case "hero/nameEdited":
      return {
        ...state,
        hero: {
          ...state.hero,
          name: action.name,
        },
      };

    case "hero/strengthEdited":
      proceed = proceedChangeBaseparam(state, action);
      if (proceed < 0) return state;
      return {
        ...state,
        freePoints: proceed,
        hero: {
          ...state.hero,
          baseParams: {
            ...state.hero.baseParams,
            strength: {
              ...state.hero.baseParams.strength,
              value: action.strength,
            },
          },
          params: {
            ...state.hero.params,
            life: {
              ...state.hero.params.life,
              value: 3 + action.strength,
              remaining: 3 + action.strength,
            },
          },
        },
      };

    case "hero/agilityEdited":
      proceed = proceedChangeBaseparam(state, action);
      if (proceed < 0) return state;
      return {
        ...state,
        freePoints: proceed,
        hero: {
          ...state.hero,
          baseParams: {
            ...state.hero.baseParams,
            agility: {
              ...state.hero.baseParams.agility,
              value: action.agility,
            },
          },
          params: {
            ...state.hero.params,
            evasion: {
              ...state.hero.params.evasion,
              value: 10 + action.agility,
            },
            energy: {
              ...state.hero.params.energy,
              value: state.hero.baseParams.intelligence.value + action.agility,
            },
          },
        },
      };

    case "hero/intelligenceEdited":
      proceed = proceedChangeBaseparam(state, action);
      if (proceed < 0) return state;
      return {
        ...state,
        freePoints: proceed,
        hero: {
          ...state.hero,
          baseParams: {
            ...state.hero.baseParams,
            intelligence: {
              ...state.hero.baseParams.intelligence,
              value: action.intelligence,
            },
          },
          params: {
            ...state.hero.params,
            energy: {
              ...state.hero.params.energy,
              value: state.hero.baseParams.agility.value + action.intelligence,
            },
          },
        },
      };

    case "hero/charismaEdited":
      proceed = proceedChangeBaseparam(state, action);
      if (proceed < 0) return state;
      return {
        ...state,
        freePoints: proceed,
        hero: {
          ...state.hero,
          baseParams: {
            ...state.hero.baseParams,
            charisma: {
              ...state.hero.baseParams.charisma,
              value: action.charisma,
            },
          },
        },
      };

    case "hero/takeDamage":
      return {
        ...state,
        hero: {
          ...state.hero,
          params: {
            ...state.hero.params,
            life: {
              ...state.hero.params.life,
              remaining: state.hero.params.life.remaining - 1,
            },
          },
        },
      };

    case "hero/loaded":
      return {
        ...state,
        hero: action.state.hero,
        freePoints: action.state.freePoints,
      };
    case "hero/reseted":
      return initialState;

    default:
      return state;
  }
}
