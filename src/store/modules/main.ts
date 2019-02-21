/* eslint-disable */
import { storeItem } from '@/storage/StorageHandler';

const state = {
  darkMode: false
};

const getters = {
  isDarkMode(state) {
    return state.darkMode;
  }
};

const actions = {
  toggleDarkMode({ commit }, payload) {
    commit('toggleDarkMode', payload);
  }
};

const mutations = {
  toggleDarkMode(state, payload) {
    state.darkMode = payload.darkMode;
    storeItem('darkMode', state.darkMode);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
