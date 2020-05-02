<template>
  <section>
    <section class="hero is-fullheight-with-navbar">
      <!-- nav area -->
      <div class="hero-head">
        <div class="container">
          <nav
            class="navbar is-black"
            role="navigation"
            aria-label="main navigation"
          >
            <div class="navbar-brand">
              <a href="/" class="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                />
              </a>

              <a
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarItems"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarItems" class="navbar-menu">
              <div class="navbar-end">
                <a href="#about" v-smooth-scroll="scroll" class="navbar-item"
                  >About</a
                >
                <a href="#blog" v-smooth-scroll="scroll" class="navbar-item"
                  >Blog</a
                >
                <a href="#projects" v-smooth-scroll="scroll" class="navbar-item"
                  >Projects</a
                >
                <a href="#contact" v-smooth-scroll="scroll" class="navbar-item"
                  >Contact</a
                >
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-1 socials-hero">
              <aside class="menu" style="margin-top: 11rem;">
                <ul class="menu-list">
                  <span class="icon"><i class="fab fa-facebook-f"></i></span>
                </ul>
                <ul class="menu-list">
                  <span class="icon"><i class="fab fa-linkedin-in"></i></span>
                </ul>
                <ul class="menu-list">
                  <span class="icon"><i class="fab fa-twitter"></i></span>
                </ul>
                <ul class="menu-list">
                  <span class="icon"><i class="fab fa-github-alt"></i></span>
                </ul>
              </aside>
            </div>
            <div class="column">
              <h4 class="animated fadeInDown slow">Hi, my name is</h4>
              <div class="animated fadeInUp slow">
                <h1 class="title" style="color: beige;">Lewis Kori.</h1>
                <h1 class="title" style="color: darkgrey;">
                  I build things for the web
                </h1>
                <p>
                  I'm a software engineer based in Nairobi,Kenya specializing in
                  building
                </p>
                <p>
                  exceptional websites, applications, and everything in between.
                </p>
                <div class="btn" align="center">
                  <a
                    href="mailto:lewiskori@outlook.com"
                    target="_blank"
                    rel="nofollow"
                  >
                    <span>Get in touch</span></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- start about area -->
    <section class="section" style="font-size: 1rem;">
      <div class="container">
        <About
          v-for="edge in $page.about.edges"
          :key="edge.node.id"
          :about="edge.node"
        />
      </div>
    </section>

    <!-- blog area -->
    <section class="section" style="margin-top: 2rem;">
      <div class="columns is-mobile is-centered">
        <div id="blog" class="column is-half has-text-centered">
          <h2 class="title">Blog</h2>
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

        <!-- more button -->
        <div class="columns is-mobile is-centered" style="margin-top: 1.2rem;">
          <div class="column is-half has-content-centered">
            <g-link to="/posts">
              <div
                class="btn"
                style="margin:auto;"
                align="center"
                v-if="viewMore"
              >
                <span>More</span>
              </div>
            </g-link>
          </div>
        </div>
      </div>
    </section>

    <!-- projects area -->
    <section class="section">
      <div class="columns is-mobile is-centered">
        <div id="projects" class="column is-half has-text-centered">
          <h2 class="title">Projects</h2>
        </div>
      </div>

      <div class="columns is-multiline">
        <div class="column">
          <ul>
            <li v-for="edge in $page.projects.edges" :key="edge.id">
              <ProjectBox :project="edge.node" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- end project -->

    <!-- contact section -->

    <section class="section" style="margin-top: 2rem;">
      <div class="columns is-mobile is-centered">
        <div id="contact" class="column is-half has-text-centered">
          <h2 class="title">Contact Me</h2>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-half has-text-centered">
          <p>
            my inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-half">
          <div class="btn" style="margin:auto;" align="center">
            <a
              href="mailto:lewiskori@outlook.com"
              target="_blank"
              rel="nofollow"
            >
              <span>Get in touch</span></a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- start footer -->
    <Footer />
  </section>
</template>

<script>
import BlogCard from "~/components/BlogCard";
import ProjectBox from "~/components/ProjectBox";
import Footer from "~/components/Footer";
import About from "~/components/About";

export default {
  components: {
    About,
    BlogCard,
    ProjectBox,
    Footer,
  },
  data() {
    return {
      scroll: { duration: 2000, offset: -50, updateHistory: false },
    };
  },
  computed: {
    viewMore() {
      return this.$page.blogs.pageInfo.totalPages >= 2;
    },
  },
  metaInfo() {
    return {
      title: "Software Engineer",
    };
  },
};
</script>

<page-query>
  query ($page: Int, $title: String = "About me"){
    blogs: allBlogPost (perPage: 6, page: $page, sortBy: "dateCreated" ,order: DESC ) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          path
          author
          content
          dateCreated
          tags {
            id
            title
            path
          }
        }
      }
    }
    projects: allProjects {
      edges {
        node {
          id
          title
          tech
          github_link
          external_link
          cover_image (width: 640, height: 360, blur: 10)
          content
          path
        }
      }
    }
  about: allAbout (filter: { title : { eq: $title }}) {
    edges {
      node {
        id
        title
        avatar
        content
      }
    }
}
  }
</page-query>
