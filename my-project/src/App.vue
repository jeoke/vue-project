<template>
    <transition name="slide-fade">
    <!--用router-view指令渲染视图-->
      <router-view></router-view>
    </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style type="text/css">
  .slide-fade-enter-active{
    transition:all .3s ease;
  }
  .slide-fade-leave-active{
    transition:all .3s cubic-bezier(1.0,0.3,0.8,1.0);
  }
  .slide-fade-enter,.slide-fade-leave-active{
    transform:translateX(-430px);
    opacity:0;
  }
</style>