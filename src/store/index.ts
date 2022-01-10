// index.ts
import { StoreOptions, createStore } from 'vuex';
import { RootState } from './types';
import { templates } from './modules/templates';

const storeOptions: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  modules: {
    templates,
  },
};

export default createStore(storeOptions);