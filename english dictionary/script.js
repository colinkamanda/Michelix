const inputEl=document.getElementById("input");
const infotextEl=document.getElementById("info-text");
const meaningContainEl=document.getElementById("meaning-container");
const titleEl=document.getElementById("title");
const meaningEl=document.getElementById("Meaning");
const audioEl = document.getElementById("audio");


async function fetchApi(word){
    try {
       
        meaningContainEl.style.display="none";
        infotextEl.innerText=`searching the meaning of "${word}"...`
        infotextEl.style.display ="block";
        const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result= await fetch(url).then ((response)=>response.json());
     
        
        if(result.title){
            titleEl.innerText= word;
            meaningEl.innerText=`meaning of "${word}" Doesn't exist`;
            audioEl.style.display="none";
        }else{
            
        }
        
        // console.log(result);
        infotextEl.style.display ="none";
        meaningContainEl.style.display="block";
        titleEl.innerText=result[0].word
        meaningEl.innerText=result[0].meanings[0].definitions[0].definition
        audioEl.src=result[0].phonetics[0].audio
        audio.style.display="block"
       
    } catch (error) {
       console.log("An Error happened, try again later or check your Network");
    }
    
    
}


inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchApi(e.target.value);
    }
})


