<template>
<div class="dialog-wrapper" :class="{open:is_open}">
   <div class="overlay" @click="close"></div>
   <div class="dialog" :class="{open:is_open}">
     <div class="heading">
       <slot name="header"></slot>
     </div>
     <div>
       <slot></slot>
     </div>
   </div>
</div>   
</template>

<script>
   import "@/assets/css/dialog.css"
   export default {
      data(){
          return {
             is_open:false
          }
      },
      methods:{
          open(){
             if(!this.is_open){
                this.$emit('dialogOpen')
             }
             this.is_open = true
          },
          close(){
             if(this.is_open){
                this.$emit('dialogClose')
             }
             this.is_open = false
          }
      }
   }
</script>
-->
<style>
   .dialog{
      position:absolute;
      top:24px;
      left:24px;
      right:24px;
      bottom:24px;
      display:none;
      background:#fff;
      box-shadow: 0 0 10px rgba(0,0,0,.5);
      z-index:500;
   }
   .dialog.open{
      display:block;
   }
</style>