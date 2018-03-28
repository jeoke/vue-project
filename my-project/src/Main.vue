<template>
<div id="App">
  <div class="tabs">
          <ul>
             <!--router-link指令自定义-->
               <router-link :to="{name:'Home'}" tag="li" exact>
                <div><img src="./assets/office.png"></div>
                <div>首页</div>
               </router-link>

             <!--router-link指令自定义-->
               <router-link :to="{name:'Categories'}" tag="li" exact>
                <div><img src="./assets/Category.png"></div>
                <div>分类</div>
               </router-link>

             <!--router-link指令自定义-->
               <router-link :to="{name:'ShoppingCart'}" tag="li" exact>
                <div><img src="./assets/cart.png"></div>
                <div>购物车</div>
               </router-link>

             <!--router-link指令自定义-->
               <router-link :to="{name:'Me'}" tag="li" exact>
                <div><img src="./assets/account.png"></div>
                <div>关于我</div>
               </router-link>
             </li>
          </ul>
       </div>
       <div id="content">
         <!--用router-view指令渲染视图-->
           <router-view></router-view>
  </div>
</div>
</template>
<script type="text/javascript">
  export default{
    name:"Main"
  }
</script>
<style type="text/css">
.tabs li{
  display: block;
  float: left;
  list-style: none;
  padding-left: 20px;
}
ul{
  margin: 0px;
}

</style>