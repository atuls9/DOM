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
var li = document.getElementsByTagName('li');
console.log(li[3].textContent);
li[3].style.backgroundColor='yellow';

for(let el of li){
    el.style.fontWeight = 'bold';
}

var items = document.getElementsByClassName('list-group-item');
for(let el of items){
        el.style.backgroundColor='yellow';;
    }
// ITEM5 which is now commented in html file is no change 
// for second for loop(getElementsByClassName)
