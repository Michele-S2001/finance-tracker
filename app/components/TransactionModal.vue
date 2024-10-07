<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        Add Transaction
      </template> 
      <div>Hello!</div>
    </UCard>
  </UModal>
</template>

<script setup>
const isOpen = defineModel()
</script>