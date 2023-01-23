import { Component, createResource, For, Suspense } from "solid-js";

export const AccountList: Component = () => {
  const [data] = listAccountsQuery();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <For each={data()} fallback={<div>No accounts</div>}>
        {(account) => {
          return (
            <div>
              <a href={`${account.id}`}>{account.domain}</a>
            </div>
          );
        }}
      </For>
    </Suspense>
  );
};

const listAccountsQuery = () => {
  return createResource(listAccounts);
};

const listAccounts = async () => {
  console.info("[api] listAccounts.start");
  const ms = await sleep(5000);
  console.info("[api] listAccounts.done", { ms });

  return fakeAccounts;
};

export const sleep = (ms?: number) => {
  const $ms = ms !== void 0 ? ms : randomIntFromInterval(50, 500);
  return new Promise<number>((r) => setTimeout(() => r($ms), $ms));
};

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const domains = ["one.com", "two.com", "three.com"];

const fakeAccounts: any[] = domains.map((domain, i) => ({
  id: `ac_${i}`,
  domain,
}));
