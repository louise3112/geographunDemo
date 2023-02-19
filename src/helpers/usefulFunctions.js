// Selects a random index from a given total of indexes:
export const randomIndex = (totalOptions) => {
    return Math.floor(Math.random() * totalOptions)
}

// Selects a random array of n countries:
export const randomCountries = (array, n) => {
    const selected = []
    const remaining = [...array]

    for (let i = 0; i < n; i++) {
        let index = randomIndex(remaining.length)
        selected.push(remaining[index])
        remaining.splice(index, 1)
    }
    
    return selected
}

