<template>
  <div>
    <NavBar>
      <section class="section" style="margin-top: 1rem;">
        <div class="columns is-mobile is-centered">
          <div id="blog" class="column is-half has-text-centered">
            <h2 class="title">Blog Posts</h2>
          </div>
        </div>
        <div class="container is-fluid">
          <div class="columns is-multiline">
            <BlogCard
              v-for="edge in $page.blogs.edges"
              :key="edge.node.id"
              :post="edge.node"
            />
          </div>
        </div>
      </section>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "~/layouts/NavBar";
import BlogCard from "~/components/BlogCard";
export default {
  components: {
    NavBar,
    BlogCard
  },
};
</script>

<page-query>
query {
  blogs: allBlogPost {
  edges {
    node {
      id
      content
      title
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
