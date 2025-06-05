import React, { useReducer } from "react";
import "./App.css";

// Initial State
const initialState = {
  theme: "light"
};

// Reducer Function
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const isDark = state.theme === "dark";

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <h1>{`Current Theme: ${state.theme.toUpperCase()}`}</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
