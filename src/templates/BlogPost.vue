<template>
  <NavBar>
    <transition name="fade" appear>
      <section class="section">
        <div class="container">
          <div class="content">
            <div class="post-title">
              <h2 class="title is-medium">{{ $page.post.title }}</h2>
              <PostMeta :post="$page.post" />
            </div>

            <div class="post__header">
              <g-image
                :alt="$page.post.title"
                v-if="$page.post.cover_image"
                :src="$page.post.cover_image"
              />
            </div>
            <div class="blog__content" v-html="$page.post.content"></div>
          </div>
          <div v-if="$page.post.sponsors.length > 0" class="sponsors">
            <h3 class="title is-medium">Sponsors</h3>
            <p>
              <strong
                >Please note that some of the links below are affiliate links
                and at no additional cost to you. Know that I only recommend
                products, tools and learning services I've personally used and
                believe are genuinely helpful. Most of all, I would never
                advocate for buying something you can't afford or that you
                aren't ready to implement.
              </strong>
            </p>
            <SponsorCard
              v-for="sponsor in $page.post.sponsors"
              :key="sponsor.id"
              :sponsorName="sponsor"
            />
          </div>
          <div>
            <div>
              <h5 class="title is-small">Share to social media</h5>
              <PostShare :post="$page.post" />
            </div>
          </div>
          <div class="comments">
            <vue-disqus
              shortname="lewiskori-com"
              :pageConfig="{
                url: `${$page.metadata.siteUrl}${$page.post.path}`,
                identifier: $page.title,
                title: $page.title,
              }"
            ></vue-disqus>
          </div>
        </div>
        <Footer />
      </section>
    </transition>
  </NavBar>
</template>

<script>
import NavBar from '~/layouts/NavBar';
import PostMeta from '~/components/PostMeta';
import PostShare from '~/components/PostShare';
import Footer from '~/components/Footer';
import SponsorCard from '~/components/SponsorCard';

export default {
  components: {
    NavBar,
    PostMeta,
    PostShare,
    Footer,
    SponsorCard,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 0px) and (max-width: 576px) {
  .container {
    width: 100%;
  }
}
@media screen and (min-width: 577px) and (max-width: 768px) {
  .container {
    width: 100%;
  }
}
@media screen and (min-width: 769px) and (max-width: 992px) {
  .container {
    width: 80%;
  }
}
@media screen and (min-width: 992px) {
  .container {
    width: 80%;
  }
}
a {
  color: #64ffda;
}
.post-title {
  padding: calc(const(--space) / 2) 0 calc(const(--space) / 2);
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
  font-family: 'Roboto', serif;
  font-size: $base-font-size;
  line-height: $base-line-height;
  font-weight: 100;
  background-color: rgb(10, 25, 47) !important;
  color: $beige;
  &:before,
  &:after {
    content: '\201C';
    font-family: 'Sanchez';
    color: lighten($black, 40%);
  }
  &:after {
    content: '\201D';
  }
}
body h2::after {
  content: none;
}
</style>

<page-query>
  query Blog($path: String){
    metadata {
      siteUrl
    }
    post: blogPost(path: $path){
      title
      author
      content
      description
      cover_image 
      path
      dateCreated (format: "D. MMMM YYYY")
      canonical_url
      tags {
        title
      }
      series {
        title
        path
      }
      sponsors
    }
  }
</page-query>
