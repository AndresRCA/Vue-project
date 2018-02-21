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
        <div class="col-md-6">
          <h2 style="margin-top: -10px;" v-show="admin_mode == 'a'"><button class="btn btn-primary" v-show="!submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-pencil"></span> Insert Game</button><button class="btn btn-warning" v-show="submitted" v-on:click="submitted = !submitted"><span class="glyphicon glyphicon-chevron-left"></span> Never mind</button>&nbsp;<button class="btn btn-danger" v-show="!removeable && item_list.games.length >= 1" @click="removeable = true"><span class="glyphicon glyphicon-remove"></span> Remove</button><button class="btn btn-warning" v-show="removeable && item_list.games.length >= 1" @click="removeable = false"><span class="glyphicon glyphicon-remove-sign"></span> Cancel</button> <small class="animated infinite tada" v-show="removeable && item_list.games.length >= 1" style="display: inline-block;">&nbsp;&nbsp;&nbsp;Remove function implemented!!!</small></h2>

          <form v-on:submit.prevent="insertGameToList" class="form-group-sm margin-bottom" v-show="submitted && admin_mode == 'a'">
            <!--{{ csrf_field() }}-->
            <label>Inside this you can enter everything:</label>
            <input class="form-control tiny-margin-bottom" placeholder="Image url" type="text" name="link" v-model="link"/>
            <input class="form-control tiny-margin-bottom"  placeholder="Title" type="text" name="title" v-model="title"/>
            <textarea class="form-control tiny-margin-bottom" placeholder="Enter what you think about the game" name="description" v-model="description"></textarea>
            <input type="submit" value="Submit" class="form-control btn btn-default"/>
          </form>
        </div>
        <div class='col-md-1'></div>
        <transition enter-active-class='animated fadeInRight'>
          <grid-list v-if="submitted && admin_mode == 'a'" v-bind:grid_item="{title: title, description: description, link: link}"></grid-list>
        </transition>
        <div class='col-md-1'></div>
      </div>
    </div>
    <!------------------------Grid View-------------------------------------->      
    <div class="container grid-view-container" v-show="grid_view">
      <div class="row">
        <transition enter-active-class='animated fadeInUp'>
          <ul v-if="item_list.games.length >= 1" class="list-unstyled list-group">
            <grid-list v-on:item_deleted="deleteGame(index, item_list.games[index].id)" v-for="(item, index) in item_list.games" v-bind:grid_item="item" v-bind:removeable="removeable" v-bind:key="item.id"></grid-list>
          </ul>
          <div v-else class="col-md-12 text-center">            
            <h1 class="animated swing"><small>There doesn't seem to be anything here...</small></h1>                   
          </div>
        </transition>
      </div>
    </div>
    <!----------------------------------------------------------------------->
    <!------------------------Title View------------------------------------>
    <div class="container title-view-container" v-show="!grid_view">
      <div class="row">
        <transition enter-active-class='animated fadeInUp'>
          <div v-if="item_list.games.length >= 1">
            <title-view-list v-on:item_deleted="deleteGame(index)" v-for="(item, index) in item_list.games" v-bind:title_view_item="item" v-bind:removeable="removeable" v-bind:key="item.title"></title-view-list>
          </div>
          <div v-else class="col-md-12 text-center">
            <h1 class="animated swing"><small>There doesn't seem to be anything here...</small></h1>
          </div>
        </transition>
      </div>
    </div>
    <!---------------------------------------------------------------------->
  </div>
</template>