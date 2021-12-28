<template>
    <button @click="goToContainer(this.$route.params.templateUUID, this.job.containerId)" class="job__item">
      <p v-if="this.job.status == 'FINISH_SUCCESS'" class="job__item-field success">SUCCESS</p>
      <p v-if="this.job.status == 'RUNNING'" class="job__item-field run">RUNNING</p>
      <p class="job__item-field container">{{this.job.containerId}}</p>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'JobItem',
  props: {
      job: Object
  },
  methods: {
    goToContainer(templateUUID: string, containerId: string) {
      this.$router.push({ path: `/templates/${templateUUID}/job/${containerId}` });
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

.run {
  color: rgb(40, 98, 146);
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

.job__item-field {
  font-weight: 700;
}

</style>
