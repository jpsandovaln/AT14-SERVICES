import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import global_es from "./i18n/es/global.json"
import global_en from "./i18n/en/global.json"

i18next.init({
    interpolation:{ escapeValue: false },
    lng: "en",
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        },
    }
})

ReactDOM.render(
<I18nextProvider i18n={i18next}>
    <App />
</I18nextProvider>
, document.querySelector("#root"));
