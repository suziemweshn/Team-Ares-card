document.querySelector('.group-name').style.color='Blue';
document.querySelector('.group-members').style.color='yellow';
document.querySelector('.group').style.fontSize='20px';

var arr=["Austin","Susan","Alaesuru","Amos","Izima","Susan","Akorede"];
    console.log(arr[1]);
    
const person = {firstName:"Susan", lastName:"Mwende", bestMovie:"Legend of the seeker",bestFood:"pilau", complexion:"dark", birthMonth:"June", state:"kikuyu",groupName:"Ares"};
console.log("My best movie is "+ person.bestMovie);

var noun="John";
var verb="typing";
var adjective="new";
console.log(noun+" is "+verb);
console.log(noun+" has bought a "+adjective+" laptop");
console.log("she is "+verb+" using "+adjective+" keyboard");
console.log(noun+" has "+adjective+" pair of shoes");
console.log(noun+" is an expert in "+verb);

function divide(x,y){
    return x % y;
};
 var result=divide(27,4);
 console.log(result);

 
var root1; 
var root2;


var a = prompt("Enter the first number: ");
var  b = prompt("Enter the second number: ");
var c = prompt("Enter the third number: ");


let discriminant = b * b - 4 * a * c;


if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}


else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}


 const myNoun="dog";
 const myAdjective="big";
 const myVerb="ran";
 const myAdverb="quickly";
 
 const wordBlanks="The " +" " + myAdjective +" "+  myNoun+" " +  myVerb+" " + myAdverb+" " + " to the  puppies";
 console.log(wordBlanks);
 
 function area(r){
     var radius=r;
     const PI=3.142
     return Math.PI*radius*radius;
 }
 var result=area(9);
 console.log(result);

 var principal=8200;
 var rate=17.5/100;
 var time=30/12;
 var interest;
 interest=principal*rate*time;
 console.log(interest);

 var a=10;
 var b=4;
 var c= a % b;
 console.log(c);

 //Data one
 var meritMass= 78;
 var meritHeight=1.69;
 var meritBmi=(meritMass/meritHeight)*meritHeight;
 console.log(meritBmi);
 var nutJobMass=72;
 var nutJobHeight=1.95;
 var nutJobBmi=(nutJobMass/nutJobHeight)*nutJobHeight;
 console.log(nutJobBmi);
 console.log(nutJobBmi>meritBmi);
 //Data two
 var meritMass= 85;
 var meritHeight=1.76;
 var meritBmi=(meritMass/meritHeight)*meritHeight;
 console.log(meritBmi);
 var nutJobMass=95;
 var nutJobHeight=1.88;
 var nutJobBmi=(nutJobMass/nutJobHeight)*nutJobHeight;
 console.log(nutJobBmi);
 console.log(nutJobBmi>meritBmi);






   




