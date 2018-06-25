import resetCSS from "../css/reset.css";
import style from "../css/main.scss";
import Vue from "./vue.js";
// import axios from "./axios.min.js";

/* vue components */
import chartComponent from "../components/chart-js-component.vue";
import about from "../components/about.vue";

Vue.filter("formatCurrency", n => new Intl.NumberFormat().format(n));

new Vue({
  el: "#app",
  data: {
    showAbout: true,
    activeMenu: "home"
  },
  components: {
    chartComponent,
    about
  },
  methods: {
    hideAbout() {
      this.showAbout = false;
    }
  },
  computed: {
    totalRevenue() {
      return 54540;
    },
    totalCost() {
      return 12660;
    }
  },
  created() {}
});
