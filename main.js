//🏆 Snack 1
//Ottieni il titolo di un post con una Promise.

//Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo
//di un post dal link https://dummyjson.com/posts/{id}

//🎯 Bonus: Ottieni l'intero post con l'autore
//Crea una funzione getPost(id) che recupera l'intero post.
//Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore,
//recuperati dalla chiamata https://dummyjson.com/users/{post.userId}


function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())  //qui sto recuperando i dati 
            .then(obj => resolve(obj)) // qui sto dicendo con "resolve" che i dati sono pronti per l'uso e sono il mio resolve 
            .catch(reject);
    })

    return promessa;
}

getPostTitle(4)
    .then(obj => console.log(`Il titolo del post è ${obj.title}`)) //qui sto passando il resolve == cosa fare se va a buon fine
    .catch(error => console.error(error)); // qui sto passando il reject == cosa fare se non va a buon fine 


/*----------------------------------------*/

function getPost(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => fetch(`https://dummyjson.com/users/${post.userId}`))
            .then(response => resolve(response.json()))
            .catch(reject);
    })

    return promessa;
}

getPost(6)
    .then(obj => console.log(obj))
    .catch(error => console.error(error));





/*🏆 Snack 2
Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi,
 genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, 
 il dado si "incastra" e la Promise va in reject.
🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio
Modifica la funzione in creaLanciaDado(), che restituisce una closure
 che memorizza l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".*/




function lanciaDado() {
    const promessa = new Promise((resolve, reject) => {

        const numeroDado = Math.floor(Math.random() * 6) + 1;
        setTimeout(() => {
            resolve(numeroDado)
        }, 3000)
    })

    return promessa
}

lanciaDado()
    .then(num => console.log("E' uscito ", num))
    .catch(err => console.err(err))
