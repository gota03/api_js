//let lista = document.querySelector("#lista")
let tabela = document.querySelector("#tabela")

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
        console.log(dados.results)
    } catch (error) {
        //console.log("o seguinte erro ocorreu: ", error)
    }
}

carregarDados()