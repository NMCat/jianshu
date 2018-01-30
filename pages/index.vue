<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
           <div class="row">
               <div class="col-8 main">
                   <!--banner-->
                  <div class="banner">
                      <!--<nuxt-link to="/">-->
                          <!--<img src="../static/scroll-1.jpg" alt="">-->
                      <!--</nuxt-link>-->
                      <!---->
                      <!--轮播-->
                      <div v-swiper:mySwiper="swiperOption" class="banner">
                          <div class="swiper-wrapper">
                              <div class="swiper-slide" v-for="banner in banners">
                                  <img :src="banner">
                              </div>
                          </div>
                          <div class="swiper-pagination swiper-pagination-white"></div>
                          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                      </div>
                      <!--推荐专题-->
                      <div class="recommend-collection">
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy1.jpg" alt="">
                              <span>文学</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy2.jpg" alt="">
                              <span>人文</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy3.jpg" alt="">
                              <span>历史</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy4.jpg" alt="">
                              <span>手绘</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy5.jpg" alt="">
                              <span>人文科普</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy3.jpg" alt="">
                              <span>旅行·在路上</span>
                          </nuxt-link>
                          <nuxt-link to="/collection/123">
                              <img src="../assets/img/sy2.jpg" alt="">
                              <span>自热科普</span>
                          </nuxt-link>
                          <nuxt-link class="more-hot-collection" to="/collection/123">
                              更多热门专题
                              <i class="fa fa-chevron-right"></i>
                          </nuxt-link>
                      </div>
                      <!--横线-->
                      <div class="split-line"></div>
                      <!--文章列表-->
                      <div id="list-container">
                          <ul class="note-list">
                              <li class="have-img">
                                  <nuxt-link class="wrap-img" to="/p/123">
                                      <img src="../assets/img/lanmao.jpg" alt="">
                                  </nuxt-link>
                                  <div class="content">
                                      <div class="author">
                                          <nuxt-link to="/u/123" class="avatar">
                                              <img src="../assets/img/1.jpg">
                                          </nuxt-link>
                                          <div class="info">
                                              <nuxt-link to="/u/123" class="nickname">
                                                  懒猫
                                              </nuxt-link>
                                              <span class="time">9小时前</span>
                                          </div>
                                      </div>
                                      <nuxt-link to="/p/123" class="title">
                                          如何把书中的知识转化为能力？这是我见过的最好的回答
                                      </nuxt-link>
                                      <p class="abstract">
                                          随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                          于是市场上出现很多读书方法，
                                          比如速度、多读、慢读、列读……不管你采用哪一种读书方法，
                                          最终都要回归到“行动”二字上，正如陆...
                                      </p>
                                      <div class="meta">
                                          <nuxt-link to="/collection/123" class="collection-tag">
                                              短篇小说
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-eye"></i>
                                              579
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-comment"></i>
                                              200
                                          </nuxt-link>
                                          <span>
                                              <i class="fa fa-heart"></i>
                                              223
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li class="have-img">
                                  <nuxt-link class="wrap-img" to="/p/123">
                                      <img src="../assets/img/w2.jpeg" alt="">
                                  </nuxt-link>
                                  <div class="content">
                                      <div class="author">
                                          <nuxt-link to="/u/123" class="avatar">
                                              <img src="../assets/img/1.jpg">
                                          </nuxt-link>
                                          <div class="info">
                                              <nuxt-link to="/u/123" class="nickname">
                                                  懒猫
                                              </nuxt-link>
                                              <span class="time">9小时前</span>
                                          </div>
                                      </div>
                                      <nuxt-link to="/p/123" class="title">
                                          如何把书中的知识转化为能力？这是我见过的最好的回答
                                      </nuxt-link>
                                      <p class="abstract">
                                          随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                          于是市场上出现很多读书方法，
                                          比如速度、多读、慢读、列读……不管你采用哪一种读书方法，
                                          最终都要回归到“行动”二字上，正如陆...
                                      </p>
                                      <div class="meta">
                                          <nuxt-link to="/collection/123" class="collection-tag">
                                              短篇小说
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-eye"></i>
                                              579
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-comment"></i>
                                              200
                                          </nuxt-link>
                                          <span>
                                              <i class="fa fa-heart"></i>
                                              223
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li class="have-img">
                                  <nuxt-link class="wrap-img" to="/p/123">
                                      <img src="../assets/img/w3.jpg" alt="">
                                  </nuxt-link>
                                  <div class="content">
                                      <div class="author">
                                          <nuxt-link to="/u/123" class="avatar">
                                              <img src="../assets/img/1.jpg">
                                          </nuxt-link>
                                          <div class="info">
                                              <nuxt-link to="/u/123" class="nickname">
                                                  懒猫
                                              </nuxt-link>
                                              <span class="time">9小时前</span>
                                          </div>
                                      </div>
                                      <nuxt-link to="/p/123" class="title">
                                          如何把书中的知识转化为能力？这是我见过的最好的回答
                                      </nuxt-link>
                                      <p class="abstract">
                                          随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                          于是市场上出现很多读书方法，
                                          比如速度、多读、慢读、列读……不管你采用哪一种读书方法，
                                          最终都要回归到“行动”二字上，正如陆...
                                      </p>
                                      <div class="meta">
                                          <nuxt-link to="/collection/123" class="collection-tag">
                                              短篇小说
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-eye"></i>
                                              579
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-comment"></i>
                                              200
                                          </nuxt-link>
                                          <span>
                                              <i class="fa fa-heart"></i>
                                              223
                                          </span>
                                      </div>
                                  </div>
                              </li>
                              <li class="have-img">
                                  <nuxt-link class="wrap-img" to="/p/123">
                                      <img src="../assets/img/w4.jpg" alt="">
                                  </nuxt-link>
                                  <div class="content">
                                      <div class="author">
                                          <nuxt-link to="/u/123" class="avatar">
                                              <img src="../assets/img/1.jpg">
                                          </nuxt-link>
                                          <div class="info">
                                              <nuxt-link to="/u/123" class="nickname">
                                                  懒猫
                                              </nuxt-link>
                                              <span class="time">9小时前</span>
                                          </div>
                                      </div>
                                      <nuxt-link to="/p/123" class="title">
                                          如何把书中的知识转化为能力？这是我见过的最好的回答
                                      </nuxt-link>
                                      <p class="abstract">
                                          随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                          于是市场上出现很多读书方法，
                                          比如速度、多读、慢读、列读……不管你采用哪一种读书方法，
                                          最终都要回归到“行动”二字上，正如陆...
                                      </p>
                                      <div class="meta">
                                          <nuxt-link to="/collection/123" class="collection-tag">
                                              短篇小说
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-eye"></i>
                                              579
                                          </nuxt-link>
                                          <nuxt-link to="/p/123" class="tag">
                                              <i class="fa fa-comment"></i>
                                              200
                                          </nuxt-link>
                                          <span>
                                              <i class="fa fa-heart"></i>
                                              223
                                          </span>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <!--阅读更多-->
                      <nuxt-link to="/" class="load-more">
                          阅读更多
                      </nuxt-link>
                  </div>
               </div>
               <div class="col-4 aside">
                   <div class="board">
                       <nuxt-link to="/">
                           <img src="../assets/img/aside-1.png" alt="">
                       </nuxt-link>
                       <nuxt-link to="/">
                           <img src="../assets/img/aside-2.png" alt="">
                       </nuxt-link>
                       <nuxt-link to="/">
                           <img src="../assets/img/aside-3.png" alt="">
                       </nuxt-link>
                       <nuxt-link to="/">
                           <img src="../assets/img/aside-4.png" alt="">
                       </nuxt-link>
                       <nuxt-link to="/">
                           <img src="../assets/img/aside-5.png" alt="">
                       </nuxt-link>
                   </div>
                   <nuxt-link to="/" class="download">
                       <img src="../assets/img/ewm.jpeg" alt="">
                       <div class="info">
                           扫码关注微信
                           <i class="fa fa-angle-right"></i>
                           <div class="description">
                               随时随地发现和创作内容
                           </div>
                       </div>

                   </nuxt-link>
                   <div class="recommend-author">
                       <div class="title">
                           <span>推荐作者</span>
                           <a  class="page-change" @click="rotate">
                               <i ref="refresh" class="fa fa-refresh"></i>
                               换一批
                           </a>
                       </div>
                       <ul class="list">
                           <li>
                               <nuxt-link class="avatar" to="/u/123">
                                   <img src="../assets/img/1.jpg" alt="">
                               </nuxt-link>
                               <nuxt-link class="follow" to="/u/123">
                                   <i class="fa fa-plus"></i>
                                   关注
                               </nuxt-link>
                               <nuxt-link class="name" to="/u/123">
                                   柠檬
                               </nuxt-link>
                               <p>
                                   写了152.9k字·7.2k喜欢
                               </p>
                           </li>
                           <li>
                               <nuxt-link class="avatar" to="/u/123">
                                   <img src="../assets/img/1.jpg" alt="">
                               </nuxt-link>
                               <nuxt-link class="follow" to="/u/123">
                                   <i class="fa fa-plus"></i>
                                   关注
                               </nuxt-link>
                               <nuxt-link class="name" to="/u/123">
                                   柠檬
                               </nuxt-link>
                               <p>
                                   写了152.9k字·7.2k喜欢
                               </p>
                           </li>
                           <li>
                               <nuxt-link class="avatar" to="/u/123">
                                   <img src="../assets/img/1.jpg" alt="">
                               </nuxt-link>
                               <nuxt-link class="follow" to="/u/123">
                                   <i class="fa fa-plus"></i>
                                   关注
                               </nuxt-link>
                               <nuxt-link class="name" to="/u/123">
                                   柠檬
                               </nuxt-link>
                               <p>
                                   写了152.9k字·7.2k喜欢
                               </p>
                           </li>
                       </ul>
                       <!--查看更多-->
                       <nuxt-link to="/" class="find-more">
                           查看更多
                           <i class="fa fa-angle-right"></i>
                       </nuxt-link>
                   </div>
               </div>
           </div>
        </div>
        <footer class="my-container">
            <div class="row">
                <div class="col-xs-12 main">
                    <nuxt-link to="/">关于简书</nuxt-link>
                    <nuxt-link to="/">联系我们</nuxt-link>
                    <nuxt-link to="/">加入我们</nuxt-link>
                    <nuxt-link to="/">简书出版</nuxt-link>
                    <nuxt-link to="/">品牌与徽标</nuxt-link>
                    <nuxt-link to="/">帮助中心</nuxt-link>
                    <nuxt-link to="/">合作伙伴</nuxt-link>
                </div>
                <div class="icp">
                    ©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
                    <nuxt-link to="/">
                        <img src="https://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt="">
                    </nuxt-link>
                    <nuxt-link to="/">
                        沪公网安备31010402002252号 / 
                    </nuxt-link>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    import myHeader from '../components/myHeader'
    export default {
        components:{
            myHeader
        },
        data(){
          return {
            banners:[
                "/scroll-1.jpg",
                "/scroll-2.jpg",
                "/scroll-3.jpg",
                "/scroll-4.jpg"
            ],
              swiperOption: {
                  autoplay:{
                    delay:3000,//切换时间
                    stopOnLasrSlide:false,//是否停止在最后一张
                    disableOnInteraction:false//禁止轮播
                  },
                  pagination: {
                      el: '.swiper-pagination'
                  },
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev'
                  }
              },
              deg:360
          }
        },
        methods:{
            rotate:function () {
              this.deg = this.deg + 360;
              this.$refs.refresh.style.transform = `rotate(${this.deg}deg)`;
            }
        }
    }
</script>
<style scoped>
    .swiper-button-prev {
        background-color: rgba(0,0,0,.4);
    }
    .swiper-button-next{
        background-color: rgba(0,0,0,.4);
    }

</style>