<template>
  <div class="container">
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Home</a></li>
        <li><a>Search</a></li>
        <li><a>Information &amp; Forms</a></li>
        <li><a>Disclaimer</a></li>
      </ul>
    </div>
  </div>
</template>

<style>
.tabs {
    width: 160px;
}

.tabs ul {
    -webkit-flex-direction: column;
    flex-direction: column;
}

.tabs li+li {
    margin-left: 0;
}
</style>
