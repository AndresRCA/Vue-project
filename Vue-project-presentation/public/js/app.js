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
            games: [
                { id: 1, title: 'Nier Automata', description: 'Interesting game, I\'m not a fan of hack and slash games but this one actually seems very fun to play, the story is also something else.', link: 'https://vignette.wikia.nocookie.net/nier/images/9/9f/Nier_Automata_Cover_JP.jpg/revision/latest?cb=20161222192918' },
                { id: 2, title: 'SSBM', description: 'Great fighting game.', link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6P91ZmzTrwZczhLuKtpsG3h0g3ev3vUjuityYFGbJzim_w_jv' },
                { id: 3, title: 'Persona 5', description: 'Best JPRG I\'ve played, just when you think the game is about to end it adds 20 more hours of playtime, amazing.', link: 'https://cdn4.dualshockers.com/wp-content/uploads/2016/06/P5_promocovers_PS4.jpg' },
                { id: 4, title: 'Bioshock', description: 'Would you kindly play this game? I\'ve never played a game that felt so deep and good to play, the story definitely improves the gameplay.', link: 'http://www.blogcdn.com/www.joystiq.com/media/2008/08/final_bioshock_cover_0.jpg' }
            ],
            recipes: [
                { title: 'Uuummmm, this is a tasty burger!', description: 'Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I\'m in a transitional period so I don\'t wanna kill you, I wanna help you. But I can\'t give you this case, it don\'t belong to me. Besides, I\'ve already been through too much shit this morning over this case to hand it over to your dumb ass.', link: 'http://slipsum.com/' },
                { title: 'No, motherfucker', description: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.", link: 'http://slipsum.com/' },
                { title: 'No man, I don\'t eat pork', description: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.", link: 'http://slipsum.com/' }
            ]
        },
        id: 4, //actual id value, just to simulate a database primary key
        cooking_links: [
            { name: 'Serious Eats', link: 'http://www.seriouseats.com/' },
            { name: 'Reddit\'s Askculinary', link: 'https://www.reddit.com/r/AskCulinary/' },
            { name: 'Reddit /r/food', link: 'https://www.reddit.com/r/food/' }
        ]
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
                case 'Cooking': return { borderTop: '1px solid #f38d3e' };
                case 'Videogames': return { borderBottom: 'none', borderTop: '1px solid #5096db' };
                case 'Programming': return{ borderTop: '1px solid #a0ed58' };
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
                    setTimeout(function(){ //a way to simulate the waiting time for the server response
                        name_parent.removeClass('is-loading');
                        link_parent.removeClass('is-loading');
                        that.cooking_links.push({ name: name_input.val(), link: link_input.val() });
                    }, 300);
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
                    var id = ++this.$parent.id;
                	var title = $('input[name=title]').val();
                	var description = $('textarea[name=description]').val();
                	var link = $('input[name=link]').val();

                	this.submitted = !this.submitted;
                    this.item_list.games.push({ id, title, description, link });
                    this.title = ''; this.description = ''; this.link = '';
                },
                deleteGame: function(index, id){
                    console.log('deleting item with index of '+index+' with id '+id);
                	this.item_list.games.splice(index, 1);
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
                    view: 'laravel',
					message_height: 0
                };
            },
            methods: {
				laravel: function(id){
					//remove any active link from the other section
                    if(this.view != 'laravel'){
                        document.getElementById('e1').className = '';
                        document.getElementById('e2').className = '';
                        document.getElementById('e3').className = '';
                        this.view = 'laravel';
                        setTimeout(function(){
                            document.getElementById(id).scrollIntoView(); //href doesn't bring me to the id because the view isn't loaded, this is just for the case when the active view is laravel
                        }); //surprisingly, this is one of those times that if I don't do it this way, the code won't work, probably due to Vue rendering components
                    }
				},
				es6: function(id){
                    if(this.view != 'es6'){
                        //remove any active link from the other section
                        document.getElementById('l1').className = '';
                        document.getElementById('l2').className = '';
                        document.getElementById('l3').className = '';
                        document.getElementById('l4').className = '';
                        this.view = 'es6';
                        setTimeout(function(){
                            document.getElementById(id).scrollIntoView();
                        });
                    }
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
					
					if(that.$parent.current_view != 'Programming') return;
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
    }
});