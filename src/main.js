// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import Buefy from "buefy";
import VueDisqus from "vue-disqus";
import VueSocialSharing from 'vue-social-sharing';
import vueSmoothScroll from "vue2-smooth-scroll";

import "buefy/dist/buefy.css";
import "~/assets/css/custom.css";

export default function(Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  Vue.use(vueSmoothScroll);
  Vue.use(VueDisqus);
  Vue.use(VueSocialSharing);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.htmlAttrs = { lang: "en", class: "has-navbar-fixed-top" };

  head.link.push({
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css",
    async: true,
    defer: true,
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "//github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css",
    async: true,
    defer: true,
  });
  head.script.push({
    src: "https://use.fontawesome.com/releases/v5.4.0/js/all.js",
    body: true,
    async: true,
    defer: true,
  });
  head.script.push({
    src:
      "//cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js",
    body: true,
    async: true,
    defer: true,
  });
  head.script.push({
    src: "https://platform.twitter.com/widgets.js",
    body: true,
    async: true,
    defer: true,
  });
}
