<template>
  <UModal v-model="isOpen">
    <UCard>
      <template #header>
        Add Transaction
      </template> 

      <UForm :state="state">
        <!-- Transaction type -->
        <UFormGroup :required="true" label="Transaction Type" name="type" class="mb-4">
          <USelect placeholder="Select the transaction type" :options="types" v-model="state.type"/>
        </UFormGroup>
        <!-- Amount -->
        <UFormGroup label="Amount" :required="true" name="amount" class="mb-4">
          <UInput type="number" placeholder="Amount" v-model.number="state.amount"/>
        </UFormGroup>
        <!-- Transaction date aka created_at -->
        <UFormGroup label="Transaction date" :required="true" name="created_at" class="mb-4">
          <UInput type="date" icon="i-heroicons-calendar-days-20-solid" v-model="state.created_at"/>
        </UFormGroup>
        <!-- Description -->
        <UFormGroup label="Description" hint="Optional" name="description" class="mb-4">
          <UInput placeholder="Description" v-model="state.description"/>
        </UFormGroup>
        <!-- Category -->
        <UFormGroup :required="true" label="Category" name="category" class="mb-4">
          <USelect placeholder="Category" :options="categories" v-model="state.category"/>
        </UFormGroup>
        <UButton type="submit" color="black" variant="solid" label="Save" />
      </UForm>
    </UCard>
  </UModal>
</template>

<script setup>
import { categories, types } from '~~/costants';

const isOpen = defineModel()

const state = ref({
  type: undefined,
  amount: 0,
  created_at: undefined,
  description: undefined,
  category: undefined
})
</script>