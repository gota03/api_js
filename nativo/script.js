let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")
let campoBusca = document.querySelector("#campo")
let btnFiltrar = document.querySelector("#filtrar")

async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        for (elementos of dados.results) {
            // CRIANDO ELEMENTOS HTML DINAMICAMENTE
            //const itemLista = document.createElement("li")
            //itemLista.classList.add("list-group-item")
            //itemLista.textContent = `Sou ${elementos.name}, tenho ${elementos.height} de altura sou do gênero ${elementos.gender} e tenho a cor do cabelo ${elementos.hair_color}`
            //lista.appendChild(itemLista)
            const linha = document.createElement("tr")

            const tdNome = document.createElement("td")
            tdNome.textContent = `Meu nome é ${elementos.name}`
            linha.appendChild(tdNome)

            const tdPeso = document.createElement("td")
            tdPeso.textContent = `o meu peso é ${elementos.mass}`
            linha.appendChild(tdPeso)

            const tdOlho = document.createElement("td")
            tdOlho.textContent = `e a cor do meu olho é ${elementos.eye_color}`
            linha.appendChild(tdOlho)

            tabela.appendChild(linha)
            
        }
        //console.log(dados.results)
    } catch (error) {
        //console.log("o seguinte erro ocorreu: ", error)
    }
}

async function filtrarDados(idPersonagem){
    const url = `https://swapi.dev/api/people/${idPersonagem}/?format=json`
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        console.log(dados)
        let linha = document.createElement("tr")

        let tdName = document.createElement("td")
        tdName.textContent = `Meu nome é ${dados.name}`
        linha.appendChild(tdName)

        let tdPeso = document.createElement("td")
        tdPeso.textContent = `Meu peso é ${dados.mass}`
        linha.appendChild(tdPeso)

        let tdOlho = document.createElement("td")
        tdOlho.textContent = `Meu peso é ${dados.eye_color}`
        linha.appendChild(tdOlho)

        tabela.appendChild(linha)
    } catch (error) {
        console.log(" O erro encontrado é: ", error)
    }
      
    }


//carregarDados()
btnFiltrar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    if(campoBusca.value != "" && campoBusca.value >=1 && campoBusca.value <=82){
        filtrarDados(campoBusca.value)
    }
    else{
        alert("Insira um valor válido no campo para pesquisar")
    }
})