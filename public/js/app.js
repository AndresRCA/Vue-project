/*jshint esversion: 6*/
Vue.component('grid-list',{
    props: ['grid_item','removeable'],
    template: '#grid-list',
    methods: {
        deleteItem: function(){
            $(this.$el).addClass('fadeOutLeft'); //I'm thinking that $() may not be neccesary
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
    template: '#LARAVEL'
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
                    show_content: false/*,
                    games: []*/
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
            }/*, //I'd like to add a more interesting way to show the list of games, one after another with delays inbetween
            mounted: function(){ //maybe it should be created:, also this should only be called once, not multiple times
                //maybe add a loading icon so that "looks like there's nothing here" doesn't appear yet, another
                //thing, the only purpose of this is to add a nice animated entry for the games so... I may do this
                //to only the videogames view, the rest doesn't need something like this                
                var that = this;
                $.ajax({
                    url: '/videogames',
                    type: 'get',
                    success: function(_response){
                        console.log('games fetched');
                        setTimeout(function(){
                            _response.forEach(function(game){
                                that.games.push(game);
                            });
                        }, 200);
                    },
                    error: function(_response){
                        console.log('couldn\'t fetch games');
                    }
                });
            }*/

        },
        Programming: {
            template: '#programming-view',
            data: function(){
                return {
                    view: 'laravel',
					message_height: 0
                };
            },
            methods: {
				laravel: function(){
					//remove any active link from the other section
					document.getElementById('e1').className = '';
					document.getElementById('e2').className = '';
					document.getElementById('e3').className = '';
					this.view = 'laravel';
				},
				es6: function(){
					//remove any active link from the other section
					document.getElementById('l1').className = '';
					document.getElementById('l2').className = '';
					document.getElementById('l3').className = '';
					document.getElementById('l4').className = '';
					this.view = 'es6';
				},
                removeRWC: function(){
                    document.getElementById('readWithCaution').remove();
					this.message_height = 0;
                }
            },
			mounted: function(){
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