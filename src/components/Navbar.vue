<template>
  <nav class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 md:px-8 py-3">
      <img src="https://istmocenter.com/wp-content/uploads/2022/10/logo-istmo-center-azul.png" alt="Logo Istmo Center" class="h-10" @error="onError" />
    </div>
  </nav>
</template>

<script setup>
function onError(event) {
  event.target.src = 'https://placehold.co/200x40/00245A/FFFFFF?text=Istmo+Center';
}
</script>
