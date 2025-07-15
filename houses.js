const houses = [
  { name: "Amaranth House", price: 120, link: "amaranth.html", image: "images/1000.jpeg" },
  { name: "Citronella House", price: 130, link: "citronella.html", image: "images/1000.jpeg" },
  { name: "Paprika House", price: 125, link: "paprika.html", image: "images/1000.jpeg" },
  { name: "Oregano House", price: 140, link: "oregano.html", image: "images/1000.jpeg" },
  { name: "Rosmarino House", price: 135, link: "rosmarino.html", image: "images/1000.jpeg" },
  { name: "Ginger House", price: 110, link: "ginger.html", image: "images/1000.jpeg" },
  { name: "Sage House", price: 150, link: "sage.html", image: "images/1000.jpeg" },
];

const grid = document.getElementById("housesGrid");

houses.forEach(house => {
  const card = document.createElement("a");
  card.href = house.link;
  card.className = "block bg-slate-800/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-slate-700 hover:border-amber-400/50 transition hover:scale-105 group";

  card.innerHTML = `
    <div class="relative h-64 overflow-hidden">
      <img src="${house.image}" alt="${house.name}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
    </div>
    <div class="p-6">
      <h3 class="text-white font-semibold text-xl mb-2 group-hover:text-amber-400 transition">${house.name}</h3>
      <p class="text-slate-400 text-sm mb-4">From $${house.price}/night</p>
      <div class="bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 px-4 py-2 rounded-full font-medium text-center hover:scale-105 transition">
        Book Now
      </div>
    </div>
  `;

  grid.appendChild(card);
});
