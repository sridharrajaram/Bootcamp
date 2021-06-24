/* Q3) Do the below programs in arrow function
       a. Print odd numbers in an array 
       b. Convert all the strings to title caps in a string array
       c. Sum of all numbers in an array
       d. Return all the prime numbers in an array
       e. Return all the palindromes in an array
*/

//Q3a: Print odd numbers in an array using arrow function
let oddNum = (odd)=>
{
    let out ="";
    for(let i in odd)
    {
        if((odd[i]%2) != 0)
        {
            out = out + odd[i]+ " ";
        }
    }
    return console.log(out.trim());
}

let arr = [1,2,3,4,5,6];
oddNum(arr);

//Q3b: Convert all the strings to title caps in a string array using arrow function

let strCap = (arr1) =>
{
    let out =[];
    for(let i in arr1)
    {
        out[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    return console.log(out);
};

let arr1= ["sri","bala","krish","chinna"];
strCap(arr1);

//Q3c: Sum of all numbers in an array using arrow function

let arrSum = (arr2) =>
{
    let total = 0;
    for(let i in arr2)
    {
        total = total + arr2[i];
    }
    return console.log(total);
}

let arr2 = [1,2,3,4,5,6,7,8,9,10];
arrSum(arr2);

//Q3d: Return all the prime numbers in an array using arrow function

let primeNum = (arr4) =>
{
    let out = "";
    for(let i=0;i<arr4.length;i++)
    {
        let count = 0;
        let num = arr4[i];
        if(num === 0 || num === 1)
        {
            out = out + " ";
        }
        else if(num === 2 || num === 3)
        {
            out = out + num + " ";
        }
        else
        {
            for(j=2; j<num; j++)
            {
                if(num%j === 0)
                {       
                    count = count + 1;
                }       
            }
        if(count===0)
        {
            out = out + num + " ";
        }
    }
}
console.log(out.trim().split(" "));
}

let inparr4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
primeNum(inparr4);

//Q3e: Return all the palindromes in an array using arrow function

let paLin = (data) =>
{
    let out="";
    for(let i=0;i<data.length;i++)
    {
        let count = 0;
        let strs = data[i].toString();
        let strLen = strs.length;
        for(let j=0; j<strLen/2; j++)
        {
            if(strs[j] === strs[strLen - 1 -j])
            {
                count = count + 1;
            }
        }
        if(count >= strLen/2)
        {
            out = out + strs + " ";
        }
    }
    console.log(out.trim().split(" "));
}

let arr3 = ["malayalam","cap",12121,"anna","appa",12345];
paLin(arr3);
