<template>
  <section class="section">
    <div class="columns">
      <div class="column is-1 socials-hero" style="margin-left: 2rem;">
        <aside class="menu socials">
          <ul class="menu-list">
            <span class="icon"
              ><a href="https://twitter.com/lewis_kihiu" target="__blank"
                ><i class="fab fa-twitter"></i></a
            ></span>
          </ul>
          <ul class="menu-list">
            <span class="icon"
              ><a
                href="https://www.linkedin.com/in/lewis-kihiu-aba63011b"
                target="__blank"
                ><i class="fab fa-linkedin-in"></i></a
            ></span>
          </ul>
          <ul class="menu-list">
            <span class="icon"
              ><a
                href="https://www.facebook.com/lkori?_rdc=1&_rdr"
                target="__blank"
                ><i class="fab fa-facebook-f"></i></a
            ></span>
          </ul>
          <ul class="menu-list">
            <span class="icon"
              ><a href="https://github.com/lewis-kori" target="__blank"
                ><i class="fab fa-github-alt"></i></a
            ></span>
          </ul>
        </aside>
      </div>
      <div class="column">
        <NavBar>
          <section class="section" style="margin-top: 5rem;">
            <div class="container">
              <h3 class="title">
                Projects Archive
              </h3>
              <p class="subtitle is-size-6" style="color:#64ffda;">
                A list Of things I've worked on over the years
              </p>
            </div>

            <div class="table-container" style="margin-top: 2rem;">
              <table class="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Title</th>
                    <th class="is-hidden-mobile">Made at</th>
                    <th class="is-hidden-mobile">Tools</th>
                    <th>Link</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="edge in $page.projects.edges" :key="edge.id">
                    <td class="projects-year">{{ edge.node.year }}</td>
                    <td>{{ edge.node.title }}</td>
                    <td class="is-hidden-mobile" v-if="edge.node.made_at">{{ edge.node.made_at }}</td>
                    <td class="is-hidden-mobile" v-else>___</td>
                    <td class="is-hidden-mobile">
                      <span class="tech"
                        v-for="(stack, index) in edge.node.tech"
                        :key="index"
                        >{{ stack }}<span class="separator">·</span></span
                      >
                    </td>
                    <td>
                      <span class="icon" v-if="edge.node.external_link"
                        ><g-link :to="edge.node.external_link"
                          ><i class="fas fa-external-link-alt"></i></g-link
                      ></span>
                       <span class="icon" v-if="edge.node.github_link"
                        ><g-link :to="edge.node.github_link"
                          ><i class="fab fa-github-alt"></i></g-link
                      ></span>
                       <span class="icon" v-if="edge.node.google_play"
                        ><g-link :to="edge.node.google_play"
                          ><i class="fab fa-google-play"></i></g-link
                      ></span>
                       <span class="icon" v-if="edge.node.app_store"
                        ><g-link :to="edge.node.app_store"
                          ><i class="fab fa-app-store"></i></g-link
                      ></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </NavBar>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import NavBar from "~/layouts/NavBar";
import Footer from "~/components/Footer";
export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.socials {
  margin-top: 41%;
  position: fixed;
}
.table th {
  color: rgb(204, 214, 246);
}
.table {
  background-color: rgb(10, 25, 47) !important;
  color: beige !important;
  width: 100%;
}
.table td {
  border: none;
}
.table .tech {
  font-size: 0.77rem;
}
.projects-year {
  color: #64ffda !important;
}
.separator {
  margin: 0 5px;
}
</style>
<page-query>
query {
  projects: allProjects(sortBy: "year" ,order: DESC) {
    edges {
      node {
        id
        title
        year
        made_at
        tech
        github_link
        google_play
        app_store
        external_link
      }
    }
  }
}
</page-query>
