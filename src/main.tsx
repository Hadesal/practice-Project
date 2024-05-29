import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "../src/redux/store.ts";
const domContatiner = document.getElementById("dom-container");
const root = createRoot(domContatiner!!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
