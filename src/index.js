import {beverages, sides, mainDishes, contacts} from "./food-list.js";

console.log(beverages);
console.log(sides);
console.log(mainDishes);
console.log(contacts);

const content = document.querySelector('#content');
const mainButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');


mainButton.addEventListener('click', mainTab);
menuButton.addEventListener('click', menuTab);
contactButton.addEventListener('click', contactTab);
// schedule array

const schedule = ['Sunday: 8am - 8pm', 'Monday: 8am - 8pm', 'Tuesday: 8am - 8pm', 'Wednesday: 8am - 8pm', 'Thursday: 8am - 10pm', 'Friday: 8am - 12pm', 'Saturday: 8am - 12pm' ];
// create main tab

function mainTab() {
    content.innerHTML = '';
    mainButton.classList.remove('hidden');
    menuButton.classList.add('hidden');
    contactButton.classList.add('hidden');

    const mainDiv = document.createElement('div');
        mainDiv.classList.add('main-content');
        mainDiv.setAttribute('id', 'main-content');

    const presentationDiv = document.createElement('div');
        presentationDiv.classList.add('presentation');

        const titleDiv = document.createElement('div');
            titleDiv.classList.add('title-div');
            
            const robotIcon = document.createElement('img');
                robotIcon.setAttribute('src', './assets/bot.png');
                robotIcon.setAttribute('alt', 'icon of a robot head');
                robotIcon.classList.add('robot-icon');

            const tomatoIcon = document.createElement('img');
                tomatoIcon.setAttribute('src', './assets/tomato.png');
                tomatoIcon.setAttribute('alt', 'icon of a tomato');    
                tomatoIcon.classList.add('tomato-icon');

            const titleH1 = document.createElement('h1');
                  titleH1.classList.add('title');
                  titleH1.innerText = 'Vegan Robots Delivery'; 

        titleDiv.append(robotIcon, tomatoIcon, titleH1);          
        presentationDiv.appendChild(titleDiv);
        mainDiv.appendChild(presentationDiv);
        


  // about div 
    const aboutDiv = document.createElement('div');
        aboutDiv.classList.add('about');

        const basketIcon = document.createElement('img');
            basketIcon.classList.add('basket-icon');    
            basketIcon.setAttribute('src', './assets/healthy-food.png');
            basketIcon.setAttribute('alt', 'icon of a food basket');
    
        const aboutP = document.createElement('p');
            aboutP.classList.add('description');
            aboutP.innerText = "Our organic food restaurant is dedicated to serving delicious, healthy, and sustainable meals sourced from local, organic farms and suppliers. With a menu that caters to a variety of dietary needs, we believe in nourishing both the body and the planet.";

        const authorP = document.createElement('p');
            authorP.classList.add('author');
            authorP.innerText = "Senior Chef Carrot Face";

    aboutDiv.append(basketIcon, aboutP, authorP);

  // schedule div
        const scheduleDiv = document.createElement('div');
            scheduleDiv.classList.add('schedule');
            const h2 = document.createElement('h2');
            h2.classList.add('main-h2');
            h2.innerText = 'Hours';
        scheduleDiv.append(h2);    
        for (let i = 0; i < schedule.length; i += 1) {
            const pipi = document.createElement('p');
            pipi.innerText = schedule[i];
            scheduleDiv.append(pipi);
        }

  // location 
        const locationDiv = document.createElement('div');
            locationDiv.classList.add('location');
            const h3 = document.createElement('h3');
            h3.innerText = "Location";
            const pLocation = document.createElement('p');
            pLocation.innerText = "137, Tomato Street, Vinegar Town - TX";

         locationDiv.append(h3, pLocation);   
         
         mainDiv.append(aboutDiv, scheduleDiv, locationDiv);
         content.append(mainDiv);

    
         
    }

function menuTab() {
    content.innerHTML = '';
    menuButton.classList.remove('hidden');
    mainButton.classList.add('hidden');
    contactButton.classList.add('hidden');

    const menuDiv = document.createElement('div');
        menuDiv.classList.add('main-content');
        menuDiv.setAttribute('id', 'main-content');

    /* Menu Title*/

        const presentationDiv = document.createElement('div');
            presentationDiv.classList.add('presentation');
    
            const titleDiv = document.createElement('div');
                titleDiv.classList.add('title-div');
                
                const robotIcon = document.createElement('img');
                    robotIcon.setAttribute('src', './assets/bot.png');
                    robotIcon.setAttribute('alt', 'icon of a robot head');
                    robotIcon.classList.add('robot-icon');
    
                const tomatoIcon = document.createElement('img');
                    tomatoIcon.setAttribute('src', './assets/tomato.png');
                    tomatoIcon.setAttribute('alt', 'icon of a tomato');    
                    tomatoIcon.classList.add('tomato-icon');
    
                const titleH1 = document.createElement('h1');
                      titleH1.classList.add('title');
                      titleH1.innerText = 'Menu'; 
    
            titleDiv.append(robotIcon, tomatoIcon, titleH1);          
            presentationDiv.appendChild(titleDiv);
    
            menuDiv.appendChild(presentationDiv);
    
    /* beverages */
    const foodTitleDiv = document.createElement('div');
        foodTitleDiv.classList.add('food-title');
            const h2Food = document.createElement('h2');
            h2Food.innerText = 'Beverages';
            foodTitleDiv.append(h2Food);

    menuDiv.appendChild(foodTitleDiv);
    /* Beverage items creation*/

    const elements = beverages.map(item => {
        const el = document.createElement('div');
        el.classList.add('food-item');
            const h3Name = document.createElement('h3');
            h3Name.innerText = `${item.name}`;
            h3Name.classList.add('food-name');
            
            const pBio = document.createElement('p');
            pBio.innerText = `${item.description}`;
            pBio.classList.add('food-bio');

            const pPrice = document.createElement('p');
            pPrice.innerText = `${item.price}`;
            pPrice.classList.add('food-price');

            const imgFood = document.createElement('img');
            imgFood.setAttribute('src', `./assets/${item.img}`);
            imgFood.setAttribute('alt', `${item.alt}`);
            imgFood.classList.add('food-img');
        el.append(h3Name, pBio, pPrice, imgFood);
        menuDiv.append(el);        
    });

    /* Sides */
    const foodTitleDiv2 = document.createElement('div');
        foodTitleDiv2.classList.add('food-title');
            const h3Food = document.createElement('h2');
            h3Food.innerText = 'Sides';
            foodTitleDiv2.append(h3Food);
    menuDiv.appendChild(foodTitleDiv2);
    /* Side items creation*/

    const elements2 = sides.map(item => {
        const el = document.createElement('div');
        el.classList.add('food-item');
            const h3Name = document.createElement('h3');
            h3Name.innerText = `${item.name}`;
            h3Name.classList.add('food-name');
            
            const pBio = document.createElement('p');
            pBio.innerText = `${item.description}`;
            pBio.classList.add('food-bio');

            const pPrice = document.createElement('p');
            pPrice.innerText = `${item.price}`;
            pPrice.classList.add('food-price');

            const imgFood = document.createElement('img');
            imgFood.setAttribute('src', `./assets/${item.img}`);
            imgFood.setAttribute('alt', `${item.alt}`);
            imgFood.classList.add('food-img');
        el.append(h3Name, pBio, pPrice, imgFood);
        menuDiv.append(el);        
    });

   /* Main Dishes*/
   const foodTitleDiv3 = document.createElement('div');
   foodTitleDiv3.classList.add('food-title');
       const h4Food = document.createElement('h2');
       h4Food.innerText = 'Main Dishes';
       foodTitleDiv3.append(h4Food);
menuDiv.appendChild(foodTitleDiv3);
/* Main dishes items creation*/

const elements3 = mainDishes.map(item => {
   const el = document.createElement('div');
   el.classList.add('food-item');
       const h3Name = document.createElement('h3');
       h3Name.innerText = `${item.name}`;
       h3Name.classList.add('food-name');
       
       const pBio = document.createElement('p');
       pBio.innerText = `${item.description}`;
       pBio.classList.add('food-bio');

       const pPrice = document.createElement('p');
       pPrice.innerText = `${item.price}`;
       pPrice.classList.add('food-price');

       const imgFood = document.createElement('img');
       imgFood.setAttribute('src', `./assets/${item.img}`);
       imgFood.setAttribute('alt', `${item.alt}`);
       imgFood.classList.add('food-img');
   el.append(h3Name, pBio, pPrice, imgFood);
   menuDiv.append(el);        
});


     content.append(menuDiv); 
}

function contactTab() {
    content.innerHTML = '';
    menuButton.classList.add('hidden');
    mainButton.classList.add('hidden');
    contactButton.classList.remove('hidden');

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    /* Menu Title*/

    const contactsDiv = document.createElement('div');
        contactsDiv.classList.add('main-content');
        contactsDiv.setAttribute('id', 'main-content');

    

    const presentationDiv = document.createElement('div');
    presentationDiv.classList.add('presentation');

    const titleDiv = document.createElement('div');
        titleDiv.classList.add('title-div');
        
        const robotIcon = document.createElement('img');
            robotIcon.setAttribute('src', './assets/bot.png');
            robotIcon.setAttribute('alt', 'icon of a robot head');
            robotIcon.classList.add('robot-icon');

        const tomatoIcon = document.createElement('img');
            tomatoIcon.setAttribute('src', './assets/tomato.png');
            tomatoIcon.setAttribute('alt', 'icon of a tomato');    
            tomatoIcon.classList.add('tomato-icon');

        const titleH1 = document.createElement('h1');
              titleH1.classList.add('title');
              titleH1.innerText = 'Contact'; 

    titleDiv.append(robotIcon, tomatoIcon, titleH1);          
    presentationDiv.appendChild(titleDiv);

    contactsDiv.appendChild(presentationDiv);
    contactDiv.appendChild(contactsDiv);
    /* Contact */

    /* Beverage items creation*/

    const elements = contacts.map(item => {
        const el = document.createElement('div');
        el.classList.add('contact-item');
            const h3Name = document.createElement('h3');
            h3Name.innerText = `${item.name}`;
            h3Name.classList.add('contact-name');
            
            const pBio = document.createElement('p');
            pBio.innerText = `${item.bio}`;

            const pPhone = document.createElement('p');
            pPhone.innerText = `${item.phone}`;

            const pEmail = document.createElement('p');
            pEmail.innerText = `${item.email}`;

            const imgContact = document.createElement('img');
            imgContact.setAttribute('src', `./assets/${item.img}`);
            imgContact.setAttribute('alt', `${item.alt}`);
            imgContact.classList.add('contact-img');
        el.append(h3Name, pBio, pPhone, pEmail, imgContact);
        contactDiv.append(el);        
    });



     content.append(contactDiv);

}