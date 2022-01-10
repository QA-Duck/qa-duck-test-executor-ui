import { GetterTree } from 'vuex';
import { TemplateState } from './types';
import { RootState } from '../../types';

const getters = {
  getReceivedTemplates(state: any) { 
    return state.templatesList; 
  },
};

export default getters;