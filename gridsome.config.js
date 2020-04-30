// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Lewis Kori",
  titleTemplate: "Lewis Kori | %s",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "BlogPost",
        path: "blog/**/*.md",
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Projects",
        path: "projects/**/*.md",
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
            Youtube: { width: "80%", align: "auto" },
            Twitter: { align: "center", theme: "dark" },
          },
        ],
      ],
    },
  },

  templates: {
    BlogPost: "/blog/:title",
    Tag: "/tag/:title"
  },
};
