
btnCalc.onclick=function(){
  let num1 = parseInt(inptNum1.value)
  let num2 = parseInt(inptNum2.value)
  let sum = num1 + num2
  lblOutput.value = name + ", the answer is " + sum
}

btnMultiply.onclick=function(){
  let num1 = parseInt(inptNum1.value)
  let num2 = parseInt(inptNum2.value)
  let multiply = num1 * num2
  lblOutput.value = name + ", the answer is " + multiply
}
