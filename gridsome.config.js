// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Lewis Kori",
  siteUrl: "https://lewiskori.netlify.app",
  titleTemplate: "Lewis Kori | %s",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "content/blog/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
          series: {
            typeName: "Series",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Projects",
        path: "content/projects/**/*.md",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "About",
        path: "content/about/**/*.md",
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-137370458-4",
      },
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        title: "Lewis Kori",
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        disableServiceWorker: true,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Gridsome",
        themeColor: "#0a192f",
        backgroundColor: "#172a45",
        icon: "src/favicon.png", // must be provided like 'src/favicon.png'
        msTileImage: "",
        msTileColor: "#8892b0",
      },
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
  ],

  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true },
        ],
        [
          "@noxify/gridsome-plugin-remark-embed",
          {
            enabledProviders: ["Youtube", "Twitter", "Gist", "Spotify"],
            Youtube: { width: "100%", align: "auto" },
            Twitter: { align: "center", theme: "dark" },
          },
        ],
      ],
    },
  },

  templates: {
    BlogPost: "/blog/:title",
    Tag: "/tag/:title",
    Series: "/series/:title",
  },
};
