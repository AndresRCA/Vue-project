/*jshint esversion: 6*/
Vue.component('grid-list',{
    props: ['grid_item','removeable'],
    template: '#grid-list',
    methods: {
        deleteItem: function(){
            $(this.$el).addClass('fadeOutLeft');
            var that = this;
            setTimeout(function(){
                //this emit should notify the parent to delete their item in the array
                that.$emit('item_deleted');         
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
            $(this.$el).removeClass('lightSpeedIn').addClass('fadeOutRight');
            var that = this;
            setTimeout(function(){
                that.$emit('item_deleted');
            }, 900);
        },
        slide: function(){
            $(this.$el).children('.slider').slideToggle(200, () => {
                this.show_content = !this.show_content;
            });
        }
    }
});

Vue.component('recipes',{
    props: ['recipe'],
    template: `<div class="column is-6 recipe-wrapper animated fadeInUpBig">
                    <h1><a v-bind:href="recipe.link">{{ recipe.title }}</a></h1>
                    <hr>
                    <div class="recipe-image" style="background-image: url('./images/gastronomy.jpg')"></div>
                    <div class="recipe-body">
                        <p>{{ recipe.description }}</p>
                    </div>
                    <hr>
                    <div class="recipe-footer"></div>
               </div>`
});

Vue.component('es6',{
    template: '#ES6'
});

Vue.component('laravel',{
    template: '#laravel'
});

var app = new Vue({
    el: '#app',
    data:{
        current_view: 'Home',
		show_menu: false,
        item_list : {
            games: [],
            recipes: []
        },
        cooking_links: []
    },
    computed: {
        headerStyle: function(){		      	      
            switch(this.current_view){
                case 'Home': return {};
                case 'Cooking': return { backgroundColor: '#f6a96e' };
                case 'Videogames': return { backgroundColor: '#7aafe4' };
                case 'Programming': return{ backgroundColor: '#baf286' };
            }
        },
        navStyle: function(){
            switch(this.current_view){
                case 'Home': return {};
                case 'Cooking': return { marginBottom: 0, borderTop: '1px solid #f38d3e' };
                case 'Videogames': return { marginBottom: 0, borderBottom: 'none', borderTop: '1px solid #5096db' };
                case 'Programming': return{ marginBottom: 0, borderTop: '1px solid #a0ed58' };
            }
        }
    },
    components: {
        Home: {
            template: '#home-view'
        },
        Cooking: {
            template: '#cooking-view',
            props: ['item_list','cooking_links'],
            methods: {
                addWebsite: function(){
                    var name_input = $('input[name = websiteName]');
                    var link_input = $('input[name = websiteLink]');
                    var name_parent = name_input.parent();
                    var link_parent = link_input.parent();

                    name_parent.addClass('is-loading');
                    link_parent.addClass('is-loading');

                    var that = this;
                    $.ajax({
                        url: '/cooking',
                        type: 'post',
                        data: { 'name': name_input.val(), 'link': link_input.val() },
                        success: function(_response){
                            name_parent.removeClass('is-loading');
                            link_parent.removeClass('is-loading');
                            console.log('it is done');
                            console.log(_response);
                            name_input.val(''); link_input.val('');
                            that.cooking_links.push({ name: _response.name, link: _response.link });
                        },
                        error: function(_response){
                            name_parent.removeClass('is-loading');
                            link_parent.removeClass('is-loading');
                            console.log('error');
                            console.log(_response);
                        }
                    });
                }
            }
        },
        Videogames: {
            props: ['item_list'],
            template: '#videogame-view',
            data: function(){
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
                };
            },
            methods: {
                insertGameToList: function(){    
                	var that = this;

                	var title = $('input[name=title]').val();
                	var description = $('textarea[name=description]').val();
                	var link = $('input[name=link]').val();
                	//var _token = $('input[name=_token]').val();

                	this.submitted = !this.submitted;
					$.ajax({
						url: '/videogames',
						type: 'post',
						data: { 'title': title, 'description': description, 'link': link },
						success: function(_response){
							console.log('it is done');
							console.log(_response);
							that.item_list.games.push({ id: _response.id, title: _response.title, description: _response.description, link: _response.link} );
		                    that.title = ''; that.description = ''; that.link = '';
						},
						error: function(_response){
							console.log('error');
						}
					});
                },
                deleteGame: function(index, id){
                    console.log('deleting item with index of '+index+' and id of '+id);
                    var that = this;
                    $.ajax({
                    	url: '/videogames/delete',
                        //url: '/videogames/delete/'+id, //I could do this instead...
                    	type: 'delete',
                    	data: { //maybe I could just send a number instead of an object, like data: id
                    		'id': id
                    	},
                    	success: function(_response){
                    		console.log('delete successful');
	                    	that.item_list.games.splice(index, 1);
                    	},
                    	error: function(_response){
                    		console.log('couldn\'t delete');
                    	}
                    });
                },
                slideView: function(){
                    $('#slideView').slideToggle(200, () => {
                        this.show_content = !this.show_content;
                    });
                }
            }
        },
        Programming: {
            template: '#programming-view',
            data: function(){
                return {
                    view: 'laravel'
                };
            },
            methods: {
                removeRWC: function(){
                    //code that removes element with id of readWithCaution
                }
            }
        }
    },
    mounted: function(){
    	var that = this;

        var cooking_websites = JSON.parse(document.currentScript.getAttribute('cooking_websites'));
		cooking_websites.forEach(function(obj){
			that.cooking_links.push({ name: obj.name, link: obj.link });
		});

		var recipes = JSON.parse(document.currentScript.getAttribute('recipes'));
		recipes.forEach(function(obj){
			that.item_list.recipes.push({ title: obj.title, description: obj.description, link: obj.link });
		});

		var games = JSON.parse(document.currentScript.getAttribute('games'));
		games.forEach(function(obj){
			that.item_list.games.push({ id: obj.id, title: obj.title, description: obj.description, link: obj.link });
		});
        /*$.ajax({
            url: '/',
            type: 'get',
            success: function(_response){ //the array should be like so [ [websites], [recipes], [games] ]
                                          //or [ {'category': 'cooking_websites', 'objects': [ {} ] }, {...}, {...} ]
                _response.forEach(function(mainObj){
                    switch(mainObj.category){
                        case 'cooking_websites':
                            mainObj.objects.forEach(function(obj){
                                that.cooking_links.push({ name: obj.name, link: obj.link });
                            });
                            break;

                        case 'recipes':
                            mainObj.objects.forEach(function(obj){
                                that.item_list.recipes.push({ title: obj.title, description: obj.description, link: obj.link });
                            });
                            break;

                        case 'games':
                            mainObj.objects.forEach(function(obj){
                                that.item_list.games.push({ id: obj.id, title: obj.title, description: obj.description, link: obj.link });
                            });
                    }
                });
            },
            error: function(_response){
                console.log('if this error does shows up, that means your database is fucked');
            }
        });*/
    }
});