<template id="cooking-view">
  <div>
    <div class="columns">
      <div class="column is-2 is-hidden-mobile" style="margin-bottom: -0.75rem; padding-bottom: 0px">
        <div id="cooking-sidebar">
          <h4 class="has-text-centered">Links of interest</h4>
          <!-- I could make this section with only php, but I choose to stick with a single way to render a view -->
          <ul>
            <li v-for="item in cooking_links">
              <a v-bind:href="item.link"><span class="icon is-small"><i class="fa fa-cutlery"></i></span> @{{item.name}}</a>
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
        <div class="columns recipe-list-background" style="margin-top: 10px">
          <recipes v-for="recipe in item_list.recipes" v-bind:recipe="recipe" v-bind:key="recipe.title"></recipes>
        </div>
      </div>
    </div>
  </div>    
</template>

<script>
  /*jshint esversion: 6*/
  export default {
    props: ['item_list','cooking_links'],
    methods: {
      addWebsite(){
        var name_input = $('input[name = websiteName]');
        var link_input = $('input[name = websiteLink]');
        var name_parent = name_input.parent();
        var link_parent = link_input.parent();

        name_parent.addClass('is-loading');
        link_parent.addClass('is-loading');

        var that = this;
        $.ajax({
          url: '/cooking',
          type: 'post',
          data: { 'name': name_input.val(), 'link': link_input.val() },
          success(_response){
            name_parent.removeClass('is-loading');
            link_parent.removeClass('is-loading');
            console.log('it is done');
            console.log(_response);
            name_input.val(''); link_input.val('');
            that.cooking_links.push({ name: _response.name, link: _response.link });
          },
          error(_response){
            name_parent.removeClass('is-loading');
            link_parent.removeClass('is-loading');
            console.log('error');
            console.log(_response);
          }
        });
      }
    }
  };
</script>