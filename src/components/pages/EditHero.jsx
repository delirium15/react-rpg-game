import React from "react";
import { connect } from "react-redux";
import NameForm from "../NameForm";
import Skills from "../Skills";
import InputSlider from "../InputSlider";

const Character = function (props) {
  return (
    <div>
      <h1 className="text-2xl">Редактировать персонажа</h1>
      <NameForm />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        <div>
          <h2 className="text-2xl mb-3">Базовые параметры:</h2>
          <div>
            {Object.keys(props.hero.baseParams).map((baseParam, key) => (
              <InputSlider key={baseParam} param={baseParam} />
            ))}
            <span className="mb-3 text-xl">Свободные очки: {props.freePoints}</span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl mb-3">Параметры:</h3>
          <p>
            <span className="text-xl">
              {props.life.title}: {props.life.remaining} / {props.life.value}
            </span>
          </p>
          <p>
            <span className="text-xl">
              {props.evasion.title}: {props.evasion.value}
            </span>
          </p>
          <p>
            <span className="text-xl">
              {props.energy.title}: {props.energy.value}
            </span>
          </p>
        </div>
      </div>

      <Skills />
    </div>
  );
};

const mapStateToProps = (state) => ({
  freePoints: state.freePoints,
  hero: state.hero,

  life: state.hero.params.life,
  evasion: state.hero.params.evasion,
  energy: state.hero.params.energy,
});

export default connect(mapStateToProps)(Character);
