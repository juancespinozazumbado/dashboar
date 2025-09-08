<template>
  <header class="mb-10 text-center">
    <h1 class="text-4xl font-bold text-[--brand-blue]">Sprint Actual</h1>
    <p class="text-lg text-slate-600 mt-2">
      Del {{ formatDate(sprintInfo.startDate) }} al {{ formatDate(sprintInfo.endDate) }}
    </p>
  </header>
  <main class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    <div v-for="project in sprintProjects" :key="project.id" class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between border-t-4 border-[--brand-orange]">
      <h3 class="text-xl font-bold text-[--brand-blue]">{{ project.name }}</h3>
      <p class="text-sm text-slate-500 mb-4">Avance de Desarrollo</p>
      <div class="w-full progress-bar-bg rounded-full h-4 mb-2">
        <div class="bg-[--brand-orange] h-4 rounded-full" :style="{ width: project.progress + '%' }"></div>
      </div>
      <p class="text-right text-lg font-semibold text-slate-700">{{ project.progress }}%</p>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['sprintInfo', 'projects'])
const sprintProjects = computed(() => props.projects.filter(p => p.status === 'current_sprint'))
function formatDate(date) {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
