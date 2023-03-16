import localforage from "localforage";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TrashIcon } from "@heroicons/react/24/outline";
import NameForm from "../NameForm";

const SaveLoadCharacter = function (props) {
  let [loadedHero, setLoadedHero] = useState({});
  let [heroesList, setHeroesList] = useState([]);

  const saveHero = function () {
    localforage.getItem(props.heroName, function (err, value) {
      if (value === null) {
        saveHeroToStarage();
      } else {
        if (window.confirm("Персонаж с таким именем уже сохранен. Перезаписать?")) {
          saveHeroToStarage();
        }
      }
    });
  };

  function saveHeroToStarage() {
    let saveData = {
      hero: props.hero,
      freePoints: props.freePoints,
    };

    console.log(JSON.stringify(saveData));

    localforage
      .setItem(props.heroName, JSON.stringify(saveData))
      .then(function (value) {
        getSavedHeroes();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  const loadHero = function (hero) {
    localforage.getItem(hero, function (err, value) {
      let stateData = JSON.parse(value);
      props.dispatch({
        type: "hero/loaded",
        state: stateData,
      });

      if (window.confirm("Загрузить персонажа? Текущий персонаж будет сброшен.")) {
        setLoadedHero(value.hero);
      }
    });
  };

  const removeHero = function (hero) {
    if (window.confirm("Удалить персонажа?")) {
      localforage
        .removeItem(hero)
        .then(function () {
          getSavedHeroes();
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getSavedHeroes();
  }, []);

  const getSavedHeroes = function () {
    localforage
      .keys()
      .then(function (keys) {
        setHeroesList(keys);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-2xl">Сохранить/Загрузить персонажа</h1>

      <div className="w-96 mt-6">
        <div className="flex justify-between">
          <NameForm />

          <button
            className="bg-slate-500 text-white text-xs rounded-md px-2 py-1 block mb-1"
            onClick={() => {
              saveHero();
            }}
          >
            Сохранить
          </button>
        </div>
        <hr className="my-3" />
        {heroesList.map((hero, index) => (
          <div key={hero} className="flex justify-between my-2">
            <span className="text-xl">{hero}</span>
            <div className="flex items-center">
              <button
                onClick={() => {
                  loadHero(hero);
                }}
                className="bg-slate-500 text-white text-xs rounded-md px-2 py-1 block"
                title="Загрузить персонажа"
              >
                Загрузить
              </button>
              <TrashIcon
                onClick={() => {
                  removeHero(hero);
                }}
                className="block h-4 w-4 ml-3 cursor-pointer"
                aria-hidden="true"
                title="Удалить персонажа"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroName: state.hero.name,
  hero: state.hero,
  freePoints: state.freePoints,
});

export default connect(mapStateToProps)(SaveLoadCharacter);
