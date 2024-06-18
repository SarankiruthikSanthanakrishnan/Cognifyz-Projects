function reset()
{
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("sum").value='0';
}

function add()
{
    var num1=Number(document.getElementById("num1").value);
    var num2=Number(document.getElementById("num2").value);
    var sum=num1 + num2;
    document.getElementById("sum").value=(String(sum));
}