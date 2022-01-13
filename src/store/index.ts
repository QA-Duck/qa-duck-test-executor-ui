// index.ts
import { StoreOptions, createStore } from 'vuex';
import { RootState } from './types';
import { templateStore } from './modules/templates';
import { modalStore } from './modules/modal';

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    templateStore,
    modalStore
  },
};

export default createStore(storeOptions);