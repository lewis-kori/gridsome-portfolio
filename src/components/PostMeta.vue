<template>
  <div class="post-meta">
    Posted {{ post.dateCreated }}.
    <template v-if="post.series">
      <g-link :to="post.series.path" class="tag is-dark">{{ post.series.title }} series.</g-link>
    </template>
  </div>
</template>

<script>
export default {
  props: ["post"],
  metaInfo() {
    return {
      meta: [
        { name: "description", content: this.post.description },

        // Some Open Graph Tags
        { property: "og:title", content: this.post.title },
        { property: "og:description", content: this.post.description },
        { property: "og:image", content: this.post.cover_image },
        {
          property: "og:url",
          content: this.$static.metadata.siteUrl + this.post.path
        },
        // Some Twitter Cards Tags
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "@lewis_kihiu" },
        { name: "twitter:title", content: this.post.title },
        { name: "twitter:description", content: this.post.description },
        { name: "twitter:image", content: this.post.cover_image },
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