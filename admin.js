/* ============================================================
   IBGE ESTUDOS — ADMIN PANEL LOGIC
   Versão 3.0 - Smart Embed Converter Universal
============================================================ */

const CUSTOM_DB_KEY = "ibge_custom_questions";
const VIDEO_DB_KEY = "ibge_video_lessons"; 

const subjectNames = {
    portugues: "Língua Portuguesa",
    logica: "Raciocínio Lógico",
    especificos: "Conhecimentos Específicos"
};

document.addEventListener("DOMContentLoaded", () => {
    bindNavigation();
    bindQuestionForm();
    bindVideoForm();
    renderQuestionTable();
    renderVideoTable();
    initTheme();
});

function bindNavigation() {
    document.querySelectorAll(".menu-item[data-page]").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
            document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("active"));
            
            const pageId = button.dataset.page;
            document.getElementById(pageId).classList.add("active");
            button.classList.add("active");
            
            const titles = {
                add: "Adicionar Nova Questão",
                manage: "Gerenciar Questões",
                addVideo: "Adicionar Videoaula",
                manageVideos: "Gerenciar Videoaulas"
            };
            document.getElementById("pageTitle").textContent = titles[pageId] || "Painel de Controle";
            if (window.innerWidth <= 850) document.getElementById("sidebar").classList.remove("mobile-open");
        });
    });
    document.getElementById("mobileMenu").addEventListener("click", () => {
        document.getElementById("sidebar").classList.toggle("mobile-open");
    });
}

/* ============================================================
   CRUD - QUESTÕES
============================================================ */
function getCustomQuestions() { return JSON.parse(localStorage.getItem(CUSTOM_DB_KEY)) || []; }

function bindQuestionForm() {
    document.getElementById("addQuestionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const subject = document.getElementById("qSubject").value;
        const newQuestion = {
            id: Date.now(), 
            subject: subject,
            subjectName: subjectNames[subject],
            topic: document.getElementById("qTopic").value.trim(),
            difficulty: document.getElementById("qDifficulty").value,
            banca: document.getElementById("qBanca").value.trim(),
            year: parseInt(document.getElementById("qYear").value),
            statement: document.getElementById("qStatement").value.trim(),
            alternatives: [
                { letter: "A", text: document.getElementById("qAltA").value.trim() },
                { letter: "B", text: document.getElementById("qAltB").value.trim() },
                { letter: "C", text: document.getElementById("qAltC").value.trim() },
                { letter: "D", text: document.getElementById("qAltD").value.trim() },
                { letter: "E", text: document.getElementById("qAltE").value.trim() }
            ],
            correct: document.getElementById("qCorrect").value,
            explanation: document.getElementById("qExplanation").value.trim()
        };

        const questions = getCustomQuestions();
        questions.push(newQuestion);
        localStorage.setItem(CUSTOM_DB_KEY, JSON.stringify(questions));

        showToast("✅ Questão adicionada com sucesso!", "success");
        e.target.reset();
        renderQuestionTable();
    });
}

function renderQuestionTable() {
    const tbody = document.getElementById("questionsTableBody");
    const emptyState = document.getElementById("emptyManageState");
    const questions = getCustomQuestions();

    tbody.innerHTML = "";
    if (questions.length === 0) { emptyState.style.display = "block"; return; }
    emptyState.style.display = "none";

    questions.forEach(q => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>#${String(q.id).slice(-5)}</td>
            <td><strong>${q.subjectName}</strong></td>
            <td>${q.topic}</td>
            <td><strong style="color:var(--green);">${q.correct}</strong></td>
            <td><button class="btn-delete" onclick="deleteQuestion(${q.id})">Apagar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

window.deleteQuestion = function(id) {
    if(confirm("Tem certeza que deseja excluir esta questão?")) {
        let questions = getCustomQuestions();
        questions = questions.filter(q => q.id !== id);
        localStorage.setItem(CUSTOM_DB_KEY, JSON.stringify(questions));
        showToast("🗑️ Questão excluída.", "info");
        renderQuestionTable();
    }
}

/* ============================================================
   CRUD - VIDEOAULAS (CONVERSOR INTELIGENTE UNIVERSAL)
============================================================ */
function getVideos() { return JSON.parse(localStorage.getItem(VIDEO_DB_KEY)) || []; }

function getSmartEmbedUrl(input) {
    let url = input.trim();
    if (!url) return "";

    // 1. O usuário colou um <iframe>? Extrai apenas o SRC de dentro dele.
    if (url.toLowerCase().includes("<iframe")) {
        const srcMatch = url.match(/src=["'](.*?)["']/i);
        if (srcMatch && srcMatch[1]) {
            url = srcMatch[1];
        } else {
            return url; // Retorna bruto se o iframe for mal formatado
        }
    }

    // 2. É YouTube? (Suporta youtu.be, watch?v=, embed, etc)
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch && ytMatch[1]) return `https://www.youtube.com/embed/${ytMatch[1]}`;

    // 3. É Vimeo?
    const vimeoMatch = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)([0-9]+)/i);
    if (vimeoMatch && vimeoMatch[1]) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

    // 4. É Google Drive?
    if (url.includes("drive.google.com/file/d/")) return url.replace(/\/view.*/, "/preview");

    // 5. Fallback - É um link de nuvem genérica (AWS, Hostgator, mp4 direto)
    return url;
}

function bindVideoForm() {
    document.getElementById("addVideoForm").addEventListener("submit", (e) => {
        e.preventDefault();

        const rawInput = document.getElementById("vUrl").value;
        const safeEmbedUrl = getSmartEmbedUrl(rawInput);
        const subject = document.getElementById("vSubject").value;

        const newVideo = {
            id: Date.now(),
            subject: subject,
            subjectName: subjectNames[subject],
            title: document.getElementById("vTitle").value.trim(),
            embedUrl: safeEmbedUrl,
            description: document.getElementById("vDescription").value.trim(),
            date: new Date().toLocaleDateString('pt-BR')
        };

        const videos = getVideos();
        videos.push(newVideo);
        localStorage.setItem(VIDEO_DB_KEY, JSON.stringify(videos));

        showToast("📹 Videoaula salva e configurada para Embed!", "success");
        e.target.reset();
        renderVideoTable();
    });
}

function renderVideoTable() {
    const tbody = document.getElementById("videosTableBody");
    const emptyState = document.getElementById("emptyVideoState");
    const videos = getVideos();

    tbody.innerHTML = "";
    if (videos.length === 0) { emptyState.style.display = "block"; return; }
    emptyState.style.display = "none";

    videos.forEach(v => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong style="color:var(--blue);">${v.subjectName}</strong></td>
            <td>${v.title}</td>
            <td>${v.date}</td>
            <td><button class="btn-delete" onclick="deleteVideo(${v.id})">Apagar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

window.deleteVideo = function(id) {
    if(confirm("Tem certeza que deseja excluir esta videoaula?")) {
        let videos = getVideos();
        videos = videos.filter(v => v.id !== id);
        localStorage.setItem(VIDEO_DB_KEY, JSON.stringify(videos));
        showToast("🗑️ Videoaula excluída.", "info");
        renderVideoTable();
    }
}

/* ============================================================
   UTILITÁRIOS: TOAST E TEMA
============================================================ */
function showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if(!container) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 2800);
}

function initTheme() {
    const saved = localStorage.getItem("ibge_estudos_v2");
    let theme = "light";
    if (saved) { try { theme = JSON.parse(saved).theme || "light"; } catch(e){} }
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    
    document.getElementById("themeToggle").addEventListener("click", () => {
        const isDark = document.documentElement.hasAttribute("data-theme");
        if (isDark) { document.documentElement.removeAttribute("data-theme"); updateMainTheme("light"); } 
        else { document.documentElement.setAttribute("data-theme", "dark"); updateMainTheme("dark"); }
    });
}

function updateMainTheme(newTheme) {
    try {
        let state = JSON.parse(localStorage.getItem("ibge_estudos_v2"));
        if(state) { state.theme = newTheme; localStorage.setItem("ibge_estudos_v2", JSON.stringify(state)); }
    } catch(e) {}
}