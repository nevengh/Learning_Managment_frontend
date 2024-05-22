import ReactDOM from "react-dom/client";

import AppRouter from './modules/Teacher/routes/AppRouter'
import { Provider } from "react-redux";
import { store } from "./modules/Teacher/redux/store";

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
        <AppRouter/>
    </Provider>
);
