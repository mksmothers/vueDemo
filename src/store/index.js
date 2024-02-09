import axios from 'axios';
import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    items: [],
  },
  getters: {
    items: (state) => state.items,
  },
  mutations: {
    SET_Items(state, items) {
      state.items = items.items;
      console.log(state.items);
    },
  },
  actions: {
    loadItems({ commit }) {
      axios
        .get('https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc')
        .then((response) => response.data)
        .then((items) => {
          console.log(items);
          commit('SET_Items', items);
        });
    },
  },
});
