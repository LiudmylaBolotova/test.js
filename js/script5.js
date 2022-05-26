function checkForSpam(message) {
  let result = " ";
  // Change code below this line
    if (message.includes("sale")) {
        return result = true;
        
    }

    else {
        return result = false;
    }
     console.log(result);
  // Change code above this line

};

checkForSpam("Latest technology news");
checkForSpam('Get best sale offers now!');
