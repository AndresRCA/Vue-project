Vue.component('grid-list',{
    props: ['grid_item','removeable'],
    template: '#grid-list',
    methods: {
        deleteItem: function(){
            $(this.$el).addClass("fadeOutLeft");
            var that = this;
            setTimeout(function(){
                //this emit should notify the parent to delete their item in the array
                that.$emit("item_deleted");         
            }, 800);
        }
    }
});

Vue.component('title-view-list',{
    props: ['title_view_item','removeable'],
    template: '#title-view-list',
    data: function(){
        return {
            show_content: false
        };
    },
    methods: {
        deleteItem: function(){
            $(this.$el).removeClass('lightSpeedIn').addClass("fadeOutRight");
            var that = this;
            setTimeout(function(){
                that.$emit("item_deleted");
            }, 900);
        }
    }
});

Vue.component('recipes',{
    props: ["recipe"],
    template: `<div class="col-md-6 recipe-wrapper animated fadeInUpBig">
                    <h1><a v-bind:href="recipe.link">{{ recipe.name }}</a></h1>
                    <hr>
                    <div class="recipe-image" style="background-image: url('./images/gastronomy.jpg')"></div>
                    <div class="recipe-body">
                        <p>{{ recipe.description }}</p>
                    </div>
                    <hr>
                    <div class="recipe-footer"></div>
               </div>`
});

//Vue.component('notification-view',{
//    props: ['notification'],
//    template:  `<div class="notification-wrapper col-sm-2">
//                    <h3><span class="glyphicon glyphicon-phone"></span> Notifications</h3>
//                    <hr>
//                    <div id="notification-view">
//                        <notification v-bind:comment="notification"></notification>
//                    </div>
//                </div>`
//});
//
//Vue.component('notification',{
//    props: ["comment"],
//    template: `<div v-show="comment != ''" class="animated infinite" v-bind:class="{'create-space': isAStatement || isAQuestion, 'pulse': isAQuestion, 'tada': isAStatement}">
//                    <div class="notification">
//                        <span class="question animated infinite pulse" v-show="isAQuestion">?</span><span class="statement animated infinite tada" v-show="isAStatement">!</span>
//                        <blockquote><p>{{ comment }}</p></blockquote>
//                    </div>
//               </div>`,
//    data: function(){
//        return {
//            isAQuestion: (this.comment.indexOf("?") != -1 && this.comment.indexOf("!") == -1),
//            isAStatement: (this.comment.indexOf("!") != -1 && this.comment.indexOf("?") == -1)
//        };
//    },
//    mounted: function(){
//        //A matter of preference
//        //Stop animation when hovered
////        $(this.$el).hover(function(){
////            $(this).removeClass('infinite');
////        },function(){
////            $(this).addClass('infinite');
////        });
//        //Stop animation when clicked
////        $(this.$el).click(function(){
////            $(this).removeClass('infinite');
////        });
//        //Stop animation eventually
//        var that = this;
//        setTimeout(function(){
//            $(that.$el).removeClass('infinite');
//        },2000); 
//    }
//});

new Vue({
    el: '#app',
    data:{
        current_view: "Home",
        item_list : {
            games: [],
            recipes: []
        },
        cooking_links: []
    },
    computed: {
        headerStyle: function(){		      	      
            switch(this.current_view){
                case "Home": return {};
                case "Cooking": return {backgroundColor: "#f6a96e"};
                case "Videogames": return {backgroundColor: "#7aafe4"};
                case "Programming": return{backgroundColor: "#baf286"};
            }
        },
        navStyle: function(){
            switch(this.current_view){
                case "Home": return {};
                case "Cooking": return {marginBottom: 0, borderTop: "1px solid #f38d3e"};
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
            props: ['item_list','cooking_links']
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
                for(var i = 0; i < jsonObj.cooking_websites.length; i++){
                    var link = jsonObj.cooking_websites[i].link;
                    var cooking_description = jsonObj.cooking_websites[i].description;
                    that.cooking_links.push({link: link, description: cooking_description});
                }
                for(i = 0; i < jsonObj.recipes.length; i++){
                    var name = jsonObj.recipes[i].name;
                    var description = jsonObj.recipes[i].description;
                    var link = jsonObj.recipes[i].link;
                    that.item_list.recipes.push({name: name, description: description, link: link});
                }
                for(i = 0; i < jsonObj.games.length; i++){
                    var title = jsonObj.games[i].title;
                    var game_description = jsonObj.games[i].description;
                    var url = jsonObj.games[i].url;
                    that.item_list.games.push({title: title, description: game_description, url: url});
                }
            }
        };
        http.open("GET","./json_item_list.json",true);
        http.send();
    } 
});
    