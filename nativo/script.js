async function carregarDados(){
    const url = "https://swapi.dev/api/people/?format=json"
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()
        for (elementos of dados.results) {
            console.log(`Sou ${elementos.name} e nasci no ano ${elementos.birth_year}`)
        }
        //console.log(dados.results)
    } catch (error) {
        //console.log("o seguinte erro ocorreu: ", error)
    }
}

carregarDados()