<template>
  <div>
    <NavBar>
      <!-- Calendly inline widget begin -->
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/lewiskori/30min?background_color=0c1326&primary_color=47c9a7&text_color=ffffff"
        style="min-width:320px;height:100vh;"
      ></div>
      <!-- Calendly inline widget end -->

      <div class="columns is-centered">
        <div class="column is-half">
          <div class="btn" style="margin:auto;" align="center">
            <a
              href="mailto:korikihiu@gmail.com"
              target="_blank"
              rel="nofollow"
            >
              <span>Get in touch</span></a
            >
          </div>
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "~/layouts/NavBar";
export default {
  components: { NavBar },
  metaInfo: {
    title: "Collaborate",
    script: [
      {
        src: "https://assets.calendly.com/assets/external/widget.js",
        async: true,
        defer: true,
      },
    ],
  },
};
</script>

<style>
.calendly-inline-widget img,
embed,
iframe,
object,
video {
  height: 100% !important;
  max-width: 100%;
}
</style>
