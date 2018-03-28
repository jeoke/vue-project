<template>
<div class="book-list">
     <div class="header">
       <div class="heading">{{ heading }}</div>
       <div class="more">更多...</div>
     </div>
     <div class="book-items">
       <div class="book" v-for="book in books" @click="$emit('onBookSelect',book)">
         <div class="cover">
            <img :src="book.img_url"/>
         </div>
         <div class="title">{{ book.title }}</div>
         <div class="authors">{{ book.authors | join }}</div>
       </div>
     </div>
</div>
</template>
<script>
export default {
  name:"BookList",
	props:[
	    'heading',
	    'books'
	],
	filters:{
	   join(args){
	      return args.join('.')
	   }
	}
}
</script>
<style type="text/css">
  .book-items .book{
    padding: 5px;
    width:300px;
    float: left;
    text-align: center;
  }
  .book-items:after{
      content: "";
      clear: both;
      display: block;
      height: 0;
      visibility: hidden;
  }
</style>