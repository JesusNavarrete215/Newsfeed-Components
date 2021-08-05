// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  // Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as an <li>}
  //   </ul>
  // </div>

  // The 'menuMaker' takes an array of menu items as its only argument.

  // Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  // Add those items to the <ul>

  // Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  // Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  // Step 5: Don't forget to return your div.menu.

  // Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.

function menuMaker(menuItem){
  //creating the elements
  const menu = document.createElement('div')
  const list = document.createElement('ul')

  const student = document.createElement('li')
  const faculty = document.createElement('li')
  const whatsNew = document.createElement('li')
  const techTrend = document.createElement('li')
  const music  = document.createElement('li')
  const logout = document.createElement('li')

  //setting the hierarchy
  menu.appendChild(list)

  list.appendChild(student)
  list.appendChild(faculty)
  list.appendChild(whatsNew)
  list.appendChild(techTrend)
  list.appendChild(music)
  list.appendChild(logout)
  
  //nameing the class
  menu.classList.add('menu')
  
  //setting values to the list items
  student.textContent = menuItems[0]
  faculty.textContent = menuItems[1]
  whatsNew.textContent = menuItems[2]
  techTrend.textContent = menuItems[3]
  music.textContent = menuItems[4]
  logout.textContent = menuItems[5]

  // lists.textContent = menuItem
  const menuButton = document.querySelector('.menu-button')
  //event listener
  menuButton.addEventListener('click', event => {
   menu.classList.toggle('menu--open')
 })
  
 return menu;
}

// menuItems.forEach( menu => {
//   const addmenu = menuMaker(menu)

//   return addmenu;
// })


  const newMenu = menuMaker(menuItems);

  document.querySelector('.header').appendChild(newMenu);

//map throuhg list item 
//hard code the list items 6 total
//append to the header by using document query
//dont loop 