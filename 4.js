let total;

let unit=Number(prompt("Enter Unit= "));
console.log("The unit="+unit);

if(unit>=0 && unit<=100)
{
    total = (unit*0.60)+50;
}

else if(unit>100 && unit>=300)
{
    total = 60 + (unit-100)*0.80 + 50; 
}

else if(unit>300)
{
    total = 60 + 160 + (unit-300)*0.90 + 50;
}

if(total>=300)
{
    total = total+total*0.15;
    console.log("The Total is:"+total);
}

else
{
    console.log("The Total is: "+total);
}