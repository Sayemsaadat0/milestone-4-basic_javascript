           // break
// for (var i = 1; i <=10; i++){
//     console.log(i);
//     if(i >3){
//         break
//     }
// }
// output 1 2 3 4 , cz 3 er beshi 4 pabar porei 
// condition mittha hye geche tai r continue koreni


// continue
var numbers = [10, 120, 16, 223, 241, 241, 22, 100, 50, 60, 200, 70, 0, 0,];

for(var i = 0 ; i < numbers.length ; i++){
   var number = numbers[i];
   if(number > 100){
    continue;
   }
    console.log(number);
 }