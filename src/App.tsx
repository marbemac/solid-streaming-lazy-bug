import { Component, lazy, Match, Switch } from "solid-js";

import Home from "./routes/home";
import NotLazy from "./routes/not-lazy.js";

const Lazy = lazy(() => import("./routes/lazy.js"));

const App: Component<{ path?: string }> = (props) => {
  return (
    <>
      <h1>App</h1>

      <p>
        Open devtools, turn network throttling on to 3g, navigate to the `/lazy`
        route, reload the page, and see the error.
      </p>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/lazy">Lazy</a>
        </li>
        <li>
          <a href="/not-lazy">Not Lazy</a>
        </li>
      </ul>

      <hr />

      <Switch>
        <Match when={props.path === "/"}>
          <Home />
        </Match>

        <Match when={props.path === "/lazy"}>
          <Lazy />
        </Match>

        <Match when={props.path === "/not-lazy"}>
          <NotLazy />
        </Match>
      </Switch>
    </>
  );
};

export default App;
