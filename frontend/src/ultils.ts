export const formatCurrency = (price: string) => {
    const currency = price.split('&nbsp;')
    return {
        cost: Number(currency[0]),
        currency: currency[1]
    }
}

export function formatCash(price: number) {
    return String(price).split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}