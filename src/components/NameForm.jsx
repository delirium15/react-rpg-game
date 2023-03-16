import React, { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { connect } from "react-redux";

const NameForm = function (props) {
  const [nameIsEditing, setNameIsEditing] = useState();

  function updateName(e) {
    props.dispatch({
      type: "hero/nameEdited",
      name: e.target.value,
    });
  }

  return (
    <div>
      <h2 className="text-2xl mb-3 flex items-center">
        Имя:
        {!nameIsEditing && (
          <span className="flex items-center ml-2">
            <h2 className="text-md px-1">{props.heroName}</h2>

            <button
              className="bg-slate-300 px-3 py-1 rounded-md mx-3"
              onClick={() => setNameIsEditing(true)}
            >
              <PencilIcon className="block h-4 w-4" aria-hidden="true" />
            </button>
          </span>
        )}
        {nameIsEditing && (
          <input
            className="ml-2 px-1"
            type="text"
            value={props.heroName}
            onBlur={(e) => setNameIsEditing(false)}
            onChange={updateName}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setNameIsEditing(false);
              }
            }}
          />
        )}
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  heroName: state.hero.name,
});

export default connect(mapStateToProps)(NameForm);
