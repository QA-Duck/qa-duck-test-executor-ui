<template>
  <div class="view jobs">
    <div class="collect">
       <h1>{{this.template.name}}</h1>
       <button class="back" @click="back()">Go back</button>
    </div>
    <h3 >Job - #{{this.$route.params.containerId}}</h3>
    <textarea readonly v-model="message" class="log">
    </textarea>
    <div class="tools">
      <button class="refresh" @click="logs()">Обновить</button>
      <a class="artifact" v-if="this.template.testType == 'JUNIT' && this.job.status == 'FINISH_SUCCESS'" :href="this.job.jobArtifactLink">Allure отчет</a>
      <a class="artifact" v-if="this.template.testType == 'KARATE' && this.job.status == 'FINISH_SUCCESS'" :href="this.url + this.job.jobArtifactLink">Karate отчет</a>
    </div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent} from 'vue';
import executionClient from '@/client/TestExecutionClient'

export default defineComponent({
  name: 'Job',
  data() {
    return {
      template: {},
      job: {},
      message: "",
      url: "",
    }
  },
  mounted() {
   this.logs();
   executionClient.getJobs(this.$route.params.templateUUID).then((result) => {
      this.template = executionClient.getTemplatesFromStorageByUUID(this.$route.params.templateUUID);
      this.job = executionClient.getJobFromStorageByContainerId(this.$route.params.containerId);
      console.log(this.job);
   })
   this.url = executionClient.url;
  },
  methods: {
    back() {
      this.$router.push({ path: `/templates/${this.$route.params.templateUUID}/jobs` });
    },
    logs() {
      this.message = "";
        executionClient.getLogs(this.$route.params.containerId).then(lines => {
          lines.forEach((line: any) => {
            this.message += line.replaceAll("STDOUT:", "") + "\n";
          });
        });
    }
  }
});
</script>

<style scoped>

.collect {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.tools {
  display: flex;
}

.collect h1{ 
  margin: 0px;
}

.artifact {
  background-color: rgb(61, 156, 101);
  text-decoration: none;
  color: white;
  border: none;
  max-width: 200px;
  padding: 8px;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.refresh {
  margin-right: 10px;
  font-size: 14px;
  background-color: rgb(58, 94, 173);
  color: white;
  border: none;
  max-width: 200px;
  padding: 8px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.back {
    color:rgb(161, 48, 48);
    text-decoration: underline;
    width: 100px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    background-color: #f3f3f3;
    border-left: 1px solid grey;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 0px;
    cursor: pointer;
    transition: all 0.3s;
}

.jobs {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100% - 90px);
}

textarea::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
}

textarea::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(200, 200, 200, 0.3);
}

textarea::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgb(235, 235, 235);
  outline: none;
}

.log {
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  padding: 20px;
  color: white;
  max-width: 1200px;
  resize: none;
  margin-right: 20px;
  height: calc(100% - 190px);
  border:0;
  background: #161616;
}

</style>