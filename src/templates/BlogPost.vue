<template>
  <NavBar>
    <transition name="fade" appear>
    <section class="section">
      <div class="container">
        <div class="content" style="padding: 5rem; color:white;">
          <div class="post-title">
            <h2 class="title is-medium">{{ $page.post.title }}</h2>
            <PostMeta :post="$page.post" />
          </div>

          <div class="post__header">
            <g-image
              alt="Cover image"
              v-if="$page.post.cover_image"
              :src="$page.post.cover_image"
            />
          </div>
          <div class="blog__content" v-html="$page.post.content"></div>
        </div>
      </div>
    </section>
    </transition>
  </NavBar>
</template>

<script>
import NavBar from "~/layouts/NavBar";
import PostMeta from "~/components/PostMeta";

export default {
  components: {
    NavBar,
    PostMeta,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 0px) and (max-width: 1000px){
  .container {
    width: 100%;
  }
}
@media screen and (min-width: 1001px) and (max-width: 2048px){
  .container {
    width: 80%;
  }
}

.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
  margin-bottom: 5%;
}
.post__header {
  margin-bottom: 5%;
}

.fade-enter-active {
  transition: opacity 3s;
}

.fade-enter {
  opacity: 0;
}
</style>

<page-query>
  query Blog($path: String){
    post: blogPost(path: $path){
      title
      author
      content
      cover_image (width: 860, blur: 10)
      dateCreated (format: "D. MMMM YYYY")
    }
  }
</page-query>
