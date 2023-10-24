const resultado = document.querySelector(".resultado")

function inserir(num){

    resultado.innerHTML += num

}

function limpar(){
    resultado.innerHTML = ""
}

function apagar() {
    resultado.innerHTML = resultado.innerHTML.substring(0, resultado.innerHTML.length -1)
}

function calcular(){
    resultado.innerHTML = eval(resultado.innerHTML)
}