<template>
  <div>
    <NavBar>
      <section class="section" style="margin-top: 1rem;">
        <div class="columns is-mobile is-centered">
          <div id="blog" class="column is-half has-text-centered">
            <h2 class="title">{{ $page.series.title }} series</h2>
          </div>
        </div>
        <div class="container is-fluid">
          <div class="columns is-multiline">
            <BlogCard
              v-for="edge in $page.series.belongsTo.edges"
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
    BlogCard,
  },
};
</script>

<page-query>
query ($id: ID!) {
  series(id: $id) {
    title
    belongsTo(sortBy: "dateCreated" ,order: DESC) {
      edges {
        node {
          ... on BlogPost {
            id
            title
            path
            content
            tags {
                title
                path
            }
          }
        }
      }
    }
  }
}
</page-query>
