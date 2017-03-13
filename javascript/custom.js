Vue.component('grid-list',{
    props: ['grid_list','removeable'],
    template: '#grid-list'
});

Vue.component('title-view-list',{
    props: ['title_view_list','removeable'],
    template: '#title-view-list',
    data: function(){
        return {show_content: false};
    }
});

new Vue({
    el: '#app',
    data:{
        current_view: "home",
        item_list : {
            games: [],
            animes: []
        }
    },
    computed: {
        headerStyle: function(){
            switch(this.current_view){
                case "home": return {};
                case "cooking": return {backgroundColor: "#ea883d"};
                case "anime": return {backgroundColor: "#f74e4e"};
                case "videogames": return {backgroundColor: "#7aafe4"};
                case "programming": return{backgroundColor: "#abf169"};
            }
        },
        navStyle: function(){
            switch(this.current_view){
                case "home": return {};
                case "cooking": return {marginBottom: 0, borderTop: "1px solid #e36f18"};
                case "anime": return {marginBottom: 0, borderBottom: "none", borderTop: "1px solid #f63f3f"};
                case "videogames": return {marginBottom: 0, borderBottom: "none", borderTop: "1px solid #6da7e2"};
                case "programming": return{marginBottom: 0, borderTop: "1px solid #91f068"};
            }
        }
    },
    components: {
        home: {
            template: "#home-view"
        },
        cooking: {
            template: "#cooking-view"
        },
        anime: {
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
                }
            }
        },
        videogames: {
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
                }
            }
        },
        programming: {
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
                for(var i = 0; i < jsonObj.list.length; i++){
                    var title = jsonObj.list[i].title;
                    var description = jsonObj.list[i].description;
                    var url = jsonObj.list[i].url;
                    that.item_list.games.push({title: title, description: description, url: url});
                }
            }
        };
        http.open("GET","./json_item_list.json",true);
        http.send();
    } 
});
    