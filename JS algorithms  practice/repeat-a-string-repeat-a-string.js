
///************* FOR LOOP SOLUTION */
function repeatStringNumTimes(str, num) {
  if(num<0){
    return "";
  }
  let result="";
  for(let i=0; i<num; i++){
    result +=str
  }
  return result
}

repeatStringNumTimes("abc", 3);



// WHILE LOOP SOLUTION
// function repeatStringNumTimes(str, num) {
//   if(num<0){
//     return "";
//   }
//   let index=0; // we use this as an enumarator to iterate through the string
//   let result="";
//   while(index<num){
//     result+=str;
//     index++
//   }
//   return result
// }

// repeatStringNumTimes("abc", 3);