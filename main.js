// Items in our shopping cart
var shoppingCart = [];

// Cereal items
var tops = [
	{
		img: './assets/images/top1.jpg',
		name: 'Top1',
    event: 'click',
    callback: function (){
      console.log("hey hey hey");
    }
	},
	{
    img: './assets/images/top2.jpg',
		name: 'Top2'
	},
	{
    img: './assets/images/top3.jpg',
		name: 'Top3'
	}

];

var posters = [
	{
		img: './assets/images/poster1.jpg',
		name: 'poster1'
	}

];

var hats = [
	{
		img: './assets/images/hat1.jpg',
		name: 'Hat1'
	},
	{
    img: './assets/images/hat2.jpg',
		name: 'Hat2'
	},
	{
    img: './assets/images/hat3.jpg',
		name: 'Hat3'
	}

];

function clearShoppingItems() {
	document.getElementById("shopping-items").innerHTML = "";
}








function addShoppingItems(category)
{

  clearShoppingItems();
  //create empty list
  var newList = document.createElement('ul');
  // var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
  console.log("itworks");

  for(var i = 0; i < category.length; i++)
  {
    // console.log("itworks");
    // newList.innerHTML += ( `<li> <img src = "${category[i].img}" onclick = "console.log('event has been triggered')"> </li>`);
     // newList.innerHTML += ( `<li> <img src = "${category[i].img}" onclick = "addItemsToShoppingCart(${category[i].name})"> </li>`);

          newList.innerHTML += ( `<li class="shopping-item"> <img src = "${category[i].img}" >
          <p>"${category[i].name}"</p> </li>`);

     //      var el = document.getElementById ("shopping-items");
     //      el.shopping-item;
     //
     // document.getElementById ("shopping-items").addEventListener ("click", ".shopping-item", addItemsToShoppingCart(category[i].name));

     // newList.innerHTML += ( `<li class = "shopping-item"> <img src = "${category[i].img}" onclick = "addItemsToShoppingCart(${category[i].name})"> </li>`);

  }
    // console.log("itworks");
    document.getElementById("shopping-items").appendChild(newList);


}

var y = "hey";

// x[0].addEventListener('click', addItemsToShoppingCart(x[2]));

document.getElementById("tops").onclick = function()
{
  addShoppingItems(tops);


}

document.getElementById("posters").onclick = function()
{
  addShoppingItems(posters);
}

document.getElementById("hats").onclick = function()
{
  addShoppingItems(hats);
}

// var x = document.getElementsByClassName("shopping-item");
// console.log(x);
// var i;
// for (i = 0; i < x.length; i++) {
//     x[0].onclick = addItemsToShoppingCart(x[0].innerText);
//   }

// x[0].innerHTML = "${category[i].name}";

$('#shopping-items').on('click', '.shopping-item', function() {
	var itemName = $(this).find('p').text();
	addItemToShoppingCart(itemName);
});


function addItemToShoppingCart(item)
{
  // var myname = name;
    console.log(item);

    $('#shopping-cart ul').append(`
		<li>
			${item}
		</li>
	`);
}

// document.getElementById("tops").onclick = function()
// {
//
//   //create empty list
//   var newList = document.createElement('ul');
//   // var currentRedCarPosition = parseInt(document.getElementById("car1").style.left, 10);
//   console.log("itworks");
//
//   for(var i = 0; i < tops.length; i++)
//   {
//     console.log("itworks");
//     newList.innerHTML += ( `<li> <img src = "${tops[i].img}"> </li>`);
//
//   }
//     console.log("itworks");
//     document.getElementById("shopping-items").appendChild(newList);
//
// }
