// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো? yes
// ans- an html- embedded programming language

// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো? no
// JavaScript is a client-side scripting language and one of the most efficient, commonly used scripting languages. The term .client-side scripting language means that it runs at the client-side( or on the client machine) inside the web-browsers, but one important thing to remember is that client's web-browser also needs to support the JavaScript or it must be JavaScript enabled. Nowadays, most of the modern web browsers support JavaScript and have their JavaScript engines. For example, Google Chrome has its own JavaScript engine called V8.

// ৩. ভেরিয়েবল কি জিনিস? yes
// Variables are containers for storing data (storing data values).
//  vary + able - changable 

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে yes 
//   var number = 52 ; 

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। yes
// var number = 25 ;
// number = 30 ; evabe 
// console.log(number)

// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি yes
// String.Number.Bigint.Boolean.Undefined.Null.Symbol.Object.

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো। no
// Data Types: Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript namely Primitive data types and Non-primitive data types.

// Primitive data types: The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.

// Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types. It is also known as derived data types or reference data types.

// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো।  yes 
// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (but we will not use it in this tutorial).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? yes
// +
// var num1 = 12;
// var num2 = 20;
// var totalNum = num1 + num2 ; 

// -
// var num1 = 12;
// var num2 = 20;
// var Num = num2 + num1 ; 

// *
// var num1 = 12;
// var num2 = 20;
// var totalNum = num1 * num2 ; 

// '/'
// var num1 = 12;
// var num2 = 20;
// var totalNum = num1 / num2 ; (kono point , vagshesh dibe na)

// % vagshesh 
// var num1 = 12;
// var num2 = 20;
// var totalNum = num1 % num2 ; 

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। yes

//  ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। yes
// 1 koira add hbe and 1koira bad jabe

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? yes
// parseFloat("40.00");
// integerr number dekhabe 
// doshomic (dott) er por kotogula ghor nibo ta decide kore dibe toFixed

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
// ekoi dhoroner, kotogula jiniisher somosthi 
// An array is a special variable, which can hold more than one value:
// var cars = ["Saab", "Volvo", "BMW"];

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
// console.log(varname.length) diye

// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
// 0 theke shuru hoy .. unshift, shift, push, pop esb diye arrray er value change korte pari
// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় yes
// sei upadan exist kore na 
// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো yes
//  var elements = [10, 21, 54, 21, 25]
//   element = elements [4]
// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে yes
// var element = [10, 21, 54, 21, 60];
// var elemnt = element [4];
// console.log(elemnt);
// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?yes indexOf 
// var position = element.indexOf(54)
// console.log(position)
// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো) yes
// condition er value index er value er theke beshi hoiche .. thats why index er value complete korar por ar kono value khuje payni bolee segula undefined vabe dekhaiche

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে- push and pop 


// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে - unshift and shift

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
// egula comparisons/condionals

// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ hajar টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
// var mac = 80000 ;
// var gamingLaptop = 60000 ;
// var lenovoYoga = 40000;
// var oldLaptop = 20000 ;
// var myBudget = 00000;

// if (myBudget > mac){
//     console.log('ami mac kinbo');
// }
// else if(myBudget > gamingLaptop ){
//     console.log('ami gaming laptop kinbo');
// }
// else if(myBudget > lenovoYoga ){
//     console.log('ami lenovoYoga pc kinbo');
// }
// else if(myBudget > oldLaptop ){
//     console.log('ami old Laptop kinbo');
// }
// else{
//     console.log('phone diye kaj chalabo');
// }

// ২৫. আসকে আমার মন ভালো নেই এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। atay gechi
    // wrong
    // var something = 'আসকে আমার মন ভালো নেই'
    // for(i = 0 ; i<=39; i++){
        // var somethings = something[i] 
    //     console.log(i)
    //     console.log('আসকে আমার মন ভালো নেই');
    // }

// right
// for(i = 0 ; i<=39; i++){
//     console.log(i)
//     console.log('আসকে আমার মন ভালো নেই');
// }

// ২৬. while লুপ কিভাবে কাজ করে  yes
// ২৭. for লুপ কিভাবে কাজ করে yes while loop er chachato vai
// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। no
// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// for (i = 58; i <= 98; i++){
//     console.log(i);
// }
// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও  
// i+=2 is a shorthand of i = i+2
// for (i = 412 ; i <= 456; i+=2){
//     console.log(i);
// }
// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// for (i = 581 ; i <=623; i+=2 ){
//     console.log(i)
// }
// ৩২.while আর for loop এর মধ্যে পার্থক্য কি not very much clear
// The 'for' loop was only used when the number of iterations was already known.
// When the number of iterations is unknown, the 'while' loop is used.

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 
// var topic = ['html5', 'css3', 'bootstrap', 'tailwind', 'github', 'very basic of javascript', 'loops variable and much more'];
// for(i = 0 ; i < topic.length ; i++) {
//     var learnt = topic[i];
//     console.log(learnt);
// }

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
// while loop a mela problem ache
// var mobiles = ['nokia', 'samphony', 'habijabi', 'nam mone nai', 'walton', 'xiomy', 'samsung'];
// var mobile = 0;
// while(mobile<mobiles.length){
//     var mobileName = mobiles[mobile]
//     mobile++ 
//     console.log(mobileName);
// }
// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 
// for (i=30; i<86;i++){
//     if(i>44){
//         break
//     }
//     console.log(i)
// }

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 
// sensitive as fuck
// var bookPrice =[200, 500, 50, 40, 400, 650, 250, 150, 240];
// for (i=0; i<bookPrice.length; i++){
//     var price = bookPrice[i] ;
//     if(price > 200){
//         continue
//     }
//     console.log(price);
// }
