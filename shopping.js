/**
Creates a shopping list and displays it on shopping.innerHTML
*/

//
window.onload= function(){
//You will call the functions you wrote here
    printList();
}


//Prints the shopping list on the web page by changing the html code
//list: Array of items
function printList(list){
    var name = prompt("What would you like to buy?");
    var price = prompt("What is its price?");
    var count = prompt("How many do you want?");
    var total = 0;
    if(price != null && count != null){
      total += parseInt(price)*parseInt(count);
    }
    list = [{name:name, price:price, count:count}];
    while(true){
      if (name === null || price === null || count == null){
        console.log(total);
        list.pop()
        break;
      }
      else{
        name = prompt("What would you like to buy?");
        price = prompt("What is its price?");
        count = prompt("How many do you want?");
        if(price != null && count != null){
          total += parseInt(price)*parseInt(count);
        }
        list.push({name:name, price:price, count:count})
        console.log(total);
      }
    }

    for(let i = 0; i < list.length; i++){
        document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
    }
    document.getElementById("total").innerHTML += "Your total is $" + total.toString();
}
