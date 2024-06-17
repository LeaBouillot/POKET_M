const grid = document.getElementById("grid");

const request = await fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
const poketmons = await request.json();
console.log(poketmons);
//arr.forEach(callback);
poketmons.forEach((poketmon) => {
  grid.innerHTML += `
    <div>
        <h2>${poketmon.name}</h2>
        <img src="${poketmon.image}">
    </div>`;
});
