<template>
  <section>
    <h2 class="text-3xl font-bold text-center mb-8 text-[--brand-blue]">Historial de Proyectos Culminados</h2>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-end mb-4">
        <select v-model="selectedYear" class="rounded-lg border-slate-300 shadow-sm focus:border-[--brand-orange] focus:ring focus:ring-[--brand-orange] focus:ring-opacity-50">
          <option value="all">Mostrar Todos los Años</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200">
          <thead class="bg-slate-100">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-[--brand-blue] uppercase tracking-wider">Nombre del Proyecto</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-[--brand-blue] uppercase tracking-wider">Fecha de Inicio</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-[--brand-blue] uppercase tracking-wider">Fecha de Finalización</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-[--brand-blue] uppercase tracking-wider">Año de Culminación</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-slate-200">
            <tr v-if="filteredProjects.length === 0">
              <td colspan="4" class="text-center py-4 text-slate-500">No hay proyectos para el año seleccionado.</td>
            </tr>
            <tr v-for="project in filteredProjects" :key="project.id" class="hover:bg-slate-50">
              <td class="px-6 py-4 whitespace-nowrap font-medium text-slate-800">{{ project.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-slate-600">{{ formatDate(project.startDate) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-slate-600">{{ formatDate(project.endDate) }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-slate-600">{{ project.completionYear }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps(['projects'])
const selectedYear = ref('all')
const years = computed(() => {
  const set = new Set(props.projects.filter(p => p.status === 'completed' && p.completionYear).map(p => p.completionYear))
  return Array.from(set).sort((a, b) => b - a)
})
const filteredProjects = computed(() => {
  return props.projects.filter(p => {
    if (p.status !== 'completed') return false
    if (selectedYear.value === 'all') return true
    return p.completionYear == selectedYear.value
  })
})
function formatDate(date) {
  if (!date) return 'N/A'
  return new Date(date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>
