<template>
  <spin v-if="spin" class="mainContainer"></spin>
  <main v-else class="mainContainer">
    <div>
      <section class="discuessTitle"> 
        <h1>{{commentList.title}}</h1>
        <h4>{{commentList.domain}}</h4>
        <span>{{commentList.points||0}} points</span>
        <p v-if="commentList.user">by <router-link :to="`/user/${commentList.user}`">{{commentList.user}}</router-link></p>
      </section>
      <div v-for="item in commentList.comments" v-bind:key="item.id">
      <one-comment :item="item"> </one-comment>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import { getComments } from '../services';

Vue.component('one-comment', {
  props: ['item'],
  template: `<article class="discussion" key={item.id} style="marginLeft:50px">
        <header>
        <router-link :to="'/user/'+item.user">{{item.user}}</router-link>
        <span> {{item.time_ago}}</span></header>
        <div v-html="item.content"></div>
        <div class="divide-line"></div>
        <div v-if="item.comments">
        <div v-for="item in item.comments" v-bind:key="item.id">
          <one-comment :item="item"> </one-comment>
        </div>
      </div>
      </article>`,
});

export default {
  name: 'ItemDetail',
  data() {
    return {
      commentList: {
        comments: [],
      },
      spin: true,
    };
  },
  mounted() {
    const params = {
      itemId: this.$route.params.itemid,
    };
    const fetchData = async (item) => {
      try {
        const commentList = await getComments(item);
        this.commentList = commentList.data;
        this.spin = false;
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(params);
  },
  watch: {
    $route: {
      deep: true,
      handler(nextProps) {
        this.spin = true;
        console.log(nextProps);
        const params = {
          itemId: nextProps.params.itemid,
        };
        const fetchData = async (item) => {
          try {
            const commentList = await getComments(item);
            this.commentList = commentList.data;
            this.spin = false;
          } catch (error) {
            console.error(error);
          }
        };
        fetchData(params);
      },
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.discuessTitle {
    margin-bottom: 1.5rem;
    border-bottom: 2rem solid #f3f3f3;
    padding: 1rem 1.5rem .5rem;
}

.mainContainer {
    max-width: 1200px;
    margin: 100px auto 0 auto;
}

.discussion {
    line-height: 1.15;
}

.discussion header {
    margin-bottom: 1rem;
}

.discussion header a,
.discuessTitle a {
    color: #666
}

.divide-line {
    height: 0;
    width: 100%;
    border-top: 1px solid #ececec;
    margin: 1rem 0;
}
</style>