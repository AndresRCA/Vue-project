/*Resumen en espanol, quiero implementar el remove function, solo necesito eliminar los props
 hijos de los componentes grid-list y title-view-list, para eso debo utilizar un bus para que
 ambos se enteren de que se utilizo el metodo deleteItem y eliminen el mismo elemento del arreglo
 que ambos poseen. Problema: como indico el indice al momento de comunicarse? caso extremo: 
 en vez de usar los componentes grid-list y title-view-list, incorporo puro html, de esa manera
 ambos comparten el mismo prop dado del componente Videogames, en verdad suena mucho mas simple
 pero la idea es tratar de aprender a utilizar componentes*/

//You might feel like playing around with the idea of a global variable, as a way of storing the
//indexes and reacting to the changes made... last resort 
//var hmm = 0;
Vue.component('grid-list',{
    props: ['grid_item','removeable','index'],
    template: '#grid-list',
    data: function(){
        return {
            unique_id: "item-grid"+this.index
        };
    },
    methods: {
        deleteItem: function(){
            //why the fuck does the next element get this class?? 
            //anyway, adding a v-bind:key to the component solved it
            $('#'+this.unique_id).addClass("fadeOutLeft");
            //var id = '#'+this.unique_id;
            var that = this;
            setTimeout(function(){
                //this emit should notify the parent to delete their item in the array
                that.$emit("item_deleted");
                //instead of doing this below
                //$(id).remove();
                //it's better to emit the index and remove the array item, that way there's
                //no conflicts with the order of the list and id's              
            }, 800);
        }
    }
});

Vue.component('title-view-list',{
    props: ['title_view_item','removeable','index'],
    template: '#title-view-list',
    data: function(){
        return {
            show_content: false,
            unique_id: "item-list"+this.index
        };
    },
    methods: {
        deleteItem: function(){
            $('#'+this.unique_id).removeClass('lightSpeedIn').addClass("fadeOutRight");
            var that = this;
            setTimeout(function(){
                that.$emit("item_deleted");
            }, 900);
        }
    }
});

new Vue({
    el: '#app',
    data:{
        current_view: "Home",
        item_list : {
            games: [],
            animes: []
        },
        cooking_links: []
    },
    computed: {
        headerStyle: function(){		      	      
            switch(this.current_view){
                case "Home": return {};
                case "Cooking": return {backgroundColor: "#f6a96e"};
                case "Anime": return {backgroundColor: "#ff8484"};
                case "Videogames": return {backgroundColor: "#7aafe4"};
                case "Programming": return{backgroundColor: "#baf286"};
            }
        },
        navStyle: function(){
            switch(this.current_view){
                case "Home": return {};
                case "Cooking": return {marginBottom: 0, borderTop: "1px solid #f38d3e"};
                case "Anime": return {marginBottom: 0, borderBottom: "none", borderTop: "1px solid #ff5151"};
                case "Videogames": return {marginBottom: 0, borderBottom: "none", borderTop: "1px solid #5096db"};
                case "Programming": return{marginBottom: 0, borderTop: "1px solid #a0ed58"};
            }
        }
    },
    components: {
        Home: {
            template: "#home-view"
        },
        Cooking: {
            template: "#cooking-view",
            props: ['cooking_links']
        },
        Anime: {
            props: ['item_list'],
            template: "#anime-view",
            data: function(){
                return {
                    admin_mode: "",
                    description: "",
                    title: "",
                    url: "",
                    grid_view: true,
                    submitted: false,
                    removeable: false,
                    eye_open: true
                };
            },
            methods: {
                insertAnimeToList: function(){
                    this.item_list.animes.push({title: this.title, description: this.description, url: this.url});
                    this.title = ""; this.description = ""; this.url = "";
                    this.submitted = !this.submitted;
                },
                deleteAnime: function(index){
                    console.log("deleting index: "+index);
                    this.item_list.animes.splice(index,1);
                }
            }
        },
        Videogames: {
            props: ['item_list'],
            template: "#videogame-view",
            data: function(){
                return {
                    admin_mode: "",
                    description: "",
                    title: "",
                    url: "",
                    grid_view: true,
                    submitted: false,
                    removeable: false,
                    eye_open: true
                };
            },
            methods: {
                insertGameToList: function(){             
//                    var that = this;
//                    var http = new XMLHttpRequest();
//                    http.onreadystatechange = function(){
//                        if(this.readyState == 4 && this.status == 200){
//                            var json = this.responseText;
//                            var jsonObj = JSON.parse(json);
//                            jsonObj.list.push({title: that.title, description: that.description, url: that.url});
//                            var string_json = JSON.stringify(jsonObj);
//                            alert(string_json);
//                            this.open("POST","./php_scripts/update_json.php",true);
//                            this.send("json_object="+string_json);
//                            this.onreadystatechange = function(){
//                                if(this.readyState == 4 && this.status == 200){
//                                    that.item_list.games.push({title: that.title, description: that.description, url: that.url});
//                                    that.title = ""; that.description = ""; that.url = "";
//                                    that.submitted = !that.submitted;
//                                }
//                            };
//            //                    var http2 = new XMLHttpRequest();
//            //                    http2.onreadystatechange = function(){
//            //                        if(this.readyState == 4 && this.status == 200){
//            //                            that.item_list.games.push({title: that.title, description: that.description, url: that.url});
//            //                            that.title = ""; that.description = ""; that.url = "";
//            //                            that.submitted = !that.submitted;
//            //                        }
//            //                    };
//                            //http2.open("POST","./php_scripts/update_json.php",true);
//                            //http2.send("json_object="+string_json);
//                        }
//                    };
//                    http.open("GET","./json_item_list.json",true);
//                    http.send();

                    //En caso de que el codigo de arriba funcione, comentar lo de abajo
                    this.item_list.games.push({title: this.title, description: this.description, url: this.url});
                    this.title = ""; this.description = ""; this.url = "";
                    this.submitted = !this.submitted;
                },
                //This might actually solve my bus problem, if deleting an array item updates my
                //DOM (my component list "grid-list" and "title-view-list"), I won't need to tell
                //them to delete their item in parallel.
                //But I still need to tell the parent what index it is
                deleteGame: function(index){
                    console.log("deleting index: "+index);
                    this.item_list.games.splice(index,1);
                }
            }
        },
        Programming: {
            template: "#programming-view"
        }
    },
    mounted: function(){
        var that = this;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var json = this.responseText;
                var jsonObj = JSON.parse(json);
                for(var i = 0; i < jsonObj.cooking.length; i++){
                    var link = jsonObj.cooking[i].link;
                    var cooking_description = jsonObj.cooking[i].description;
                    that.cooking_links.push({link: link, description: cooking_description});
                }
                for(var j = 0; j < jsonObj.games.length; j++){
                    var title = jsonObj.games[j].title;
                    var game_description = jsonObj.games[j].description;
                    var url = jsonObj.games[j].url;
                    that.item_list.games.push({title: title, description: game_description, url: url});
                }
            }
        };
        http.open("GET","./json_item_list.json",true);
        http.send();
    } 
});
    