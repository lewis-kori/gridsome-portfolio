// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Lewis Kori',
  siteUrl: 'https://v2.lewiskori.com',
  // metadata: {
  //   defaultCover: "/images/default-cover.jpg" // Todo: Source the image
  // },
  titleTemplate: 'Lewis Kori | %s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: 'content/blog/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          series: {
            typeName: 'Series',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Projects',
        path: 'content/projects/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'About',
        path: 'content/about/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Sponsors',
        path: 'content/sponsors/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Jobs',
        path: 'content/jobs/**/*.md',
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'Lewis Kori Blog',
          feed_url: 'https://v2.lewiskori.com/rss.xml',
          site_url: 'https://v2.lewiskori.com',
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: 'https://v2.lewiskori.com' + node.path,
          author: node.author,
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
  ],

  transformers: {
    remark: {
      plugins: [
        [
          'gridsome-plugin-remark-shiki',
          { theme: 'nord', skipInline: true },
        ],
        [
          '@noxify/gridsome-plugin-remark-embed',
          {
            enabledProviders: ['Youtube', 'Twitter', 'Gist', 'Spotify'],
            Youtube: { width: '100%', align: 'auto' },
            Twitter: { align: 'center', theme: 'dark' },
          },
        ],
      ],
    },
  },

  templates: {
    BlogPost: '/blog/:title',
    Tag: '/tag/:title',
    Series: '/series/:title',
  },
};
