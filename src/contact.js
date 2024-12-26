import restaurantExterior from './restaurant-exterior.jpg';

function createContact() {
   const div = document.createElement("div");
   div.id = "content";

   const header = document.createElement("header");
   const h1 = document.createElement("h1");
   h1.textContent = "Contact Us";
   header.appendChild(h1);

   const main = document.createElement("main");

   const img = document.createElement("img");
   img.src = restaurantExterior;
   img.alt = "Exterior view of La Maison Bistro";

   const info = document.createElement("section");
   info.classList.add("contact-info");
   
   const address = document.createElement("div");
   address.innerHTML = `
       <h2>Location</h2>
       <p>123 French Quarter</p>
       <p>New Orleans, LA 70116</p>
   `;

   const hours = document.createElement("div");
   hours.innerHTML = `
       <h2>Hours</h2>
       <p>Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
       <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
       <p>Sunday: 4:00 PM - 9:00 PM</p>
       <p>Monday: Closed</p>
   `;

   const contact = document.createElement("div");
   contact.innerHTML = `
       <h2>Contact</h2>
       <p>Phone: (555) 123-4567</p>
       <p>Email: info@lamaisonbistro.com</p>
   `;

   info.append(address, hours, contact);
   main.append(img, info);
   div.append(header, main);
   return div;
}

export { createContact };