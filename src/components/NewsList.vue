<template>
  <spin v-if="spin" class="mainContainer"></spin>
  <main v-else class="mainContainer">
    <p class="pagination">
        <router-link :to="`/${$route.params.type}/${Math.max(parseInt($route.params.page) - 1,1)}`"> <- </router-link>
        <span>{{ $route.params.page }}/{{ pageCount }}</span>
        <router-link :to="`/${$route.params.type}/${Math.min(parseInt($route.params.page) + 1,pageCount)}`"> -> </router-link>
    </p>
    <article class="articleInfor" v-for="(data, index) in listData" v-bind:key="data.title">
        <span>{{($route.params.page-1)*30+index+1}}</span>
      <div>
        <h2><a href={data.url}>{{data.title}}</a></h2>
        <p>
        <span>{{data.points?`${data.points} points `:null}} 
          <span v-if="data.user">by <router-link :to="`/user/${data.user}`"> {{data.user}} </router-link></span>
        </span>
        <span> {{data.time_ago}} | </span>
      <router-link :to="`/item/${data.id}`"> {{data.comments_count?`${data.comments_count} comments`:`discuss`}} </router-link></p>
    </div>
    </article>
  </main>
</template>

<script>
import { getDatasource, getNumbers } from '../services';

export default {
  name: 'login',
  data() {
    return {
      pageCount: 11,
      listData: [],
      spin: true,
    };
  },
  mounted() {
    const params = {
      page: this.$route.params.page,
      name: this.$route.params.type,
    };
    const fetchData = async (item) => {
      try {
        const listData = await getDatasource(item);
        const items = await getNumbers(item);
        this.listData = Object.values(listData.data);
        this.spin = false;
        this.pageCount = Math.ceil(Object.keys(items.data).length / 30);
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
          page: nextProps.params.page,
          name: nextProps.params.type,
        };
        const fetchData = async (item) => {
          try {
            const listData = await getDatasource(item);
            const items = await getNumbers(item);
            this.listData = Object.values(listData.data);
            this.spin = false;
            this.pageCount = Math.ceil(Object.keys(items.data).length / 30);
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
<style scoped>
.pagination {
    text-align: center;
    position: fixed;
    width: 100%;
    margin: 0;
    left: 0;
    top: 48px;
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pagination a {
    color: #666;
    text-decoration: none;
}

.pagination span {
    margin: 0 1rem;
}


.mainContainer {
    max-width: 1200px;
    margin: 100px auto 0 auto;
}

.articleInfor {
    display: flex;
    padding: .5rem 1rem .5rem 0;
}

.articleInfor>span {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #333;
    text-align: right;
    min-width: 3rem;
}

.articleInfor a {
    color: #666
}

.articleInfor h2 a {
    display: block;
    font-weight: 400;
    margin-bottom: .5rem;
    line-height: 1.2;
    text-decoration: none;
    color: #000;
}
</style>