import { JSX } from "solid-js";

interface StackProps {
  divider?: boolean;
  children: JSX.Element;
}

export const Stack = (props: StackProps) => {
  // Accessing children in any way (even just a console.log) causes hydration warning
  console.log(props.children);

  return props.children;
};
