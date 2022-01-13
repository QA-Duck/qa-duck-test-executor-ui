const actions: any = {
  openModal({ commit }: any) {
    commit('setShow', true);
  },
  closeModal({ commit }: any) {
    commit('setShow', false);
  },
  openDeleteModal({ commit }: any, templateUUID: string) {
    commit('setShowDeleteModal', true);
    commit('setTemplateUUID', templateUUID)
  },
  closeDeleteModal({ commit }: any) {
    commit('setShowDeleteModal', false);
  },
}; 

export default actions;