import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import NewsList from '@/components/NewsList';
import ItemDetail from '@/components/ItemDetail';
import User from '@/components/User';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/',
      redirect: '/top/1',
    },
    {
      path: '/about',
      name: 'about',
      component: Login,
    },
    {
      path: '/user/:userid',
      name: 'User',
      component: User,
    },
    {
      path: '/item/:itemid',
      name: 'ItemDetail',
      component: ItemDetail,
    },
    {
      path: '/:type/:page',
      name: 'NewsList',
      component: NewsList,
    },
  ],
});
