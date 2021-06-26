/* Class - Movie
The class Movie is stated below. 
An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
   a String representing the studio, and a String representing the rating as its arguments, 
   and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, 4
   and returns a new array of only those movies in the input array with a rating of "PG". 
   You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
   the studio “Eon Productions”, and the rating “PG­13” 
*/

/* a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
   a String representing the studio, and a String representing the rating as its arguments, 
   and sets the respective class properties to these values. */

   class Movie{
      constructor(mTitle,mStudio,mRating){
          this.title = mTitle;
          this.studio = mStudio;
          this.rating = mRating;
      }
      getTitle(){
          console.log(this.title);
      }
      getStudio(){
          console.log(this.studio);
      }
      getRating(){
          if(this.rating === undefined)
          {
          return this.rating = "PG"; //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
          }
          return this.rating;
      }
  }
  
  let mov1= new Movie("Bigil","AGS Entertainment","PG");
  let mov2 = new Movie("Viswasam","Sathya Jyothi Films","PG");
  let mov3 = new Movie("Kachana 3","Raghavendra Productions","PG");
  let mov4 = new Movie("The Dark Knight","Warner Bros. Pictures","PG-13");
  let mov5 = new Movie("The Evil Dead","Renaissance Pictures","NC-17");
  let mov6 = new Movie("Joker","Warner Bros. Pictures","R");
  let mov7 = new Movie("Sex and The City","New Line Cinema","R");
  
  mov1.getTitle();
  mov2.getRating();
  console.log(mov2);
  
  
  /* C.Write a method getPG, which takes an array of base type Movie as its argument, 4
     and returns a new array of only those movies in the input array with a rating of "PG". 
     You may assume the input array is full of Movie instances. The returned array need not be full. */
  
  let movies = [mov1,mov2,mov3,mov4,mov5,mov6,mov7];
  console.log(movies);
  
  let pgMov = movies.filter(mov => {
                                      if(mov.getRating() === "PG")
                                      {
                                          return mov;
                                      }
                                  });
  
  console.log(pgMov);
  
  /* d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
     the studio “Eon Productions”, and the rating “PG­13”  */
  
  let mov8 = new Movie("Casiono Royale","Eon Productions","PG-13");
  console.log(mov8);



