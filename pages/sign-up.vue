<template>
    <div class="sign">
        <!--logo-->
        <div class="logo">
            <nuxt-link to="/">
                <img src="../assets/img/logo.png" alt="">
            </nuxt-link>
        </div>
        <!--登录表单-->
        <div class="main">
            <div class="title">
                <h4>
                    <nuxt-link to="/sign-in">登录</nuxt-link>
                    <b>·</b>
                    <nuxt-link  class="active" to="/sign-up">注册</nuxt-link>
                </h4>
            </div>
            <div class="js-sign-up">
                <form action="/sign-up">
                    <div class="input-prepend">
                        <i class="fa fa-user"></i>
                        <input class="top-radius" type="text" value="" name="" placeholder="你的昵称">
                    </div>
                    <div class="input-prepend">
                        <i class="fa fa-mobile-phone"></i>
                        <input class="" type="number" value="" name="" placeholder="手机号">
                    </div>
                    <div class="input-prepend ssm">
                        <i class="fa fa-shield "></i>
                        <input class="" type="text" value="" name="" placeholder="手机验证码">
                        <a class="btn btn-success send-ssm">发送验证码</a>
                    </div>
                    <div class="input-prepend">
                        <i class="fa fa-lock"></i>
                        <input class="bottom-radius" type="password" value="" name="" placeholder="设置密码">
                    </div>
                    <input class="btn btn-success sign-up-btn"
                           type="submit" value="注册">
                    <p class="sign-up-msg">
                        点击 “注册” 即表示您同意并愿意遵守简书<br>用户协议和隐私政策
                    </p>
                </form>
                <div class="more-sign">
                    <p>社交账号直接注册</p>
                    <ul>
                        <li>

                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-weixin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa fa-qq"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '~/assets/css/sign.css'
    export default {
        layout:'sign',//指明当前页面所使用的默认模板是layouts文件夹下的sign.vue
        head(){
            return {
                title:"注册-简书",
                meta:[
                    {name:"description",content:"注册页面"}
                ]
            }
        }
    }
</script>

<style scoped>

</style>