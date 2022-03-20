import React, { useEffect, useReducer } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { USER_LOGIN } from "../auth/actions";

import AppContext from "../auth/AuthContext";
import reducer from "../auth/authReducer";

import ChatBot from "../pages/ChatBot";
import HomePage from "../pages/HomePage";
import { generalNombreRandom } from "../utils/nombresGrupos";

const initialState = {
  isUserLoggedIn: false,
  userData: undefined,
};

export const AppRouter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const grupows = generalNombreRandom();

    dispatch({
      type: USER_LOGIN,
      payload: grupows,
    });
  }, []);

  return (
    <Router>
      <AppContext.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/chat" component={ChatBot} />
          <Route path="/" component={HomePage} />
        </Switch>
      </AppContext.Provider>
    </Router>
  );
};
