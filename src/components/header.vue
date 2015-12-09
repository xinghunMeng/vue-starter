<template>
  <header>
    <h1>连咖啡</h1>
    <div class='clearfix'>
      <div id='category' class='select' @click='open = !open'>
        <span>{{categorySelected || '分类'}}</span>
        <div v-show='open'>
          <ul>
            <a v-link='{path: category.path}' v-for='category in categorys'>
              <li @click='switchCategory(category, this)'>{{category.name}}</li>
            </a>
          </ul>
        </div>
      </div>
      <div v-show='provider' class='business'>
        <img :src='brand.Logo' alt='{{brand.Name}}' />
        <dl>
          <dt>{{brand.Name}}</dt>
          <dd>{{brand.Intro}}</dd>
        </dl>
      </div>
    </div>
  </header>
</template>

<script>

  let switchCategory = (category, self) => {
    self.categorySelected = category.name;
  }
  
  // 获取分类
  let fetchCategorys = () => {
    // console.log(App.menus);
    // console.log(App)
    // return App.menus;
    return [
      {
        name: '热咖啡',
        path: '/list/hot'
      },
      {
        name: '冰咖啡',
        path: '/list/ice'
      },
      {
        name: '茶',
        path: '/list/tea',
      },
      {
        name: '关于',
        path: '/about',
      }
    ];
  }

  // 获取服务商信息
  let fetchProvider = () => {
    return {
      name: '星巴克代购',
      desc: '24小时营业 9元外送费',
      logo: 'http://wx.qlogo.cn/mmopen/IbQhd2Y9oKc2zOTLXD4TZqVVh3BAHWLuGed8lcGJYgVsDaXTLOJp1IDWEZtEyUzEVLSLqGdDGEkdekGIKXCMHQ/0'
    }
  }

  export default {
    props: ['brand', 'menus'],
    data () {
      return {
        open: false,
        categorys: [],
        categorySelected: '',
        provider: null
      }
    },

    // 头部不受路由控制，所以在组件创建时，初始化数据
    created () {
      this.categorys = fetchCategorys();
      this.provider = fetchProvider();
    },
    methods: {
      switchCategory
    }
  }

</script>

<style lang='stylus'>

header h1
  text-align: center
  height: 50px
  line-height: 50px
  margin: 0
  font-size: (20 / 14)rem

header nav
  height: 72px
  background: #f5f0eb
  
header > div
  border-top: 1px solid #dfd9d3
  border-bottom: 1px solid #dfd9d3
  background: #f5f0eb
  height: 70px
  
  > button
    margin-top: 25px
    margin-left: 20px

header .business
  float: right
  width: 200px
  padding-right: 15px
  padding-top: 15px

  img
    float: right
    max-width: 40px
    max-height: 40px
    border-radius: 50%
    
  dl
    padding-right: 60px
    text-align: right
    position: relative
    top: -3px

  dl dt
    font-weight: bold
    font-size: (18 / 14)rem


#category
  float: left
  margin-top: 15px
  margin-left: 15px
  z-index: 1

.select
  width: 60px
  height: 40px
  background-color: rgba(255, 255, 255, 0.5)
  /*overflow: hidden*/
  /*position: relative*/
  padding: 0 10px
  background-image: url(/src/assets/images/select.png)
  background-repeat: no-repeat
  background-position: 55px 16px

  > span
    line-height: 40px

  > div
    position: absolute
    top: 121px
    left: 0
    width: 120px
    background: #f5f0eb
    border: 1px solid #e2dbd6
    z-index: 1

    ul li
      height: 40px
      line-height: 40px
      padding-left: 15px
      border-bottom: 1px solid #e2dbd6
      color: #444

      &:hover
        background-color: #746c5e
        color: #fff
        cursor: pointer

    ul >:last-child li
      border-bottom: 0


</style>
