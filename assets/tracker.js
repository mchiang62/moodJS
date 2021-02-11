// document.querySelector(".card").addEventListener("click", showTextArea);


// function showTextArea() {

//    return document.querySelector(".card").innerHTML = `<textarea></textarea>`

// }









//variables

const $emojis = document.querySelector('.emojis')
console.log($emojis)



const cardInfo = [
    {
        title: "✔️",
        text: "Thought"
    },
    {
        title: "😢",
        text: "Terrible"
    },
    {
        title: "😞",
        text: "Bad"
    },
    {
        title: "😐",
        text: "Neutral"
    },
    {
        title: "😊",
        text: "Good"
    },
    {
        title: "😄",
        text: "Terrific"
    },
    {
        title: "❤️",
        text: "Gratitude"
    },

];







//function definitions


const createCard = (smiley, feelings) => {
    const card = document.createElement('div');
    card.className = 'card';

    const emoji = document.createElement('div')
    // emoji.innerText = '😢';
    emoji.innerText = smiley;

    const text = document.createElement('div')
    text.className = 'feels';
    // text.innerText = 'Sad';
    text.innerText = feelings;

    card.append(emoji)
    card.append(text)


    return card

}



for (let i = 0; i < cardInfo.length; i++) {
   const $newCard = createCard(cardInfo[i].title, cardInfo[i].text)
   $emojis.appendChild($newCard)
  
}


//invoke functions
const $card = createCard(cardInfo[0].title, cardInfo[0].text)
// $emojis.appendChild($card)







//event delegation










