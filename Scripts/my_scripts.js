/* 
Name:         Roger Silva Santos Aguiar
Function:     Run codes for the Code Wars
Initial date: January 31, 2021
Last update:  January 31, 2021  
*/

class CodeWars
{
    constructor()
    {

    }

    //This method converts each letter of each word in the sentence to upper case, known as Jaden Casing Strings.
    jadenCasingStrings()
    {
        var str = prompt("Enter some sentence", "");
        var str_split = str.trim().split(" ");
        var output = "";

        for(var i = 0; i < str_split.length; i++)
        {                
            output += str_split[i].charAt(0).toUpperCase() + str_split[i].slice(1) + " ";              
        }        
        output = output.trim();
        document.write(output);     
    }
}

let codewars = new CodeWars();
codewars.jadenCasingStrings();