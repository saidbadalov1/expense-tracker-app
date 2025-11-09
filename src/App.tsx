import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "@/store";
import { routes } from "@/routes";
import Header from "@/components/shared/Header";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
