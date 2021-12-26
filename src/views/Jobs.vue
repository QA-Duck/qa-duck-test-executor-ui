<template>
  <div class="view">
    <div class="collect">
       <h1>{{this.$route.params.name}}  </h1>
       <button class="run" @click="run()">RUN</button>
    </div>
   
    <div class="jobs">
      <JobItem v-for="job in jobs" :key="job" :job="job"/>
    </div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent} from 'vue';
import JobItem from '@/components/JobItem.vue';
import executionClient from '@/client/TestExecutionClient'

export default defineComponent({
  name: 'Jobs',
  components: {
    JobItem,
  },
  data() {
    return { 
      jobs: []
    }
  },
  methods: {
    run() {
      executionClient.runTest({
        projectName: this.$route.params.projectName,
        environments: {
          ENV: "staging"
        }
      })
      .then(res => {
        res.json().then(data => {
          alert(JSON.stringify(data))
        })
      })
    }
  },
  beforeMount() {
    executionClient.getJobs(this.$route.params.projectName).then(data => {
      this.jobs = data;
    });
  }
});
</script>

<style scoped>

.collect {

  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.collect h1{ 
  margin: 0px;
}

.run {
    color:rgb(230, 230, 230);
    width: 100px;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 5px;
    border: 0;
    background: #64925d;
    box-shadow: 0px 0px 12px rgba(162, 162, 162, 0.25);
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s;
}

.run:hover {
  background: #6a9e61;
}

.jobs {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

</style>