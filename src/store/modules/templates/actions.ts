import TemplateItem from '@/store/models/template-item';
import executionClient from '@/client/TestExecutionClient';

const actions: any = {
  async getTemplates({ commit }: any): Promise<void> {
      await executionClient.getTemplates().then(templates => {
        commit('templatesUpload', templates as TemplateItem[]);
      })
  },
};

export default actions;