/* ============================================================
   CONFIGURAÇÃO DO FIREBASE (FIRESTORE) - NUVEM
============================================================ */

// Importa os módulos do Firebase v10 via CDN Modular Oficial
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    addDoc, 
    deleteDoc, 
    doc, 
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// ⚠️ SUBSTITUA COM AS CREDENCIAIS DO SEU PROJETO NO FIREBASE CONSOLE
const firebaseConfig = {
    apiKey: "AIzaSyAuKgito24dMZlX2cAs0Bp2-4FfHRtBLh0",
    authDomain: "splataforma-estudos-570aa.firebaseapp.com",
    projectId: "plataforma-estudos-570aa",
    storageBucket: "plataforma-estudos-570aa.firebasestorage.app",
    messagingSenderId: "611731048551",
    appId: "1:611731048551:web:8124dbe9e2d7f193746cc2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta as instâncias e funções para serem usadas no admin.js e script.js
export { db, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot };
