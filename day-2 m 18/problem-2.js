// প্রাকটিস প্রব্লেম-২: 
//  তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।


// var color = ['red', 'yellow', 'green']

// var i = 0 ;

// while (i < color.length){
//     if(color[i]== 'red') {
//         console.log('stop')
//     }
//     else if (color[i]=='yellow'){
//         console.log('i should stop')
//     }
//     else if (color[i]=='green'){
//         console.log('i must go')
//     }
//     i++
// }






// emno hbe na
 var signalRed = true ;
 var signalYellow = true ;
 var signalGreen = true;

  if (signalRed = true && (signalGreen == false || signalYellow == false)){
     console.log('very dangerous crossing the road')
 }
 else {
     console.log('bye bye tata khatam')
 }

 if (signalYellow = true && (signalGreen == false || signalRed == false)) {
      console.log('stop where you are')
  }
  else {
     console.log('accident may happen')
 }

  if(signalGreen  = true && (signalYellow== false || signalRed == false)){
     console.log('cross the road')
  }
  else{
     console.log('mara khao')
    }
