<template>
    <div>
        <div class="oneLine">
            <a title="祥龙检索，搜电视剧"><img src="../assets/images/tv/homelogo.png"/></a>
        </div>
        <p class="searchTag">可以搜索电视剧名称或者演员名字等</p>
        <div class="searchArea">
            <p><input type="text" title="可以搜索电视剧名称或者演员名字等" v-model="keyword"/></p>
            <router-link :to="'/tvSearchResult/' + keyword" class="searchButton" @click.native="clickFunc">千度电视剧</router-link>
        </div>

        <div id="fixed_top">
            <div class="searchArea">
                <p><input type="text" title="可以搜索电视剧名称或者演员名字等" v-model="keyword"/></p>
                <a>千度电视剧</a>
            </div>
        </div>
    </div>
</template>


<script type="module">
    import $ from "jquery";
    $(function () {
        $(document).scroll(function () {
            if ($(this).scrollTop() >= 180){
                $("div#fixed_top").css("display","block");
            }
            if ($(this).scrollTop() < 140){
                $("div#fixed_top").css("display","none");
            }
        });
    });

    export default {
        data(){
            return {
                keyword : ""
            };
        },
        methods : {
            clickFunc(){
                this.$emit("parentReload");
            }
        },
        watch :{
            keyword(){
                this.$emit("updateData");
            }
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

    div.oneLine{
        margin: 0 auto;
        text-align: center;
        height: 5rem;
        line-height: 5rem;
    }

    div.oneLine a {
        display: block;
    }

    div.oneLine a img{
        width: 14.25rem;
    }


    div.searchArea{
        width: 100%;
        height: 3.4375rem;
        line-height: 3.4375rem;
        margin: 0 auto;
        position: relative;
    }

    div.searchArea p{
        text-align: center;
        float: left;
        width: 73%;
        height: 100%;
        line-height: 3.4375rem;
        margin: 0.625rem 0;
    }

    p.searchTag{
        width: 100%;
        text-align: center;
    }

    div.searchArea p input{
        width: 92%;
        height: 100%;
        outline: none;
        font-size: 1.5625rem;
        line-height: 3.4375rem;
        padding-left: 0.375rem;
        transition: all 1s;
        border: 0.0625rem solid #1f36ff;
    }

    div.searchArea p input:focus{
        border: 0.0625rem solid #3385ff;
    }

    div.searchArea a {
        float: left;
        width: 5.8125rem;
        height: 3.5625rem;
        line-height: 3.5625rem;
        background-color: #3385ff;
        position: relative;
        top: 0.625rem;
        left: -0.4375rem;
        color: #FFFFFF;
        text-align: center;
    }

    div#fixed_top{
        position: fixed;
        width: 100%;
        z-index: 9999999;
        left: 0;
        top: 0.375rem;
        display: none;
    }

    div#fixed_top div.searchArea{
        margin: 0 auto;
    }
</style>

