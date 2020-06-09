/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Home',
  'Popular',
  "All",
  'r/AnimalsBeingBros',
  'r/programming',
  'r/NFL'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
 function menuMaker(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const ulElement = document.createElement('ul');
    menuItems.forEach((item) => {
      const listItem = document.createElement('li');
      const text = document.createTextNode(item);

      listItem.appendChild(text);

      ulElement.appendChild(listItem);
    });
    const menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("menu--open");
    })

    menu.appendChild(ulElement);
    return menu;
 }

 const header = document.querySelector(".header");

 const menuComponent = menuMaker(menuItems);

 header.appendChild(menuComponent);