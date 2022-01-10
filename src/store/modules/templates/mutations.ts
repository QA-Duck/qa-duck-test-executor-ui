import { MutationTree } from 'vuex';
import { TemplateState } from './types';
import TemplateItem from '@/store/models/template-item';


const mutations: MutationTree<TemplateState> = {
  templatesUpload(state, payload: TemplateItem[]) {
    state.templatesList = payload;
  },
};

export default mutations;