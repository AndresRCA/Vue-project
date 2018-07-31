<template id="title-view-list">
  <div class="box content is-clearfix is-radiusless margin-bottom animated lightSpeedIn" v-bind:class="{ 'removeable-item-title': removeable, 'title-view-content': !removeable }" style="min-height: 0">
    <h3>{{ title_view_item.title }}
      <span v-show="!show_content && !removeable" class="icon is-pulled-right" v-on:click="slide"><i class="fa fa-chevron-down"></i></span>
      <span v-show="show_content && !removeable" class="icon is-pulled-right" v-on:click="slide"><i class="fa fa-chevron-up"></i></span>
      <span v-show="removeable" class="close-icon-title is-pulled-right" v-on:click="deleteItem"><i class="fa fa-times"></i></span>
    </h3>
    <div class="slider" style="margin-top: 10px">
      <div class="image img-size-title margin-right is-pulled-left margin-bottom">
        <img v-bind:src="title_view_item.link" alt="Image url needed">
      </div>                        
      <p class="break-words" style="padding: 15px 10px;">{{ title_view_item.description }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'titleViewList',
    props: ['title_view_item','removeable'],
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
  }
</script>
