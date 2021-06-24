var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
          for (let j in data)
          {
            for(let i in data[j])
            {
                {               
                  console.log("name:" + data[j].name);
                  console.log("region:" + data[j].region);
                  console.log("subregion:" + data[j].subregion);
                  console.log("population:" + data[j].population);
                 }               
            }
          }
        };
        xhr.send();