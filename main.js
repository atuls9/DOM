//*****EXAMINE THE DOCUMENT OBJECT*****
// console.dir(document);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title); 
// document.title = "dom";
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.forms[0][1]);
// console.log(document.links);
// --------------------------------------------------------------

//***** GETELEMENTBUID *****//
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent="hello";
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML= "<h3>Hello</h3>"

// var headerTitle = document.getElementById('main-header');
// headerTitle.style.borderBottom = "solid 3px #000"

//adding id = subtitle for Add Items title
// var subHeading = document.getElementById('subtitle');
// console.log(subHeading)
// subHeading.textContent = 'ADD ITEM';
// subHeading.style.fontWeight = 'bold';
// subHeading.style.color = 'green';



// ***** GETELEMENTSBYCLASSNAME PLURAL***** //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// items[2].style.backgroundColor = 'green'

// // ** Error ** //
// // items.style.fontWeight = 'bold'

// //so access all elements with the help of for loop
// for(let el of items){
//     el.style.fontWeight ='bold';
// }


// ***** GETELEMENTSBYTAGNAME *****//
// var li = document.getElementsByTagName('li');
// console.log(li[3].textContent);
// li[3].style.backgroundColor='yellow';

// for(let el of li){
//     el.style.fontWeight = 'bold';
// }

// var items = document.getElementsByClassName('list-group-item');
// for(let el of items){
//         el.style.backgroundColor='yellow';;
//     }
// // ITEM5 which is now commented in html file is no change 
// // for second for loop(getElementsByClassName)


//---------------------------------------------------------------------------------------------


// ***** QUERYSELECTOR **** //
// use for one item and it grab first one;
//it grabs any CLASS/TAG/ID-- use {'#' before ID and '.' before CLASSNAME}


var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px black';
var input = document.querySelector('input');
input.value = 'Hello world!!!!!!!!!!';

var title = document.querySelector('.title');
console.log(title.textContent);

var submit = document.querySelector('input[type ="submit"]');
submit.value = 'send'
submit.style.backgroundColor = 'yellow'
submit.style.color = 'black'
 

// items
var item = document.querySelector('.list-group-item')
item.style.color = ' red'

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.opacity = 00;



//--------------------------------------------------------------------------------------