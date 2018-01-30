<template>
    <div>
        <my-header></my-header>
        <div class="note">
            <!--文章区域-->
            <div class="post">
                <!--正文-->
                <div class="article">
                    <h1 class="title">月薪三千,就该去死吗？</h1>
                    <div class="author">
                        <nuxt-link class="avatar" to="/u/123">
                            <img src="~/assets/img/1.jpg" alt="">
                        </nuxt-link>
                        <div class="info">
                            <span class="name">测试用户</span>
                            <a href="javascript:void(0)" class="btn btn-success"
                               @click="order" ref="orders" v-bind:class="{follow:isActive,order:has}"
                            @mouseover="goin" @mouseleave="exit">
                                <i class="fa fa-plus-square-o"></i>
                                关注
                            </a>
                            <div class="meta">
                               <span>2018.01.23 16:09</span>
                                <span>字数 2273</span>
                                <span>阅读 888</span>
                                <span>评论 7</span>
                                <span>喜欢 33</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--悬浮的操作框-->
            <div class="side-bar"></div>
            <!--对应的推荐阅读-->
            <div class="note-bottom"></div>
        </div>
    </div>
</template>

<script>
    import myHeader from '~/components/myHeader'
    export default {
      components:{
          myHeader
      },
        data(){
          return{
              isActive:true,
              has:false
          }
        },
        methods:{
            order:function () {

                if(this.isActive == true){
                    this.$refs.orders.innerHTML = `<i class="fa fa-check"></i> 已关注`
                    this.isActive = !this.isActive;
                    this.has = !this.has;
                }else{
                    this.$refs.orders.innerHTML = ` <i class="fa fa-plus-square-o"></i> 关注`
                    this.isActive = !this.isActive;
                    this.has = !this.has;
                }
            },
            goin: function(){
                if(this.isActive == false){
                    this.$refs.orders.innerHTML = `<i class="fa fa-close"></i> 取消关注`
                }
            },
            exit:function () {
                if( this.isActive == false){
                    this.$refs.orders.innerHTML = `<i class="fa fa-check"></i> 已关注`
                }
            }
        }
    }
</script>

<style scoped>
    .order{
        background: white!important;
        color:grey!important;
        font-size: 12px;
        border-radius: 20px;
        padding: 1px 8px 1px 6px;
        border-color: #7f828b!important;
        box-shadow: none;
    }
</style>
