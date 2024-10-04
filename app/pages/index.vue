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
    <div v-for="(transactionsOnDay, date) in transactionsGroupByDate" :key="date" class="mb-10">
      <DailyTransactionSummary :date="date" :transactions="transactionsOnDay" />
      <Transaction v-for="transaction in transactionsOnDay" :key="transaction.id" :transaction="transaction"/>
    </div>
    <!--  -->
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

transactions.value = data.value

const transactionsGroupByDate = computed(() => {
  let grouped = {}

  if(transactions.length !== 0) {
    for(const transaction of transactions.value) {
      const date = new Date(transaction.created_at).toISOString().split('T')[0]

      if(!grouped[date]) {
        grouped[date] = []
      }

      grouped[date].push(transaction)
    }
  }

  return grouped
})

console.log(transactionsGroupByDate.value)

</script> 