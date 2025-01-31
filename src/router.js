import Vue from 'vue';
import Router from 'vue-router';
import TicTacToe from './components/TicTacToe.vue';
import FourInARow from './components/FourInARow.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TicTacToe,
    },
    {
      path: '/four-in-a-row',
      name: 'FourInARow',
      component: FourInARow,
    },
  ],
});
