//get element by id
// const h1= document.getElementById('title');
// h1.style.color= 'red';

// const btn= document.getElementById('btn');

// btn.style.backgroundColor='blue';
// btn.style.color='white';

//-------^^^

//get element by tag name
//node-list=array-like object
//index, length property but not array methods

// document.body.style.backgroundColor='darkred';
// const heading=document.getElementsByTagName('h2');
// heading[0].style.color='red';
// console.log(heading,length);

// const items=document.getElementsByTagName('li');
// items[2].style.color='yellow';
// const betterItems= [...items]; //spread operator as method array does not
// //work in nodeList

// betterItems.forEach(function(item){
//   console.log(item);
// });

// console.log(items);
// console.log(betterItems);

//-------^^^

//get element by className
//node-list = array-like object
//index, length property but not array method

// const listItems= document.getElementsByClassName('special');
// console.log(listItems);
// listItems[1].style.color='blue';


//---^^^

//querySelector('any css'); - selects single
//querySelectorAll('any css') - selects all 

// const result = document.querySelector('#result');
// result.style.backgroundColor= 'violet';

// const item= document.querySelector('.special');
// console.log(item);

// const lastItems= document.querySelector('li:last-child');
// console.log(lastItems);

// const list = document.querySelectorAll('.special');
// console.log(list);

// list.forEach(function(item){
//   console.log(item);
//   item.style.color='Yellow';
// })
//with queryselectorALL we can use forEach but not with just queryselector


//---^^^^

//childNode -return all childNode incluiding whitespace
//which is treated as a text node;

//children
//firstChild
//lastChild

// const result=document.querySelector('#result');
// const allChildren= result.childNodes;
// console.log(allChildren); //this returns 11 not 5 cause 
// // it also brings back the whitespace of the list.


// const childrenVar= result.children;
// console.log(childrenVar); //this return 5 with indexes, not 11. 

// console.log(result.firstChild);
// console.log(result.lastChild);


//---^^^^

//parentElement

// const heading= document.querySelector('h2');
// console.log(heading); //just returs the text of the h2
// console.log(heading.parentElement); //return the immediate parent which is div
// console.log(heading.parentElement.parentElement);//return parent of the parent
//eventually we do again parentelement then it goes to body then html,
//then it will return null when there are no parent left.

// const parent= heading.parentElement;
// parent.style.color='blue'; 
//so above line we coloring the whole div as we have selected the parent 
//of the heading. so if we put another h2 in this div. thats
//also going to be blue. simple. 


//----^^^

//previousSibling
//nextSibling
//return Whitespace

// const first=document.querySelector('.first');
// const second= first.nextSibling;
// console.log(second); //this returns text directory not list item
// //so in order to get the element following code
// const second2=first.nextSibling.nextSibling;
// console.log(second2);
// //now we have item and its text.
// const second3= (first.nextSibling.nextSibling.style.color='red');
// //above code color the tag or sibling i want to color. 

// const last= document.querySelector('#last');
// const third= last.previousSibling.previousSibling;
// console.log(third); //this return item 3.


// //previouselementsibling
// //nextelementsibling
// const first = document.querySelector('.first');
// first.nextElementSibling.style.color = 'red';
// first.nextSibling.nextSibling.nextSibling.nextSibling.style.color = 'blue';
// //above code colors the 2nd and 3rd li. but take a look at how i have to
// //identify to color the 3rd li. had to write nextSibling twice. if you
// //write once then it will be #text.

// const last = document.querySelector('#last');
// last.previousElementSibling.style.color = 'orange';
// //like sibling thing, previous or nextelementsibling does not require twice 
// //to identify to style. 


//---^^

//nodeValue
//textContent

// const item= document.getElementById('special');
// const value= item.nodeValue;
// console.log(item.childNodes[0].nodeValue); //this return the inner text of the element
// console.log(item.firstChild.nodeValue);//return same as above

// const textContent= item.textContent;
// console.log(textContent);
//so nodeValue and TextContent serve the same purporse but we have to be careful 
//as nodevalue is kinda array node type and textconent just return the text. 


//---^^^

//getAttribute()
//setAttribute()

// const first=document.querySelector('.first');
// const classVal=first.getAttribute('class');
// console.log(classVal);


// const secondLast = document.getElementById('link');
// const last = secondLast.nextElementSibling;
// last.setAttribute('class','first');
// last.textContent='I am also first class';
// console.log(last);

// const lastAtt= last.getAttribute('class');
// console.log(lastAtt);

// const link = document.querySelectorAll('.first');
// console.log(link);


//---^^^

//className
//classLIst

// const first= document.getElementById('first');
// const second= document.getElementById('second');
// const third= document.getElementById('third');

// const classValue=first.className;
// console.log(classValue); //return name of the class
// //this is the way to check class name using className

// second.className='colors'; //so now we dynamicly added class by 
// //the name of same name of first class. which is colors. 

// //so if we want 2 or more class to be in my element then we can
// //do it by following code. 

// second.className='colors text';
// //above code we are inputing 2 css class attributes in 1 heading.

// third.classList.add('colors');
// //we are dynamicly adding classes into heading by classList
// //we can even add more than 1 classes in 1 element

// third.classList.add('text');
// //or we can add more in 1 line
// // third.classList.add('colors','text');
// //adding another classes in to same heading
// third.classList.remove('text');
// //we can remove any of the classes we have added.
// console.log(third);

// //we can check particular element does have this class by
// //contain property of classList

// let result1 = third.classList.contains('text');
// if(result1){
//   console.log('Yes the class is here');
// }else{
//   console.log('does not have the class')
// }
// //so above code is chekcing whether the class is there in the elemnt
// //and returns as its commanded. 

// third.classList.add('text');
// //after checking if the text is there, as it shows its not there. then 
// //in above line we added the class 'text' again. and still its shows its 
// //not there. means its not hoited. 

// let result2 = third.classList.contains('text');
// if(result2){
//   console.log('Yes the class is here');
// }else{
//   console.log('does not have the class')
// }
// //now it shows the class is here. :) 


//---^^^

//createlement('element')
//createTextNode('text content')
//element.appendChild(childElement)


// const result=document.querySelector('#result'); //we are getting the element we
// //want to edit

// //create empty element
// const bodyDiv=document.createElement('div');
// //crate text node
// const text= document.createTextNode('A simple body DIV');
// bodyDiv.appendChild(text); //appending text into div
// document.body.appendChild(bodyDiv); // appeding div into body
// //so above 4 line code does first create element, then create text into it. 
// //then append the text into element. then append the element into body/tag we have
// //targetted

// const heading= document.createElement('h2');
// const headingText=document.createTextNode('Dynaming h2');
// heading.appendChild(headingText);
// heading.classList.add('blue');
// result.appendChild(heading);
// //so as above we did. 
// console.log(result.children); //juust printing the result element


// //insertBefore('element',location);

// //so lets create a element first
// const newDiv=document.createElement('div');
// const newDivText= document.createTextNode('a New div of insertBEFORE');
// newDiv.appendChild(newDivText);
// //above 2 line wehave create a element and text and done appending
// //now inserting the newly created div in diff way of appending
// document.body.insertBefore(newDiv,result);
// newDiv.style.color='orange';

// //now lets put h2 that we created and put it before our h1
// const redClass= document.querySelector('.red');
// result.insertBefore(heading,redClass);
// //so above line we can shift element position.


// //replaceChild('new','old')

// //lets create a brand new h6 element
// const h6element=document.createElement('h6');
// const h6Text=document.createTextNode('I am h6 heading');
// h6element.classList.add('red'); //assgining class as name 'red', and
// //as it was allready declared in html file it will take its styling.

// //now appending text into elelemnt
// h6element.appendChild(h6Text);
// //lets replace now, we are replacing newDiv that we created above, with our
// //newly created element h6Element
// document.body.replaceChild(h6element,newDiv);
// //above line just simply taking the place of newDiv and putting
// //h6Element on that position. if we comment out above line then the
// //newDiv will come back again.



//---^^^

//prepent
//innerText

//now we gonna create h2 elemement and insert before h1 lelement
//that already in htmlfile

// const h2element= document.createElement('h2');
// h2element.innerText='I am dynamic heading 2';
// //reather then appeding like previous way, we are appending 
// //by innerText way. 
// document.body.prepend(h2element);
// h2element.style.background='red';
// h2element.style.color='blue';
// //so we simply put the newly created element before h1
// //Now, append put the newly elelemnt before the scriptjs codeline 
// //in html file. but prepend put the element before the element we
// //want to put in. 


//---^^^

//remove
//removeChild

// const removeElement=document.querySelector('#result');
// //removeElement.remove();
// //simply we remove any element we want. rememeber it does not get
// //removed from the html file. its just dynamically removed from dom by js. 
// //and if we look at the inspection conoslo/element you wont find it. 

// //now lets see removechild and comment out prevmous remove codeline.

// //so for removechild, we have to run it on parent. here parent is div with id
// //called result
// //but instead of just searching all the element with the same class name, and then
// //deleteing it, we can just search any class of the same name and hold a parent element
// // that we want to delete their child from, how ? 

// const h1heading=removeElement.querySelector('h1');
// removeElement.removeChild(h1heading);
// //so in summary first we save div#result in removeElement, then search the element
// //we want to remove and save it as h1heading. then removed the child.
// //rememeber that all that happening dynamically. 
// console.log(h1heading); //we get second heading h1 element


//---^^^

//innerHTML
//textConent

// const list=document.getElementById('first');
// const div=document.getElementById('second');
// const item=document.querySelector('.item');
// //we have selected all the element in the html file

// console.log(div.textContent); //printing the text of the elememnt
// console.log(list.innerHTML); // printing the whole element with text

// //lets create a element of ul and put something in it
// const dynamicVar='Hello Jansir'
// const uList= document.createElement('ul');
// uList.innerHTML=`<li class="item">${dynamicVar}</li>
//       <li>list item</li> <li>list item</li>`;
// document.body.appendChild(uList);

//so we created a unorder list and put some 3lists in the list
//by innerhtml way. and then append the element into body.
//remember that we can append this newly created element anywehre.

//another thing to rememeber is that, we to put the innerHTML value in 
//template string (``). so that we can put dynamic variable there, as we
//did above.

//remember one thing whic is important
//in future project, if we use textContent then put text value in it 
//not the whole element with text. and if we use innerHTML then put whole
//element with the text. but dont substitute or shuffele its value with one 
//another. as textConent will take anything as a text. 


//---^^^

//CSS

// const random=document.querySelector('.random');
// // random.style.backgroundColor='blue';
// // random.style.Color='White';
// // random.style.fontSize='3rem';
// // random.style.textTransfor='capitalize';

// //above is the way to styling any div or element.
// //by coding each and every line hardcode

// //but there is another way
// random.classList.add('title');
// //so we can add the css styling from html line by cone line of code
// //instead of typing 1 by 1 in above previous styling.
// //its the faster way but sometimes previous styling also workd if we 
// //just want to add 1 or 2 property.


//---^^^

//select element
//addEventListener()
//what event, what to do

// const btn=document.querySelector('.btn');

// btn.addEventListener('click',function(){
//   console.log('hey you clicke me bitch')
// })

// so we are selecting element btn, adding event listener, 
// what kinda event? which is click event. and a callback fucntion
//fucntion could be anonymious or we setup a fucntion of reffernce
//in above code we have set anonymous fucntion

// const heading=document.querySelector('h2');
// btn.addEventListener('click',function(){
//   heading.classList.add('red');
// })
//so above code, we are selecting h2 element. adding event listener
//selecting what type of event which is click. and then callback fucntion
//which is adding class 'red' form html file which style up the h2.


// function changeColors(){
//   console.log('hello I am refference fucntion');
// }

// const heading=document.querySelector('h2');
// btn.addEventListener('click',changeColors);
//remember if we put paranthesis after the callbackfucntion as we put it
//then automatically that invoke the fucntion and call it. but we dont want 
//to happen that. we want user to click it then the fucntion will call


//now we gonna check if the event is there or not, so implying logic

// const heading=document.querySelector('h2');
// function changeColors(){
//   let haveClass=heading.classList.contains('red');
//   //so above line code just check either element has allready the class or not thats it
//   if(haveClass){
//     heading.classList.remove('red'); //so if its there we are removing the class red
//   }else{
//     heading.classList.add('red');
//   }
// }
// btn.addEventListener('click',changeColors);
//so above fucntionality of click event and callback function with more fucntionality
//inside it in 1 element. thats how we can put logic in fucntionality.


//---^^^

//click- fires after full action occurs
//mousedown- button is pressed
//mosuedown- button is released
//mouseenter- moved onto an element
//mouseleave- moved out of an element

const btn=document.querySelector('.btn');
btn.addEventListener('click',function(){
  console.log('you clicked me again');
})

btn.addEventListener('mousedown',function(){
  console.log('down');
})
btn.addEventListener('mouseup',function(){
  console.log('up');
})

//so when the mousedown event fires first as we clicking it, when we release our click
//then the mouse up fires and then the click event fires.

// function changeToBlue(){
//   let haveClass=heading.classList.contains('blue');
//   if(haveClass){
//     heading.classList.remove('blue');
//     heading.classList.add('red');
//   }else{
//     heading.classList.add('blue');
//   }
// }
// const heading=document.querySelector('h2');
// heading.addEventListener('mouseenter',changeToBlue);
//so above code, we are changing the heading h2 style altering red and blue.
//if blue is there then red will take place and if red is there blue will take place
//but we have to remove the previous style before adding it.

//now if we want to just hover over an element and change its styling and when
//we remove the mouse frm the element if we want to come back then following code

const heading=document.querySelector('h2');
heading.addEventListener('mouseenter',function(){
  heading.classList.add('blue');
});
heading.addEventListener('mouseleave',function(){
  heading.classList.remove('blue');
})

//so in above code we simply by suing mouseleave we can remove the styling
//of the class blue which we added in immediate previous line

console.log('Checking github repo again');