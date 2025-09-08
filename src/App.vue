<template>
  <div>
    <Navbar />
    <div class="container mx-auto p-4 md:p-8">
      <template v-if="data">
        <CurrentSprint :sprintInfo="data.sprintInfo" :projects="data.projects" />
        <OtherStages :projects="data.projects" />
        <CompletedProjects :projects="data.projects" />
      </template>
      <template v-else-if="error">
        <div class="text-red-500 text-center py-8">{{ error }}</div>
      </template>
      <template v-else>
        <div class="text-center py-8">Cargando datos...</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import CurrentSprint from './components/CurrentSprint.vue'
import OtherStages from './components/OtherStages.vue'
import CompletedProjects from './components/CompletedProjects.vue'
import { fetchDashboardData, DashboardData } from './services/projectService'

const data = ref<DashboardData | null>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    data.value = await fetchDashboardData()
  } catch (e: any) {
    error.value = e.message || 'Error fetching data'
  }
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
