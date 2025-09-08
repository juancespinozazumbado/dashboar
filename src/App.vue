<template>
  <div>
    <Navbar />
    <div class="container mx-auto p-4 md:p-8">
      <CurrentSprint :sprintInfo="data.sprintInfo" :projects="data.projects" />
      <OtherStages :projects="data.projects" />
      <CompletedProjects :projects="data.projects" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import CurrentSprint from './components/CurrentSprint.vue'
import OtherStages from './components/OtherStages.vue'
import CompletedProjects from './components/CompletedProjects.vue'

const data = ref({ sprintInfo: {}, projects: [] })

onMounted(async () => {
  const res = await fetch('/mockDatabase.json')
  data.value = await res.json()
})
</script>

<style>
:root {
  --brand-blue: #00245A;
  --brand-orange: #F37021;
}
body {
  font-family: 'Inter', sans-serif;
}
.progress-bar-bg {
  background-color: #e9ecef;
}
</style>
