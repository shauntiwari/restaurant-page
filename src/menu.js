function createMenu() {
    const div = document.createElement("div");
    div.id = "content";
 
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";
    header.appendChild(h1);
 
    const main = document.createElement("main");
    
    // Starters
    const starters = document.createElement("section");
    starters.classList.add("menu-section");
    const h2Starters = document.createElement("h2");
    h2Starters.textContent = "Starters";
    const starterItems = [
        { name: "French Onion Soup", price: "12", desc: "Classic beef broth with caramelized onions and melted Gruyère" },
        { name: "Escargots", price: "16", desc: "Burgundy snails in garlic-herb butter" },
        { name: "Salade Niçoise", price: "14", desc: "Mixed greens, tuna, olives, eggs, and anchovy dressing" }
    ];
    starters.appendChild(h2Starters);
    starterItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `
            <h3>${item.name} - $${item.price}</h3>
            <p>${item.desc}</p>
        `;
        starters.appendChild(div);
    });
 
    // Main Courses
    const mains = document.createElement("section");
    mains.classList.add("menu-section");
    const h2Mains = document.createElement("h2");
    h2Mains.textContent = "Main Courses";
    const mainItems = [
        { name: "Coq au Vin", price: "32", desc: "Braised chicken in red wine with mushrooms and pearl onions" },
        { name: "Beef Bourguignon", price: "36", desc: "Slow-cooked beef in red wine sauce with vegetables" },
        { name: "Duck Confit", price: "34", desc: "Crispy duck leg with roasted potatoes and cherry sauce" }
    ];
    mains.appendChild(h2Mains);
    mainItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerHTML = `
            <h3>${item.name} - $${item.price}</h3>
            <p>${item.desc}</p>
        `;
        mains.appendChild(div);
    });
 
    main.append(starters, mains);
    div.append(header, main);
    return div;
 }
 
 export { createMenu };