<template>
  <NavBar>
    <transition name="fade" appear>
      <section class="section">
        <div class="container">
          <div class="content" style="color:white;">
            <div class="post-title">
              <h2 class="title is-medium">{{ $page.post.title }}</h2>
              <PostMeta :post="$page.post" />
            </div>

            <div class="post__header">
              <g-image
                :salt="$page.post.title"
                v-if="$page.post.cover_image"
                :src="$page.post.cover_image"
              />
            </div>
            <div class="blog__content" v-html="$page.post.content"></div>
          </div>
          <div class="comments">
            <vue-disqus
              shortname="lewiskori-com"
              :identifier="$page.title"
            ></vue-disqus>
          </div>
        </div>
        <Footer/>
      </section>
    </transition>
  </NavBar>
</template>

<script>
import NavBar from "~/layouts/NavBar";
import PostMeta from "~/components/PostMeta";
import Footer from "~/components/Footer";

export default {
  components: {
    NavBar,
    PostMeta,
    Footer
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 0px) and (max-width: 1000px) {
  .container {
    width: 100%;
  }
}
@media screen and (min-width: 1001px) and (max-width: 2048px) {
  .container {
    width: 80%;
  }
}
a {
  color: #64ffda;
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
$black: hsl(200, 40, 10);
$beige: rgb(238, 238, 220);
$base-font-size: 1.2em;
$base-line-height: 1.2em;
blockquote {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid lighten($black, 40%);
  font-family: "Roboto", serif;
  font-size: $base-font-size;
  line-height: $base-line-height;
  font-weight: 100;
  background-color: rgb(10, 25, 47) !important;
  color: $beige;
  &:before,
  &:after {
    content: "\201C";
    font-family: "Sanchez";
    color: lighten($black, 40%);
  }
  &:after {
    content: "\201D";
  }
}
body h2::after {
  content: none;
}
</style>

<page-query>
  query Blog($path: String){
    post: blogPost(path: $path){
      title
      author
      content
      description
      cover_image 
      path
      dateCreated (format: "D. MMMM YYYY")
      series {
        title
        path
      }
    }
  }
</page-query>
