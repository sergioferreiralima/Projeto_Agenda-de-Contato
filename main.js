const form = document.getElementById('form')
const contato = []
const numero =  []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaContato()
    atualizaContato()

})

function adicionaContato(){
    const inputNomeContato = document.getElementById('Nome')
    const inputNumeroContato = document.getElementById('Numero')  


    if(numero.includes(inputNumeroContato.value)){
        alert('Numero de telefone já existe!')
    }else{
        contato.push(inputNomeContato.value)
        numero.push(inputNumeroContato.value)
    
        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputNumeroContato.value}</td>`
        linha += '</tr>'
    
        linhas += linha
    
        inputNomeContato.value = ''
        inputNumeroContato.value = ''
        
    }
  
}

function atualizaContato(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}
