function imc(){
    if(document.getElementById("peso").value > 0){
        if(document.getElementById("altura").value > 0){
                let peso = document.getElementById("peso").value;
                let altura = document.getElementById("altura").value;
                let total = (peso/(altura * altura));
                if (total < 18.5){
                    swal(`Abaixo do peso`, `O seu IMC é: ${total.toFixed(2)}`);
                }
                else if (total >= 18.5 && total <= 24.99){
                    swal(`Peso normal`, `O seu IMC é: ${total.toFixed(2)}`);
                }
                else if (total >= 25 && total <= 29.99){
                    swal(`Acima do peso`, `O seu IMC é: ${total.toFixed(2)}`);
                }
                else{
                    swal(`Obesidade`, `O seu IMC é: ${total.toFixed(2)}`);
                }
        }
    }
}