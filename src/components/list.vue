<template>
    <div class="com-list">
      <div class="tilte">推荐</div>
      <ul>
        <li class="list-li" v-for="(value,key) in doList">
          <div class="user">
            <img :src="value.userIcon">
            <div class="name">
              <p>{{value.name}}</p>
              <div class="tag">
                <span v-for="item in value.tag">{{item}}</span>
              </div>
            </div>
            <router-link :to="{  name: 'article', params: { id: value.articleId }}" class="btn-d btn-s" >详情</router-link>
          </div>

          <div class="detail">
            <p>{{value.detail}}</p>
            <ul :class="['clearfix', 'img-box', {r3:value.imgGrounp.length > 1 ? true : false}]">
              <li v-for="item in value.imgGround">
                <img :src="item">
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
  require('../css/list.scss')

  let data = {
    doListData : {}
  }
  export default {
    data: function () {
      return data
    },
    props: ['listData'],
    computed: {
      doList: function() {
          if(this.listData.code == 1000){
            this.doListData = this.listData.data;
            return this.doListData;
          }

      }
    }
  }
</script>
