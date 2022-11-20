// TODO: make dynamic for every currency

const formatter = Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
})

export function moneyFormatter(cost) {
    return formatter.format(cost)
} 