import React from "react"
import { connect } from "react-redux"

const Game = function (props) {
  return (
    <div>
      Game {props.count}
      <button
        className="bg-slate-300 px-3 py-1 rounded-md mt-3 mx-3"
        onClick={() => {
          props.dispatch({ type: "DECREMENT" })
        }}
      >
        Decremnt
      </button>
      <button
        className="bg-slate-300 px-3 py-1 rounded-md mt-3 mx-3"
        onClick={() => {
          props.dispatch({ type: "INCREMENT" })
        }}
      >
        Incremnt
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count,
})

export default connect(mapStateToProps)(Game)
