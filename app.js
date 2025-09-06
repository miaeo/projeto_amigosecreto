let amigos = [];
let somAtivo = true;

// TOGGLE SOM E FUNÇÃO DE TOCAR SOM
function tocarSom(src) {
    if(somAtivo) {
        const som = new Audio(src);
        som.play();
    }
}
const btnToggleSound = document.getElementById("toggleSound");
btnToggleSound.onclick = () => {
    somAtivo = !somAtivo;
    btnToggleSound.innerHTML = somAtivo 
    ? "<i class='bx bxs-volume-full' style='font-size: 20px;'></i>" 
    : "<i class='bx bxs-volume-mute' style='font-size: 20px;'></i>";
};

// ADICIONAR AMIGOS
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    input.value = "";
    atualizarLista();
    tocarSom("assets/add.mp3");
}

// ATUALIZAÇÃO DA LISTA DE AMIGOS
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Cria o "coração/X"
        const btnDelete = document.createElement("span");
        btnDelete.className = "delete-btn";

        // Clica no botão para excluir
        btnDelete.onclick = () => {
            amigos.splice(index, 1);
            atualizarLista();
            tocarSom("assets/delete.mp3");
        };

        li.appendChild(btnDelete);
        lista.appendChild(li);
    });
}



// SORTEIO DE AMIGO
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `${amigoSorteado}`;
    li.classList.add("fade-in");
    resultado.appendChild(li);

    tocarSom("assets/sort.wav");
}