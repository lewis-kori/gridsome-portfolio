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
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <g-link
            to="/posts"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige;"
            >Blog</g-link
          >

          <g-link
            to="/#contact"
            class="navbar-item is-hidden-desktop is-hidden-widescreen"
            style="color: beige;"
            >Contact</g-link
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
};
</script>
