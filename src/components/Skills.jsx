import React from "react";
import { connect } from "react-redux";
import ProgressBar from "./ProgressBar";
import TrainButton from "./TrainButton";

const Skills = function (props) {
  return (
    <div className="skills mt-10">
      <h2 className="text-2xl mb-3">Навыки:</h2>

      <div className="flex flex-wrap">
        {Object.keys(props.hero.baseParams).map((baseParam) =>
          Object.keys(props.hero.baseParams[baseParam]["skills"]).map((skill) => (
            <div
              className="bg-white rounded-lg my-1 mx-1 px-2 pt-1 pb-2 w-64 shadow-md"
              key={baseParam + skill.toString()}
            >
              <h3 className="text-xl mb-1">
                {props.hero.baseParams[baseParam]["skills"][skill]["title"]}
              </h3>
              <ProgressBar
                total={props.skillLevels.length - 1}
                done={props.hero.baseParams[baseParam]["skills"][skill]["level"]}
              />
              <div className="flex justify-between mt-2">
                <span className="text-sm">
                  {/* skill level title */}
                  {props.skillLevels[props.hero.baseParams[baseParam]["skills"][skill]["level"]]}
                </span>
                <TrainButton baseParam={baseParam} skill={skill} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hero: state.hero,
  skillLevels: state.skillLevels,
});

export default connect(mapStateToProps)(Skills);
