
let tags = '';
let f=0;

const createJokes = async(tags)=>{
    const res = await fetch(`https://v2.jokeapi.dev/joke/Any`);
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
const tagsList = [];

const AddTag = (checkbox, tag) => {
    console.log(checkbox.checked);
    if (tagsList.includes(tag)) {
        return;
    }

    if (checkbox.checked) {
        if (f) {
            tags += ',';
        } else {
            f++;
        }
        tags += tag;
        tagsList.push(tag);
    } 
    if(!checkbox.checked) {
        const index = tagsList.indexOf(tag);
        if (index !== -1) {
            tagsList.splice(index, 1); // Remove tag from tagsList array
        }
        // Update tags string by joining tagsList array
        tags = tagsList.join(',');
    }

    console.log(tags);
    // createJokes(tags);
};
