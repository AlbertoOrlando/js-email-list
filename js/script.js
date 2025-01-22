const listaEmailRan = document.getElementById("listaEmail");
let arrayEmail = [];


for(let i = 0; i < 10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        const result = response.data;
        arrayEmail.push(result.response)
        // console.log(result.response);
        // listaEmailRan.innerHTML += `
        //     <li class = "modificaLi">${result.response}</li>
        // `;
        // if(arrayEmail.length == 10)console.log(arrayEmail);
        if(arrayEmail.length == 10){
                for(let i = 0; i < arrayEmail.length; i++ ){
                    listaEmailRan.innerHTML += `
                    <li class = "modificaLi">${arrayEmail[i]}</li>
                `;
                }
        };
    })
    .catch(error => {
        console.error(error)
    })
}
