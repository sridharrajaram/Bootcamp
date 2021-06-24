var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" }
  ];
console.log("*********for in loop output**********");
for(let i in obj)
{
    for(let j in obj[i])
    {
        console.log(j + ":" + obj[i][j]);
    }
}

console.log("*************for loop and for in output************");
for(let i =0; i<obj.length; i++)
{
    for(let j in obj[i])
    {
        console.log(j + ":" + obj[i][j]);
    }
}

console.log("************for of output****************");
for(let i of obj)
{
    for (let j in i)
    {
        console.log(j + ":" + i[j]);
    }
}

console.log("************for each output****************");
obj.forEach(function callbackFn(element) 
{
    for (let j in element)
    {
        console.log(j + ":" + element[j]);
    }
});