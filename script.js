import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBZdNC5xIiOdwTbCIEjmcEielf17K2taUM",
  authDomain: "anime-royal-83c8b.firebaseapp.com",
  projectId: "anime-royal-83c8b",
  storageBucket: "anime-royal-83c8b.firebasestorage.app",
  messagingSenderId: "897346461290",
  appId: "1:897346461290:web:eea01ad821bd9dfac87413",
  measurementId: "G-B0JH80K6B4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Carregar MISSÕES
async function carregarMissoes() {
  const container = document.getElementById("missoesContainer");
  container.innerHTML = "";
  const snapshot = await getDocs(query(collection(db,"missoes"), orderBy("timestamp","desc")));
  snapshot.forEach(docSnap => {
    const mis = docSnap.data();
    const div = document.createElement("div");
    div.className = "card " + (mis.prioridade==="urgente"?"urgente":"");
    div.innerHTML = `<strong>${mis.titulo}</strong> (${mis.prioridade.toUpperCase()})<br>${mis.descricao}<br>Data: ${mis.data}`;
    container.appendChild(div);
  });
}

// Carregar BANS
async function carregarBans() {
  const container = document.getElementById("bansContainer");
  container.innerHTML = "";
  const snapshot = await getDocs(query(collection(db,"bans"), orderBy("timestamp","desc")));
  snapshot.forEach(docSnap => {
    const ban = docSnap.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `ID: ${ban.banID}<br>Motivo: ${ban.banMotivo}<br>Data: ${ban.banData}`;
    container.appendChild(div);
  });
}

// Carregar RECADOS
async function carregarRecados() {
  const container = document.getElementById("recadosContainer");
  container.innerHTML = "";
  const snapshot = await getDocs(query(collection(db,"recados"), orderBy("timestamp","desc")));
  snapshot.forEach(docSnap => {
    const rec = docSnap.data();
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<strong>${rec.titulo}</strong><br>${rec.descricao}<br>Data: ${rec.data}`;
    container.appendChild(div);
  });
}

// Inicializa carregamento
carregarMissoes();
carregarBans();
carregarRecados();

// Accordion
const acc = document.getElementsByClassName("accordion");
for(let i=0;i<acc.length;i++){
  acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");
    if(panel.style.display==="block"){
      panel.style.display="none";
      arrow.style.transform="rotate(0deg)";
    } else {
      panel.style.display="block";
      arrow.style.transform="rotate(90deg)";
    }
  });
}

