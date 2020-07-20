<template>
  <div class="home">
    <div class="items">
      <ul>
        <li><a href="/real">回首页</a></li>
        <li><router-link to="/tvResult/1" >电视剧</router-link></li>
        <li><a href="/movieResult?pageIndex=1">电影</a></li>
        <li><a href="/appResult?categoryId=-10&pageSize=60&pageContext=1">app</a></li>
        <li><a href="/imageResult?keyword=美女&pageIndex=1&pageSize=60">图片</a></li>
        <li><a href="/musicResult?keyword=音乐&pageIndex=1&pageSize=60">音乐</a></li>
        <li><a href="/getThunderPagingResult?classify=最新影片&pageIndex=1">迅雷下载</a></li>
        <li><a href="/baiduyunwangpanSearchResult?keyword=数据库&pageIndex=1">百度网盘</a></li>
        <li><a href="/cartoonIndex">动漫</a></li>
        <li><a href="/boke/getPages/0/30">博客系统</a></li>
        <li><a href="/logo/index">logo设计</a></li>
        <li><a href="/bilibili/index">哔哩哔哩</a></li>
        <li><a href="/iqiyi/showContent">爱奇艺专栏</a></li>
        <li><a href="/fiction/fiction">爱小说</a></li>
        <li><a href="/cloudMusic/index">网易云音乐</a></li>
        <li><a href="/youku/index">优酷专栏</a></li>
        <li><a href="/kuwo/index">酷我音乐</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {

  }
};
</script>

<style lang="less" scoped>

  *{
    margin: 0;
    padding: 0;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: #000000;
  }

  img{
    vertical-align: top;
  }

  div.items{
    width: 100%;
    height: 100px;
  }

  ul {
    width: 100%;
    overflow: hidden;
  }

  ul li{
    float: left;
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
</style>