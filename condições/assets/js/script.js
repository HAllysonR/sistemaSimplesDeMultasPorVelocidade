//node exec com f8
/*
var vel;
var maxima = 70.5;
for(let i = 1; i<=maxima; i++){
    i++;
    vel = i;
    
}
console.log(vel);

if(vel > 60){
    console.log(`a velocidade do carro é ${vel}km/h`);
    console.log(`Você foi MULTADO por excesso de velocidade`);
} else{
    console.log('diriga sempre usando sinto de segurança');
}
*/

function calcularVelocidade(){
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#resultado');
    var vel = Number(txtv.value);
    res.innerHTML=`Sua velocidade é de <strong> ${vel}km/h </strong> `;
    if(vel > 60){
        var velAtual = vel - 60;
        res.innerHTML += `Você foi pego em alta velocidade, você está ${velAtual}km/h acima do limite permitodo`; 
    }
        res.innerHTML += `<p>Dirija sempre com o sinto de segurança</p>, `
        res.innerHTML += `<p> <strong> Se beber não dirija </strong> </p>`
   
}
