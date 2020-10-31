<template>
  <div>
    <NavBar>
        <!-- 404 text -->
        <div class="columns is-centered">
          <div class="column is-half has-text-centered">
            <g-image src="~/assets/images/404.svg" width="500"/>
          </div>
        </div>
        <!-- 404 text end -->
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="btn" style="margin:auto;" align="center">
              <g-link to="/"> <span>Go Home</span></g-link>
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
};
</script>
