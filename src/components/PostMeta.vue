<template>
  <div class="post-meta">
    Posted {{ post.dateCreated }}.
    <template v-if="post.series">
      <g-link :to="post.series.path" class="tag is-dark"
        >{{ post.series.title }} series.</g-link
      >
    </template>
  </div>
</template>

<script>
export default {
  props: ['post'],
  metaInfo() {
    return {
      meta: [
        { name: 'description', content: this.post.description },

        {
          name: 'keywords',
          content: this.post.tags.map((t) => t.title).join(', '),
        },

        // Some Open Graph Tags
        { property: 'og:title', content: this.post.title },
        { property: 'og:site_name', content: 'Lewis Kori' },

        { property: 'og:description', content: this.post.description },
        { property: 'og:image', content: this.post.cover_image },
        {
          property: 'og:url',
          content: this.$static.metadata.siteUrl + this.post.path,
        },
        { property: 'og:type', content: 'article' },
        { property: 'article:author', content: this.post.author },
        { property: 'article:published_time', content: this.post.dateCreated },
        { property: 'article:modified_time', content: this.post.lastModified },
        // Some Twitter Cards Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@lewis_kihiu' },
        { name: 'twitter:title', content: this.post.title },
        { name: 'twitter:description', content: this.post.description },
        { name: 'twitter:image', content: this.post.cover_image },
        {
          name: 'twitter:image:alt',
          content: this.post.title + ' cover image',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href:
            this.post.canonical_url ||
            this.$static.metadata.siteUrl + this.post.path,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.post-meta {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>
