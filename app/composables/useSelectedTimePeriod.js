import { startOfDay, startOfMonth, startOfYear, endOfMonth, endOfYear, endOfDay, sub } from 'date-fns'

export const useSelectedTimePeriod = (period) => {
  const current = computed(
    () => {
      switch (period.value) {
        case 'Yearly':
          return {
            from: startOfYear(new Date()),
            to: new Date()
          }
        case 'Monthly':
          return {
            from: startOfMonth(new Date()),
            to: new Date()
          }
        case 'Daily':
          return {
            from: startOfDay(new Date()),
            to: new Date()
          }
      }
    }
  )

  const previous = computed(
    () => {
      switch (period.value) {
        case 'Yearly':
          return {
            from: startOfYear(sub(new Date(), { years: 1})),
            to: endOfYear(sub(new Date(), { years: 1}))
          }
        case 'Monthly':
          return {
            from: startOfMonth(sub(new Date(), { month: 1})),
            to: endOfMonth(sub(new Date(), { month: 1}))
          }
        case 'Daily':
          return {
            from: startOfDay(sub(new Date(), { day: 1})),
            to: endOfDay(sub(new Date(), { day: 1}))
          }
      }
    }
  )

  return {
    current,
    previous
  }
}