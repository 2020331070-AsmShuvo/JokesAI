
let tags = '';
let f=0;
let blockedText='';

const createJokes = async(tags)=>{
    const url = `https://v2.jokeapi.dev/joke/${tags}${blockedText=="?blacklistFlags=" ? "":blockedText}`;
    console.log(url);
    const res = await fetch(url);
    const data =await res.json();
    console.log("tags: "+tags);
    
    const type = data.type;
    // console.log(data);
    // console.log(data.type);
    let joke = ``;
    if(type == "single"){
         joke = data.joke;
        console.log(joke);
    }
    else{
        const setup = data.setup;
        const delivery = data.delivery;
         joke = 
        `
        ${setup}
        ${delivery}
        `
        console.log(joke);
    }
    const jokesContainer = document.getElementById('jokes-container');
    jokesContainer.innerText = joke;

}

const generateJokes = ()=>{
    if(tags==''){
        createJokes("Any")
    }
    else
        createJokes(tags);
}
// const tagsList = [];

// const AddTag = (checkbox, tag) => {
//     // console.log(checkbox.checked);
//     if (tagsList.includes(tag)) {
//         return;
//     }

//     if (checkbox.checked) {
//         if (f) {
//             tags += ',';
//         } else {
//             f++;
//         }
//         tags += tag;
//         tagsList.push(tag);
//     } 
//     if(!checkbox.checked) {
//         const index = tagsList.indexOf(tag);
//         if (index !== -1) {
//             tagsList.splice(index, 1); // Remove tag from tagsList array
//         }
//         // Update tags string by joining tagsList array
//         tags = tagsList.join(',');
//     }

//     console.log(tags);
//     // createJokes(tags);
// };


const blockList = [];

const blockTags = (checkbox, tag)=>{
// https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist
    if(checkbox.checked){
        if(!blockList.includes(tag)){
            blockList.push(tag);
        }
    }
    else{
        // console.log("else called");
        
        if(blockList.includes(tag)){
            const index = blockList.indexOf(tag);
            // console.log(index);
            if (index !== -1) {
                blockList.splice(index, 1); // Remove tag from blockList array
            }
        }
        // console.log(blockList.length);
    }
    if(blockList.length>=0){
        blockedText='';
        blockedText+="?blacklistFlags=";
    }
    for(let i=0; i<blockList.length; i++){
        blockedText+=blockList[i];
        if(i!=blockList.length-1)
        {
            blockedText+=",";
        }
    }
    
    console.log(blockedText);
    
    
}
