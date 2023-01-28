
// প্রাকটিস চ্যালেঞ্জ-১
// প্রতিদিন তোমার কাজ কি? 
// ১) রাত ৮ টা বাজে মডিউল আনলক করো  
// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো
// ৩) ভিডিও দেখতে দেখতে নোটস নাও 
// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 
// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 
// এখন তোমার কাজ হচ্ছে একটা for লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। 
// প্রাকটিস চ্যালেঞ্জ-২: 
// আবার একই জিনিস while লুপ চালিয়ে দেখানো। 
// প্রাকটিস চ্যালেঞ্জ-৩: 
// উপরের প্রব্লেমটাই while লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 
// প্রাকটিস চ্যালেঞ্জ-৪: 
// উপরের প্রব্লেমটাই for লুপ রিভার্স ওয়েতে (decremental হিসেবে)করে দেখাও 


var routiness = ['1.module unlock kora', '2.fotafot video dekha', '3.notes neya', '4.practice kora', '5.support a join kora'];


// while
  var routines = 0;
  while(routines < 5){
    var routine = routiness[routines];
    routines++;
    console.log(routine);    
  }
//   while reverse
var routines = 4;
  while(routines >=0){
    var routine = routiness[routines];
    routines--;
    console.log(routine);    
  }


// // for 
   for(var i =0 ; i < 5; i++ ){
    var titit= routiness[i];
     console.log(titit);
   }

// //  for reverse 

  for(var i = 4 ; i >=0 ; i-- ){
     var titit= routiness[i];
       console.log(titit);
     }


// completed mela jhamela