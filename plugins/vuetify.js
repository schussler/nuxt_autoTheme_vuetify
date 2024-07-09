// plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

let darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const vuetify = new Vuetify({
  theme: {
    dark: darkTheme,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
});

const updateTheme = () => {
  darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  vuetify.framework.theme.dark = darkTheme;
};

// Observa mudanças na preferência de esquema de cores do usuário
window.matchMedia("(prefers-color-scheme: dark)").addListener(updateTheme);

Vue.prototype.$updateTheme = updateTheme;

export default ctx => {
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
};
