<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
                <ul>
                    <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>
                    <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>
                    <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>
                    <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>                   
                     <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>                 
                    <li class="product">
                        <a href="" target="_blank">
                            <div class="pro-img">
                                <img src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c758eb7e0dce4307c62c47155519bc80.png?thumb=1&w=160&h=110&f=webp&q=90" alt="">
                            </div>
                            <div class="pro-name">Xiaomi 13</div>
                            <div class="pro-price">￥3999.00元</div>
                        </a>
                    </li>               
                </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'nav-header'
  }
</script>
<style lang="scss">
  @import './../assets/scss/base.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height:39px;
      line-height:39px;
      background-color:#333333;
      color:#B0B0B0;
      .container{
        @include flex();
        a{
          display:inline-block;
          color:#B0B0B0;
          margin-right:17px;
        }
        .my-cart{
          width:110px;
          background-color:#FF6600;
          text-align:center;
          color:#ffffff;
          .icon-cart{
            @include bgImg(16px,12px,'../../public/imgs/icon-cart-checked.png');
            margin-right:4px;
          }
        }
      }
    }
    .nav-header{
      .container{
        position:relative;
        height:112px;
        @include flex();
        .header-logo{
          display:inline-block;
          width:55px;
          height:55px;
          background-color:#FF6600;
          a{
            display:inline-block;
            width:110px;
            height:55px;
            &:before{
              content:' ';
              @include bgImg(55px,55px,'../../public/imgs/mi-logo.png',55px);
              transition:margin .2s;
            }
            &:after{
              content:' ';
              @include bgImg(55px,55px,'../../public/imgs/mi-home.png',55px);
            }
            &:hover:before{
              margin-left:-55px;
              transition:margin .2s;
            }
          }
        }
        .header-menu{
          display:inline-block;
          width:643px;
          padding-left:209px;
          .item-menu{
            display:inline-block;
            color:#333333;
            font-weight:bold;
            font-size:16px;
            line-height:112px;
            margin-right:20px;
            span{
              cursor:pointer;
            }
            &:hover{
              color:$colorA;
              .children{
                height:220px;
                opacity:1;
              }
            }
            .children{
              position:absolute;
              top:112px;
              left:0;
              width:1226px;
              height:0;
              opacity:0;
              overflow:hidden;
              border-top:1px solid #E5E5E5;
              box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              z-index: 10;
              transition:all .5s;
              .product{
                position:relative;
                float:left;
                width:16.6%;
                height:220px;
                font-size:12px;
                line-height:12px;
                text-align: center;
                a{
                  display:inline-block;
                }
                img{
                  width:auto;
                  height:111px;
                  margin-top:26px;
                }
                .pro-img{
                  height:137px;
                }
                .pro-name{
                  font-weight:bold;
                  margin-top:19px;
                  margin-bottom:8px;
                  color:$colorB;
                }
                .pro-price{
                  color:$colorA;
                }
                &:before{
                  content:' ';
                  position:absolute;
                  top:28px;
                  right:0;
                  border-left:1px solid $colorF;
                  height:100px;
                  width:1px;
                }
                &:last-child:before{
                  display:none;
                }
              }
            }
          }
        }
        .header-search{
          width:319px;
          .wrapper{
            height:50px;
            border:1px solid #E0E0E0;
            display:flex;
            align-items:center;
            input{
              border:none;
              box-sizing: border-box;
              border-right:1px solid #E0E0E0;
              width:264px;
              height:50px;
              padding-left:14px;
            }
            a{
              @include bgImg(18px,18px,'../../public/imgs/icon-search.png');
              margin-left:17px;
            }
          }
        }
      }
    }
  }
</style>