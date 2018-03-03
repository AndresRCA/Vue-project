<template id="programming-view">
  <div style="margin-top: 12px">
      <div class="columns">
        <div class="column is-3 is-hidden-mobile menu" style="padding-top: 0px; padding-right: 0px">
          <div id="programming-sidebar" class="menu">
            <header>
              <h1 class="title is-5 menu-label">General <span class="icon"><i class="fa fa-wifi"></i></span></h1>
            </header>
            <main>
              <ul class="menu-list">
                <li>
                  <a href="#laravel" @click="laravel" v-bind:class="{'is-active': view == 'laravel'}">Laravel</a>
                  <ul>
                    <li><a id="l1" href="#controllers" @click="laravel">Controllers</a></li>
                    <li>
                      <a id="l2" href="#databases" @click="laravel">Databases</a>
                      <ul>
                        <li><a id="l3" href="#settingUp" @click="laravel">Setting up a database for Laravel</a></li>
                        <li><a id="l4" href="#migrations" @click="laravel">Migrations</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#es6" @click="es6" v-bind:class="{'is-active': view == 'es6'}">ES6</a>
                  <ul>
                    <li><a id="e1" href="#let" @click="es6">Let</a></li>
                    <li><a id="e2" href="#arrowFunction" @click="es6">Arrow function</a></li>
                    <li><a id="e3" href="#classes" @click="es6">Classes</a></li>
                  </ul>
                </li>
              </ul>
            </main>
          </div>
        </div>
        <div class="column content animated fadeInUpBig is-9" id="program">
          <section class="section">
            <div id="danger" style="margin-bottom: 15px;">
              <div id="readWithCaution" class="message is-danger">
                <div class="message-header">
                  READ WITH CAUTION<span class="delete" @click="removeRWC"></span>
                </div>
                <div class="message-body">
                  Keep in mind the following concepts and instructions are written by me as the way I understand them, any innacurate statement or misunderstanding could be possible <small>(there's a low chance of this happening, you don't need to worry too much)</small>, with this out of the way, please enjoy some of the things I have learned.
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
  /*jshint esversion: 6*/
  export default {
    data(){
      return {
        view: 'laravel',
        message_height: 0
      };
    },
    methods: {
      laravel(){
        //remove any active link from the other section
        document.getElementById('e1').className = '';
        document.getElementById('e2').className = '';
        document.getElementById('e3').className = '';
        this.view = 'laravel';
      },
      es6(){
        //remove any active link from the other section
        document.getElementById('l1').className = '';
        document.getElementById('l2').className = '';
        document.getElementById('l3').className = '';
        document.getElementById('l4').className = '';
        this.view = 'es6';
      },
      removeRWC(){
        document.getElementById('readWithCaution').remove();
        this.message_height = 0;
      }
    },
    mounted(){
      this.message_height = document.getElementById('danger').clientHeight;
      var that = this;
      window.onscroll = function() {activate();};
        function activate() { //Don't judge me

          //add something like: if( that.$parent.current_view != 'Programming') return;
          console.log(that);
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
  };
</script>