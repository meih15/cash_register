const drawer = require('./drawer')
// DO NOT EDIT CODE ABOVE

// Level 1: removeItem and addItem


function removeItem(name, drawer) {
    // Write your code here
  
      for (let item of drawer) {
          if (item.name === name) {
              item.quantity--
          }
      }
  
      return drawer
  
  }


  function addItem(name, drawer) {
    // Write your code here
  
      for (let item of drawer) {
          if (item.name === name) {
              item.quantity++
          }
      }
  
      return drawer
  
  }

// Level 2: countCoins and countNotes
function countCoins(drawer) {
    // Write your code here
  
    let count = 0;
  
    for (let item of drawer) {
        if (item.value < 100) {
            count += item.quantity
        }
    }
  
    return count;
  
  
  }


  function countNotes(drawer) {
    // Write your code here
  
      let count = 0;
  
      for (let item of drawer) {
          if (item.value >= 100) {
              count += item.quantity
          }
      }
  
      return count;
  
  }

// Level 3: sumDrawer


function sumDrawer(drawer) {
    // Write your code here
    let sum = 0;
  
    for (let item of drawer) {
        let totalValue = (item.quantity * item.value) / 100;
        sum += totalValue
    }
  
  
    let result = sum.toFixed(2);
  
      return "$" + result;
  
  }

// Level 4: canMakeAmount

function canMakeAmount(target, drawer) {
    let drawerCopy = [...drawer].reverse();

    function checkAmountRecursively(target, drawerIdx) {
        if (target === 0) return true;
        if (target < 0 || drawerIdx === drawerCopy.length) return false;

        let currentRow = drawerCopy[drawerIdx];

        for (let i = 0; i <= currentRow.quantity; i++) {
            let amountToSubtract = i * currentRow.value;

            if (amountToSubtract <= target && checkAmountRecursively(target - amountToSubtract, drawerIdx + 1)) {
                return true;
            }
        }

        return false;
    }

    return checkAmountRecursively(target, 0);
}

// Level 5: transaction

function transaction(cost, paid, drawer) {
  // Write your code here



}

// DO NOT EDIT CODE BELOW
// module.exports = {
//   removeItem,
//   addItem,
//   countCoins,
//   countNotes,
//   sumDrawer,
//   canMakeAmount,
//   transaction
// }