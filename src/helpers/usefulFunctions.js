// Selects a random index from a given total of indexes:
export const randomIndex = (totalOptions) => {
    return Math.floor(Math.random() * totalOptions)
}

// Selects a random array of n countries:
export const randomCountries = (array, n, category) => {
    const selected = []
    const remaining = [...array]
    const categoryIsArray = Array.isArray(array[0][category])
    let uniqueAnswers = ""

    for (let i = 0; i < n; ) {
        let index = randomIndex(remaining.length)
        let newAnswer = {...remaining[index]} // country object

        if (categoryIsArray) {
            // Check if all values are unique 
            let duplicateCount = 0
            newAnswer[category].forEach(element => {
                if (uniqueAnswers.includes(element)) {
                    duplicateCount += 1
                }
            })

            // If all values are unique then:
            if (duplicateCount === 0) {
                // Add answer values to uniqueAnswers array:
                uniqueAnswers += newAnswer[category].toString()

                // Amend newAnswer object to contain a single object for the category, rather than an array
                newAnswer[category] = newAnswer[category][0]

                selected.push(newAnswer)
                remaining.splice(index, 1)
                i++
            }

        } else if (!uniqueAnswers.includes(newAnswer[category])) {
            uniqueAnswers += newAnswer[category]
            selected.push(newAnswer)
            remaining.splice(index, 1)
            i++
        }
    }
    
    return selected
}
