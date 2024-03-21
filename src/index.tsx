import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import { store } from ".//shared/api";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
