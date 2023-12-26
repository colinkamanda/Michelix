const btnEl = document.getElementById("btn");
const emojinameEL= document.getElementById("emoji-name");


const emoji=[]

const urlApi="https://emoji-api.com/emojis?access_key=41c966a8a3c0921f5be4ae21508fcd8c9a0ff343"

async function getemoji(){
   
    try {
        const response = await fetch(urlApi).then ((data)=>data.json())

        for (let i=0; i<1500; i++){
        emoji.push({
            emojiName: response[i].character,
            emojiCode: response[i].unicodeName,
        })
        }
       

    } catch (error) {
        
    }
}


getemoji()
console.log(emoji);
btnEl.addEventListener("click", ()=>{
    const RandomNumber = Math.floor(Math.random()*emoji.length)
  
    btnEl.innerText= emoji[RandomNumber].emojiName;
    emojinameEL.innerText=emoji[RandomNumber].emojiCode;


})