<template>
    <div>
        <iframe></iframe>
        <ul>
            <li v-for="(item,index) in tvResult">
                <a :data="item.url" v-html="index + 1" @click="dealIndexClickFunc"></a>
            </li>
        </ul>
        <h1 v-html="result"></h1>
    </div>
</template>

<script type="module">
    import axios from "axios";
    import $ from "jquery";
    export default {
        data(){
            return {
                tvResult : null,
                result : null
            };
        },
        methods: {
          dealIndexClickFunc(event){
              $("iframe").attr("src","https://api.smq1.com/?url=" + $(event.target).attr("data"));
          }
        },
        created() {
            let url = this.$route.params.url;
            let aid = this.$route.params.aid;
            axios.get("/showTvMaps?url=" + url + "&platform=iqiyi&aid=" + aid)
                .then(res=>{
                    this.tvResult = res.data;
                    console.dir(this.tvResult)
                    if (this.tvResult.length === 0){
                        this.result = "播放列表为空！！！";
                    }
                    else{
                        $("iframe").attr("src","https://api.smq1.com/?url=" + this.tvResult[0].url);
                    }
                });
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

    ul {
        width: 100%;
        overflow: hidden;
    }

    ul li{
        float: left;
        background-color: #CCCCCC;
        width: 1.875rem;
        height: 1.875rem;
        text-align: center;
        line-height: 1.875rem;
        margin: 0.3125rem;
    }

    iframe{
        width: 100%;
        outline: none;
        background-color: #000000;
    }

    h1{
        text-align: center;
        margin: 0.3125rem;
        color: #FF0000;
    }
</style>