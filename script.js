const grid = document.getElementById("grid");
let list = "";

try {
  const request = await fetch(
    "https://pokebuildapi.fr/api/v1/pokemon/limit/151"
  );
  const pokemons = await request.json();

  // fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/151")
  // .then(res => res.json())
  // .then(pokemons =>  {
  //     console.log(pokemons)
  // })
  console.log(pokemons);

  pokemons.forEach((poketmon) => {
    list += `
            <div>
                <h2>${poketmon.name}</h2>
                <img src="${poketmon.image}" />
                <ul>
                    <li>Points de vie :${poketmon.stats.HP}</li>
                    <li>Attaque : ${poketmon.stats.attack}</li>
                    <li>Défense : ${poketmon.stats.defense}</li>
                    <li>Attaque spé : ${poketmon.stats.special_attack}</li>
                    <li>Défense spé : ${poketmon.stats.special_defense}</li>
                    <li>Vitesse : ${poketmon.stats.speed}</li>
                </ul>
                <div class="types">`;

    pokemon.apiTypes.forEach((type) => {
      list += `
                <div>
                    <img src="${type.image}" />
                    <h3>${type.name}</h3>
                </div>
            `;
    });
    list += `</div></div>
        `;

    // Object.keys permet de transformer un objet en tableau contenant uniquement les clés de cet objet
    // Object.keys(pokemon.stats).forEach(stat => {
    //     console.log(stat, pokemon.stats[stat])
    // })

    grid.innerHTML = list;
  });
} catch (e) {
  console.log(e);
}
