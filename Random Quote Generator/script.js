const btnEL= document.getElementById("btn");
const quoteEl= document.getElementById("quote");
const AuthorEl= document.getElementById("author")
const nameEL = document.getElementById("name")

const urlApi ="https://api.quotable.io/random"

async function getQuote(quotes){

try {
    AuthorEl.style.display ="none";
    quoteEl.innerText ="Geting quote...";
    btnEL.innerText="Loading..."
    btnEL.disabled =true
   
   
    const response = await fetch(urlApi)
    const data = await response.json()
    quoteEl.innerText = data.content;
    AuthorEl.innerText =" ~ " + data.author;
    AuthorEl.style.display = "block";
    btnEL.innerText="Get Quote"
    btnEL.disabled =false
    // console.log(data;)
   

} catch (error) {
    // console.log(error)
    quoteEl.innerText="An error happened, try again "
    // btnEL.innerText="Get Quote"
    // btnEL.disabled =false
}
    

}




btnEL.addEventListener("click", (e)=>{
    getQuote(e.target.value)

})