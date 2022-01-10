<template>
  <div class="view">
    <h1>Templates</h1>
    <div class="template-list">
     <div v-for="template in this.templatesStore.state.templatesList" 
     :key="template.uid" class="template">
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
import { useStore } from 'vuex'
import { templateKey } from '@/store/modules/templates'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Templates',

  data() {
    return {
      templatesStore: useStore(templateKey),
    }
  },

  mounted() {
    this.templatesStore.dispatch("getTemplates");
  },

  methods: {
    goToJobs(templateUUID: string) {
      this.$router.push({ path: `/templates/${templateUUID}/jobs` });
    },
  }

});
</script>

<style scoped>
  .template-list {
    margin-top: 40px;
    display: flex;
    max-height:80vh;
    overflow-y: scroll;
    max-width: 1100px;
    margin-right: 50px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .template-list::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  .template-list::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(200, 200, 200, 0.3);
  }

  .template-list::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #6a9e61;
    outline: none;
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
