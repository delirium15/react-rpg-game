import React from "react";
import { connect } from "react-redux";
import ProgressBar from "../ProgressBar";

const Game = function (props) {
  function hitHero() {
    props.dispatch({
      type: "hero/takeDamage",
      damageValue: 1,
    });
  }

  function restartGame() {
    props.dispatch({
      type: "hero/reseted",
    });
  }

  return (
    <div>
      <h1 className="text-2xl mb-6">Игра</h1>

      {props.life.remaining > 0 && (
        <div>
          <h2 className="text-3xl mb-3">{props.heroName}</h2>
          <ProgressBar total={props.life.value} done={props.life.remaining} />
          <button
            className="bg-red-500 text-white text-md rounded-md px-3 py-2 block my-6"
            onClick={() => {
              hitHero();
            }}
          >
            Нанести урон
          </button>
        </div>
      )}

      {props.life.remaining === 0 && (
        <div>
          <span className="text-3xl">{props.heroName} умер мучительной смертью..</span>
          <button
            className="bg-green-500 text-white text-md rounded-md px-3 py-2 block my-6"
            onClick={() => {
              restartGame();
            }}
          >
            Начать заново
          </button>
        </div>
      )}

      {/* <Hero /> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroName: state.hero.name,
  baseParams: state.hero.baseParams,
  life: state.hero.params.life,
});

export default connect(mapStateToProps)(Game);
