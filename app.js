//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let secretFriend = [];
let originalFriends = []; 
let nameEntered = document.querySelector("#friend");
let allDrawn = 1;

function addFriend() {
    
    let validName = nameEntered.value.trim();
    let nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'’-]+$/;

    if (!validName) {
        alert("Digite um nome válido, por favor! 😂✍");
        nameEntered.value = "";   
        return;
    } 
    else if (!nameRegex.test(validName)) {
        alert("Digite um nome válido. 😝");
        nameEntered.value = "";   
        return;
    }

    else if (secretFriend.includes(validName)) {
        alert("Esse nome já foi adicionado! 🧑‍🤝‍🧑✌️");
        nameEntered.value = "";   
        return;
    }

    secretFriend.push(validName);
    originalFriends = [...secretFriend];
    updateList();
    nameEntered.value = "";   
}
function updateList() {
    let listAdd = document.querySelector("#friendList");
    listAdd.innerHTML = ""; 

    secretFriend.forEach(friend => {
        let listName = document.createElement("li");
        listName.textContent = friend;
        listAdd.appendChild(listName);
    });
}

function friendsDraw() {
    if (secretFriend.length === 0) {
        alert("Por favor, digite alguns nomes para fazer o sorteio.👻");
        return;
    }

    const index = Math.floor(Math.random() * secretFriend.length);
    const chosenFriend = secretFriend.splice(index, 1)[0];
    nameEntered.value = ""; 

    document.getElementById("result").innerHTML += `<li>A opção sorteada é: <strong>${chosenFriend}</strong></li>`;
    
    updateList();
    
    if (secretFriend.length == 0) {
        alert("Sorteio concluído! 🎉");
        document.getElementById("button-draw").disabled = true; 
    }
    allDrawn++;
}


function restartDraw() {
    secretFriend = []; 
    originalFriends = [...secretFriend];

    let nameEntered = document.querySelector("#friend");
    if (nameEntered) {
        nameEntered.value = ""; 
    }

    allDrawn = 1; 
    document.getElementById("result").innerHTML = ""; 
    updateList();
}

