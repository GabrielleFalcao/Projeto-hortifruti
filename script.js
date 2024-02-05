var soma=0
var res= document.getElementById('res')

function AdicionarFruta(){
    var fruta_selecionada= document.getElementById('txtfruta')
    var fruta= Number(fruta_selecionada.value)
    let lista= document.querySelector('select#flista')
    var frutas= ["Banana", "Morango", "Abacaxi", "Maga", "Uva", "Maçã", "Maracujá", "Acerola", "Limão"]
    var num_frutas=[0, 1, 2, 3, 4, 5, 6, 7, 8]
    var precos=[2.50, 7.00, 3.00, 5.00, 4.50, 1.50, 8.00, 1.50, 0.80]
  
    if(fruta>8){
        window.alert('Número inválido')
    } 
    
    if(fruta_selecionada.value.length<=0){
        window.alert("Digite um número")
    } else{

    if(num_frutas.indexOf(fruta)!=-1){
        let item= document.createElement('option')
        item.text=`Fruta ${frutas[fruta]} adicionada - ${precos[fruta]}`
        lista.appendChild(item)

        soma= soma+ precos[fruta]
    } }

    

}

function finalizar(){
    res.innerHTML=`O valor total é igual a ${soma}`
}

