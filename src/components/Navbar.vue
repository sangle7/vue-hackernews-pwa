<template>
  <div class="menubar">
    <ul>
      <li v-for="elem in msg" v-bind:key="elem.name">
        <router-link :to="elem.to">{{ elem.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { config } from '../utils';

export default {
  name: 'navbar',
  data() {
    return {
      msg: config.menu,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menubar{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;
    background-color: #3f51b5;
} 
.menubar ul{
	height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    overflow: hidden;
    list-style: none;
}

.menubar ul li{
    line-height: 48px;
    display: inline-block;
    height: 100%;
    box-sizing: border-box;
} 
.menubar ul li a{
    color: #fff;
    text-decoration: none;
    margin: 0 .4rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.highlight_menu{
	border-bottom: 5px solid white;
}

.menubar ul li:last-child{
    float: right;
}
</style>
