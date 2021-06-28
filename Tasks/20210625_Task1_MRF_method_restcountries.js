/* 1) Solving problems using array functions on rest countries data. 
        - Get all the countries from Asia continent /region using Filter function
        - Get all the countries with a population of less than 2 lakhs using Filter function
        - Print the following details name, capital, flag using forEach function 
        - Print the total population of countries using reduce function 
        - Print the country which use US Dollars as currency. */


        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);

          //Get all the countries from Asia continent /region using Filter function
          var asianRegion = data.filter(ele=>{
            if(ele.region === "Asia")
            {
              return ele;
            }});
          console.log(asianRegion);

          //Get all the countries with a population of less than 2 lakhs using Filter function
          let popcheck = 200000;
          var counPop = data.filter(ele => {
            if(ele.population<popcheck)
            {
              return ele;
            }
          });
          console.log(counPop);
          
          //Print the following details name, capital, flag using forEach function
          data.forEach((ele)=>{
            console.log(ele.name,ele.capital,ele.flag);
          });
          
          //Print the total population of countries using reduce function
          var totalPop = data.map(ele => {return ele.population}).reduce(((a,b)=> a+b),0);
          console.log(totalPop);

          //Print the country which use US Dollars as currency.
          let out =[];
          let dollarCoun = data.map(ele => ele.currencies.map(obj=>{
          if(obj.name==="United States dollar")
          {
            out.push(ele.name);
          }
          }));
          console.log(out);

        };
        xhr.send();
