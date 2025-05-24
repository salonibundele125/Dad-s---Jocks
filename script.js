const jockEL = document.getElementById('joke');
const jockBtn = document.getElementById('jokeBtn');

jockBtn.addEventListener('click',generatejocke)
generatejocke()

async function generatejocke(){
    const config ={
        header:{
            accept:'application/json',
        },
    }
    const res = await fetch ('https://sv443.net/jokeapi/v2/joke/Programming',config)
    const data = await res.json()
    jockEL.innerHTML=data.setup;
}