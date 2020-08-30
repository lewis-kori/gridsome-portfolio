<template>
  <div>
    <ShareNetwork
      v-for="network in networks"
      :network="network.network"
      :key="network.network"
      :style="{ backgroundColor: network.color }"
      :url="sharing.url"
      :title="post.title"
      :description="post.description"
      :hashtags="sharing.tags"
      :twitterUser="sharing.twitterUser"
      class="share"
    >
      <i :class="network.icon"></i>
      <span>{{ network.name }}</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {
      networks: [
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
        {
          network: "hackernews",
          name: "HackerNews",
          icon: "fab fah fa-lg fa-hacker-news",
          color: "#ff4000",
        },
        {
          network: "pinterest",
          name: "Pinterest",
          icon: "fab fah fa-lg fa-pinterest",
          color: "#bd081c",
        },
        {
          network: "pocket",
          name: "Pocket",
          icon: "fab fah fa-lg fa-get-pocket",
          color: "#ef4056",
        },
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "flipboard",
          name: "Flipboard",
          icon: "fab fah fa-lg fa-flipboard",
          color: "#e12828",
        },
        {
          network: "quora",
          name: "Quora",
          icon: "fab fah fa-lg fa-quora",
          color: "#a82400",
        },
        {
          network: "reddit",
          name: "Reddit",
          icon: "fab fah fa-lg fa-reddit-alien",
          color: "#ff4500",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "fab fah fa-lg fa-telegram-plane",
          color: "#0088cc",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
        {
          network: "sms",
          name: "SMS",
          icon: "far fah fa-lg fa-comment-dots",
          color: "#333333",
        },
      ],
    };
  },
  computed: {
    sharing() {
      const tags = [];
      this.post.tags.forEach((tag) => {
        tags.push(tag.title);
      });
      const data = {
        url: this.$static.metadata.siteUrl + this.post.path,
        tags: tags.join(","),
        twitterUser: "lewis_kihiu",
      };
      return data;
    },
  },
};
</script>

<static-query>
query {
  metadata {
    siteUrl
  }
}
</static-query>
