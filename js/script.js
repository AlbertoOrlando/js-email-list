const listaEmailRan = document.getElementById("listaEmail");

for(let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        const result = response.data;
        // console.log(result.response);
        listaEmailRan.innerHTML += `
            <li>${result.response}</li>
        `;
    })
    .catch(error => {
        console.error(error)
    })
}