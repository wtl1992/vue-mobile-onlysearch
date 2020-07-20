<template>
    <div class="tv">
        <v-header></v-header>
        <ul>
            <li v-for="(item,index) in tvList">
                <router-link :to="'/showTv/'+encodeURIComponent(item.href)+'/iqiyi/'+item.albumId+'/' + item.title">
                    <img v-lazy="item.imgSrc"/>
                </router-link>
                <span class="jiNumber">{{item.jiNumber}}</span>
                <p v-html="item.title"></p>
                <p v-html="item.subTitle"></p>
            </li>
        </ul>
    </div>
</template>
<script type="module">
    import Vue from "vue";
    import axios from "axios";
    import $ from "jquery";
    import VueLazyLoad from "vue-lazyload";
    import Header from "../views/Header";

    Vue.use(VueLazyLoad, {
        loading: require("../assets/images/bg.gif"),
        error: require("../assets/images/bg.gif")
    });

    export default {
        components :{
            "v-header" : Header
        },
        data() {
            return {
                tvList: null
            };
        },
        created() {
            let _this = this;
            axios.get("/tvPlayResult?pageIndex=1")
                .then((res) => {
                    _this.tvList = res.data.tvList;
                });

            let flag = true;
            let pageIndex = 1;

            $(window).scroll(function() {
                if ($(document).scrollTop() >= ($(document).height() - $(window).height()) * 0.9) {
                    if (flag){
                        pageIndex ++;
                        flag = false;
                        axios.get("/tvPlayResult?pageIndex=" + pageIndex)
                            .then((res) => {
                                let tvList = res.data.tvList;
                                for (let i=0;i<tvList.length;i++){
                                    _this.tvList.push(tvList[i]);
                                }
                                flag = true;
                            });
                    }
                }
            });
        },
        methods: {}
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

    div.tv{
        width: 100%;
        position: relative;
    }

    div.tv ul {
        width: 100%;
        overflow: hidden;
    }

    div.tv ul li{
        float: left;
        width: 48%;
        height: 18.75rem;
        position: relative;
        margin: 0.125rem;
    }

    div.tv ul li img{
        width: 100%;
    }

    div.tv ul li p{
        text-align: center;
        height: 1.875rem;
        line-height: 1.875rem;
        margin: 0;
        position: relative;
        top: -1.25rem;
    }

    div.tv ul li p:nth-of-type(2){
        font-size: 0.75rem;
    }

    div.tv ul li span.jiNumber{
        position: relative;
        right: -7.3125rem;
        bottom: 1.5625rem;
        color: #FFFFFF;
    }
</style>