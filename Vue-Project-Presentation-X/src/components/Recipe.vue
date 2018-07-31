<template>
  <div class="column is-6 recipe-wrapper animated fadeInUpBig">
    <h1><a v-bind:href="recipe.link">{{ recipe.title }}</a></h1>
    <hr>
    <div class="recipe-image"></div>
    <div class="recipe-body">
      <p>{{ recipe.description }}</p>
    </div>
    <hr>
    <div class="recipe-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: ['recipe']
}
</script>

<style scoped lang="css">
.recipe-wrapper {
  padding: 10px 49px;
  margin-bottom: 10px;
}
.recipe-wrapper h1 {
  font-family: "Whitney Cond A", "Whitney Cond B", "Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  background-color: #EC8D1F;
  padding: 15px;
  border-radius: 40px 40px 0px 0px;
}
.recipe-wrapper h1 a {
  color: inherit;
}
.recipe-wrapper h1 a:hover {
  color: #6ebbf6;
  text-decoration: none;
}
.recipe-wrapper hr {
  margin-top: 0;
  margin-bottom: 5px;
}

.recipe-image {
  background-image: url('../assets/gastronomy.jpg');
  height: 160px;
  background-size: cover;
  opacity: 0.8;
  margin-bottom: 4px;
}

.recipe-body {
  background-color: #ffffff;
  padding: 10px 20px;
  margin-bottom: 4px;
}

.recipe-footer {
  height: 40px;
  background-color: #EC8D1F;
  border-radius: 0px 0px 15px 15px;
}
</style>