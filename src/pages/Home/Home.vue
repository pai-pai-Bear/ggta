<template>
  <div>      
    <Header class="header" style="height:160px">
      <template v-slot:left>
        <a href="##" class="logo">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
      </template>
      <template v-slot:main>
        <div class="jumpSearch">
          <i class="iconfont iconsousuo"></i>
          <span>搜索商品，共23072款好物</span>
        </div>
      </template>
      <template v-slot:right>
        <button @click="$router.replace('/login')">登录</button>
      </template>
      <template v-slot:nav>  
        <div class="nav">
          <ul v-show="isRotate" class="pp">
            <li  class="action">
              <span >推荐</span>
            </li>
            <li>
              <span>居家生活</span>
            </li>
            <li>
              <span>服饰箱包</span>
            </li>
            <li>
              <span>美酒饮料</span>
            </li>
            <li>
              <span>个护清洁</span>
            </li>
            <li>
              <span>母婴亲子</span>
            </li>
            <li>
              <span>运动旅行</span>
            </li>
            <li>
              <span>数码家电</span>
            </li>
            <li>
              <span>全球特色</span>
            </li>
          </ul>
          <div class="navLeft">
            <ul v-if="!isRotate" class="dd">
              <li style="width:87px" class="action">
                <span >推荐</span>
              </li>
              <li>
                <span>居家生活</span>
              </li>
              <li>
                <span>服饰箱包</span>
              </li>
              <li>
                <span>美酒饮料</span>
              </li>
              <li>
                <span>个护清洁</span>
              </li>
              <li>
                <span>母婴亲子</span>
              </li>
              <li>
                <span>运动旅行</span>
              </li>
              <li>
                <span>数码家电</span>
              </li>
              <li>
                <span>全球特色</span>
              </li>
            </ul>
            <div class="normal" v-else>
              <p>全部频道</p>
              
            </div>
          </div>
          <div class="navRight">
            <div class="liner"></div>
              <transition name="scale" >
                <div class="toggleWrap" :class="{rotate: isRotate}" @click="icRotate(isRotate)">
                  <i class="iconfont iconkm-under" ></i>
              </div>
            </transition>
          </div>
        </div>
      </template>
    </Header>
    <div class="mask" v-show="isRotate"></div>
    <div>
      <swiper class="ho"/>
    </div>  
    <ul class="promise">
      <li style="float:left">
        <i class="iconfont iconziying"></i>
        <span>网易自营品牌</span>
      </li>
      <li>
        <i class="iconfont iconwuyoubaozhuangxiuanquanbaozhang"></i>
        <span>30天无忧退货</span>
      </li>
      <li>
        <i class="iconfont icontuikuan"></i>
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div  class="category-list">
      <ul class="category-thing">
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
        <li>
          <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </li>
      </ul>

      <div class="category-banner">
        <img src="https://yanxuan.nosdn.127.net/9229d2b8f7a2e16471f8002314634a72.gif" class="img" data-reactid=".0.5.0.2.0.0">
      </div>

      <div class="srdz">
        <div class="sr-item ltd">
          <div class="lt">
            <p class="pt">9.9超值专区</p>
            <p class="pb">190款商品定价直降</p>
          </div>
          <div class="lb">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.0">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.1">
          </div>
        </div>
        <div class="sr-item ltd">
          <div class="lt">
            <p class="pt">9.9超值专区</p>
            <p class="pb">190款商品定价直降</p>
          </div>
          <div class="lb">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.0">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.1">
          </div>
        </div>
        <div class="sr-item ltd">
          <div class="lt">
            <p class="pt">9.9超值专区</p>
            <p class="pb">190款商品定价直降</p>
          </div>
          <div class="lb">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.0">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.1">
          </div>
        </div>
        <div class="sr-item ltd">
          <div class="lt">
            <p class="pt">9.9超值专区</p>
            <p class="pb">190款商品定价直降</p>
          </div>
          <div class="lb">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.0">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic" data-reactid=".0.5.0.3.$0.0.2.1">
          </div>
        </div>
      </div>

      <div class="srdz-s">
        <p>私人定制</p>
        <div class="srdz-swiper">
          <div class="sr-swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </div>
                <div class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </div>
                <div class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <a class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </a>
                <a class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </a>
                <a class="swiper-item">
                  <div>
                    <img src="https://yanxuan-item.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-reactid=".0.5.1.1.0.0.$/=10.0.$0.0.0.0">
                  </div>
                  <div class="swiper-name">
                    <span>泰国制造 天然乳胶枕 护...</span>
                    <span class="price">¥179</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="sr-swiper-pagination"></div>
          </div>
        </div>
      </div>
      
      <div class="srdz-b">
        <p>
          <span>限时购</span>
          <span class="more">
            更多
            <i class="iconfont iconyoujiantou"></i>
            </span>
        </p>
        <ul class="b-list">
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="srdz-b big">
        <p>
          <span>新品首发</span>
          <span class="more">
            更多
            <i class="iconfont iconyoujiantou"></i>
            </span>
        </p>
        <ul class="b-list">
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="name">
              <span>网易智造EMS颈椎按摩仪</span>
              <span>&nbsp</span>
              <span class="price">¥329</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="srdz-t">
        <p>
          <span>人气推荐</span>
          <span class="more">
            更多
            <i class="iconfont iconyoujiantou"></i>
            </span>
        </p>
        <div class="t-wrap">
          <div class="i-wrap">
            <img data-original="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" data-src="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" class="swiper-lazy" data-reactid=".0.5.4.1.0.0.0" src="https://yanxuan-item.nosdn.127.net/5eddd1f59c340f6455b561268cae736d.png?imageView&amp;quality=65&amp;thumbnail=280x280" style="display: inline;">
          </div>
          <div class="t-r-wrap">
            <div class="one">
              <span>国庆节特惠</span>
            </div>
            <div class="two">冬夏两用 护脊椰棕弹簧床垫</div>
            <div class="three">硬度偏好者优选</div>
            <div class="four">￥1679</div>
          </div>
        </div>
        <div class="b-wrap">
          <div class="b-item">
            <div class="item-i">
              <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
            </div>
            <div class="name">
              <span>
                网易智造3D揉捏按摩肩带
                <span style="color:#b4282d">￥399</span>
              </span>
              <div>满赠</div>
            </div>
          </div>
          <div class="b-item">
            <div class="item-i">
              <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
            </div>
            <div class="name">
              <span>
                网易智造3D揉捏按摩肩带
                <span style="color:#b4282d">￥399</span>
              </span>
              <div>满赠</div>
            </div>
          </div>
          <div class="b-item">
            <div class="item-i">
              <img data-original="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" data-src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" class="swiper-lazy" data-reactid=".0.5.4.2.0.$0.0.0.0.0.0" src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&amp;quality=65&amp;thumbnail=330x330" style="display: block;">
            </div>
            <div class="name">
              <span>
                网易智造3D揉捏按摩肩带
                <span style="color:#b4282d">￥399</span>
              </span>
              <div>满赠</div>
            </div>
          </div>
        </div>
      </div>

      <div class="srdz-b">
        <p>
          <span>限时购</span>
          <span class="more">
            更多
            <i class="iconfont iconyoujiantou"></i>
            </span>
        </p>
        <ul class="b-list">
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
          <li>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/374a1ff28dc0a394bc035b934c3071b6.png?imageView&amp;thumbnail=216x216&amp;quality=75" class="img" data-reactid=".0.5.2.1.$0.0.0">
            </div>          
            <div class="text-wrap">
              <span class="new">¥52.8</span>
              <span class="old">¥76</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="btn">
        <span style="margin-right:50px">下载APP</span>
        <span>电脑版</span>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2019</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import swiper from '../../components/Header/swiper/swiper.vue'

import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data() {
    return {
      isRotate: false
    }
  },
  mounted() {
    new Swiper('.sr-swiper-container', {
      pagination: {
        el: '.sr-swiper-pagination'
      }
    })
  },

  methods: {
    icRotate(isRotate) {
      this.isRotate = !isRotate
    }
  },

  components: {
    swiper,
    Header,
  }
}
</script>

<style lang="stylus" >
#header
 background #fff  
.mask
  position absolute
  top 160px
  left 0
  height 100%
  width 100%
  background rgba(0,0,0, .5)
  z-index 99
.search
  height 88px
  line-height 56px
.nav
  line-height 60px
  .pp
    display flex
    flex-wrap wrap
    position absolute
    top 147px
    left 0  
    padding-top 24px
    height 288px
    width 100%  
    font-size 24px
    color #333
    background #fff
    li
      margin 0 0 40px 30px
      width 150px
      height 56px
      text-align center
      border 1px solid #eee
      font-weight bold
      letter-spacing 4px
      background #fafafa
      &.action
        border 1px solid #b4282d
  

  .navLeft
    .normal
      padding-left 30px   
      color #333
      p
        letter-spacing 4px
        font-size 26px
  .navRight
    display flex
    width 160px
    .liner
      width 60px
      height 100%
      background-image linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
    .toggleWrap
      width 100px
      height 100%
      text-align center
      transition transform .3s
      &.rotate
        transform rotate(180deg)
      .iconfont
        font-size 56px
        color #999

 

.promise
  display flex
  align-items center
  padding 0 30px
  height 72px
  font-size 24px
  color #333
  background #fff
  li
    flex 1
    .iconfont
      font-size 26px
      color #b4282d
    span 
      margin-left 8px

.category-list
  .category-thing
    display flex
    background #fff
    flex-wrap wrap
    padding-bottom 32px
    li
      display flex
      flex-direction column
      align-content  center
      justify-content center
      text-align center
      margin 10px 20px 9px
      img 
        width 110px
        height 110px
        margin-bottom 20px
      span
        color #333
        font-size 26px
  .category-banner
    background #fff

    img 
      display block
      height 127px
      width 100%
  .srdz
    box-sizing border-box
    display flex
    flex-wrap wrap
    height 576px
    padding 14px 30px 30px
    margin-bottom 20px
    background #fff
    .sr-item
      box-sizing border-box
      width 340px
      height 49.5%
      background #f5f5f5
      margin-right 4px 
      margin-bottom 6px 
      &.ltd
        padding 20px 0 0 20px
        .lt
          color #333
          .pt
            height 48px
            font-size 32px
          .pb 
            height 36px
            font-size 26px
            color #7f7f7f
            margin-bottom 20px
  .srdz-s    
    box-sizing border-box
    display flex
    flex-wrap wrap
    height 506px
    margin-bottom 20px
    background #fff      
    p
      padding 0 30px 0px
      height 100px
      width 100%
      line-height 100px
      font-size 32px
      color #333
    .srdz-swiper 
      width 100%
      .sr-swiper-container 
        height 406px
        width 100%
        .swiper-wrapper
          height 346px
          .swiper-slide  
            width 750px
            .swiper-item
              display inline-block
              margin-left 25px
              img 
                background #eee
              .swiper-name
                width 216px
                font-size 24px
                box-sizing border-box
                padding  5px 15px 0
                span
                  font-weight bold
                  line-height 34px
                  &.price
                    color #b4282d
              div
                img
                  height 216px
                  width 216px
                  margin-bottom 15px
        .sr-swiper-pagination
          text-align center
          span 
            background #b4282d

  .srdz-b  
    box-sizing border-box
    height 698px
    margin-bottom 20px
    background #fff     
    &.big  
      height 833px
    p
      padding 0 30px 0px
      height 100px
      width 690px
      line-height 100px
      font-size 32px
      color #333
      span
        &.more 
          float right
          font-size 26px
          .iconfont
            font-size 26px
    .b-list
      display flex  
      flex-wrap wrap
      box-sizing border-box
      padding 0 10px 0 30px
      width 100%
      li
        margin-right 20px
        padding-bottom 30px
        .img-wrap
          margin-bottom 20px
          background #eee
          img
            width 216px
            height 216px
        .text-wrap
          font-size 24px
          .new  
            margin 0 15px 0 25px
            color #b4282d    
          .old
            text-decoration: line-through
        .name
          width 216px
          font-size 24px
          box-sizing border-box
          span
            font-weight bold
            line-height 34px
            &.price
              color #b4282d
  .srdz-t
    height 784px
    width 100%
    box-sizing border-box
    margin-bottom 20px
    background #fff  
    p
      padding 0 30px 0px
      height 100px
      width 690px
      line-height 100px
      font-size 32px
      color #333
      span
        &.more 
          float right
          font-size 26px
          .iconfont
            font-size 26px
    .t-wrap
      display flex
      height 280px
      margin 0 30px 20px
      align-items center
      background #FEF0DF
      .i-wrap
        margin-right 20px
      .t-r-wrap
        .one
          font-size 20px
          margin-bottom 20px
          span
            display inline-block
            width 118px
            height 30px
            line-height 30px
            text-align center
            border-radius 5px
            border 1px solid #b4282d
            color #b4282d
        .two
          margin-bottom 14px
          color #333
          font-size 28px
        .three 
          margin-bottom 14px
          font-size 24px
        .four
          font-size 24px
          color #b4282d  
    .b-wrap
      display flex
      padding-left 10px
      .b-item
        margin-left 20px
        .item-i
          img
            margin-bottom 20px
            height 216px
            width 216px
            background #eee
        .name
          width 216px
          font-size 24px
          box-sizing border-box
          span
            font-weight bold
            line-height 34px
            &.price
              color #b4282d    
          div    
            margin-top 5px
            height 32px
            width 66px
            color #b4282d
            font-size 22px
            border 1px solid #b4282d
            text-align center
            border-radius 50px




.footer
  box-sizing border-box
  padding 54px 20px 28px
  height 244px
  margin-bottom 98px
  text-align center
  background #414141
  .btn
    height 62px
    margin-bottom 36px
    color #fff
    font-size 24px
    span
      display inline-block
      height 62px
      line-height 62px
      width 172px
      border 1px solid #fff
      border-radius 5px
  p
    color #999
    font-size 24px
    span
      display block
      margin-bottom 10px
</style>
