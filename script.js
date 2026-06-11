
const musicas = [
    // --- Gênero: Rock ---
    { id: 1, nome: "Livin' on a Prayer", artista: "Bon Jovi", categoria: "rock" },
    { id: 2, nome: "Quibungo", artista: "Casquadra", categoria: "rock" },
    { id: 3, nome: "Stairway to Heaven", artista: "Led Zeppelin", categoria: "rock" },
    { id: 4, nome: "Numb", artista: "Linkin Park", categoria: "rock" },
    { id: 5, nome: "Black", artista: "Pearl Jam", categoria: "rock" },

    // --- Gênero: Pop ---
    { id: 6, nome: "Flowers", artista: "Miley Cyrus", categoria: "pop" },
    { id: 7, nome: "Bad Guy", artista: "Billie Eilish", categoria: "pop" },
    { id: 8, nome: "Starman", artista: "David Bowie", categoria: "pop" },
    { id: 9, nome: "Espresso", artista: "Sabrina Carpenter", categoria: "pop" },
    { id: 10, nome: "Firework", artista: "Katy Perry", categoria: "pop" },

    // --- Gênero: Indie ---
    { id: 11, nome: "Riptide", artista: "Vance Joy", categoria: "indie" },
    { id: 12, nome: "Ho Hey", artista: "The Lumineers", categoria: "indie" },
    { id: 13, nome: "Preciso Mudar", artista: "O Terno", categoria: "indie" },
    { id: 14, nome: "Não Foi", artista: "Selvagens à Procura de Lei", categoria: "indie" },
    { id: 15, nome: "Do I Wanna Know?", artista: "Arctic Monkeys", categoria: "indie" },

    // --- Gênero: Eletrônica ---
    { id: 16, nome: "Hear Me Now", artista: "Alok, Bruno Martini feat. Zeeba", categoria: "eletronica" },
    { id: 17, nome: "Pump It", artista: "Öwnboss & Sevek", categoria: "eletronica" },
    { id: 18, nome: "L'Amour Toujours (I Will Fly With You)", artista: "Gigi D'Agostino", categoria: "eletronica" },
    { id: 19, nome: "In My Mind", artista: "Dynoro & Gigi D'Agostino", categoria: "eletronica" },
    { id: 20, nome: "Be My Lover", artista: "La Bouche", categoria: "eletronica" },

    // --- Gênero: MPB ---
    { id: 21, nome: "Cálice", artista: "Chico Buarque e Milton Nascimento", categoria: "mpb" },
    { id: 22, nome: "Pra Não Dizer Que Não Falei Das Flores", artista: "Geraldo Vandré", categoria: "mpb" },
    { id: 23, nome: "Há Tempos", artista: "Legião Urbana", categoria: "mpb" },
    { id: 24, nome: "Malandragem", artista: "Cássia Eller", categoria: "mpb" },
    { id: 25, nome: "Fogo e Paixão", artista: "Wando", categoria: "mpb" }
];
function desenharTela(listaDeMusicas){
 vitrine.innerHTML = "";

   listaDeMusicas.forEach(musica => {
     vitrine.innerHTML += `
            <div class="card">
                <h3>${musica.nome}</h3>
                <p><strong>Artista:</strong> ${musica.artista}</p>
                <p><strong>Genero:</strong><span class="tag"> ${musica.categoria}</span>
            </div>
        `;
   });
   
 
};





const vitrine = document.getElementById("vitrine");

function filtrar(genero) {
    let listaFiltrada;

    if (genero === 'todos') {
        listaFiltrada = musicas;
    }
    else {
        listaFiltrada = musicas.filter(musica => musica.categoria === genero);
    }

    desenharTela(listaFiltrada);
}