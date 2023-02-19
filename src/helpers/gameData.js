import flags from "../images/flags.jpg"
import languages from "../images/languages.jpeg"
import capitals from "../images/capitals.jpg"
import populations from "../images/population.jpeg"

export const gameData = {

    flags: {
        category: "flag",
        type: "multichoice",
        name: "Whose Flag Is It Anyway?",
        question: "Guess which country this flag belongs to from one of the options given.",
        answer: "This flag belongs to ",
        image: flags
    },

    languages: {
        category: "language",
        type: "multichoice",
        name: "Language Challenge",
        question: "Guess which country this language spoken in from one of the options given.",
        answer: "This language is spoken in ",
        image: languages
    },

    capitals: {
        category: "capital",
        type: "dropdown",
        name: "A Question Of Capitals",
        question: "Guess which country this city is the capital of by typing the name of the conutry in the box.",
        answer: "This city is the capital of ",
        image: capitals
    },
    
    populations: {
        category: "population",
        type: "higher-lower",
        name: "Play Your Populations Right",
        question: "Decide whether the population for the country revealed is 'Higher' or 'Lower' than the population of the previous country.",
        image: populations
    }

}

