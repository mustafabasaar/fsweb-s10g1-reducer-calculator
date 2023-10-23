import React from "react";
import { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR } from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} />
              <CalcButton value={"MR"} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: ADD_ONE })}
                value={1}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 2 })}
                value={2}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 3 })}
                value={3}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 4 })}
                value={4}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 5 })}
                value={5}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 6 })}
                value={6}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 7 })}
                value={7}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 8 })}
                value={8}
              />
              <CalcButton
                onClick={() => dispatch({ type: APPLY_NUMBER, payload: 9 })}
                value={9}
              />
            </div>

            <div className="row">
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"+"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"*"}
              />
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CHANGE_OPERATION, payload: e.target.value })
                }
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton
                onClick={(e) =>
                  dispatch({ type: CLEAR, payload: e.target.value })
                }
                value={"CE"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
