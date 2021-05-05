const cep = document.querySelector('#cep')

const showData = (result) => {
    for(const campo in result){ // Para cada resultado(result) que veio neste objeto, para cada um deles armazena na variavel campo
        if(document.querySelector("#"+campo)){ //   Veja se este "campo pego na API "existe no meu "campo HTML", se existir "pegue", se nao descarta
            document.querySelector("#" + campo).value = result[campo] //preencher o campo automatico 
        }
    } 
}

cep.addEventListener('blur',(e) =>{

    let search = cep.value.replace('-','')  //tirar o "-" do CEP digitado no HTML

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

    .then(response =>{response.json() //se der certo entao (then) faça alguma coisa
        .then(data => showData(data))
    }) 
    .catch(e => console.log (`Deu Erro:`+ e,message)) // se der errado (catch) faça outra
    
})