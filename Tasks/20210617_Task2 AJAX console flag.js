var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          console.log(data);
          for (let j in data)
          {
            for(let i in data[j])
            {
              if(i==="flag")
                  {               
                    console.log(data[j][i]);
                  }               
            }
          }
        };
        xhr.send();