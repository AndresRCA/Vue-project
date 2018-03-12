<!DOCTYPE html>
<html>
<head>
  <title>Vue App</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet">
  <link rel="stylesheet" href="./css/bulma.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <style>
    [v-cloak]{
      display: none;
    }
  </style>
</head>
<body>
  <div id="app" v-cloak v-bind:class="{'video-game-bg': current_view == 'Videogames','programming-bg': current_view == 'Programming'}">  
    <header id="header" class="hero" v-bind:style="headerStyle">
      <div class="container is-fluid hero-body">
        <h1 class="title is-1" style="color: #17191c">My app - {{ current_view }}</h1>
      </div>
    </header>
    <nav id="myNavbar" class="navbar is-light" v-bind:style="navStyle">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-item">Categories:</span>
          <span class="navbar-burger burger" @click="show_menu = !show_menu" v-bind:class="{'is-active': show_menu}">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': show_menu}">
           <div class="navbar-start">
              <!-- the href="#/" is for avoiding a jump in the page, it feels more smooth this way -->
             <a href="#/" v-on:click="current_view = 'Home'" v-bind:class="{'is-active': (current_view == 'Home')}" class="navbar-item"><span class="icon is-small"><i class="fa fa-home"></i></span>&nbsp;Home</a>
             <a href="#/" v-on:click="current_view = 'Cooking'"  v-bind:class="{'is-active': (current_view == 'Cooking')}" class="navbar-item"><span class="icon is-small"><i class="fa fa-cutlery"></i></span>&nbsp;Cooking</a>
             <a href="#/" v-on:click="current_view = 'Videogames'"  v-bind:class="{'is-active': (current_view == 'Videogames')}" class="navbar-item"><span class="icon is-small"><i class="fa fa-gamepad"></i></span>&nbsp;Video Games</a>
             <a href="#/" v-on:click="current_view = 'Programming'"  v-bind:class="{'is-active': (current_view == 'Programming')}" class="navbar-item"><span class="icon is-small"><i class="fa fa-code"></i></span>&nbsp;Programming</a>
           </div>
         </div> 
      </div>
    </nav> 
    <main>
      <keep-alive><component v-bind:is="current_view" v-bind:item_list="item_list" v-bind:cooking_links="cooking_links"></component></keep-alive>
    </main>
  </div>

  <template id="home-view">
    <div class="animated fadeInUpBig">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline has-text-centered-mobile">
            <div class="column is-6 content">
              <h1 class="has-text-centered">What is this?</h1>
              <p>
                This is a website that contains things I probably like and things that are currently in my mind, this is also a way to record things I may forget in a way that pleases the eye, this website is basically a storage room.
              </p>
            </div>
            <div class="column is-6 content">
              <h1 class="has-text-centered">Why make this?</h1>
              <p>I made this because I was bored and wanted to create a multipage website... And because I think I'm depressed.</p>
            </div>
            <div class="column content">
              <h1 class="has-text-centered">What does this "storage room" contain?</h1>
              <p>
                It contains mostly a bunch of lists, it could also contain some definitions or notes I prefer to save inside this website for readability. The lists fall under the following categories:
              </p>
            </div>  
          </div>
        </div>
      </section>
      <section id="main-page">
        <article class="columns level has-text-centered-mobile">
          <div class="column is-4 image-logo">
            <img class="image" src="./images/gastronomy.jpg" alt="food">
          </div>
          <div class="column content">
            <h2>Cooking</h2>
            <p>
              Cooking has been a passion for me since I was 12, don't forget that, but due to laziness and the situation of the country my ability to practice good gastronomy has been limited, but still, that has never stopped my curiosity for it, when I had free time I liked to investigate the science behind cooking and recipes I could afford, they weren't many but they brought me happiness nonetheless.
            </p>
            <p>
              In this category I will post recipes I like (some of which I might have created) or images containing information about spice combinations, herb data, etc.
            </p>
          </div>
        </article>
        <article class="columns level has-text-centered-mobile" >
          <div class="column is-4 is-hidden-tablet image-logo">
            <img class="image" src="./images/ssbm.png" alt="ssbm" style="max-height: 230px; margin: 0 auto; display: block">
          </div>
          <div class="column content">
            <h2>Video Games</h2>
            <p>
              This category doesn't need an explanation, lately I've been playing just one game, Super Smash Bros Melee, this game requires high skill for competitive play, which is probably the reason I play it. As a child I've always been good with video games, so it was a matter of time until I found myself bored at "easy" games, so currently I mostly play games with a good story or high difficulty.
            </p>
            <p>
              In this category I will post video game titles I liked in the past and my experience with them.
            </p>
          </div>
          <div class="column is-4 is-hidden-mobile image-logo">
            <img class="image" style="max-height: 230px; margin: 0 auto; display: block" src="./images/ssbm.png" alt="ssbm">
          </div>
        </article>
        <article class="columns level has-text-centered-mobile">
          <div class="column is-4 image-logo">
            <img class="image" src="./images/programming.jpg" alt="programming" style="max-height: 360px;">
          </div>
          <div class="column content">
            <h2>Programming</h2>
            <p>
              Programming is something I wish I knew how to do at a very young age, I have loved programming since I started seeing it on my first semester of Telecomunications and lately I found that I'm constantly improving step by step whenever I have free time, however I usually spend my time programming inside my comfort zone, what I mean with this is that on hobby projects I don't try to use new techniques but instead use old knowledge, basically trying to reinvent the wheel with what I know. This is a habit I'm trying to leave behind.
            </p>
            <p>
              This category will be about strict learning, it could contain books about progamming, little tips about things one could forget between programming languages, web-development, etc.
            </p>
          </div>
        </article>
      </section>
    </div>    
  </template>

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
          <div class="columns recipe-list-background is-multiline" style="margin-top: 10px">
            <recipes v-for="recipe in item_list.recipes" v-bind:recipe="recipe" v-bind:key="recipe.title"></recipes>
          </div>
        </div>
      </div>
    </div>    
  </template>

  <template id="videogame-view">
    <div>
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
            <!-- <a class="navbar-burger burger" @click="eye_open = !eye_open">
              <span class="icon"><i class="fa" v-bind:class="{'fa-eye': eye_open, 'fa-eye-slash': !eye_open}"></i></span>
            </a> -->
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
            <button class="button is-warning" v-show="submitted" v-on:click="submitted = !submitted">
              <span class="icon"><i class="fa fa-chevron-left"></i></span>
              <span>Never mind</span>
            </button>
          </div>

          <div class="control">
            <button class="button is-danger" v-show="!removeable && item_list.games.length >= 1" @click="removeable = true">
              <span class="icon"><i class="fa fa-trash"></i></span>
              <span>Remove</span>
          	</button>
          </div>

          <div class="control">
            <button class="button is-warning" v-show="removeable && item_list.games.length >= 1" @click="removeable = false">
              <span class="icon"><i class="fa fa-chevron-left"></i></span>
              <span>Cancel</span>
            </button>
          </div>
          
          <!-- <small class="animated infinite tada" v-show="removeable && item_list.games.length >= 1" style="display: inline-block;">&nbsp;&nbsp;&nbsp;Remove function implemented!!!</small> -->
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
                <h2 class="break-words title is-6">@{{ title }}</h2>
                <p class="break-words is-small">@{{ description }}</p>
              </div>
            </div>
          </transition>
          <!-- for title view -->
          <transition enter-active-class="animated fadeInRight">
            <div v-show="submitted && admin_mode == 'a' && !grid_view" class="column">
              <div class="box content is-clearfix is-radiusless title-view-content" style="min-height: 0">
                <h3>@{{ title }}
                  <span class="icon is-pulled-right" v-if="!show_content" v-on:click="slideView"><i class="fa fa-chevron-down"></i></span>
                  <span class="icon is-pulled-right" v-else v-on:click="slideView"><i class="fa fa-chevron-up"></i></span>
                </h3>
                <div id="slideView" style="margin-top: 10px">
                  <div class="image img-size-title margin-right is-pulled-left margin-bottom">
                    <img v-bind:src="link" alt="Image url needed">
                  </div>
                  <p class="break-words" style="padding: 15px 10px;">@{{ description }}</p>
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
  					<div class="columns is-multiline" v-if="item_list.games.length >= 1">
  						<grid-list  v-on:item_deleted="deleteGame(index, item_list.games[index].id)" v-for="(item, index) in item_list.games" v-bind:grid_item="item" v-bind:removeable="removeable" v-bind:key="item.id"></grid-list>
  					</div>
  					<div v-else class="content has-text-centered">            
  						<h1 class="animated swing"><small class="has-text-light">There doesn't seem to be anything here...</small></h1>                   
  					</div>
  				</transition>
        </div>
      </section>
      <!----------------------------------------------------------------------->
      <!------------------------Title View------------------------------------>
      <section class="section" style="padding-top: 1.5rem" v-show="!grid_view">
        <div class="container is-fluid title-view-container">
  				<transition enter-active-class='animated fadeInUp'>
  					<div v-if="item_list.games.length >= 1">
  						<title-view-list v-on:item_deleted="deleteGame(index, item.id)" v-for="(item, index) in item_list.games" v-bind:title_view_item="item" v-bind:removeable="removeable" v-bind:key="item.title"></title-view-list>
  					</div>
  					<div v-else class="content has-text-centered">
  						<h1 class="animated swing"><small class="has-text-light">There doesn't seem to be anything here...</small></h1>
  					</div>
  				</transition>
        </div>
      </section>
      <!---------------------------------------------------------------------->
    </div>
  </template>

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
  <!-------------------------------------------------------------------------------------------------------------------------------------------->
  <template id="grid-list">
    <div class="column is-4 large-margin-bottom animated bounceInRight relative-pos">
    	<div class="box" v-bind:class="{ 'removeable-item-grid': removeable, 'item-container': !removeable }">
				<span v-show="removeable" class="close-icon-grid icon"><i class="fa fa-times" @click="deleteItem"></i></span>
				<div class="image is-128x128 is-pulled-left" style="margin-bottom: 5px">
					<img v-bind:src="grid_item.link" alt="image">
				</div>
				<h2 class="break-words title is-6">@{{ grid_item.title }}</h2>
				<p class="break-words is-small">@{{ grid_item.description }}</p>
			</div>
    </div>            
  </template>

  <template id="title-view-list">
    <div class="box content is-clearfix is-radiusless margin-bottom animated lightSpeedIn" v-bind:class="{ 'removeable-item-title': removeable, 'title-view-content': !removeable }" style="min-height: 0">
      <h3>@{{ title_view_item.title }}
        <span v-show="!show_content && !removeable" class="icon is-pulled-right" v-on:click="slide"><i class="fa fa-chevron-down"></i></span>
        <span v-show="show_content && !removeable" class="icon is-pulled-right" v-on:click="slide"><i class="fa fa-chevron-up"></i></span>
        <span v-show="removeable" class="close-icon-title is-pulled-right" v-on:click="deleteItem"><i class="fa fa-times"></i></span>
      </h3>
      <div class="slider" style="margin-top: 10px">
      	<div class="image img-size-title margin-right is-pulled-left margin-bottom">
      		<img v-bind:src="title_view_item.link" alt="Image url needed">
      	</div>                        
        <p class="break-words" style="padding: 15px 10px;">@{{ title_view_item.description }}</p>
      </div>
    </div>
  </template>
  <!-------------------------------------------------------------------------------------------------------------------------------------------->
  <template id="ES6">
    <div>
      <h1 id="es6">This content is about ES6</h1>
      <h2 id="let">Let:</h2>
      <hr>
      <p>let declares a variable in the scope that it's declared in, unlike var that goes outside a block.</p>
<pre><h2 class="is-marginless">ES5</h2><code>
var name = "Andrew";
if(true){
  var name = "John";
  console.log(name); //Outputs John
}
console.log(name); //Outputs John</code>
</pre>          
<pre><h2 class="is-marginless">ES6</h2><code>
let name = "Andrew";
if(true){
  let name = "John";
  console.log(name); //Outputs John
}
console.log(name); //Outputs Andrew, despite declaring name = "John" inside the if</code>
</pre>
      <h2 id="arrowFunction">Arrow functions:</h2>
      <hr>
      <p>A different way to declare a function that solves some scoping issues.</p>          
<pre><h2 class="is-marginless">ES5</h2><code>
function func(x){
  return x*2;
}</code>
</pre>           
<pre><h2 class="is-marginless">ES6</h2><code>
let func = (x) => x*2; //returns x*2  

//OR
  
let func = () => ({name: 'Andrew', age: 20}); //returning an object, there's also no parameters

//OR
  
let func = (x, y) => {
  /*body*/
};</code>
</pre>
      <h2 id="classes">Classes:</h2>
      <p>very similar to Java, very clean.</p>
<pre><h2 class="is-marginless">ES6</h2><code>
class Person{

  construct(name, age){
    this.name = name;
    this.age = age;
  }
  
  getAge(){
    return this.age;
  }
  
  saySomething(){
    console.log("hello I am ");
  }
  
}

class Programmer extends Person{
  
  construct(name, age, language){
    super(name, age);
    this.language = language;
  }
  
  saySomething(){
    super.saySomething(); //calls parent method
    console.log(this.name+" and my language is "+this.language);
  }
  
  static shock(){
    console.log("good pun");
  }
  
}

let hey = new Person('hey', 20);
hey.saySomething(); //hello I am 

Programmer.shock(); //good pun
let andrew = new Programer('Andrew', 20, 'Java');
andrew.saySomething(); //hello I am Andrew and my language is Java

//NOTE: if I didn't call super.saySomething in the child, it would override the
//parent method and would have just said console.log(this.name+" and my language is "+this.language);</code>
</pre>
    </div>
  </template>
  <template id="LARAVEL">
    <div>
      <h1 id="laravel">This content is about the basics of Laravel</h1>
      <h2 id="controllers">Controllers:</h2>
      <hr>
      <p>
        The controllers handle the logic behind the function in <code>Route::get('/', function(){});</code>
      </p>
      <h4>Creating a controller</h4>
      <ol>
        <li><code>php artisan make:controller [name]</code></li>
      </ol>
      <h4>Using a controller</h4>
      <p><code>Route::get('/', 'controllerName@function');</code></p>
	  <p>
		  <code>function</code> is a public function inside the controller file that contains the logic that returns the view and fetches data from the database
	  </p>
      <h5>Route Model Binding</h5>
      <p>
        it's not exclusive to controllers (I think), it's a way to fetch an specific object from a database through the URL
      </p>
<pre><code>
&lt;?php

namespace App\Http\Controllers;

use App\Task;

class TasksController extends Controller
{

  public function show(Task $task){ //Route model binding
    /*
      what happens here is that show() waits for a Task, the variable in the argument MUST
    possess the same name as the wildcard in the URL ('/tasks/{task}') for this to work,
    through Route Model Binding you can obtain an specific object with the id (primary key)
    given by the wildcard, it's the same as $task = Task::find($id); 
     */
    return view('tasks.show', compact('task')); //first argument could also be 'tasks/show' as well

  }
}
?&gt;</code>
</pre>
    <h2 id="databases">Creating a database:</h2>
    <hr>
    <ol>
      <li><code>mysql -uroot -p</code></li>
      <li><code>create database [name]</code></li>
    </ol>
    <h3 id="settingUp">Setting up a database for Laravel</h3>
    <ol>
      <li>rename .env.example to .env</li>
      <li>generate a key with php artisan key:generate</li>
      <li>set the database name DB_DATABASE=[name]</li>
      <li>set DB_USERNAME=root</li>
      <li>set DB_PASSWORD=[password]</li>
    </ol>
    <div class="message is-dark">
      <div class="message-header">A way to fill a database with Laravel</div>
      <div class="message-body">
        <ol>
          <li><code>php artisan tinker</code></li>
          <li>
            <code>$task = App\Task;<br>$task->body = 'hi';<br>$task->save();</code> //only works for first 2?
          </li>
        </ol>
      </div>
    </div>
    <h3 id="migrations">Migrations</h3>
    <p>they are the blueprint for the database tables</p>
    <h4>Making a migration table</h4>
    <ol>
      <li><code>php artisan make:migration [filename] --create=[title of table, basically]</code></li>
      <li>
        Example: <code>php artisan make:migration uhm --create=sales</code> //date_uhm.php migration file created with sales as a table
      </li>
      <li>convention: filename should be <code>create_[title of table]_table</code></li>
    </ol>
    <h4>Migrating to the database</h4>
    <ol>
      <li><code>php artisan migrate</code></li>
    </ol>
    <div class="message is-dark">
      <div class="message-header">Notes:</div>
      <div class="message-body">
        <ul>
          <li><code>php artisan migrate:refresh</code> drops all tables and looks for changes made to the migrations files and migrates the new tables</li>
          <li><code>php artisan migrate:fresh</code> drops all tables</li>
        </ul>
      </div>
    </div>
  </div>
  </template>
  
  <script src="./js/app.js" recipes="{{ $recipes }}" cooking_websites="{{ $cooking_websites }}" games="{{ $games }}"></script>
</body>
</html>
