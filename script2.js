const citation = document.querySelector('#citation')
const autrice = document.querySelector('#autrice')
const bouton = document.querySelector('#button')
const quote = document.querySelector('.quote')
const liste_reponse = document.querySelector('#quote-list')
const compteur = document.querySelector('#count')
let quotecount = 0
bouton.addEventListener("click", () =>{
   
    quotecount +=1
    let text = citation.value
    let author = autrice.value
    addQuote(text,author)
console.log('rere',citation.value)
console.log('fefe',autrice.value)
console.log("bouh")
console.log("dre")
})

function addQuote(text,author) {
   
    compteur.innerHTML = `<h3 id = "count">${quotecount} citations</h3>`
    const reponse = document.createElement('div')
    reponse.innerHTML = `
    <div id class ="quote"
        <p class ="text">citation: "${text}"</p>
        <p class='author'>autrice: ${author} </p>
    </div>`
    liste_reponse.appendChild(reponse)
}


