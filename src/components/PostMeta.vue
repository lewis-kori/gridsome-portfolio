<template>
  <div class="post-meta">
    Posted {{ post.dateCreated }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
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
