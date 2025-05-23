// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Lewis Kori',
  siteUrl: 'https://lewiskori.com',
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
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-137370458-4',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        include: ['/', '/projects', '/collaborate', '/posts', '/blog/**'],
        config: {
          '/': {
            priority: 1.0,
          },
          '/posts/*': {
            changefreq: 'weekly',
            priority: 0.8,
          },
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.7,
          },
          '/projects': {
            priority: 0.6,
          },
          '/collaborate': {
            priority: 0.5,
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Lewis Kori',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        disableServiceWorker: false,
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Lewis Kori',
        themeColor: '#0a192f',
        backgroundColor: '#172a45',
        icon: 'src/favicon.png', // must be provided like 'src/favicon.png'
        msTileImage: '',
        msTileColor: '#8892b0',
      },
    },
    {
      use: 'gridsome-plugin-service-worker',
      options: {
        networkFirst: {
          routes: ['/', /\.(js|css|png|json|html|jpg|jpeg)$/],
        },
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: 'Lewis Kori Blog',
          feed_url: 'https://lewiskori.com/rss.xml',
          site_url: 'https://lewiskori.com',
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          url: 'https://lewiskori.com' + node.path,
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
