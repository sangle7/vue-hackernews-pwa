<template>
  <spin v-if="spin" class="mainContainer"></spin>
  <main v-else class="mainContainer">
    <section class="discuessTitle"> 
      <h1>{{user.id}}</h1>
      <h4>created:{{user.created}}</h4>
      <h4>karma:{{user.karma}}</h4>
      <h4>avg:{{user.avg}}</h4>
      <div v-html="user.about"></div>
    </section>
  </main>
</template>

<script>
import { getUser } from '../services';

export default {
  name: 'user',
  data() {
    return {
      user: {},
      spin: true,
    };
  },
  mounted() {
    const params = {
      user: this.$route.params.userid,
    };
    const fetchData = async (item) => {
      try {
        const user = await getUser(item);
        this.user = user.data;
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
          user: nextProps.params.userid,
        };
        const fetchData = async (item) => {
          try {
            const user = await getUser(item);
            this.user = user.data;
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
<style scoped>
.mainContainer {
    max-width: 1200px;
    margin: 100px auto 0 auto;
}
.discuessTitle {
    margin-bottom: 1.5rem;
    border-bottom: 2rem solid #f3f3f3;
    padding: 1rem 1.5rem .5rem;
}
</style>