import modalGetters from './getters';
import modalActions from './actions';
import modalMutaions from './mutations';
import { ModalState } from './types';
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export const state: ModalState = { 
  isShown: false,
  isShownDelete: false,
  deletedTemplateUUID: "",
};

export interface State { 
  isShown: boolean,
  isShownDelete: boolean,
  deletedTemplateUUID: string,
}

export const modalKey: InjectionKey<Store<State>> = Symbol()

export const modalStore = createStore<State>({
  state: { isShown: false, isShownDelete: false, deletedTemplateUUID: ""},
  getters: modalGetters,
  mutations: modalMutaions,
  actions: modalActions,
})