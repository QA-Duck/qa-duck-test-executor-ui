import templateGetters from './getters';
import templateActions from './actions';
import templateMutaions from './mutations';
import { TemplateState } from './types';
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import TemplateItem from '@/store/models/template-item';

export const state: TemplateState = { templatesList: [] };

export interface State { 
  templatesList: Array<TemplateItem> 
}

export const templateKey: InjectionKey<Store<State>> = Symbol()

export const templateStore = createStore<State>({
  state: { templatesList: [] },
  getters: templateGetters,
  mutations: templateMutaions,
  actions: templateActions,
})