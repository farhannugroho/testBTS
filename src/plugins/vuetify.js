import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#364ABF",
                secondary: "#3663BF",
                accent: "#364ABF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
        },
    },
});
