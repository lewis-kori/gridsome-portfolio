<template> </template>

<query>
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
</query>
