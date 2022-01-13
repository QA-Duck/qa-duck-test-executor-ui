<template>
    <button @click="goToContainer(this.$route.params.templateUUID, this.job.containerId)" class="job__item">
      <div>
        <p v-if="this.job.status == 'FINISH_SUCCESS'" class="job__item-field success">SUCCESS</p>
        <p v-if="this.job.status == 'RUNNING'" class="job__item-field running">RUNNING</p>
        <p v-if="this.job.status == 'PENDING'" class="job__item-field pending">PENDING</p>
        <p v-if="this.job.status == 'ERROR'" class="job__item-field error">ERROR</p>
      </div>
      <div class="time">
        <p>|</p>
        <p class="job__item-field container">{{getDate(this.job)}}</p>
      </div>
      
    </button>
</template>

<script lang="ts">
import Job from '@/store/models/job';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobItem',
  props: {
      job: Object
  },
  methods: {
    goToContainer(templateUUID: string, containerId: string) {
      this.$router.push({ path: `/templates/${templateUUID}/job/${containerId}` });
    },
    getDate(job: any) {
      let d = new Date(Date.parse(job.startJobTime))
      let datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();
      return datestring;
    }
  }
});
</script>


<style scoped>

 .container {
   color:#2e2e2e !important;
}

.success {
  color: rgb(58, 146, 77);
}

.running {
  color: rgb(40, 98, 146);
}

.pending {
  color: rgb(73, 73, 73);
}

.error {
  color: rgb(163, 45, 45);
}

.job__item {
  cursor: pointer;
  max-width: 1200px;
  border-radius: 5px;
  border: 1px solid #efefef;
  padding: 15px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 10px 10px 10px 0px;
}

.time {
  display: flex;
  flex-direction: flex-start;
  
}

.time .job__item-field {
  text-align: start;
  padding: 0px 20px;
  width: 110px;
}

.job__item-field {
  
  font-weight: 700;
}

</style>
