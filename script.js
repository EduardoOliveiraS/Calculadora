function Calcular(){
    let n1 = document.getElementById('txtnum1')
    let n2 = document.getElementById('txtnum2')
    let res = document.getElementById('res')
    if(n1.value.length == 0 || n2.value.length == 0){
        alert('[ERRO] CONFIRA OS DADOS E TENTE NOVAMENTE!!!')
    }
    else{
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let cal = document.getElementsByName('txtcal')
        res.innerHTML = ""
        if (cal[0].checked){
            res.innerHTML = `A soma de ${num1}+${num2} = ${num1+num2}`

        }
        else if(cal[1].checked){
            res.innerHTML = `A subtração de ${num1}-${num2} = ${num1-num2}`
        }
        else if(cal[2].checked){
            res.innerHTML = `A Multiplicação de ${num1}x${num2} = ${num1*num2}`
        }
        else if(cal[3].checked){
            res.innerHTML = `A divisão de ${num1}/${num2} = ${num1/num2}`
        }
    }
}