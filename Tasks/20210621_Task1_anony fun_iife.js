/* Q1) Do the below programs in anonymous function & IIFE
       a. Print odd numbers in an array 
       b. Convert all the strings to title caps in a string array
       c. Sum of all numbers in an array
       d. Return all the prime numbers in an array
       e. Return all the palindromes in an array
       f. Return median of two sorted arrays of same size 
       g. Remove duplicates from an array
       h. Rotate an array by k times
*/

//Q1a: Print odd numbers in an array using anonymous function
let oddNum = function(odd)
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

//Q1a.1: Print odd numbers in an array using IIFE
(function()
{
    let odd = [1,2,3,4,5,6];
    let out ="";
    for(let i in odd)
    {
        if((odd[i]%2) != 0)
        {
            out = out + odd[i]+ " ";
        }
    }
    return console.log(out.trim());
})();


//Q1b: Convert all the strings to title caps in a string array using anonymous function

let strCap = function(arr1)
{
    let out =[];
    for(let i in arr1)
    {
        out[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    return console.log(out);
}

let arr1= ["sri","bala","krish","chinna"];
strCap(arr1);

//Q1b.1: Convert all the strings to title caps in a string array using IIFE

(function()
{
    let arr1= ["sri","bala","krish","chinna"];
    let out =[];
    for(let i in arr1)
    {
        out[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    return console.log(out);
}
)();

//Q1c: Sum of all numbers in an array using anonymous function

let arrSum = function(arr2)
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

//Q1c.1: Sum of all numbers in an array using IIFE(Immediate Invoke Function Experssion)

(function()
{
    let arr2 = [1,2,3,4,5,6,7,8,9,10];
    let total = 0;
    for(let i in arr2)
    {
        total = total + arr2[i];
    }
    return console.log(total);
})();


//Q1d: Return all the prime numbers in an array using Anonymous function

let primeNum = function(arr4)
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

//Q1d.1: Return all the prime numbers in an array using IIFE

(function()
{
    let arr4 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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
})();


//Q1e: Return all the palindromes in an array using anonymous function

let paLin = function(data)
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

//Q1e.1: Return all the palindromes in an array using IIFE

(function()
{
    let data = ["malayalam","cap",12121,"anna","appa",12345];
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
})();

//Q1f: Return median of two sorted arrays of same size using anonymous function

let getMedian = function(a1,a2)
{
    let ca = [...a1,...a2];
    let sca = ca.sort(function(a,b){return a-b});
    let scaLen = sca.length/2;
    return (sca[scaLen]+sca[scaLen-1])/2;
}

let sarr1 = [1,12,15,26,38];
let sarr2 = [2,13,17,30,45];
let median = getMedian(sarr1,sarr2);
console.log(median);

//Q1f.1: Return median of two sorted arrays of same size using IIFE

(function()
{
    let a1 = [1,12,15,26,38];
    let a2 = [2,13,17,30,45];
    let ca = [...a1,...a2];
    let sca = ca.sort(function(a,b){return a-b});
    let scaLen = sca.length/2;
    console.log((sca[scaLen]+sca[scaLen-1])/2);
})();

//Q1g: Remove duplicates from an array using anonymous function

let remDup = function(data)
{
    let uniqArr = data.filter((c,index)=>{
        return data.indexOf(c) === index;
    });
    console.log(uniqArr);
};

let arr5 = [2,3,4,3,2,5,4];
remDup(arr5);

//Q1g.1: Remove duplicates from an array using IIFE

(function()
{
    let data = [2,3,4,3,2,5,4];
    let uniqArr = data.filter((c,index)=>{
        return data.indexOf(c) === index;
    });
    console.log(uniqArr);
})();

//Q1h: Rotate an array by k times using anonymous function

let rotateArray1 = function(arr,n)
{
    let temp = arr[0];
    for(let i=0;i<n-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[n-1] = temp;
};

let rotateArray = function(arr,n,k)
{
    for(let j=0; j<k; j++)
    {
        rotateArray1(arr,n);
    }
    console.log(arr6);
};

let arr6 =[1,2,3,4,5,6,7];
let arr6Size = arr6.length;
let kTimes = 2;
rotateArray(arr6,arr6Size,kTimes);

//Q1h.1: Rotate an array by k times using IIFE

(function()
{
    let arr =[1,2,3,4,5,6,7];
    let n = arr.length;
    let k = 2;
    let rotateArray1 = function(arr,n)
    {
    let temp = arr[0];
    for(let i=0;i<n-1;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[n-1] = temp;
    };
    for(let j=0; j<k; j++)
    {
        rotateArray1(arr,n);
    }
    console.log(arr);
})();