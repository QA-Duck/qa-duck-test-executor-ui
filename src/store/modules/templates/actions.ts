import TemplateItem from '@/store/models/template-item';
import executionClient from '@/client/TestExecutionClient';
import { assert } from '@vue/compiler-core';

const actions: any = {
  async getTemplates({ commit }: any): Promise<void> {
    await executionClient.getTemplates().then(response => {
      commit('templatesUpload', response as TemplateItem[]);
    })
  },
  
  async addTemplate({ commit }: any, template: any): Promise<void> {
    await executionClient.create(template).then(response => {
      assert(response.status == 201);
      alert("Шаблон успешно создан");
    })
    .catch((err) => {
      alert("Не удалось создать шаблон")
      alert(err);
    })
  }
};

export default actions;