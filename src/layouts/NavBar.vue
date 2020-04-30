<template>
  <div>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="https://bulma.io" class="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarItems" class="navbar-menu">
        <div class="navbar-end">
          <a href="#" class="navbar-item">About</a>
          <a href="#" class="navbar-item">Experience</a>
          <a href="#" class="navbar-item">Work</a>
          <a href="#" class="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
