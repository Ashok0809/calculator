function add(){
    let num1=Number(document.getElementById('num1').value);
    let num2=Number(document.getElementById('num2').value);
    document.getElementById('result').value=num1+num2;
}
function sub(){
    let num1=Number(document.getElementById('num1').value);
    let num2=Number(document.getElementById('num2').value);
    document.getElementById('result').value=num1-num2;
}
function mul(){
    let num1=Number(document.getElementById('num1').value);
    let num2=Number(document.getElementById('num2').value);
    document.getElementById('result').value=num1*num2;
}
function div(){
    let num1=Number(document.getElementById('num1').value);
    let num2=Number(document.getElementById('num2').value);
    document.getElementById('result').value=num1/num2;
}