<template>
  <div class="view">
    <h1>Templates</h1>
    <div class="template-list">
     <div v-for="template in templatesListData" :key="template.uid" class="template">
       <div class="template-info">
         <p class="template-name">{{template.name}}</p>
         <p class="template-project">{{template.gitProject}}</p>
       </div>
       <button class="go" @click="this.goToJobs(template.uid)">Go</button>
     </div>
   </div>
  </div>
</template>
 
<script lang="ts">
import executionClient from '@/client/TestExecutionClient';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Templates',
  data() {
    return {
      templatesListData: []
    }
  },
  mounted() {
    executionClient.getTemplates().then(data => {
      this.templatesListData = data;
    })
  },
  methods: {
    goToJobs(templateUUID: string) {
      this.$router.push({ path: `/templates/${templateUUID}/jobs` });
    }
  }
});
</script>

<style scoped>
  .template-list {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .template {
    margin-bottom: 20px;
    margin-right: 20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 300px;
    min-height: 300px;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 0px 12px rgba(162, 162, 162, 0.25);
    border-radius: 5px;
  }

  .template .go {
    color:white;
    width: 100px;
    font-size: 16px;
    padding: 10px;
    border: 0;
    background: #84C17A;
    box-shadow: 0px 0px 12px rgba(162, 162, 162, 0.25);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .template .go:hover {
    background: #6a9e61;
  }

  .template-name {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }

  .template-info {
    display: flex;
    flex-direction: column;
  }

  .template-project {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
</style>
