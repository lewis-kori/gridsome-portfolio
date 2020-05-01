<template>
  <div class="columns">
    <div id="about" class="column is-half is-offset-1">
      <h2 class="title">{{ about.title }}</h2>
    <p class="about__content" v-html="about.content"></p>
    </div>
    <!-- picture section -->

    <div class="column" style="margin-top: 8rem" align="center">
      <div class="pic">
        <div class="pic-inner">
          <figure class="image">
            <g-image
              :src="about.avatar"
              :alt="about.title"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['about']
}
</script>