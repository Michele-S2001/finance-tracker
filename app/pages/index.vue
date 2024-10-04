<template>
  <section class="flex items-center justify-between mb-10">
    <h1 class="text-4xl font-extrabold">Summary</h1>
    <div>
      <USelectMenu :options="transactionViewOptions" v-model="selectedView" />
    </div>
  </section>

  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16 mb-10">
    <Trend xcolor="red" title="Income" :amount="6000" :last-amount="6000" :loading="false" />
    <Trend xcolor="red" title="Expense" :amount="1200" :last-amount="2000" :loading="false" />
    <Trend xcolor="red" title="Investments" :amount="3400" :last-amount="3000" :loading="false" />
    <Trend xcolor="red" title="Savings" :amount="3700" :last-amount="6000" :loading="false" />
  </section>

  <section>
    <Transaction v-for="transaction in transactions" :key="transaction.id" :transaction="transaction"/>
  </section>
</template>

<script setup>
import { transactionViewOptions } from '~~/costants';
const selectedView = ref(transactionViewOptions[1])
const transactions = ref([])

const supabase = useSupabaseClient()

const { data, status } = await useAsyncData('transactions', async () => {
  const { data, error } = await supabase
    .from('transactions')
    .select()

    if(error) return []

    return data
})

console.log(data);

transactions.value = data.value

</script>