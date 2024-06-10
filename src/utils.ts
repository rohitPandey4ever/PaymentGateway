// For Debit/Credit Card component
const range = (min: number, max: number) => {
    const result = []
    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result;
}

// For NetBanking component
const bankArray = ['Andhra Bank', 'Axis Bank', 'Bank of Baroda', 'HDFC Bank', 'ICICI Bank',
        'South Indian Bank', 'State Bank of India', 'Yes Bank']

export { range, bankArray }