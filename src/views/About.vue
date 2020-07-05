<template>
  <div class="about">
    <h1>Top 5 movies</h1>
    <div class="container">
      <div class="desc-title">排序:</div>
      <div class="content-header">
        <a-button class="ant-btn-syle" type="primary" @click="sortRank">Rank</a-button>
        <a-button class="ant-btn-syle" type="primary" @click="sortTitle">Title</a-button>
        <a-button class="ant-btn-syle" type="primary" @click="sortDesc">Description</a-button>
      </div>
      <div class="right-content">
        <a-button class="ant-btn-syle" type="primary" @click="addItem()">添加</a-button>
      </div>
    </div>
    <div class="container-list">
      <transition-group name="list-complete" tag="p" appear>
        <div class="list-item" v-for="(item, index) in list" :key="item.id">
          <div class="age">{{ item.id }}</div>
          <div class="title">
            {{ item.title}}
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
          <div class="right-operation">
            <a-button class="ant-btn-syle" type="danger" @click="removeItem(index)">删除</a-button>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Button } from 'ant-design-vue';
var _ = require('lodash');
import Mock from 'mockjs'
export default {
  data () {
    return {
      msg: 'name',
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      list: []
    }
  },
  components: {
    AButton: Button
  },
  created () {
    this.getUserList()
  },
  methods: {
    removeItem (index) {
      this.list.splice(index, 1)
    },
    sortRank () {
      this.list = _.sortBy(this.list, 'id');
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.list.length)
    },
    getUserList () {
      axios.get('/user/list/get').then((res) => {
        this.list = res.data.data.userList
      })
    },
    sortTitle () {
      this.list = _.sortBy(this.list, ({ title }) => title.toLowerCase());
    },
    sortDesc () {
      this.list = _.sortBy(this.list, 'desc');
    },
    addItem () {
      let item = {
        id: Mock.mock('@increment'),
        title: Mock.mock('@first'),
        desc: Mock.mock('@cparagraph(1, 3)')
      }
      this.list.unshift(item)
    },
    remove: function () {
      this.list.splice(this.randomIndex(), 1)
    },
  }
}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .desc-title {
    padding: 0 20px 0 0;
  }
}
.ant-btn-syle {
  margin: 0 20px 0 0;
}
.container-list {
  width: 800px;
  margin: 20px auto 0 auto;
  .list-item {
    display: flex;
    align-items: center;
    border: 1px solid #409eff;
    padding: 10px 0;
    transition: all 0.5s;
    justify-content: space-between;
    margin-top: 20px;
    .desc {
      padding: 0 0 0 20px;
      text-align: left;
      width: 420px;
      color: #409eff;
    }
    .age {
      padding: 0 20px;
      color: red;
    }
    .title {
      width: 100px;
      text-align: left;
    }
  }
}

// 过渡效果
/*设置列表transition-group的name为list的入场以及离场动画效果*/

.list-complete-active,
.list-complete-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-enter,
.list-complete-leave-to {
  transform: translateX(100px);
  opacity: 0;
  transition: all 0.6s ease;
}

.list-complete-leave-active {
  transition: all 0.5s ease;
}

.list-complete-move {
  transition: all 1s ease;
}
</style>