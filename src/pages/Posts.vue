<template>
  <div>
    <NavBar>
      <transition>
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
          <div class="columns is-mobile is-centered">
            <div class="column is-half has-text-centered">
              <Pager :info="$page.blogs.pageInfo"/>
            </div>
          </div>
        </div>
      </section>
      </transition>
    </NavBar>
    <section><Footer/></section>
  </div>
</template>

<script>
import { Pager } from 'gridsome'
import NavBar from "~/layouts/NavBar";
import BlogCard from "~/components/BlogCard";
import Footer from "~/components/Footer";
export default {
  components: {
    NavBar,
    BlogCard,
    Footer,
    Pager
  },
};
</script>

</style>
<page-query>
query($page: Int) {
  blogs: allBlogPost(perPage: 9, page: $page, sortBy: "dateCreated" ,order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
  edges {
    node {
      id
      title
      content
      description
      path
      tags {
        path
        title
      }
    }
  }
}
}
</page-query>
