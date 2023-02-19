// Selects a random index from a given total of indexes:
export const randomIndex = (totalOptions) => {
    return Math.floor(Math.random() * totalOptions)
}

// Selects a random array of n countries:
export const randomCountries = (array, n, category) => {
    const selected = []
    const remaining = [...array]

    for (let i = 0; i < n;) {
        let index = randomIndex(remaining.length)
        let newAnswer = remaining[index]

        // Assess uniquness of answer value:
        let answerExists = selected.findIndex(answer => answer[category] === newAnswer[category])

        if (answerExists < 0) {
            selected.push(newAnswer)
            remaining.splice(index, 1)
            i++
        }
    }
    
    return selected
}
