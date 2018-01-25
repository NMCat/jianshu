<template>
  <section>

    <!--<h1 class="title">-->
    <!--{{ error.statusCode }}-->
    <!--</h1>-->
    <!--<h2 class="info">-->
    <!--{{ error.message }}-->
    <!--</h2>-->
    <!--<nuxt-link class="button" to="/" v-if="error.statusCode === 404">-->
    <!--Homepage-->
    <!--</nuxt-link>-->
    <div class="404" v-if="error.statusCode ===404">
      <header>
        <h1 class="title">
          <a href="#">
            <img src="./404-title.png" class="404-title" alt="Img Title">
          </a>
        </h1>
      </header>
      <div class="main-404">
        <div class="block-404">
          <img class="main-img" src="./404-block.png" alt="Img 404" />
          <h3>您要找的页面不存在</h3>
          <div class="sub-title">可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</div>
          <a class="follow" href="/">返回「简书」首页</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
    export default {
        props: ['error'],
        head(){
            return{
                title:"您要找的页面不存在-简书",
                meta:[
                    {name:"description",content:"错误页面"}
                ]
            }
        }
    }
</script>

<style scoped>
  .title
  {
    margin-top: 15px;
    font-size: 5em;
  }
  .info
  {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
  }
  .button
  {
    margin-top: 50px;
  }
  a {
    color: #333333;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover, a:focus {
    color: #2F2F2F;
    text-decoration: none;
  }
  a:focus {
    outline: none;
  }
  header .title img{
    position: absolute;
    left: 40px;
    top: 40px;
    width: 300px;
  }
  .main-404{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center
  }
  .block-404 {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .block-404 img{
    width: 220px;
  }
  h3 {
    margin: 40px 0 20px 0;
    font-weight: bold;
    display: block;
    font-size: 19px;
  }
  .sub-title {
    margin: 10px 0 30px 0;
    font-size: 14px;
  }
  .sub-title a {
    color: #3194D0;
  }
  .follow {
    padding: 13px 0;
    width: 160px;
    font-size: 15px;
    border-radius: 40px;
    color: #ffffff !important;
    background-color: #42C02E;
    border-color: #42C02E;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    user-select: none;
  }
  .follow:hover, .follow:focus {
    color: #ffffff;
    background-color: #28A014;
    border-color: #28A014;
  }
  @media (max-width: 768px) {
    header h1 img{
      display: none;
    }
  }
</style>
