// Arrays
/* Q1: var myarray=[11,22,33,44,55]
write a code to count the elements in the array . Don’t use length property*/

var myarray =[11,22,33,44,55];
console.log(_.size(myarray));

/* Q2: Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.*/

let foods=["idly","dosa","vada","upma","pongal","kesari","chapati",
            "parota","sambar rice","tomato rice","curd rice","lassi","biriyani",
            "kushka","lemon rice","coconut rice","tamrind rice","pulao","icecream","beeda"];

/* Q3: Foods variable holds the names of your top 20 favorite foods, starting with the best food. 
How can you find your fifth favorite food?*/

let foods=["idly","dosa","vada","upma","pongal","kesari","chapati",
            "parota","sambar rice","tomato rice","curd rice","lassi","biriyani",
            "kushka","lemon rice","coconut rice","tamrind rice","pulao","icecream","beeda"];
console.log(foods[4]);

/* Q4: Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".*/

let friends = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
    if(input[i]==="Mari")
    {
        input[i] = "Munnabai";
    }
    }
    return console.log(input);
    }
    
    dataHandling(friends);

/* Q5: Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.*/

const friends = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

    function dataHandling(input){
        let result=[];
        for (var i = 0; i < input.length; i++) {
        if(input[i]!="CaptainAmerica")
        {
            result[i] = input[i];
        }
        else
        {
            break;
        }
        }
        return console.log(result);
        }
        
        dataHandling(friends);

/* Q6: Find the person is ur friend or not.*/

const friends = [
    "Mari",
    "MaryJane",
    "CaptainAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];

function dataHandling(input, name){
    let out;
for (var i = 0; i < input.length; i++) {
    if(input[i] === name)
    {
        out = "Yes";
        break;
    }
    else 
    {
        out = "No";
    }
}
return out
}

let found = dataHandling(friends,"Jeff");

console.log(found);

/* Q7: We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.*/

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
    ];
    
    var friends2 = [
    "Gabbar",
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
    ];
    
    function dataHandling(input1, input2){
        let out = friends1.concat(friends2);
        return console.log(out.sort());
    }

    dataHandling(friends1,friends2);