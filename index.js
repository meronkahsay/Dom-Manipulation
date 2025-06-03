//Change document background color to silver

document.body.style.backgroundColor= 'silver';
//Change the font color for h1 title tag to green
const title = document.getElementById('title');
title.style.color='green'

//Change the font case for h3 title tags to uppercase
const fontCase = document.querySelectorAll('h3');
fontCase.forEach(h3=>{
  h3.style.textTransform = 'uppercase';
});
// Add one more fruit to the fruits list

const fruits = document.getElementById('fruList');
const newList = document.createElement('li');
fruits.appendChild(newList);
newList.textContent= 'Strawberry';


//Add one more vegetable to the vegetables list
const vegetables = document.getElementById('vegList');
const newveg = document.createElement('li');
vegetables.appendChild(newveg);
newveg.textContent = 'Spinach';

//Additional Styles
fruits.style.display="flex";
fruits.style.flexDirection="wrap";
fruits.style.justifyContent="space-between";
const paragraph = document.querySelector("p")
paragraph.style.fontSize="60px"
paragraph.style.color='green';
const fruit = document.querySelectorAll('#fruList li');
const fruitimages = ["Images/front-view-fresh-green-apples-with-tangerines-dark-background-color-photo-xmas-holiday-fruit.jpg","Images/close-up-banana-table.jpg","Images/fruit-still-life-baroque-style.jpg","Images/red-strawberries-white-cup.jpg"]
fruit.forEach((li,index)=>{
  const img = document.createElement("img")
  img.src = fruitimages[index];
  img.className = "fruit-img";
  li.appendChild(img)
})
const veg = document.querySelectorAll('#vegList li');
const vegimages = ["Images/side-view-basket-full-red-onions-wooden-background.jpg","Images/close-up-view-tomatoes-basket-plate-wooden-table.jpg","Images/washed-spinach-leaves-bowl-wooden-table.jpg","Images/carrots-with-leaves-towel-bucket-marble-surface.jpg"]
veg.forEach((li,index)=>{
  const imgveg = document.createElement("img")
  imgveg.src = vegimages[index];
  imgveg.className = "veg-img";
  li.appendChild(imgveg)
})
vegetables.style.display="flex"
vegetables.style.justifyContent="space-between"
vegetables.style.marginTop ="50px"

const button = document.getElementById("button");
button.style.border='none';
button.style.borderRadius='20px';
button.style.backgroundColor= "rgb(164, 236, 164)";
button.style.padding="20px";
button.style.width="240px";
button.style.fontSize="25px"
button.style.cursor="pointer";
button.addEventListener('click',()=>{
  button.textContent="Go Down";
  button.style.backgroundColor= "rgb(215, 243, 215)"
})
button.addEventListener('click', function() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
  });
});