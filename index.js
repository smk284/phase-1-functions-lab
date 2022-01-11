// Code your solution in this file!
const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks(num1) {
if (num1 > 42) {
    return num1-headquarters;
}else if (num1 < 42) {
    return headquarters-num1;
}
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(num2) {
  if (num2 > feet){
    return num2-feet +1;
  }else if (num2 < feet) {
        return feet-num2;
}
}
distanceTravelledInFeet(43);

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
  }