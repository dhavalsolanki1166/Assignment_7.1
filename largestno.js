var num1 = -8;
var num2 = 12.5;
var num3 = -6.769;
var num4 = 0;
var num5 = -1;
var largest;
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{largest = num1;
}
else if(num2>num3 && num2>num4 && num2>num5)
{largest = num2;
}
else if(num3>num4 && num3>num5)
{largest = num3;
}
else if(num4>num5)
{largest = num4;
}
else{
    largest = num5;
}
console.log("Largest number ="+largest);