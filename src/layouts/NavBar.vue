<template>
  <div>
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
            style="color: beige; margin-right: 2px; margin-left: 2rem;"
            >Blog</g-link
          >

          <a
            class="bmc-button navbar-item is-hidden-desktop is-hidden-widescreen ko-fi"
            target="_blank"
            href="https://www.buymeacoffee.com/lewiskori"
            ><g-image
              src="https://res.cloudinary.com/lewiskori/image/upload/v1588410336/ko-fi-mobile_c9zpfl.jpg"
              alt="Buy me a coffee"
          /></a>
        </div>

        <!-- <div> -->
        <div class="navbar-end">
          <g-link
            to="/posts"
            class="navbar-item is-hidden-mobile"
            style="color: beige; margin-right: 2px;"
            >Blog</g-link
          >
          <a
            class="bmc-button navbar-item is-hidden-mobile"
            target="_blank"
            href="https://www.buymeacoffee.com/lewiskori"
            ><g-image
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
              :class="{'animated rubberBand slow': isHovering }"
              src="https://res.cloudinary.com/lewiskori/image/upload/v1588410336/ko-fi-wide_wqx5sg.jpg"
              alt="Buy me a coffee"
            />
          </a>
        </div>
      </div>
      <!-- </div> -->
    </nav>
    <slot />
  </div>
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
      isHovering: false
    }
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
