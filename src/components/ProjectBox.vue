<template>
  <div class="box">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <div class="projects">
            <div class="text">
              <h4 class="subtitle">{{ project.title }}</h4>
              <br />
              <div class="tile">
                <article class="tile is-child is-12 notification projects-tile">
                  <p class="projects__content" v-html="project.content"></p>
                </article>
                <!-- The magical tile element! -->
              </div>
              <div v-if="project.tech">
                <span
                  v-for="tech in project.tech"
                  :key="tech.index"
                  style="margin: 1%;"
                  >{{ tech }}</span
                >
              </div>

              <div>
                <span class="icon" v-if="project.github_link"
                  ><g-link :to="project.github_link"
                    ><i class="fab fa-github-alt"></i></g-link
                ></span>
                <span class="icon" v-if="project.external_link"
                  ><g-link :to="project.external_link"
                    ><i class="fas fa-external-link-alt"></i></g-link
                ></span>
                <span class="icon" v-if="project.google_play"
                  ><g-link :to="project.google_play"
                    ><i class="fab fa-google-play"></i></g-link
                ></span>
                <span class="icon" v-if="project.app_store"
                  ><g-link :to="project.app_store"
                    ><i class="fab fa-app-store"></i></g-link
                ></span>
              </div>
            </div>

            <div class="projects-picture">
              <figure class="image is-640x360">
                <g-link
                  v-if="project.external_link"
                  :to="project.external_link"
                >
                  <g-image :src="project.cover_image" :alt="project.title" />
                </g-link>
                <g-link
                  v-else-if="project.github_link"
                  :to="project.github_link"
                >
                  <g-image :src="project.cover_image" :alt="project.title" />
                </g-link>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "ProjectBox",
  props: ["project"],
};
</script>

<style scoped>
span {
  color: beige !important;
}
</style>
