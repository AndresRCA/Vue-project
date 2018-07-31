<template>
	<div class="column is-4 large-margin-bottom animated bounceInRight relative-pos">
		<div class="box" v-bind:class="{ 'removeable-item-grid': removeable, 'item-container': !removeable }">
			<span v-show="removeable" class="close-icon-grid icon"><i class="fa fa-times" @click="deleteItem"></i></span>
			<div class="image is-128x128 is-pulled-left" style="margin-bottom: 5px">
				<img v-bind:src="grid_item.link" alt="image">
			</div>
			<h2 class="break-words title is-6">{{ grid_item.title }}</h2>
			<p class="break-words is-small">{{ grid_item.description }}</p>
		</div>
	</div>            
</template>

<script>
export default {
	name: 'gridList',
	props: ['grid_item','removeable'],
	methods: {
		deleteItem() {
    	$(this.$el).addClass('fadeOutLeft'); //I'm thinking that $() may not be neccesary
    	setTimeout(() => {
    		this.$store.dispatch('videogames/removeGame', this.grid_item).
    		then((response) => {
    			console.log(response);
    		}).
    		catch((error) => {
    			console.log('Could not remove data, there is something wrong with the database: '+error);
    			$(this.$el).removeClass('fadeOutLeft');
    		});         
    	}, 800);
    }
  }
}
</script>