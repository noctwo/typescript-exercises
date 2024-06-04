import Circle from "./Circle";
import Rectangle from "./Rectangle";
import Manager from "./Manager";
import Subordinate from "./Subordinate";
import Trainee from "./Trainee";

let newCircleOne = new Circle("circleOne", "red", 12, true);
console.log(newCircleOne.draw());
console.log(newCircleOne);

let newCircleTwo = new Circle("circleTwo", "green", 10, true);
console.log(newCircleTwo.draw());
console.log(newCircleTwo);

let newCircleThree = new Circle("circleThree", "yellow", 22, true);
console.log(newCircleThree.draw());
console.log(newCircleThree);

let newRectangle = new Rectangle("RectangleOne", "blue", 120, 130, false);
console.log(newRectangle.draw());
console.log(newRectangle);

let newRectangleTwo = new Rectangle("RectangleTwo", "pink", 200, 400, false);
console.log(newRectangleTwo.draw());
console.log(newRectangleTwo);

let newSubordinateOne = new Subordinate("Manfred", 56, "Janitor", new Date(1990, 1, 23));

let newSubordinateTwo = new Subordinate("Lieselotte",  45, "Secretary", new Date(2000, 11, 9));

let newSubordinateThree = new Subordinate("Kevin", 18, "Warehouse", new Date(2005, 5, 5));

let theBoss = new Manager("Micheal", 50, "Manager", new Date(2010, 10, 6));
theBoss.addSubordinate([newSubordinateOne, newSubordinateTwo, newSubordinateThree]);
console.log(theBoss);

let newTraineeOne = new Trainee("Ryan", 30, "", new Date(2020, 5, 27));
let newTraineeTwo = new Trainee("Bryan", 29, "", new Date(2022, 6, 22));

theBoss.addSubordinate([newTraineeOne, newTraineeTwo]);

console.log(theBoss);


newTraineeOne.getYearsOfService(newTraineeOne.startDate);
newTraineeTwo.getYearsOfService(newTraineeTwo.startDate);
console.log(newTraineeOne)

theBoss.getYearsOfService(theBoss.startDate);
