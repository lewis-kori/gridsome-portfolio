<template>
  <div class="column is-one-third">
    <div class="card card-tile">
      <header class="card-header">
        <span class="card-header-title">
          <i class="fas fa-book-open"></i>
          <g-link :to="post.path">
            <h3 class="title is-6">{{ post.title }}</h3>
          </g-link>
        </span>

        <a href="#" class="card-header-icon">
          <span class="icon">
            <a href="https://twitter.com/lewis_kihiu" target="__blank">
              <i class="fab fa-twitter"></i>
            </a>
          </span>
        </a>
        <a href="#" class="card-header-icon">
          <span class="icon">
            <a href="https://dev.to/lewiskori" target="__blank">
              <i class="fab fa-dev" title="lewiskori's DEV Profile"></i>
            </a>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="tile">
            <g-link :to="post.path" style="color: white;">
              <div
                class="blog__content"
                v-html="shortenText(post.content)"
              ></div>
            </g-link>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <ul>
          <li class="card-footer-item" v-for="tag in post.tags" :key="tag.id">
            <g-link :to="tag.path">
              <span class="tag is-dark">#{{ tag.title }}</span></g-link
            >
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: Object,
  },
  methods: {
    shortenText(text) {
      return text.slice(0, 300) + "...";
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
ul {
  list-style: none;
  margin-bottom: 0.7rem !important;
}
</style>
