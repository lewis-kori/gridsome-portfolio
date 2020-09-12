<template>
  <div class="column is-full">
    <div class="card card-tile">
      <header class="card-header">
        <span class="card-header-title">
          <h3 class="title is-6">{{ sponsor.name }}</h3>
        </span>

        <a href="#" class="card-header-icon">
          <span v-if="sponsor.twitter" class="icon">
            <g-link :to="sponsor.twitter" target="__blank">
              <i class="fab fa-twitter"></i>
            </g-link>
          </span>
        </a>
        <a href="#" class="card-header-icon">
          <span v-if="sponsor.url" class="icon">
            <a :href="sponsor.url" target="__blank">
              <i class="fa fa-globe" :title="sponsor.name"></i>
            </a>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="tile">
              <div
                class="blog__content"
                v-html="sponsor.content"
              ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SponsorCard",
  props: {
    sponsorName: String,
  },
  computed: {
    sponsor() {
        let sponsorObject = {}
      this.$static.sponsors.edges.forEach((sponsor) => {
        if (sponsor.node.name === this.sponsorName) {
          sponsorObject = sponsor.node;
        }
      });
      return sponsorObject
    },
  },
};
</script>

<style scoped>
.card-header-title h3 {
  margin-left: 1rem;
}
.card-header-title h3 {
  color: beige !important;
  position: relative;
}

.card-header-title h3::first-letter {
  color: rgb(100, 255, 218);
}
li {
  display: inline !important;
}
</style>

<static-query>
query {
  sponsors: allSponsors {
    edges {
      node {
        id
        name
        url
        twitter
        content
      }
    }
  }
}
</static-query>
