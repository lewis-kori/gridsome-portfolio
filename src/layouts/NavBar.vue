<template>
  <header>
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      style="background-color: rgb(10, 25, 47);"
    >
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            <g-image
              src="https://res.cloudinary.com/lewiskori/image/upload/v1589484120/favicon_yrq0gz.png"
              alt="lewis_kori_logo"
            />
          </a>

          <g-link
            to="/posts"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige; margin-left:0.7rem;"
            >Blog</g-link
          >

          <g-link
            to="/projects"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige;"
            >Projects</g-link
          >

          <!-- <g-link
            to="/#contact"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige;"
            >Contact</g-link
          > -->
          <g-link
            to="/collaborate"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige;"
            >Collaborate</g-link
          >

          <a
            class="navbar-item bmc-button is-hidden-desktop is-hidden-widescreen"
            target="_blank"
            href="https://www.buymeacoffee.com/lewiskori"
            ><g-image
              src="https://img.buymeacoffee.com/api/?name=lewis+kori&size=150&bg-image=bmc"
              alt="Buy me a coffee"
          /></a>
        </div>

        <!-- <div> -->
        <div class="navbar-end is-hidden-mobile">
          <g-link
            to="/#about"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >About</g-link
          >
          <g-link
            to="/posts"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >Blog</g-link
          >
          <g-link
            to="/projects"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >Projects</g-link
          >
          <g-link
            to="/#contact"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >Contact</g-link
          >
          <g-link
            to="/collaborate"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >Collarobate</g-link
          >
          <a
            class="bmc-button navbar-item is-hidden-mobile"
            target="_blank"
            href="https://www.buymeacoffee.com/lewiskori"
            ><g-image
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
              :class="{ 'animated rubberBand slow': isHovering }"
              src="https://cdn.buymeacoffee.com/buttons/default-green.png"
              alt="Buy me a coffee"
            />
          </a>
        </div>
      </div>
      <!-- </div> -->
    </nav>
    <slot />
  </header>
</template>

<style>
.ko-fi {
  margin-left: 20% !important;
}
a {
  color: beige;
}
</style>

<script>
export default {
  data() {
    return {
      isHovering: false,
    };
  },
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Cookie",
      },
    ],
  },
  mounted() {
    this.setupMailchimpPopup();
  },
  methods: {
    setupMailchimpPopup() {
      const mailchimpConfig = {
        baseUrl: "mc.us18.list-manage.com",
        uuid: "a530169885ed9e698a17e4a42",
        lid: "7c6f9a54a3",
      };
      const chimpPopupLoader = document.createElement("script");
      chimpPopupLoader.src =
        "//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js";
      chimpPopupLoader.setAttribute(
        "data-dojo-config",
        "usePlainJson: true, isDebug: false"
      );
      const chimpPopup = document.createElement("script");
      chimpPopup.appendChild(
        document.createTextNode(
          'require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
            mailchimpConfig.baseUrl +
            '", "uuid": "' +
            mailchimpConfig.uuid +
            '", "lid": "' +
            mailchimpConfig.lid +
            '"})});'
        )
      );

      chimpPopupLoader.onload = function() {
        document.body.appendChild(chimpPopup);
      };
      document.body.appendChild(chimpPopupLoader);
    },
  },
};
</script>
