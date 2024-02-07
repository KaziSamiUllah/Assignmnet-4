function  calculateMoney(soldTicket){
    const ticketPrice=120;
    const daroanBill=500;
    const perLunch=50;
    const totalCost=daroanBill+(perLunch*8);
    // console.log("total cost =", totalCost);
    let totalSale=soldTicket*ticketPrice;
    // console.log("total Sale =", totalSale);
    const returned = totalSale - totalCost;
    if(returned >=0 ){
         return returned;
    }

   else{
        return "Baker vai didn't buy tickets, something's wrong";
    }
 }

////////////////////////////////////////////// Problem-2
 function checkName(name){
    const letters=['a','e','i','o','u','y','w'];
    if(typeof name === 'string'){


    const n = name.toLowerCase();
      const l = n.length;
      const lastLtr=n.charAt(l-1);
      // console.log(lastLtr);


        if(letters.includes(lastLtr)){
         return "Good name";
        }
        else{
          return "Bad name"
        }
    }
    else{
      return "Invalid";
    }
    }

//////////////////////////////////////////// Problem-3
function deleteInvalids(input){
  if(Array.isArray(input)){
    const output =[]
    for(item of input){
      if(typeof item ==='number' && !isNaN(item)){
        output.push(item);
      }
    }
    return output;
    }
  else{
    return "Please input only an array"
  }
  }

//////////////////////////////////////////////// Problem-4
function password(info){
  if(!info.hasOwnProperty('name')||!info.hasOwnProperty('siteName') || !info.hasOwnProperty('birthYear')){
    return "Invalid"
  }
    const passName= info.name.toLowerCase();
    const w= info.siteName;
    const firstCap= w.charAt(0).toUpperCase();
    const passSite= firstCap+w.slice(1);

    if(info.birthYear <= 9999 && info.birthYear > 999){
      const passYear=info.birthYear;
      const newPass= passSite+"#"+passName+"@"+passYear;
      return newPass;
    }
    else{
      return "Invalid";
    }

  }

////////////////////////////////////////////////////// Problem-5
function monthlySavings(payments, rent) {
  if (!Array.isArray(payments) || typeof rent != 'number') {
    return "Invalid Input";
  }
  let afterTax = 0;
  for (let eachPay of payments) {
    if (eachPay >= 3000) {
      let taxed = (eachPay - (eachPay * 0.2))
      afterTax += taxed;
    }
    else {
      afterTax += eachPay;
    }
  }
  // console.log(afterTax);
  let savings = afterTax - rent;
  if (savings >= 0) {
    return savings;
  }
  else {
    return "Earn more"
  }
}



