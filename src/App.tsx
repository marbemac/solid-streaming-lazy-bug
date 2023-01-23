import { A, Router, useRoutes } from "@solidjs/router";
import { Component } from "solid-js";

import { routeConfig } from "./routes";

const App: Component = () => {
  const Routes = useRoutes(routeConfig);

  return (
    <>
      <h1>App</h1>

      <p>
        Open devtools, turn network throttling on to 3g, navigate to the `/lazy`
        route, reload the page, and see the error.
      </p>

      <ul>
        <li>
          <A href="/">Home</A>
        </li>
        <li>
          <A href="/lazy">Lazy</A>
        </li>
        <li>
          <A href="/not-lazy">Not Lazy</A>
        </li>
      </ul>

      <hr />

      <Routes />
    </>
  );
};

export default App;
