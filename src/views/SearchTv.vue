<template>
    <div class="searchTv">
        <v-header ref="header" @parentReload="parentReload"></v-header>
        <ul>
            <li v-for="(item,index) in searchResultList">
                <router-link :to="'/showTv/'+encodeURIComponent(item.href)+'/iqiyi/'+item.aid+'/' + item.title">
                    <img v-lazy="item.imgSrc"/>
                </router-link>
                <span class="jiNumber">{{item.jiNumber}}集全</span>
                <p v-html="item.title"></p>
            </li>
        </ul>
    </div>
</template>

<script type="module">
    import Header from "../views/Header";
    import axios from "axios";
    export default {
        components : {
            "v-header" : Header
        },
        inject:['reload'], //注入App里的reload方法
        data(){
            return {
                searchResultList : null,
            };
        },
        methods : {
            parentReload(){
                this.reload();
            }
        },
        created() {
            axios.get("/selectByTvLikeTitle?keyword=" + this.$route.params.keyword)
                .then((res) => {
                    this.searchResultList = res.data;
                });
        }
    }
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

    div.searchTv{
        width: 100%;
        position: relative;
    }

    div.searchTv ul {
        width: 100%;
        overflow: hidden;
    }

    div.searchTv ul li{
        float: left;
        width: 48%;
        height: 18.75rem;
        position: relative;
        margin: 0.125rem;
    }

    div.searchTv ul li img{
        width: 100%;
    }

    div.searchTv ul li p{
        text-align: center;
        height: 1.875rem;
        line-height: 1.875rem;
        margin: 0;
        position: relative;
        top: -1.25rem;
    }

    div.searchTv ul li p:nth-of-type(2){
        font-size: 0.75rem;
    }

    div.searchTv ul li span.jiNumber{
        position: relative;
        right: -7.3125rem;
        bottom: 1.5625rem;
        color: #FFFFFF;
    }
</style>