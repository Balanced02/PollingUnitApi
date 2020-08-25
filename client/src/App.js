import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import AppContext from "./AppContext";
import useController from "./AppController";
import MakingApiCall from "./components/MakingApiCall";

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Documentation from './views/Documentation';

// Initialize Google Analytics


const { Provider } = AppContext;


const App = () => {
const { state, dispatch } = useController();

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      <MakingApiCall loading={state.loading} />
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute
              exact
              path="/documentation"
              component={Documentation}
              layout={LayoutDefault}
            />
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          </Switch>
        )}
      />
    </Provider>
  );
}

export default App;