import { renderToStream } from "solid-js/web";

import Root from "./Root";

export const render = (props: { path: string }) => {
  return renderToStream(() => <Root {...props} />);
};
