// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
// import Buefy
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "~/assets/css/custom.css";

export default function(Vue, { router, head, isClient }) {
  Vue.use(Buefy);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css",
  });
  head.link.push({
    rel: "stylesheet",
    href:
      "//github.githubassets.com/assets/gist-embed-d89dc96f3ab6372bb73ee45cafdd0711.css",
  });
  head.script.push({
    src: "https://use.fontawesome.com/releases/v5.4.0/js/all.js",
    body: true,
  });
  head.script.push({
    src: "//cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js",
    body: true,
  });
  head.script.push({
    src: "https://platform.twitter.com/widgets.js",
    body: true,
  });
}
