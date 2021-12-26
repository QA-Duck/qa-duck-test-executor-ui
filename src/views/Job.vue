<template>
  <div class="view jobs">
    <h1 >{{this.$route.params.name}}</h1>
    <h3 >Job - #{{this.$route.params.containerId}}</h3>
    <textarea readonly v-model="message" class="log">
    </textarea>
  </div>
</template>
 
<script lang="ts">
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'Job',
  data() {
    return {
      message: "",
      eventSource: new EventSource("http://localhost:8081/logs/" + this.$route.params.containerId)
    }
  },
  mounted() {
    this.eventSource.onmessage = (event) => {
      if(event.data == "LOG_END") {
        console.log("CLOSE")
        this.eventSource.close();
      } else {
         this.message += event.data.replaceAll("STDOUT:", "") + "\n"
      }
    };
  },
  unmounted() {
    console.log("CLOSE")
    this.eventSource.close();
  },
  methods: {
  }
});
</script>

<style scoped>

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