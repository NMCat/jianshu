<template>
    <div id="comment-list" class="comment-list">
        <!--提交的留言表单-->
        <form action="" class="new-comment">
            <nuxt-link to="/u/123" class="avatar">
                <img src="../assets/img/1.jpg" alt="">
            </nuxt-link>
            <textarea @focus="send_one=true" placeholder="写下你的评论">

            </textarea>
            <transition :duration="200" name="fade">
                <div v-if="send_one" class="write-function-block clearfix">
                    <div class="emoji-modal-wrap">
                        <a class="emoji" @click="showEmoji=!showEmoji">
                            <i class="fa fa-smile-o"></i>
                        </a>
                       <transtion :duration="200" name="fade">
                          <div v-if="showEmoji" class="emoji-modal arrow-up">

                          </div>
                       </transtion>
                    </div>
                    <div class="hint">Ctrl+Enter 发表</div>
                    <a class="btn btn-send" href="javascript:void(0)">发送</a>
                    <a class="cancel" href="javascript:void(0)" @focus="send_one=false">取消</a>
                </div>
            </transition>
        </form>
    </div>
</template>

<script>
    export default {
        name: "myComment",
        data(){
            return{
                send_one:false,
                send_two:false,
                showEmoji:false
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,.fade-leave-active {
        opacity: 1;
        transition: .3s;
        -webkit-transition: .3s
    }
    .fade-enter,.fade-leave-to {
        opacity: 0;
        transform: translate3d(0,-5%,0);
        -webkit-transform: translate3d(0,-5%,0);
        transition: .3s;
        -webkit-transition: .3s
    }
    .comment-list{
        padding-top: 20px;
        margin-bottom: 200px; /**注意一会要删掉**/
    }
    .comment-list .new-comment{
        position: relative;
        margin-left: 48px;
        margin-bottom: 20px;
    }
    .comment-list .avatar{
        width: 38px;
        height: 38px;
        display: inline-block;
        margin-right: 5px;
        /*vertical-align: middle;*/
    }
    .comment-list .new-comment .avatar{
        position: absolute;
        left: -48px;
    }
   textarea{
       width: 100%;
       height: 80px;
       padding: 10px 15px;
       border: 1px solid #ccc;
       border-radius: 4px;
       display: inline-block;
       vertical-align: top;
       outline-style: none;
       resize: none;
       font-size: 13px;
       background: #f8f8f8;
   }
    .emoji-modal-wrap{
        position: relative;
    }
    .new-comment .emoji{
        float: left;
        margin-top: 14px;
    }
    .new-comment .emoji i{
        font-size: 25px;
        color:#969696;
    }
    .new-comment .emoji i:hover {
        color:#333;
    }
    .comment-list .new-comment .hint{
        float:left;
        margin: 20px 0 0 20px;
        font-size: 13px;
        color:#969696!important;
    }
    .comment-list .new-comment .cancel{
        float: right;
        font-size: 16px;
        margin: 18px 30px 0 0;
        color:#969696!important;
    }
    .comment-list .new-comment .cancel:hover{
        color: #333!important;
    }
    .comment-list .new-comment .btn-send{
        float:right;
        width: 78px;
        padding: 8px 18px;
        margin: 10px 0;
        font-size: 18px;
        background: #42c02e;
        border-radius: 20px;
        color:#fff!important;
        box-shadow: none;
    }
    .comment-list .new-comment .btn-send:hover{
        background:#3db922;
    }
    .new-comment .emoji-modal-wrap .emoji-modal{
        position: absolute;
        top: 50px;
        left:-48px;
        width: 360px;
        height: 100px;
        border:1px solid #d9d9d9;
        border-radius: 4px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        z-index:10001;
    }
    .arrow-up:after{
        content: '';
        display: inline-block;
        border-left:1px solid #d9d9d9;
        border-top:1px solid #d9d9d9;
        position: absolute;
        left: 53px;
        top: -1px;
        width: 10px;
        height: 10px;
        background: #fff;
        transform: translate3d(0,-50%,0) rotate(45deg);
    }
</style>
