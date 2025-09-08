<template>
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-center mb-8 text-[--brand-blue]">Proyectos en Otras Etapas</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-slate-300">
        <h3 class="text-xl font-semibold mb-4 text-center text-[--brand-blue] border-b pb-2">En Cola de Priorización</h3>
        <ul class="space-y-3 pt-2">
          <li v-for="project in queueProjects" :key="project.id" class="text-slate-700 hover:text-[--brand-blue] transition-colors">{{ project.name }}</li>
        </ul>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-slate-300">
        <h3 class="text-xl font-semibold mb-4 text-center text-[--brand-blue] border-b pb-2">Priorizados</h3>
        <ul class="space-y-3 pt-2">
          <li v-for="project in prioritizedProjects" :key="project.id" class="text-slate-700 hover:text-[--brand-blue] transition-colors">{{ project.name }}</li>
        </ul>
      </div>
      <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-slate-300">
        <h3 class="text-xl font-semibold mb-4 text-center text-[--brand-blue] border-b pb-2">En Testing</h3>
        <ul class="space-y-3 pt-2">
          <li v-for="project in testingProjects" :key="project.id" class="text-slate-700 hover:text-[--brand-blue] transition-colors">{{ project.name }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['projects'])
const queueProjects = computed(() => props.projects.filter(p => p.status === 'queue'))
const prioritizedProjects = computed(() => props.projects.filter(p => p.status === 'prioritized'))
const testingProjects = computed(() => props.projects.filter(p => p.status === 'testing'))
</script>
