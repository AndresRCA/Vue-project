<template>
  <div>
    <header id="header" class="hero"  v-bind:style="headerStyle">
      <div class="container is-fluid hero-body">
        <h1 class="title is-1" style="color: #17191c">My app - {{ $route.name }}</h1>
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
            <router-link to="/" v-bind:class="{'is-active': ($route.name == 'Home')}" class="navbar-item">
              <span class="icon is-small"><i class="fa fa-home"></i></span>&nbsp;Home
            </router-link>
            <router-link to="/Cooking" v-bind:class="{'is-active': ($route.name == 'Cooking')}" class="navbar-item">
              <span class="icon is-small"><i class="fa fa-cutlery"></i></span>&nbsp;Cooking
            </router-link>
            <router-link to="/Videogames" v-bind:class="{'is-active': ($route.name == 'Videogames')}" class="navbar-item">
              <span class="icon is-small"><i class="fa fa-gamepad"></i></span>&nbsp;Video Games
            </router-link>
            <router-link to="/Programming" v-bind:class="{'is-active': ($route.name == 'Programming')}" class="navbar-item">
              <span class="icon is-small"><i class="fa fa-code"></i></span>&nbsp;Programming
            </router-link>
          </div>
        </div> 
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      show_menu: false
    }
  },
  computed: {
    headerStyle() {                  
      switch(this.$route.name){
        case 'Home': return {};
        case 'Cooking': return { backgroundColor: '#f6a96e' };
        case 'Videogames': return { backgroundColor: '#7aafe4' };
        case 'Programming': return{ backgroundColor: '#baf286' };
      }
    },
    /*isEditingGame() {
      return this.$store.state.header.isEditing && this.$route.name == 'Videogames' && this.$store.state.header.header_background != '';
    },
    gameEditing() {
      if(isEditingGame){
        return {
          backgroundImage: url(this.$store.state.header.header_background),
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }
      }else{
        return {};
      }
    },*/
    navStyle() {
      switch(this.$route.name){
        case 'Home': return {};
        case 'Cooking': return { borderTop: '1px solid #f38d3e' };
        case 'Videogames': return { borderBottom: 'none', borderTop: '1px solid #5096db' };
        case 'Programming': return{ borderTop: '1px solid #a0ed58' };
      }
    }
  }
}
</script>

<style lang="css">
.hero {
  font-family: "Josefin Sans", sans-serif;
  transition: height 1s;
}

#myNavbar .navbar-start a {
  color: #e8e8eb;
  transition: text-shadow 0.5s ease-out, color 0.3s ease-out;
}
#myNavbar .navbar-start a:hover {
  color: white;
  text-shadow: 0px 0px 5px white;
  text-decoration: none;
}
#myNavbar .navbar-start a:hover > span {
  transform: scale(1.2, 1.2);
}
#myNavbar .navbar-start a span {
  transition: transform 0.16s cubic-bezier(0, 0, 0.2, 1);
}
#myNavbar .navbar-start a:first-child {
  color: #1a1a1a;
}
#myNavbar .navbar-start a:first-child:hover {
  color: black;
  text-shadow: 0px 0px 2px grey;
}
#myNavbar .navbar-start a:nth-child(2) {
  background-color: #f6a96e;
}
#myNavbar .navbar-start a:nth-child(2).is-active {
  color: white;
  background-color: #f38d3e;
}
#myNavbar .navbar-start a:nth-child(3) {
  background-color: #7aafe4;
}
#myNavbar .navbar-start a:nth-child(3).is-active {
  color: white;
  background-color: #5096db;
}
#myNavbar .navbar-start a:nth-child(4) {
  background-color: #baf286;
}
#myNavbar .navbar-start a:nth-child(4).is-active {
  color: white;
  background-color: #a0ed58;
}
</style>