import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "José",
    lastName: "Hidalgo",
  },
});

export default app;
