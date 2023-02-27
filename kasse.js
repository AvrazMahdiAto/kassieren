function cashCounter(price,cash){
const change= cash - price; // 50 - 4.5 
if (change<0)  // 3-4.5 = -1.5
{
    return `customer should pay ${price-cash} more Euro` // 4.5 - 3 = 1.5 muss noch zhalen
}

  const coins = [
      { name: '20 Euro', value: 2000 },
      { name: '10 Euro', value: 1000 },
      { name: '5 Euro', value: 500 },
      { name: '2 Euro', value: 200 },
      { name: '1 Euro', value: 100 },
      { name: '0.5 Cent', value: 50 },
      { name: '0.2 Cent', value: 20 },
      { name: '0.1 Cent', value: 10 },
      { name: '0.05 Cent', value: 5 },
      { name: '0.01 Cent', value: 1 },
    ];

    const klamen = ["die zahlung erfolgreich"]
    let cintcange = change * 100 // 1 Euro = 100 cint

    for(const list of coins){
        if (cintcange >= list.value){
            const Rechner = Math.floor(cintcange / list.value) // 195.5 / name = 9 mal 20 Euro und  einmal 10 und ein mal 5 einmal 0.5 
            klamen.push({[list.name]: Rechner})
            cintcange -= Rechner * list.value ;
        }
    }
    if (cintcange > 0){
        return 'No change available';
    }
    return klamen ;
}

console.log(cashCounter(4,3));
console.log(cashCounter(6,6));
console.log(cashCounter(6.37,50));
///

// function createCashCounter() {
//     const cashBox = [
//       { 50: 10 },
//       { 20: 10 },
//       { 10: 10 },
//       { 5: 25 },
//       { 2: 25 },
//       { 1: 25 },
//       { 0.5: 25 },
//       { 0.2: 25 },
//       { 0.1: 25 },
//       { 0.05: 25 },
//       { 0.02: 25 },
//       { 0.01: 25 },
//     ];
  
//     return function (price, paid) {
//       if (price > paid) {
//         return `Customer needs to pay €${price - paid} more`;
//       }
  
//       // Check in cash // For simplicity accept only 1, 2, 5, 10, 20 & 50
//       const acceptedDenominations = [1, 2, 5, 10, 20, 50];
//       if (acceptedDenominations.includes(paid)) {
//         // Add paid cash to cashBox
//         for (let item of cashBox) {
//           const key = Object.keys(item)[0];
//           if (key === String(paid)) ++item[String(paid)];
//         }
//       } else return `We accept only the amounts 1, 2, 5, 10, 20, 50`;
  
//       if (price == paid) {
//         return `Change: 0, Counter closed`;
//       }
  
//       // Total cash in cashBox
//       const totalCashInBox = cashBox.reduce((acc, currentItem) => {
//         const denomination = Object.keys(currentItem)[0];
//         acc += Number(denomination) * currentItem[denomination];
//         return acc;
//       }, 0);
//       // console.log('totalCashInBox', totalCashInBox);
  
//       if (paid - price > totalCashInBox) {
//         // Remove paid cash from cashBox
//         for (let item of cashBox) {
//           const key = Object.keys(item)[0];
//           if (key === String(paid)) --item[String(paid)];
//         }
//         return `Cash counter is short of €${paid - price - totalCashInBox}`;
//       }
  
//       // filter cashBox to remove empty denominations
//       const filteredCashBox = cashBox.filter((item) => {
//         const key = Object.keys(item)[0];
//         if (item[key]) return item[key];
//       });
//       // console.log('filteredCashBox', filteredCashBox);
  
//       let balance = Number.parseFloat((paid - price).toFixed(2));
  
//       let changeBox = [];
//       for (let i = 0; i < filteredCashBox.length; i++) {
//         const key = Object.keys(filteredCashBox[i]);
  
//         while (balance >= Number(key) && filteredCashBox[i][key] - 1 >= 0) {
//           balance = Number.parseFloat((balance - Number(key)).toFixed(2));
  
//           const denomination = changeBox.filter((item) => item[key]);
//           if (denomination.length) {
//             changeBox = changeBox.map((item) => {
//               if (item[key]) {
//                 ++item[key];
//                 return item;
//               } else return item;
//             });
//           } else changeBox.push({ [key]: 1 });
  
//           --filteredCashBox[i][key];
//         }
//       }
//       // console.log('changeBox', changeBox);
  
//       let totalChange = changeBox.reduce((change, currentItem) => {
//         const key = Object.keys(currentItem)[0];
//         change += Number(key) * currentItem[key];
//         return change;
//       }, 0);
  
//       totalChange = Number.parseFloat(totalChange.toFixed(2));
//       // console.log('totalChange', totalChange);
  
//       if (totalChange < paid - price) {
//         // Remove paid cash from cashBox
//         for (let item of cashBox) {
//           const key = Object.keys(item)[0];
//           if (key === String(paid)) --item[String(paid)];
//         }
//         return `No exact tender available for the change`;
//       }
  
//       const change = changeBox.map((item) => {
//         const key = Object.keys(item)[0];
//         if (Number.isInteger(Number(key))) return { [`${key} Euro`]: item[key] };
//         else return { [`${key} Cent`]: item[key] };
//       });
//       console.log('cashBox', cashBox);
//       return change;
//     };
//   }
  
//   cashCounter = createCashCounter();
  

// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));
// console.log(cashCounter(10, 50));