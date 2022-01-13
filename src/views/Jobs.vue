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
import Job from '@/store/models/job';
import TemplateItem from '@/store/models/template-item';

export default defineComponent({
  name: 'Jobs',

  components: {
    JobItem,
  },

  data() {
    return {
      executeLoading: false,
      template: new TemplateItem("", "", ""),
      templatesStore: useStore(templateKey),
    }
  },

  methods: {

    run() {
      this.executeLoading = true;
      executionClient.runTest(this.$route.params.templateUUID).then((data) => {
        if(data != null) {
          console.log("TEST")
        }
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
      template.jobs.sort(function(o1: any, o2: any) {
        return Date.parse(o2.startJobTime) - Date.parse(o1.startJobTime);
      })
      this.template = template
    },

    setWithRequest() {
      this.templatesStore.dispatch("getTemplates").then(() => {
        this.setTemplate(this.getTemplate())
      });
    },
 
    setTemplateWithCheckJobs() {
      let findingTemplate = this.getTemplate();
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