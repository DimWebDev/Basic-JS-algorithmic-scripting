function confirmEnding(str, target) {
  
  let targetLn=target.length;
  let targetToMatch=str.slice(str.length-targetLn, str.length)
  
  if(targetToMatch===target){
    return true
  }
  
  return false;
}

confirmEnding("Bastian", "n");