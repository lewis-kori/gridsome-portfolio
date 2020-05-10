<template>
  <div class="container columns">
    <div class="column">
      <table class="table" style="width:100%; background-color: rgb(10, 25, 47); color: beige;">
        <thead>
          <th>Year</th>
          <th>Title</th>
          <th>Made at</th>
          <th>Built with</th>
          <th>Links</th>
        </thead>

        <tbody>
          <tr>
            <td>2019</td>
            <td>test</td>
            <td>skye</td>
            <td>bulma</td>
            <td>ok</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

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
