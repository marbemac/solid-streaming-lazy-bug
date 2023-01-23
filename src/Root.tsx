import { Router } from "@solidjs/router";
import { Component } from "solid-js";
import { HydrationScript, NoHydration } from "solid-js/web";
import App from "./App";

const Root: Component<{ path?: string }> = (props) => {
  return (
    <html>
      <head></head>

      <body>
        <Router url={props.path}>
          <App />
        </Router>

        <HydrationScript />

        <NoHydration>
          <script type="module" src="/@vite/client" $ServerOnly></script>
          <script
            type="module"
            async
            src={"/src/entry-client.tsx"}
            $ServerOnly
          ></script>
        </NoHydration>
      </body>
    </html>
  );
};

export default Root;
