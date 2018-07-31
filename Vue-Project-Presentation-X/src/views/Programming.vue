<template>
  <div id="programming-view" style="margin-top: 12px">
    <div class="columns">
      <div class="column is-3 is-hidden-mobile menu" style="padding-top: 0px; padding-right: 0px">
        <div id="programming-sidebar" class="menu">
          <header>
            <h1 class="title is-5 menu-label">General <span class="icon"><i class="fa fa-wifi"></i></span></h1>
          </header>
          <main>
            <ul class="menu-list">
              <li>
                <a href="#laravel" @click="laravel('laravel')" v-bind:class="{'is-active': view == 'laravel'}">Laravel</a>
                <ul>
                  <li><a id="l1" href="#controllers" @click="laravel('controllers')">Controllers</a></li>
                  <li>
                    <a id="l2" href="#databases" @click="laravel('databases')">Databases</a>
                    <ul>
                      <li><a id="l3" href="#settingUp" @click="laravel('settingUp')">Setting up a database for Laravel</a></li>
                      <li><a id="l4" href="#migrations" @click="laravel('migrations')">Migrations</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#es6" @click="es6('es6')" v-bind:class="{'is-active': view == 'es6'}">ES6</a>
                <ul>
                  <li><a id="e1" href="#let" @click="es6('let')">Let</a></li>
                  <li><a id="e2" href="#arrowFunction" @click="es6('arrowFunction')">Arrow function</a></li>
                  <li><a id="e3" href="#classes" @click="es6('classes')">Classes</a></li>
                </ul>
              </li>
            </ul>
          </main>
        </div>
      </div>
      <div class="column content animated fadeInUpBig is-9" id="program">
        <section class="section">
		    	<div id="danger" style="margin-bottom: 15px;">
            <div class="buttons has-addons is-centered is-hidden-tablet" style="justify-content: space-between;">
              <button class="button is-laravel" v-bind:class="{'is-outlined': view != 'laravel'}" @click="view = 'laravel'">Laravel</button>
              <button class="button is-info" v-bind:class="{'is-outlined': view != 'es6'}" @click="view = 'es6'">ES6</button>
            </div>
            <div id="readWithCaution" class="message is-danger">
              <div class="message-header">
                READ WITH CAUTION<span class="delete" @click="removeRWC"></span>
              </div>
              <div class="message-body">
                Keep in mind the following concepts and instructions are written by me as the way I understand them, any inaccurate statement or misunderstanding could be possible <small>(there's a low chance of this happening, you don't need to worry too much)</small>, with this out of the way, please enjoy some of the things I have learned.
              </div>
            </div>
		     	</div>
    		 	<div id="programming-content">
          	<component v-bind:is="view"></component>
    		 	</div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import es6 from '@/components/ES6.vue'
import laravel from '@/components/Laravel.vue'

export default {
  name: 'Programming',
  data() {
    return {
      view: 'laravel',
      message_height: 0
    }
  },
  methods: {
    laravel(id) {
      //remove any active link from the other section
      if(this.view != 'laravel'){
        document.getElementById('e1').className = '';
        document.getElementById('e2').className = '';
        document.getElementById('e3').className = '';
        this.view = 'laravel';
        setTimeout(function(){
          document.getElementById(id).scrollIntoView(); //href doesn't bring me to the id because the view isn't loaded, this is just for the case when the active view is laravel
        }); //surprisingly, this is one of those times that if I don't do it this way, the code won't work, probably due to Vue rendering components
      }
    },
    es6(id) {
      if(this.view != 'es6'){
        //remove any active link from the other section
        document.getElementById('l1').className = '';
        document.getElementById('l2').className = '';
        document.getElementById('l3').className = '';
        document.getElementById('l4').className = '';
        this.view = 'es6';
        setTimeout(function(){
          document.getElementById(id).scrollIntoView();
        });
      }
    },
    removeRWC() {
      document.getElementById('readWithCaution').remove();
      this.message_height = 0;
    }
  },
  components: {
    es6,
    laravel
  },
  mounted() {
    this.message_height = document.getElementById('danger').clientHeight;
    var that = this;
    window.onscroll = function() {activate();};
    function activate() { //Don't judge me
    
      if(that.$route.name != 'Programming') return;
      /*console.log('window scroll: '+window.pageYOffset);
      console.log('window inner height: '+window.innerHeight);
      console.log('body scrollHeight: '+document.body.scrollHeight);*/
        
      if(that.view == 'laravel'){
        if(window.pageYOffset >= 279 + that.message_height && window.pageYOffset < 1219 + that.message_height){
          document.getElementById('l1').className = 'side-active';
          document.getElementById('l2').className = ''; //if coming from the bottom
          document.getElementById('l3').className = ''; //in case of a link being clicked
          document.getElementById('l4').className = ''; //in case of a link being clicked
        }else if(window.pageYOffset >= 1219 + that.message_height && window.pageYOffset < 1359 + that.message_height){
          document.getElementById('l1').className = ''; //if coming from the top
          document.getElementById('l2').className = 'side-active';
          document.getElementById('l3').className = ''; //if coming from the bottom
          document.getElementById('l4').className = ''; //in case of a link being clicked
        }else if(window.pageYOffset >= 1359 + that.message_height && window.pageYOffset + window.innerHeight < document.body.scrollHeight){
          document.getElementById('l1').className = ''; //in case of a link being clicked
          document.getElementById('l2').className = ''; //if coming from the top
          document.getElementById('l3').className = 'side-active';                            
          document.getElementById('l4').className = ''; //if coming from the bottom
        }else if(window.pageYOffset + window.innerHeight >= document.body.scrollHeight){
          document.getElementById('l1').className = ''; //in case of a link being clicked
          document.getElementById('l2').className = ''; //in case of a link being clicked             
          document.getElementById('l3').className = ''; //if coming from the top, which will always be the case
          document.getElementById('l4').className = 'side-active';
        }else{
          document.getElementById('l1').className = '';
          document.getElementById('l2').className = ''; //in case of a link being clicked, specifically #laravel  
          document.getElementById('l3').className = ''; //in case of a link being clicked 
          document.getElementById('l4').className = ''; //in case of a link being clicked 
        }
      }else{
        if(window.pageYOffset >= 279 + that.message_height && window.pageYOffset < 829 + that.message_height){
          document.getElementById('e1').className = 'side-active';
          document.getElementById('e2').className = ''; //if coming from the bottom
          document.getElementById('e3').className = ''; //if es3 is activated and I click the link to es1, es3 would stay activated
        }else if(window.pageYOffset >= 829 + that.message_height && window.pageYOffset < 1379 + that.message_height && window.pageYOffset + window.innerHeight < document.body.scrollHeight){
          document.getElementById('e3').className = ''; //if coming from the bottom
          document.getElementById('e2').className = 'side-active';
          document.getElementById('e1').className = ''; //if coming from the top
        }else if(window.pageYOffset >= 1379 + that.message_height || window.pageYOffset + window.innerHeight >= document.body.scrollHeight){
          document.getElementById('e3').className = 'side-active';
          document.getElementById('e2').className = '';
          document.getElementById('e1').className = ''; //if I'm in es1 and I click to es3
        }else{
          document.getElementById('e1').className = '';
          document.getElementById('e2').className = '';
          document.getElementById('e3').className = '';
          
        }
      }
    }
  }
}
</script>

<style lang="css">
.programming-bg {
  background: url("../assets/stardust.png") repeat;
}

#program {
  color: #E5EEEC;
}
#program #danger button.is-laravel {
  background-color: #e74430;
  border-color: transparent;
  color: #fff;
}
#program #danger button.is-laravel:hover {
  background-color: #e63e29;
}
#program #danger button.is-laravel.is-outlined {
  background-color: transparent;
  border-color: #e74430;
  color: #e74430;
}
#program #danger button.is-laravel.is-outlined:hover {
  background-color: #e74430;
  border-color: #e74430;
  color: #fff;
}
#program h1, #program h2, #program h3, #program h4, #program h5, #program h6 {
  color: #E5EEEC;
}
#program p > code, #program li > code, #program .message code {
  color: #76c12f;
  font-family: "monospace";
}
#program hr {
  margin-top: 0px;
}

#programming-sidebar {
  padding-top: 25px;
  position: fixed;
  width: 25%;
}
#programming-sidebar header {
  padding: 10px 20px;
  background-color: #b6b6b6;
  border-bottom: 5px double darkgrey;
  border-top: 5px double darkgrey;
}
#programming-sidebar header h1 {
  color: #262626;
}
#programming-sidebar main {
  border-bottom-right-radius: 10%;
  background: #2b3135;
  /* Old browsers */
  background: -moz-linear-gradient(left, #2b3135 50%, #1d2023 50%, #202426 50%, #17191b 50%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #2b3135 50%, #1d2023 50%, #202426 50%, #17191b 50%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #2b3135 50%, #1d2023 50%, #202426 50%, #17191b 50%);
}
#programming-sidebar main li:last-child {
  padding-bottom: 5px;
}
#programming-sidebar main li a {
  color: #E5EEEC;
}
#programming-sidebar main li a.is-active {
  background-color: #a0ed58;
}
#programming-sidebar main li a.is-active:hover {
  background-color: #a0ed58;
  color: #E5EEEC;
}
#programming-sidebar main li a:hover {
  color: #4a4a4a;
}
#programming-sidebar main li a.side-active {
  color: #4a4a4a;
  background-color: whitesmoke;
}
</style>