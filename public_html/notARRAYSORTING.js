//Benjamin Adams

//This is a much simpler assignment..
//Introduction      -->

document.write("The numbers entered by YOU! --><br>");
alert("Welcome to the Array Value Finder =)");

//Doing a for loop to find the 20 values the user will input...     -->
let inputArray=[], minValue, maxValue, avgOfValues, inCaseHolder;

for (amountOfEntries = 0; amountOfEntries < 20; amountOfEntries++)
{   
    inputArray[amountOfEntries]=prompt("Number of Entries --> " + amountOfEntries + "\n\Enter a Number Here:");
    
    if (isNaN(inputArray[amountOfEntries]) === true) {
        alert("Invalid Entry! That was not a number...");
        amountOfEntries--;
        
    }
    else    {
        document.write(inputArray[amountOfEntries] + ", ");
    }
   
}
document.write("<br><br><br>");

//finding the minimum & maximum values

for(minValue=inputArray[0], minValueLoop=0; minValueLoop < 20; minValueLoop++)
{
    if (minValue <= Number(inputArray[minValueLoop]))
    {
        document.write(minValue + " is less than or equal to " + inputArray[minValueLoop] + "...<br>");
    }
    else if (minValue > Number(inputArray[minValueLoop])) 
    {
        document.write(minValue + " is bigger than " + inputArray[minValueLoop] + "<br>Swapping minValue for " + inputArray[minValueLoop] + "<br>");
            minValue = inputArray[minValueLoop];
    }
    else 
    { alert("Error");
    }
    
}
  document.write("<br><br><br><br>");
//=================================================================================
for(maxValue=inputArray[0], maxValueLoop=0; maxValueLoop < 20; maxValueLoop++)
{
    if (maxValue >= Number(inputArray[maxValueLoop]))
    {
        document.write(maxValue + " is greater than or equal to " + inputArray[maxValueLoop] + "...<br>");
    }
    else if (maxValue < Number(inputArray[maxValueLoop])) 
    {
        document.write(maxValue + " is smaller than " + inputArray[maxValueLoop] + "<br>Swapping maxValue for " + inputArray[maxValueLoop] + "<br>");
            maxValue = inputArray[maxValueLoop];
    }
    else 
    { alert("Error");
    } 
}
   document.write("<br><br><br><br>");
//===================================================================================
//Finding total & average
for (totalValue=Number(inputArray[0]), totalValueLoop=1; totalValueLoop < 20; totalValueLoop++ )
{
    document.write(totalValue + " + " + inputArray[totalValueLoop] + " = ");
    totalValue=Number(inputArray[totalValueLoop])+totalValue;
    document.write(totalValue + "<br>");
}
document.write("<br><br><br>");

document.write("Mininum Value --> " + minValue + "<br>");
document.write("Maximum Value --> " + maxValue + "<br>");
document.write("Total of Values --> " + totalValue + "<br>");
document.write("Avg of Values --> " + (totalValue/20) + "<br>");
   

