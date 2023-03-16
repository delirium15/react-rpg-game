import React from "react";
import { connect } from "react-redux";

const ProgressBar = function (props) {
  return (
    <div className="skill-progress flex">
      {/* skill progress bar */}
      {[...Array(props.total)].map((x, i) => {
        const bgClass = i < props.done ? "bg-red-500" : "bg-gray-300";

        return (
          <span
            key={i}
            className={`bar-item block border border-slate-100 mx-0.5 h-2 ${bgClass}`}
            style={{ width: `calc(100% / ${props.total}` }}
          ></span>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  skillLevels: state.skillLevels,
});

export default connect(mapStateToProps)(ProgressBar);
