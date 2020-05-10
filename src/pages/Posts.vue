<template>
  <div>
    <NavBar>
      <transition name="fade">
      <section class="section" style="margin-top: 1rem;">
        <div class="columns is-mobile is-centered">
          <div id="blog" class="column is-half has-text-centered">
            <h2 class="title">Blog Posts</h2>
          </div>
        </div>
        <div class="container">
          <div class="columns is-multiline">
            <BlogCard
              v-for="edge in $page.blogs.edges"
              :key="edge.node.id"
              :post="edge.node"
            />
          </div>
        </div>
      </section>
      </transition>
    </NavBar>
    <section><Footer/></section>
  </div>
</template>

<script>
import NavBar from "~/layouts/NavBar";
import BlogCard from "~/components/BlogCard";
import Footer from "~/components/Footer";
export default {
  components: {
    NavBar,
    BlogCard,
    Footer
  },
};
</script>

</style>
<page-query>
query {
  blogs: allBlogPost(sortBy: "dateCreated" ,order: DESC) {
  edges {
    node {
      id
      title
      content
      description
      path
      tags {
        id
        path
        title
      }
    }
  }
}
}
</page-query>
