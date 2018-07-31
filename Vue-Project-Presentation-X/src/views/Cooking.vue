<template>
	<div id="cooking-view">
		<div class="columns">
			<div class="column is-2 is-hidden-mobile" style="margin-bottom: -0.75rem; padding-bottom: 0px">
				<div id="cooking-sidebar">
					<h4 class="has-text-centered">Links of interest</h4>
					<ul>
						<li v-for="item in cooking_links">
							<a v-bind:href="item.link"><span class="icon is-small"><i class="fa fa-cutlery"></i></span> {{item.name}}</a>
						</li>
					</ul>

					<form v-on:submit.prevent="addWebsite">
						<!--{{ csrf_field() }}-->
						<div class="field">
							<label class="label is-small">Name</label>
							<div class="control">
								<input name="websiteName" type="text" class="input is-small is-rounded" required>
							</div>
						</div>
						<div class="field">
							<label class="label is-small">Link</label>
							<div class="control">
								<input name="websiteLink" type="text" class="input is-small is-rounded" required>
							</div>
						</div>
						<div class="field">
							<div class="control" style="margin: 0 auto">
								<input type="submit" value="Submit" class="button is-info is-small is-rounded is-fullwidth">
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="column content container section" style="padding-bottom: 0px">
				<h2>Cooking stuff</h2>
				<p>
					Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.
				</p>
				<p>
					Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.
				</p>
				<div class="columns recipe-list-background is-multiline" style="margin-top: 10px">
					<Recipe v-for="recipe in recipes" v-bind:recipe="recipe" v-bind:key="recipe.title"></Recipe>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Recipe from '@/components/Recipe.vue'

export default {
  name: 'Cooking',
  computed: {
    recipes() {
      return this.$store.state.cooking.recipes;
    },
    cooking_links() {
      return this.$store.state.cooking.cooking_links;
    }
  },
  methods: {
  	addWebsite() {
  		let name_input = $('input[name = websiteName]');
  		let link_input = $('input[name = websiteLink]');

      let name = name_input.val();
      let link = link_input.val();

      let name_parent = name_input.parent();
      let link_parent = link_input.parent();
  		name_parent.addClass('is-loading');
  		link_parent.addClass('is-loading');

      let website = {
        name,
        link
      }
      this.$store.dispatch('cooking/addWebsite', website).
      then((response) => {
        console.log(response);
        name_parent.removeClass('is-loading');
        link_parent.removeClass('is-loading');
      }).
      catch((error) => {
        console.log(error);
        name_parent.removeClass('is-loading');
        link_parent.removeClass('is-loading');
        //add red glow to input
      });
    }
  },
  components: {
    Recipe
  },
  created() {
    this.$store.dispatch('cooking/initialize').
    then((response) => {
      console.log(response);
    }).
    catch((error) => {
      console.log(error);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
#cooking-sidebar {
  background-color: #f6a96e;
  height: 100%;
  padding: 10px 0px;
  border-left: 10px solid #d46313;
  border-right: 10px solid #d46313;
  border-bottom: 10px solid #d46313;
}
#cooking-sidebar ul > li {
  background-color: #f8954f;
  border-bottom: 5px double #d46313;
  padding: 5px 5px;
}
#cooking-sidebar ul > li:first-child {
  border-top: 5px double #d46313;
}
#cooking-sidebar ul > li a {
  color: #0d80d7;
}
#cooking-sidebar ul > li a:hover {
  color: #6ebbf6;
  text-decoration: none;
}
#cooking-sidebar ul > li a:hover > span {
  transform: rotate(360deg);
}
#cooking-sidebar ul > li a span {
  transition: transform 0.4s cubic-bezier(0.93, 0.13, 0, 0.97);
}
#cooking-sidebar form {
  padding: 5px;
}

.recipe-list-background {
  padding-bottom: 20px;
  background-color: white;
  background-image: linear-gradient(90deg, rgba(200, 0, 0, 0.5) 50%, transparent 50%), linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 50%);
  background-size: 50px 50px;
}
</style>
