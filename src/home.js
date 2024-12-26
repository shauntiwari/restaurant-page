import restaurantInterior from "./restaurant-interior.jpg";

function createHome() {
        const div = document.createElement("div");
        div.id = "content";
        
        const header = document.createElement("header");
        const h1 = document.createElement("h1");
        h1.textContent = "La Maison Bistro";
        const p1 = document.createElement("p");
        p1.classList.add("tagline");
        p1.textContent = "Authentic French Cuisine in the heart of the City";
        header.append(h1, p1);
        
        const main = document.createElement("main");
        const img = document.createElement("img");
        img.src = restaurantInterior;
        img.alt = "Elegant dining room with warm lighting and rustic decor";
        
        const section1 = document.createElement("section");
        section1.classList.add("about");
        const h2one = document.createElement("h2");
        h2one.textContent = "Welcome to La Maison";
        const p2 = document.createElement("p");
        p2.textContent = "Experience the essence of French dining in our intimate bistro. Our award winning chefs craft each dish with locally-sourced ingredients and traditional techniques passed down through generations."
        const p3 = document.createElement("p");
        p3.textContent = "Whether you're celebrating a special occasion or seeking an unforgettable dining experience, our carefully curated menu and extensive wine selection promise to delight your senses."
        section1.append(h2one, p2, p3);
        
        main.append(img, section1);
        
        div.append(header, main);
        
        return div;
}

export {createHome};