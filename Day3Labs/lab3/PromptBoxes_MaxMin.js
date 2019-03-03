var i ,num;
var numbers = [];
var str;
for(i=0; i<3;i++)
{
    switch (i)
    {
        case 0:
            str ="First";
            break;
        case 1:
            str ="Second"
            break;
        case 2:
            str ="Third";
            break;
    }
    do{
        num = prompt("Enter" + str +"Number", "0");  
    }while(isNaN(parseInt(num)));
    
    
    numbers[i]=num;    
}
for(i=0; i<3;i++)
{
    switch (i)
    {
        case 0:
            str ="First";
            break;
        case 1:
            str ="Second"
            break;
        case 2:
            str ="Third";
            break;
    }   
    document.write(str+"Number = " + numbers[i]);
    document.write("<br>");
}
document.write("Maxmum is: " + Math.max(numbers[0],numbers[1],numbers[2]));
document.write("<br>");
document.write("Minmum is: " + Math.min(numbers[0],numbers[1],numbers[2]));