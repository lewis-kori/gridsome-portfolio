<template>
  <div class="columns">
    <div id="about" class="column is-half is-offset-1">
      <h2 class="title">{{ about.title }}</h2>
      <div class="content about__content" v-html="about.content"></div>
      <ul>
        <li v-for="(skill, index) in about.skills" :key="index">{{ skill }}</li>
      </ul>
    </div>
    <!-- picture section -->

    <div class="column" style="margin-top: 8rem" align="center">
      <div class="pic">
        <div class="pic-inner">
          <figure class="image">
            <g-image :src="about.avatar" :alt="about.title" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["about"],
};
</script>

<style scoped>
.about__content {
  margin: 0;
  padding: 3px !important;
}
.about__content p {
  margin: 0.3rem !important;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  padding: 0px;
  margin: 20px 0px 0px;
  list-style: outside none none;
}
li {
  font-size: 0.9rem;
}
li::before {
  content: "▹";
  position: relative;
  left: 0px;
  color: rgb(100, 255, 218);
  font-size: 14px;
  line-height: 12px;
  margin: 0.5rem;
}
a {
  color: #64ffda;
}
</style>
