import { AccountList } from "../components/AccountList";

export default function Lazy() {
  console.log("Lazy.call()");

  return (
    <div>
      <h3>Lazy</h3>
      <AccountList />
    </div>
  );
}
