// ===============================
// Universidad del Valle de Guatemala 
// Laboratorio 4 
// script js 
// ===============================



// ===============================
// VARIABLES GLOBALES
// ===============================

let missions = [];
let totalXP = 0;


// ===============================
// OBTENER XP SEGÚN DIFICULTAD
// ===============================

function getXPByDifficulty(difficulty) {
    if (difficulty === "facil") return 10;
    if (difficulty === "normal") return 25;
    if (difficulty === "dificil") return 50;
    return 0;
}


// ===============================
// CREAR NUEVA MISIÓN
// ===============================

function createMission() {

    const nameInput = document.getElementById("name");
    const descriptionInput = document.getElementById("description");
    const difficultySelect = document.getElementById("difficulty");

    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();
    const difficulty = difficultySelect.value;

    // Validación básica
    if (name === "" || description === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    const xp = getXPByDifficulty(difficulty);

    const mission = {
        name: name,
        description: description,
        difficulty: difficulty,
        xp: xp,
        status: "PENDING"
    };

    // Registro en consola (requisito del laboratorio)
    console.log("Nueva misión creada:", mission);

    missions.push(mission);

    renderMissions();
    clearForm();
}


// ===============================
// RENDERIZAR MISIONES
// ===============================

function renderMissions() {

    const missionList = document.getElementById("missionList");
    missionList.innerHTML = "";

    missions.forEach((mission, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${mission.name}</strong><br>
            <small>${mission.description}</small><br>
            Dificultad: ${mission.difficulty} | XP: ${mission.xp}<br>
            Estado: ${mission.status}<br><br>
            <button onclick="completeMission(${index})">Completar</button>
        `;

        if (mission.status === "SUCCESSFUL") {
            li.classList.add("success");
        }

        missionList.appendChild(li);
    });
}


// ===============================
// COMPLETAR MISIÓN
// ===============================

function completeMission(index) {

    const mission = missions[index];

    if (mission.status === "PENDING") {

        mission.status = "SUCCESSFUL";
        totalXP += mission.xp;

        updateXP();
        renderMissions();
    }
}


// ===============================
// ACTUALIZAR XP GLOBAL
// ===============================

function updateXP() {
    document.getElementById("totalXP").textContent = totalXP;
    updateRank();
}


// ===============================
// ACTUALIZAR RANGO
// ===============================

function updateRank() {

    const rankElement = document.getElementById("userRank");

    if (totalXP < 50) {
        rankElement.textContent = "Novato";
    } 
    else if (totalXP >= 50 && totalXP < 100) {
        rankElement.textContent = "Wizard";
    } 
    else {
        rankElement.textContent = "Sorcerer";
    }
}


// ===============================
// LIMPIAR FORMULARIO
// ===============================

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
}