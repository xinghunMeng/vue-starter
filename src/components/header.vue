<template>
  <header>
    <h1>{{brand.Name}}</h1>
    <div class='clearfix'>
      <div id='category' class='select' @click='open = !open'>
        <span>{{categorySelected || '分类'}}</span>
        <i></i>
        <div v-show='open'>
          <ul>
            <a v-link='{path: "/list/" + category.MenuId}' v-for='category in menus'>
              <li @click='switchCategory(category, this)'>{{category.Name}}</li>
            </a>
          </ul>
        </div>
      </div>
      <div v-show='brand' class='business'>
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
    self.categorySelected = category.Name;
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
  min-width: 50px
  height: 40px
  background-color: rgba(255, 255, 255, 0.5)
  /*overflow: hidden*/
  /*position: relative*/
  padding-left: 10px
  padding-right: 10px

  > span
    line-height: 40px
    padding-right: 5px

  > i
    width: 12px
    height: 10px
    background-image: url(/src/assets/images/select.png)
    background-repeat: no-repeat
    position: relative
    top: 1px
    display: inline-block

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

    ul > :last-child li
      border-bottom: 0


</style>
