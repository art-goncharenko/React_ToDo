const candidates = [
    { name: 'John', age: 25, company: 'Google' },
    { name: 'Mike', age: 30, company: 'Google' },
    { name: 'Linda', age: 28, company: 'Facebook' },
    { name: 'Peter', age: 32, company: 'Facebook' },
    { name: 'Bill', age: 27, company: 'Uber' },
    { name: 'Steve', age: 29, company: 'Microsoft' },
    { name: 'Marry', age: 30, company: 'Apple' },
]

const uniqueCompanies = candidates.reduce((acc, candidate) => {
    if (!acc.includes(candidate.company)) {
        acc.push(candidate.company)
    }
    return acc
}, [])

const allCompanies = candidates.map(candidate => candidate.company) // returns an array of all companies
const uniqueCompanies1 = [...new Set(allCompanies)] // returns an array of unique companies