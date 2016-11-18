<template>
  <div class="index">
    <com-img-scroll :img-data="imgData"></com-img-scroll>
    <div class="center">
      <a class="list"><span class="icon-sheshixiaomao iconfont icon"></span><p>猫</p></a>
      <a class="list"><span class="icon-sheshixiaogou iconfont icon"></span><p>狗</p></a>
      <a class="list"><span class="icon-yangyouchongwu iconfont icon"></span><p>其他</p></a>
    </div>
    <com-list :list-data="resData"></com-list>
    <com-loading v-if="loading"></com-loading>
  </div>
</template>
<script>
  import imgScroll from '../components/imgScroll.vue'
  import list from '../components/list.vue'
  import loading from '../components/loading.vue'
  import axios from 'axios'

  require('../css/index.scss')

  export default {
    data: function () {
      return {
        data: 'index',
        num: 1,
        resData: {},
        imgData: {}
      }
    },
    created () {
      this.fetchData();
      this.$store.commit('changeIndexConf',{
        isFooter: true,
        isSearch: true,
        isBack: false,
        isShare: false,
        title: ''
      })
  },
  components: {
    comImgScroll: imgScroll,
    comList: list,
    comLoading: loading
  },
  computed: {
    loading: function() {
      return this.$store.state.comn.loading
    }
  },
  methods: {
    randomNum: function　() {
      return {}
    },
    fetchData: function () {
      let vm = this;
      vm.$store.commit('isLoading',true)
      axios.get('/index/getImgList').then(res => {
        vm.imgData = res.data.data
      })
      axios.get('/index/getList').then(res => {
        vm.resData = res.data.data
        vm.$store.commit('isLoading', false)
      })
    }
  }
  }
</script>
