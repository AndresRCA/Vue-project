<template id="cooking-view">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 hidden-xs hidden-sm">
        <div id="cooking-sidebar">
          <h4 class="text-center">Links of interest</h4>
          <ul class='list-unstyled'>
            <li v-for="item in cooking_links">
              <a v-bind:href="item.link"><span class="glyphicon glyphicon-cutlery"></span> @{{item.description}}</a>
            </li>
          </ul>

          <hr>
          <hr>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row large-margin-bottom">
          <div class="col-md-12">
            <h2>Cooking stuff</h2>
            <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! 
              In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero.
              And most times they're friends, like you and me! I should've known way back when... 
            You know why, David? Because of the kids. They called me Mr Glass. </p>
            <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull
              this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. 
              But I can't give you this case, it don't belong to me. Besides, I've already been through
            too much shit this morning over this case to hand it over to your dumb ass.</p>
            <button v-on:click="addWebsite">I still need a form for adding a site, or a view maybe</button>
          </div>
        </div>
        <div class="row recipe-list-background">
          <recipes v-for="recipe in item_list.recipes" v-bind:recipe="recipe" v-bind:key="recipe.name"></recipes>
        </div>
      </div>
    </div>
  </div>    
</template>