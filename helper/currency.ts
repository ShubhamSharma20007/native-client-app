export const currency = (value: number | string) => {
    let num;
    if (typeof value === 'string') {
        num = Number(value)
    }
    return num!.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    })

}