
<template>
   <div class="home">
      <div class="section">
              <!--热门推荐-->
              <div class="swiper-container" ref="slider">
                 <div class="swiper-wrapper" >
                     <router-link class="swiper-slide" tag="div" :to="{name:'BookDetail',
                     params:{id:slide.id}}"  v-for="slide in sliders" :key="slide.id">
                     <img :src="slide.img_url"/>
                     </router-link>
                 </div>
                 <div class="swiper-pagination" ref="pagination">
                 </div>   
              </div>
              <!-- 快讯 -->
              <div class="announcement">
                <label>快讯</label>
                <span>{{announcement}}</span>
              </div>
      </div>

      <div class="section">
        <book-list :books="latestUpdated" heading="新书上架" @onBookSelect="preview($event)">
        </book-list>
      <div class="section">
         <book-list :books="recommended" heading="编辑推荐">
         </book-list>
      </div>
      <!--
      <modal-dialog ref="dialog" @dialogClose="selected=undefined">
         <div slot="header">此处是slot插槽内容</div>
         <div class="dismiss" @click.prevent="$refs.dialog.close()">这个DIV将自动默认插槽的内容</div>
         <div>
           <img :src="selected.img_url">
         </div>
         <div>
           {{ selected.title }}
         </div>
      </modal-dialog>
      -->
      <modal-dialog ref="dialog" @dialogClose="selected=undefined">
        <div slot="heading">此处是slot插槽内容</div>
        <div class="dismiss" @click.prevent="$refs.dialog.close()">
          自动默认插槽内容
        </div>
        
        <div>
          <img :src="selected.img_url" v-if="selected"/>
        </div>
      </modal-dialog>
   </div>
   
   </div>
</template>

<script>
   import Swiper from "swiper"
   import "@/assets/css/swiper.css"
   import ModalDialog from "@/components/dialog.vue"
   import BookList from "@/components/Booklist.vue"
   //import faker from "@/faker.js"
   import axios from 'axios'

   //开发环境
   const debug = process.env.NODE_ENV !== 'production'; 

   export default {
       updated(){
          new Swiper(this.$refs.slider,{
              pagination:{
              el : this.$refs.pagination,
              clickable:true
              },
              spaceBetween:30,
              centeredSlides:true,
              autoplay: true,
              loop:true
          })
       },
       data(){
          return{
                  announcement:'',
                  sliders:[],
                  latestUpdated:[],
                  recommended:[],
                  selected:undefined
          }
       },
       created(){
        /*
           if (debug) {
            const fakeData = faker.getHomeData();
            for (prop in fakeData) {
              this[prop] = fakeData[prop]
            }
           }else{
\   */   
          axios.get('/home').then(res => {              
              for(let i in res.data){
                this[i] = res.data[i]
              }
          },error => {
              console.log("获取数据失败：${error}")
          })


       },
      
       methods:{
          preview(book){
            console.log("图书详情")
             this.selected = book
             this.$refs.dialog.open()
          },

       },
       components:{
          BookList,
          ModalDialog
       }
   }
</script>
<style type="text/css">
.section img{
   width: 300px;
   height: 300px;
}
.swiper-container {
    width: 300px;
    height: 300px;
}  
</style>