function generateRandomNumber(num) {
    return Math.floor(Math.random() * num) // return random number between 0 / num - 1
}

const randomMessages = {
    sign: ['Sun', 'Moon', 'Jupyter', 'Earth'],
    fortune: ['The worst Luck', 'not bad luck', 'average luck', 'Good Luck', 'The Fucking Best Luck'],
    advice: ['Go fuck yourself', 'Find a partner and have sex', 'Try new things', 'make a porn', 'trust no one']
}

let personalMessage = []

for (let prop in randomMessages) {
    let messageIdx = generateRandomNumber(randomMessages[prop].length)

    switch (prop) {
        case 'sign':
            personalMessage.push(`Your sign: ${randomMessages[prop][messageIdx]}`)
            break;
        case 'fortune':
            personalMessage.push(`Your fortune: ${randomMessages[prop][messageIdx]}`)
            break;
        case 'advice':
            personalMessage.push(`The best advice: ${randomMessages[prop][messageIdx]}`)
            break;
    }
}
console.log(personalMessage)

