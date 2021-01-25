import Vue from "vue";

const tumbs = {
  template: "#preview-tumbs",
};

const btns = {
  template: "#preview-btns",
};

const display = {
  template: "#preview-display",
  components: { tumbs, btns },
};

const tags = {
  template: "#preview-tags",
};

const info = {
  template: "#preview-info",
  components: { tags },
};

new Vue({
  el: "#preview-component",
  template: "#preview-container",
  components: { display, info },
});