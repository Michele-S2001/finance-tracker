import { startOfDay, startOfMonth, startOfYear, endOfMonth, endOfYear, endOfDay, sub } from 'date-fns'

export const useSelectedTimePeriod = (period) => {
  const dates = computed(
    () => {
      switch (period.value) {
        case 'Yearly':
          return {
            current: {
              from: startOfYear(new Date()),
              to: new Date()
            },
            previous: {
              from: startOfYear(sub(new Date(), { years: 1})),
              to: endOfYear(sub(new Date(), { years: 1}))
            }
          }
        case 'Monthly':
          return {
            current: {
              from: startOfMonth(new Date()),
              to: new Date()
            },
            previous: {
              from: startOfMonth(sub(new Date(), { month: 1})),
              to: endOfMonth(sub(new Date(), { month: 1}))
            }
          }
        case 'Daily':
          return {
            current: {
              from: startOfDay(new Date()),
              to: new Date()
            },
            previous: {
              from: startOfDay(sub(new Date(), { day: 1})),
              to: endOfDay(sub(new Date(), { day: 1}))
            }
          }
        default:
          break;
      }
    }
  )

  return dates
}