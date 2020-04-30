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
              <a href="https://bulma.io" class="navbar-item">
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
                <a href="#about" class="navbar-item">About</a>
                <a href="#blog" class="navbar-item">Blog</a>
                <a href="#projects" class="navbar-item">Projects</a>
                <a href="#contact" class="navbar-item">Contact</a>
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
              <h4 class="fadeInDown animated slow">Hi, my name is</h4>
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
    <section class="section">
      <div class="container">
        <div class="columns">
          <div id="about" class="column is-half is-offset-1">
            <h2 class="title">About me</h2>

            <p>Hi there!</p>
            <br />

            <p>
              This site is a place for me to showcase some of my projects. From
              small learning projects to some serious software engineering
              projects. It is also home to my personal blog where I write about
              my journey as a developer and whatever else that strikes my fancy.
              You can also check out all my blog posts on dev. My interests
              currently in the tech industry lie around backend web development,
              automation and I also dabble in web frontend.
            </p>
            <br />

            <p>
              In terms of non-computer hobbies I like working out at the gym and
              going on runs. I also read a lot. In general I found what makes me
              the happiest is building stuff. So I try and optimize for that.
            </p>
            <br />

            <p>
              So, have any cool projects you’d like us to collaborate on? Like
              my blog posts? Want to say hi? Just drop me a message and i'll try
              to respond as soon as I can. You can also reach out to me on any
              of the social links within this site.
            </p>
          </div>
          <!-- picture section -->

          <div class="column is-half" style="margin-top: 8rem" align="center">
            <div class="pic">
              <div class="pic-inner">
                <figure class="image">
                  <img
                    src="https://lewiskori.com/static/my_portfolio/img/banner.jpg"
                    alt="me"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- blog area -->
    <section class="section" style="margin-top: 10rem;">
      <div class="columns is-mobile is-centered">
        <div id="blog" class="column is-half has-text-centered">
          <h2 class="title">Blog</h2>
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
        <div id="blog" class="column is-half has-text-centered">
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

    <section class="section" style="margin-top: 20%;">
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
    <Footer/>
  </section>
</template>

<script>
import BlogCard from "~/components/BlogCard";
import ProjectBox from "~/components/ProjectBox";
import Footer from "~/components/Footer";

export default {
  components: {
    BlogCard,
    ProjectBox,
    Footer,
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
  query ($page: Int){
    blogs: allBlogPost (perPage: 1, page: $page, sortBy: "dateCreated" ,order: DESC ) @paginate {
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
  }
</page-query>
