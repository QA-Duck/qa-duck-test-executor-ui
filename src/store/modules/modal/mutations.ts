import { MutationTree } from 'vuex';
import { ModalState } from './types';

const mutations: MutationTree<ModalState> = {
  setShow(state, payload: boolean) {
    state.isShown = payload;
  },
  setShowDeleteModal(state, payload: boolean) {
    state.isShownDelete = payload;
  },
  setTemplateUUID(state, payload: string) {
    state.deletedTemplateUUID = payload;
  }
};

export default mutations;