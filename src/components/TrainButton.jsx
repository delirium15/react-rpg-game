import React from "react";
import { connect } from "react-redux";

const TrainButton = function (props) {
  return (
    <div>
      {props.hero.baseParams[props.baseParam]["value"] >
        props.hero.baseParams[props.baseParam]["skills"][props.skill]["level"] &&
        props.hero.baseParams[props.baseParam]["skills"][props.skill]["level"] <
          props.skillLevels.length - 1 && (
          <button
            className="bg-slate-500 text-white text-xs rounded-md px-2 py-0.5 block"
            onClick={() => {
              props.dispatch({
                type: "hero/train",
                baseParam: props.baseParam,
                skillIndex: parseInt(props.skill),
              });
            }}
          >
            Тренировать
          </button>
        )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  hero: state.hero,
  skillLevels: state.skillLevels,
});

export default connect(mapStateToProps)(TrainButton);
