/* Q4. write a class to calculate uber price. */

class uberRide{
    constructor(basefare,costperkm,costperminute){
        this.bf = basefare;
        this.cpk = costperkm;
        this.cpm = costperminute;
    }
    getFare(d,T,r,rD,wT)
    {
        this.fare = this.bf+(this.cpk * rD)+(this.cpm * wT);
        if(d==="fri" && T>=6)
        {
            if(r==="No")
            {
                return 1.5 * this.fare;
            }
            else if(r==="Yes")
            {
                return 2 * this.fare
            }
        }
        else if(d === "sat" || d === "sun")
        {
            if(r==="No")
            {
                return 2 * this.fare;
            }
            else if(r==="Yes")
            {
                return 3 * this.fare
            }
        }
        else
        {
            if(r==="No")
            {
                if(T>=10)
                {
                    return 1.5 * this.fare;
                }
                else
                {
                    return this.fare;
                }
            }
            else if(r==="Yes")
            {
                if(T>=10)
                {
                    return 2 * this.fare;
                }
                else
                {
                    return this.fare;
                }
            }
        }
    }
}

let rideCost = new uberRide(61,12.6,1.5);
console.log(rideCost);

// scenario 1 - Friday late night and raining
// actual fare is 61+12.6*20+1.5*15 = 335.5 but due to surge 335.5 * 2 = 671

let day = "fri";
let time = 10;
let raining = "Yes";
let rideDistance = 20;
let waitingTime = 15;

let rideFare = rideCost.getFare(day,time,raining,rideDistance,waitingTime);
console.log(rideFare);

// scenario 2 - Sat or Sun and raining
// actual fare is 61+12.6*20+1.5*15 = 335.5 but due to surge 335.5 * 3 = 1006.5

let day1 = "sat";
let time1 = 10;
let raining1 = "Yes";
let rideDistance1 = 20;
let waitingTime1 = 15;

let rideFare1 = rideCost.getFare(day1,time1,raining1,rideDistance1,waitingTime1);
console.log(rideFare1);

// scenario 2 - Non Peak day and Not Raining
// actual fare is 61+12.6*20+1.5*15 = 335.5 no surge pricing

let day2 = "Mon";
let time2 = 4;
let raining2 = "No";
let rideDistance2 = 20;
let waitingTime2 = 15;

let rideFare2 = rideCost.getFare(day2,time2,raining2,rideDistance2,waitingTime2);
console.log(rideFare2);