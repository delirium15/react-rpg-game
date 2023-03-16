import React from "react";
import { connect } from "react-redux";

const InputSlider = function (props) {
  function changeInput(e) {
    const key = props.param;
    const actionObj = {
      type: "hero/" + props.param + "Edited",
      param: props.param,
    };
    actionObj[key] = parseInt(e.target.value);
    props.dispatch(actionObj);
  }

  return (
    <div className="range-slider ">
      <div className="slider w-full">
        <label htmlFor="fader" className="mr-3 w-28">
          {props.baseParams[props.param]["title"]}
        </label>
        <input
          className="w-full"
          type="range"
          min="0"
          max="10"
          value={props.baseParams[props.param]["value"]}
          onChange={(e) => {
            changeInput(e);
          }}
          id="fader"
          step="1"
          list="volsettings"
        />
        <datalist id="volsettings">
          {[...Array(10)].map((x, i) => (
            <option key={i}>{i}</option>
          ))}
        </datalist>
        <span className="paramValue text-center text-xl">
          {props.baseParams[props.param]["value"]}
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //   strength: state.baseParams.strength,
  baseParams: state.hero.baseParams,
});

export default connect(mapStateToProps)(InputSlider);
