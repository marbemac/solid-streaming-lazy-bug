import { A, Router, useRoutes } from "@solidjs/router";
import { Component } from "solid-js";

import { Stack } from "./components/stack";

const App: Component = () => {
  return (
    <Stack>
      <div>one</div>
      <div>two</div>
    </Stack>
  );
};

export default App;
