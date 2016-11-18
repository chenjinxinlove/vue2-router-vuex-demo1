<template>
  <div class="footer">
    <div>
      <router-link to="/index"><span class="icon-shouve iconfont"><p>首页</p></span></router-link>
      <router-link to="/page1"><span class="icon-xitongcaidan iconfont"><p>分类</p></span></router-link>
      <router-link to="/home"><span class="icon-myline iconfont"><p>个人</p></span></router-link>
    </div>
  </div>
</template>

<script>
  require('../css/footer.scss')

  export default{
    data () {
      return { }
    }
  }
</script>
