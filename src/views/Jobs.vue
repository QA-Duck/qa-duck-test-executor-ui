<template>
  <div class="view">
    <div class="collect">
       <h1>{{this.template.name}}</h1>
       <button :disabled="executeLoading"  v-bind:class="{run: true, load: executeLoading }" @click="run()">Execute</button>
    </div>
    <div class="jobs">
      <JobItem v-for="job in this.template.jobs" :key="job" :job="job"/>
    </div>
  </div>
</template>
 
<script lang="ts">

import { defineComponent} from 'vue';
import { useStore } from 'vuex'
import { templateKey } from '@/store/modules/templates'
import JobItem from '@/components/JobItem.vue';
import executionClient from '@/client/TestExecutionClient'

export default defineComponent({
  name: 'Jobs',

  components: {
    JobItem,
  },

  data() {
    return {
      executeLoading: false,
      template: {},
      templatesStore: useStore(templateKey),
    }
  },

  methods: {

    run() {
      this.executeLoading = true;
      executionClient.runTest(this.$route.params.templateUUID).then((data) => {
        console.log(data);
      }).catch((err) => {
        alert("Не удалось запустить процесс, попробуйте снова !")
      }).finally(() => {
        this.executeLoading = false;
        this.setWithRequest();
      })
    },

    getTemplate() {
      let findedTemplate = null;
      this.templatesStore.state.templatesList.map((template: any) => {
          if (template.uid == this.$route.params.templateUUID) {
            findedTemplate = template;
            return template;
          }
       });
       return findedTemplate;
    },

    setTemplate(template: any) {
      this.template = template
    },

    setWithRequest() {
      this.templatesStore.dispatch("getTemplates").then(() => {
        this.setTemplate(this.getTemplate())
      });
    },
 
    setTemplateWithCheckJobs() {
      let findingTemplate = this.getTemplate();
      console.log(findingTemplate);
      if (findingTemplate == null) {
        this.setWithRequest();
      } else {
        this.setTemplate(findingTemplate);
      }
    }
  },

  mounted() {
    this.setTemplateWithCheckJobs();
  },

});
</script>

<style scoped>

.load {
  background: grey !important;
  cursor: progress !important;
}

.collect {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.collect h1{ 
  margin: 0px;
}

.run {
    background: #64925d;
    color:rgb(230, 230, 230);
    width: 100px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    border: 0;
    box-shadow: 0px 0px 12px rgba(162, 162, 162, 0.25);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
}

.run:hover {
  background: #6a9e61;
}

.jobs {
  max-width: 1200px;
  overflow-y: scroll;
  max-height: 80vh;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.jobs::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
}

.jobs::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(200, 200, 200, 0.3);
}

.jobs::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #6a9e61;
  outline: none;
}

</style>