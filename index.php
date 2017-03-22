<!DOCTYPE html>
<html>
    <head>
        <title>Good vibes</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <!--<link rel="stylesheet" href="./css/custom.css">-->
        <link rel="stylesheet" href="./css/myStyle.css">
        <script src="https://unpkg.com/vue/dist/vue.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div id="app" v-cloak>  
        <header class="jumbotron text-center" v-bind:style="headerStyle">
            <div class="container-fluid">
                <h1>Informative App</h1>
            </div>
        </header>
        <nav class="navbar navbar-default" v-bind:style="navStyle">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <span class="navbar-brand">Categories:</span>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li v-bind:class="{active: (current_view == 'home')}" @click="current_view = 'home'"><a href="#"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                        <li id="cooking" v-bind:class="{active: (current_view == 'cooking')}" @click="current_view = 'cooking'"><a href="#"><span class="glyphicon glyphicon-cutlery"></span> Cooking</a></li>
                        <li id="anime" v-bind:class="{active: (current_view == 'anime')}" @click="current_view = 'anime'"><a href="#"><span class="glyphicon glyphicon-play-circle"></span> Anime</a></li>
                        <li id="video-games" v-bind:class="{active: (current_view == 'videogames')}" @click="current_view = 'videogames'"><a href="#"><span class="glyphicon glyphicon-cd"></span> Video Games</a></li>
                        <li id="programming" v-bind:class="{active: (current_view == 'programming')}" @click="current_view = 'programming'"><a href="#"><span class="glyphicon glyphicon-console"></span> Programming</a></li>
                    </ul>
                </div>
            </div>    
        </nav>
        <main>
            <keep-alive><component v-bind:is="current_view" v-bind:item_list="item_list"></component></keep-alive>
        </main>
            <footer><h3 class="text-center"><small>Made by Andrew</small></h3></footer>
        </div>

        <template id="home-view">
            <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h1 class="text-center">What is this?</h1>
                        <p>This is a website that contains things I probably like and things that are currently in my mind, this is also a way to 
                        record things I may forget, like a storage room.</p>
                    </div>
                    <div class="col-sm-6">
                        <h1 class="text-center">Why make this?</h1>
                        <p>I made this because I was bored and wanted to create a multipage website... And because I think I'm depressed.</p>
                    </div>    
                </div>
            </div>
            <div class="container">
                <div class="row margin-bottom">
                    <div class="col-md-12">
                        <h2 class="text-center">What does this "storage room" contain?</h2>
                        <p>It contains mostly a bunch of lists, it could also contain some definitions or notes I prefer to save inside this website
                        for readability. The lists fall under these categories:</p>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="main-page">
                <article class="row" >
                    <div class="col-sm-4 image-logo">
                        <img class="center-block img-responsive img-rounded" src="./images/gastronomy.jpg" alt="food" style="max-height: 320px;">
                    </div>
                    <div class="col-sm-8">
                        <h2>Cooking</h2>
                        <p>Cooking has been a passion for me since I was 12, don't forget that, but due to laziness and the situation 
                        of the country my ability to practice good gastronomy has been limited, still that has never stopped my 
                        curiosity for it, when I had free time I liked to investigate the science behind cooking and recipes I could 
                        afford, they weren't many but they brought me happiness nonetheless.</p>

                        <p>In this category I will post recipes I like (some of which I might have created) or images containing
                        information about spice combinations, herb data, etc.</p>
                    </div>
                </article>
                <article class="row" >
                    <div class="col-sm-4 image-logo visible-xs">
                        <img class="center-block img-responsive img-rounded" src="./images/nichijou.jpg" alt="anime" style="max-height: 220px;">
                    </div>
                    <div class="col-sm-8">
                        <h2>Anime</h2>
                        <p>I can't really pinpoint the time I started liking anime, but I do remember that the first anime I watched 
                        on my own was Nichijou, it was great and it still is, after that I kept watching series, mostly the popular ones 
                        that I encountered on forums and reddit. Nowadays I watch what is currently airing, but I wonder, has my mind or 
                        tastes been numbed down? I say mind because if my tastes have changed and I accept anything that comes my way, 
                        does that mean I'm no longer thinking?</p>

                        <p>In this category I will post anime titles I think are worth mentioning.</p>
                    </div>
                    <div class="col-sm-4 image-logo hidden-xs">
                        <img class="center-block img-responsive img-rounded" src="./images/nichijou.jpg" alt="anime" style="max-height: 220px;">
                    </div>
                </article>
                <article class="row" >
                    <div class="col-sm-4 image-logo inline-block text-center">
                        <img class="img-responsive img-rounded" src="./images/ssbm.png" alt="ssbm" style="max-height: 170px;"><img class="img-responsive" src="./images/osu.png" alt="osu" style="max-height: 100px;">
                    </div>
                    <div class="col-sm-8">
                        <h2>Video Games</h2>
                        <p>This category doesn't need an explanation, video games have always been a big part of my life and it probably 
                        still will be, except that lately I've been playing just 2 games, Super Smash Bros Melee and OSU, both games 
                        require high skill for competitive play, which is probably the reason I play them. As a child I've always been 
                        good with video games, so it was a matter of time until I found myself bored at "easy" games, so currently 
                        I mostly play games with a good history or high difficulty.</p>

                        <p>In this category I will post video game titles I liked in the past, and probably my experience with them.</p>
                    </div>
                </article>
                <article class="row">
                    <div class="col-sm-4 image-logo visible-xs">
                        <img class="center-block img-responsive img-rounded" src="./images/programming.jpg" alt="programming" style="max-height: 360px;">
                    </div>
                    <div class="col-sm-8">
                        <h2>Programming</h2>
                        <p>Programming is something I wish I knew how to do at a very young age, I have loved programming since 
                        I started seeing it on my first semester of Telecomunications and lately I found that I'm constantly improving 
                        step by step whenever I have free time, however I usually spend my time programming inside my comfort zone, 
                        what I mean with this is that on hobby projects I don't try to use new techniques but instead use old knowledge. 
                        This is a habit I'm trying to leave behind.</p>

                        <p>This category will be about strict learning, it could contain books about progamming, little tips about things 
                        one could forget between programming languages, web-development, etc.</p>
                    </div>
                    <div class="col-sm-4 image-logo hidden-xs">
                        <img class="center-block img-responsive img-rounded" src="./images/programming.jpg" alt="programming" style="max-height: 360px;">
                    </div>
                </article>
            </div>
            </div>    
        </template>

        <template id="cooking-view">
            <div>I'm not empty</div>
        </template>

        <template id="anime-view">
            <div>
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle navbar-eye" data-toggle="collapse" data-target="#myNavbar2" @click="eye_open = !eye_open">
                        <span class="glyphicon" v-bind:class="{'glyphicon-eye-open': eye_open, 'glyphicon-eye-close': !eye_open}"></span>                                    
                    </button>
                    <span class="navbar-brand">Viewing options:</span>
                </div>        
                <div class="collapse navbar-collapse" id="myNavbar2">
                    <ul class="nav navbar-nav view-options">
                        <li class="grid-view" v-bind:class="{active: grid_view}" @click="grid_view = true"><a href="#"><span class="glyphicon glyphicon-th"></span></a></li>
                        <li class="title-view" v-bind:class="{active: !grid_view}" @click="grid_view = false"><a href="#"><span class="glyphicon glyphicon-list"></span></a></li>
                    </ul>
                    <div class="form-group navbar-form navbar-right">
                        <label><span class="glyphicon glyphicon-user"></span> Admin mode</label>&nbsp;<input type="password" placeholder="password is 'a'" class="form-control" v-model="admin_mode"/>
                    </div>    
                </div>             
            </div>
            </nav>    

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 style="margin-top: -10px;" v-show="admin_mode == 'a'"><button class="btn btn-primary" v-show="!submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-pencil"></span> Insert Anime</button><button class="btn btn-warning" v-show="submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-chevron-left"></span> Never mind</button>&nbsp;<button class="btn btn-danger" v-show="!removeable && item_list.animes.length >= 1" @click="removeable = true"><span class="glyphicon glyphicon-remove"></span> Remove</button><button class="btn btn-warning" v-show="removeable" @click="removeable = false"><span class="glyphicon glyphicon-remove-sign"></span> Cancel</button> <small v-show="removeable">Remove function not yet implemented...</small></h2>

                        <form class="form-group-sm margin-bottom" v-show="submitted && admin_mode == 'a'" v-on:submit.prevent>
                            <label>Inside this you can enter everything:</label>
                            <input class="form-control tiny-margin-bottom" placeholder="Image url" type="text" name="url" v-model="url"/>
                            <input class="form-control tiny-margin-bottom"  placeholder="Title" type="text" name="title" v-model="title"/>
                            <textarea class="form-control tiny-margin-bottom" placeholder="Enter what you think about the anime" name="description" v-model="description"></textarea>
                            <input type="submit" value="Submit" class="form-control btn btn-default" v-on:click="insertAnimeToList"/>
                        </form>
                    </div>
                </div>
            </div>
            <!------------------------Grid View-------------------------------------->      
            <div class="container grid-view-container" v-show="grid_view">
                <div class="row">
                    <ul v-if="item_list.animes.length >= 1" class="list-unstyled list-group">
                        <grid-list v-for="item in item_list.animes" v-bind:grid_list="item" v-bind:removeable="removeable"></grid-list>
                    </ul>
                    <div v-else class="col-md-12 text-center">            
                        <h1><small>There doesn't seem to be anything here...</small></h1>                   
                    </div>
                </div>
            </div>
            <!----------------------------------------------------------------------->
            <!------------------------Title View------------------------------------->
            <div class="container title-view-container" v-show="!grid_view">
                <div class="row">
                    <div v-if="item_list.animes.length >= 1">
                        <title-view-list v-for="item in item_list.animes" v-bind:title_view_list="item" v-bind:removeable="removeable"></title-view-list>
                    </div>
                    <div v-else class="col-md-12 text-center">
                        <h1><small>There doesn't seem to be anything here...</small></h1>
                    </div>
                </div>
            </div>
            </div>
        </template>

        <template id="videogame-view">
            <div>
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle navbar-eye" data-toggle="collapse" data-target="#myNavbar2" @click="eye_open = !eye_open">
                        <span class="glyphicon" v-bind:class="{'glyphicon-eye-open': eye_open, 'glyphicon-eye-close': !eye_open}"></span>                                    
                    </button>
                    <span class="navbar-brand">Viewing options:</span>
                </div>        
                <div class="collapse navbar-collapse" id="myNavbar2">
                    <ul class="nav navbar-nav view-options">
                        <li class="grid-view" v-bind:class="{active: grid_view}" @click="grid_view = true"><a href="#"><span class="glyphicon glyphicon-th"></span></a></li>
                        <li class="title-view" v-bind:class="{active: !grid_view}" @click="grid_view = false"><a href="#"><span class="glyphicon glyphicon-list"></span></a></li>
                    </ul>
                    <div class="form-group navbar-form navbar-right">
                        <label><span class="glyphicon glyphicon-user"></span> Admin mode</label>&nbsp;<input type="password" placeholder="password is 'a'" class="form-control" v-model="admin_mode"/>
                    </div>      
                </div>             
            </div>
            </nav>    

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 style="margin-top: -10px;" v-show="admin_mode == 'a'"><button class="btn btn-primary" v-show="!submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-pencil"></span> Insert Game</button><button class="btn btn-warning" v-show="submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-chevron-left"></span> Never mind</button>&nbsp;<button class="btn btn-danger" v-show="!removeable && item_list.games.length >= 1" @click="removeable = true"><span class="glyphicon glyphicon-remove"></span> Remove</button><button class="btn btn-warning" v-show="removeable" @click="removeable = false"><span class="glyphicon glyphicon-remove-sign"></span> Cancel</button> <small v-show="removeable">Remove function not yet implemented...</small></h2>

                        <form class="form-group-sm margin-bottom" v-show="submitted && admin_mode == 'a'" v-on:submit.prevent>
                            <label>Inside this you can enter everything:</label>
                            <input class="form-control tiny-margin-bottom" placeholder="Image url" type="text" name="url" v-model="url"/>
                            <input class="form-control tiny-margin-bottom"  placeholder="Title" type="text" name="title" v-model="title"/>
                            <textarea class="form-control tiny-margin-bottom" placeholder="Enter what you think about the game" name="description" v-model="description"></textarea>
                            <input type="submit" value="Submit" class="form-control btn btn-default" v-on:click="insertGameToList"/>
                        </form>
                    </div>
                </div>
            </div>
            <!------------------------Grid View-------------------------------------->      
            <div class="container grid-view-container" v-show="grid_view">
                <div class="row">
                    <ul v-if="item_list.games.length >= 1" class="list-unstyled list-group">
                        <grid-list v-for="item in item_list.games" v-bind:grid_list="item" v-bind:removeable="removeable"></grid-list>
                    </ul>
                    <div v-else class="col-md-12 text-center">            
                        <h1><small>There doesn't seem to be anything here...</small></h1>                   
                    </div>
                </div>
            </div>
            <!----------------------------------------------------------------------->
            <!------------------------Title View------------------------------------->
            <div class="container title-view-container" v-show="!grid_view">
                <div class="row">
                    <div v-if="item_list.games.length >= 1">
                        <title-view-list v-for="item in item_list.games" v-bind:title_view_list="item" v-bind:removeable="removeable"></title-view-list>
                    </div>
                    <div v-else class="col-md-12 text-center">
                        <h1><small>There doesn't seem to be anything here...</small></h1>
                    </div>
                </div>
            </div>
            </div>
        </template>

        <template id="programming-view">
            <div class="container" id="program">
                <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <h2 class="text-center">I wonder if the background will set</h2>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </template>
<!-------------------------------------------------------------------------------------------------------------------------------------------->
        <template id="grid-list">
            <div class="col-md-4 margin-bottom">
                <li class="list-group-item" v-bind:class="{ 'removeable-item': removeable, 'item-container': !removeable }">
                    <div class="img-container-grid pull-left margin-right">
                        <img class="img-size-grid img-responsive" v-bind:src="grid_list.url" alt="Image url needed">                        
                        <p class='text-center'>5/5, it's a masterpiece</p>
                    </div>
                    <h2 class="break-words list-group-item-heading">{{ grid_list.title }}</h2>
                    <p class="break-words list-group-item-text">{{ grid_list.description }}</p>
                    <h2 v-show="removeable"><span class="close-icon-grid" v-bind:class="{'glyphicon': removeable, 'glyphicon-remove-sign': removeable}"></span></h2>
                </li>
            </div>            
        </template>

        <template id="title-view-list">
            <div class="col-xs-12 margin-bottom" v-bind:class="{ 'removeable-item': removeable, 'title-view-content': !removeable }">
                <h3>{{ title_view_list.title }} <span class="glyphicon glyphicon-chevron-down pull-right" v-show="!removeable && !show_content" v-on:click="show_content = !show_content"></span><span class="glyphicon glyphicon-chevron-up pull-right" v-show="!removeable && show_content" v-on:click="show_content = !show_content"></span><span class="close-icon-title" v-bind:class="{'hidden': !removeable, 'glyphicon': removeable, 'glyphicon-remove-sign': removeable}"></span></h3>
                <div v-show="show_content">
                    <img class="img-size-title img-thumbnail img-responsive margin-right pull-left margin-bottom" v-bind:src="title_view_list.url" alt="Image url needed">                        
                    <p class="break-words" style="padding: 15px 10px;">{{ title_view_list.description }}</p>
                </div>
            </div>
        </template>
<!-------------------------------------------------------------------------------------------------------------------------------------------->
        
        <script src="./javascript/custom.js"></script>
    </body>
</html>
