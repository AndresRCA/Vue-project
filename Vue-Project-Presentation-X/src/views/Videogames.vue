<template>
  <div id="videogame-view">
    <nav class="navbar is-dark" style="margin-bottom: 15px">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <span class="navbar-item">Viewing options:</span>
          <a href="#" class="navbar-item" @click="grid_view = true">
            <span class="icon" v-bind:class="{'is-active': grid_view}"><i class="fa fa-th"></i></span>
          </a>
          <a href="#" class="navbar-item" @click="grid_view = false">
            <span class="icon" v-bind:class="{'is-active': !grid_view}"><i class="fa fa-th-list"></i></span>
          </a>
          <span class="navbar-burger burger" @click="eye_open = !eye_open" v-bind:class="{'is-active': !eye_open}">
          	<span></span>
          	<span></span>
          	<span></span>
          </span>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': !eye_open}">
       		<div class="navbar-end">
            <div class="navbar-item">
              <div class="field has-addons">
                <div class="control">
                  <button class="button is-small is-static"><span class="icon"><i class="fa fa-user"></i></span>&nbsp;Admin mode</button>
                </div>
                <div class="control is-expanded">
                  <input class="input is-small" type="password" placeholder="password is 'a'" v-model="admin_mode">
                </div>
              </div>
            </div>           
					</div>
        </div>                   
      </div>
    </nav>    
    
    <section class="section" style="padding: 0 1.5rem">
      <div class="field is-grouped" style="margin-bottom: 15px;" v-show="admin_mode == 'a'">
        <div class="control">
          <button class="button is-primary" v-show="!submitted" v-on:click="submitted = !submitted">
            <span class="icon"><i class="fa fa-pencil"></i></span>
            <span>Insert Game</span>
          </button>
        </div>

        <div class="control">
          <button class="button is-primary is-outlined" v-show="submitted" v-on:click="submitted = !submitted">
            <span class="icon"><i class="fa fa-chevron-left"></i></span>
            <span>Never mind</span>
          </button>
        </div>

        <div class="control">
          <button class="button is-danger" v-show="!removeable && games.length >= 1" @click="removeable = true">
            <span class="icon"><i class="fa fa-trash"></i></span>
            <span>Remove</span>
        	</button>
        </div>

        <div class="control">
          <button class="button is-danger is-outlined" v-show="removeable && games.length >= 1" @click="removeable = false">
            <span class="icon"><i class="fa fa-chevron-left"></i></span>
            <span>Cancel</span>
          </button>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <form v-on:submit.prevent="insertGameToList" v-show="submitted && admin_mode == 'a'">
            <!--{{ csrf_field() }}-->
            <label>Inside this you can enter everything:</label>
            <div class="field">
							<div class="control">
								<input class="input" placeholder="Image url" type="text" name="link" v-model="link"/>
							</div>
            </div>
            <div class="field">
							<div class="control">
								<input class="input" placeholder="Title" type="text" name="title" v-model="title"/>
							</div>
            </div>
            <div class="field">
							<div class="control">
								<textarea class="textarea" placeholder="Enter what you think about the game" name="description" v-model="description"></textarea>
							</div>
            </div>
            <div class="field">
							<div class="control">
								<input type="submit" value="Submit" class="input button is-primary"/>
							</div>
            </div>
          </form>
        </div>
        <!-- for grid view -->
        <transition enter-active-class='animated fadeInRight'>
          <div v-show="submitted && admin_mode == 'a' && grid_view" class="column is-4 is-offset-1 large-margin-bottom">
            <div class="box item-container">
              <div class="image is-128x128 is-pulled-left" style="margin-bottom: 5px">
                <img v-bind:src="link" alt="image">
              </div>
              <h2 class="break-words title is-6">{{ title }}</h2>
              <p class="break-words is-small">{{ description }}</p>
            </div>
          </div>
        </transition>
        <!-- for title view -->
        <transition enter-active-class="animated fadeInRight">
          <div v-show="submitted && admin_mode == 'a' && !grid_view" class="column">
            <div class="box content is-clearfix is-radiusless title-view-content" style="min-height: 0">
              <h3>{{ title }}
                <span class="icon is-pulled-right" v-if="!show_content" v-on:click="slideView"><i class="fa fa-chevron-down"></i></span>
                <span class="icon is-pulled-right" v-else v-on:click="slideView"><i class="fa fa-chevron-up"></i></span>
              </h3>
              <div id="slideView" style="margin-top: 10px">
                <div class="image img-size-title margin-right is-pulled-left margin-bottom">
                  <img v-bind:src="link" alt="Image url needed">
                </div>
                <p class="break-words" style="padding: 15px 10px;">{{ description }}</p>
              </div>
            </div>
          </div>  
        </transition>
      </div>
    </section>
    <!------------------------Grid View-------------------------------------->      
    <section class="section" style="padding-top: 1.5rem" v-show="grid_view">
      <div class="container is-fluid grid-view-container">
				<transition enter-active-class='animated fadeInUp'>
					<div class="columns is-multiline" v-if="games.length >= 1">
					  <gridList class="list-complete-item" v-for="(item, index) in games" v-bind:grid_item="item" v-bind:removeable="removeable" v-bind:key="item.id"></gridList>
					</div>
					<div v-else class="content has-text-centered">            
						<h1 class="animated swing"><small>There doesn't seem to be anything here...</small></h1>
					</div>
				</transition>
      </div>
    </section>
    <!----------------------------------------------------------------------->
    <!------------------------Title View------------------------------------>
    <section class="section" style="padding-top: 1.5rem" v-show="!grid_view">
      <div class="container is-fluid title-view-container">
				<transition enter-active-class='animated fadeInUp'>
					<div v-if="games.length >= 1">
						<titleViewList v-for="(item, index) in games" v-bind:title_view_item="item" v-bind:removeable="removeable" v-bind:key="item.title"></titleViewList>
					</div>
					<div v-else class="content has-text-centered">
						<h1 class="animated swing"><small>There doesn't seem to be anything here...</small></h1>
					</div>
				</transition>
      </div>
    </section>
    <!---------------------------------------------------------------------->
  </div>
</template>

<script>
import gridList from '@/components/GridList.vue' //grid-list could make an error?
import titleViewList from '@/components/TitleViewList.vue'

export default {
  name: 'Videogames',
  data() {
  	return {
  		admin_mode: '',
  		description: '',
  		title: '',
  		link: '',
  		grid_view: true,
  		submitted: false,
  		removeable: false,
  		eye_open: true,
  		show_content: false
  	}
  },
  computed: {
    games(){
      return this.$store.state.videogames.games;
    }/*,
    isEditing() {
      get() {
        return this.$store.state.header.isEditing;
      },
      set() {
        this.$store.commit['header/switchIsEditing'];
      }
    }*/
  },
  methods: {
  	insertGameToList() {
      let title = $('input[name=title]').val();
      let description = $('textarea[name=description]').val();
      let link = $('input[name=link]').val();
      let game = {
        title,
        description,
        link
      }
      this.$store.dispatch('videogames/addGame', game).
      then((response) => {
        console.log(response);
        this.submitted = !this.submitted;
        this.title = ''; this.description = ''; this.link = '';
      }).
      catch((error) => {
        console.log('Could not add data, there is something wrong with the database: '+error);
        //add style to input borders, make them glow red
      });
  	},
  	slideView() {
  		$('#slideView').slideToggle(200, () => {
  			this.show_content = !this.show_content;
  		});
  	}
  },
  components: {
  	gridList,
  	titleViewList
  },
  created() {
    //add loading animation
    this.$store.dispatch('videogames/initialize').
    then(() => {
      //stop loading animation
      console.log('data retreived successfully');
    }).
    catch((error) => {
      //stop loading animation
      console.log('there was an error retrieving the data');
      console.log(error);
    });
  }
}
</script>

<style lang="css">
.video-game-bg {
  background: url("../assets/nice_snow.png") repeat;
}

.inline-block img {
  display: inline-block;
  margin: 0 4px;
}

.list-group-item {
  box-shadow: 0 2px 3px darkgrey;
}

.grid-view-container, .title-view-container {
  margin-bottom: 20px;
}

.box > .image {
  height: 200px;
  width: 170px;
  margin-right: 10px;
}
.box > .image img {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.title-view-content {
  border-bottom: 2px solid #555;
}
.title-view-content h3 {
  margin-bottom: 0px;
}

.img-size-title {
  width: 120px;
  transition: width 1.2s cubic-bezier(0.55, -0.35, 0.48, 1.41);
}
.img-size-title:hover {
  width: 270px;
}

.slider {
  display: none;
}

#slideView {
  display: none;
}
</style>