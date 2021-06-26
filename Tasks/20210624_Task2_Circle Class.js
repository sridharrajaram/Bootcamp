/* Circle - class

- radius: double 1.0
...

check:
 - circle()
 - circle(radius: double)
methods: 
 - getRadius(): double
 - getArea():double
 - getCircumference():double

 */
 class Circle{
    constructor(radius){
        this.r = parseFloat (radius);
    }
    getRadius(in_r){
        if(in_r === undefined)
        {
            console.log(this.r);
        }
        else
        {
            console.log(in_r);
        }
    }      
    getArea(in_r){
        if(in_r===undefined)
        {
            console.log(((Math.PI)*(Math.pow((this.r),2))).toFixed(1));
        }
        else
        {
        console.log(((Math.PI)*(Math.pow((in_r),2))).toFixed(1));
        }
    }
    getCircumference(in_r){
        if(in_r===undefined)
        {
            console.log((2*(Math.PI)*(this.r)).toFixed(1));
        }
        else
        {
            console.log((2*(Math.PI)*(in_r)).toFixed(1));
        }
    }   
}

console.log(Circle);
let cir = new Circle(10.01);
console.log(cir);

let cir1 = new Circle(12);
console.log(cir1);

cir.getRadius(12);
cir.getArea();
cir.getCircumference();

cir1.getRadius();
cir1.getArea();
cir1.getCircumference();
cir.getRadius(13);
cir.getArea(13);
cir.getCircumference(13);

