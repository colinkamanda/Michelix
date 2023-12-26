const btnEl= document.getElementById("btn");
const imgEl =document.querySelector(".img");
imagecontainerEl= document.querySelector(".image-container")


const apiUrl = "https://randomfox.ca/floof/";


async function getImage(){
    try {
        imgEl.src="spinner.svg";
        btnEl.innerText="Loading..."
        btnEl.disabled=true;
        const response = await fetch(apiUrl)
        const data = await response.json();
        imagecontainerEl.style.display="block";
        imgEl.src= data.image;
        btnEl.disabled=false;
        btnEl.innerText="Get fox"
        
    } catch (error) {
        
    }
}




btnEl.addEventListener("click",  getImage)