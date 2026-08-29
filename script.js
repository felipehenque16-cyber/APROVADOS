/* ============================================================
   IBGE ESTUDOS — SCRIPT V3.3 (PARTE 1/2)
   Correção Definitiva de Eventos dos Botões do Dashboard
============================================================ */

const STORAGE_KEY = "ibge_estudos_v2";
const QUESTIONS_PER_PAGE = 10; 

const BASE_VIDEOS = [
    {
        id: 999999, subject: "logica", subjectName: "Raciocínio Lógico",
        title: "Probabilidade - Aula Demonstrativa",
        embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
        description: "Aula nativa para demonstrar o funcionamento do Modal Expansivo.",
        date: "29/08/2026"
    }
];

const BASE_QUESTIONS = [
    {
        id: 1, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Interpretação de Texto", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A interpretação de um texto exige que o leitor considere não apenas informações explícitas, mas também relações estabelecidas entre as ideias apresentadas. Nesse sentido, é correto afirmar que:",
        alternatives: [
            { letter: "A", text: "A interpretação deve considerar exclusivamente as informações literais do texto." },
            { letter: "B", text: "A compreensão textual pode envolver informações implícitas e relações entre diferentes partes do texto." },
            { letter: "C", text: "A interpretação depende exclusivamente da opinião pessoal do leitor." },
            { letter: "D", text: "Textos objetivos não apresentam informações implícitas." },
            { letter: "E", text: "O contexto não interfere na construção do sentido de um texto." }
        ],
        correct: "B", explanation: "A interpretação textual não se limita ao que está explicitamente escrito. O leitor também precisa perceber relações, pressupostos, inferências e informações implícitas."
    },
    {
        id: 2, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Coesão e Coerência", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre os mecanismos responsáveis pela construção da coesão textual, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "A coesão está relacionada exclusivamente à organização dos parágrafos." },
            { letter: "B", text: "A coesão envolve mecanismos linguísticos que estabelecem relações entre as partes do texto." },
            { letter: "C", text: "A coerência e a coesão são exatamente o mesmo fenômeno." },
            { letter: "D", text: "Um texto coerente necessariamente precisa possuir períodos curtos." },
            { letter: "E", text: "A repetição de palavras sempre elimina a coesão textual." }
        ],
        correct: "B", explanation: "A coesão é construída por mecanismos linguísticos como pronomes, conjunções, conectivos, substituições e relações lexicais."
    },
    {
        id: 3, subject: "portugues", subjectName: "Língua Portuguesa", topic: "Concordância", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão da língua portuguesa.",
        alternatives: [
            { letter: "A", text: "Houveram diversas mudanças no projeto." },
            { letter: "B", text: "Fazem dois anos que o programa foi criado." },
            { letter: "C", text: "Existem diversas possibilidades de atuação profissional." },
            { letter: "D", text: "Haviam muitos candidatos inscritos." },
            { letter: "E", text: "Deve existirem novas oportunidades." }
        ],
        correct: "C", explanation: "O verbo 'existir' é pessoal e deve concordar com o sujeito. 'Existem diversas possibilidades' está correto."
    },
    {
        id: 4, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Proposições", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Considere a proposição: 'Todo assistente social é profissional de nível superior.' Sobre essa afirmação, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "É uma proposição porque pode ser classificada como verdadeira ou falsa." },
            { letter: "B", text: "Não é uma proposição porque contém uma profissão." },
            { letter: "C", text: "Não pode possuir valor lógico." },
            { letter: "D", text: "É necessariamente uma proposição falsa." },
            { letter: "E", text: "Toda proposição precisa ser uma pergunta." }
        ],
        correct: "A", explanation: "Uma proposição é uma frase declarativa que pode receber um valor lógico: verdadeiro ou falso."
    },
    {
        id: 5, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Porcentagem", difficulty: "easy", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Um candidato respondeu corretamente 36 questões de uma prova composta por 60 questões. Qual foi seu percentual de acertos?",
        alternatives: [
            { letter: "A", text: "50%" }, { letter: "B", text: "55%" }, { letter: "C", text: "60%" }, { letter: "D", text: "65%" }, { letter: "E", text: "70%" }
        ],
        correct: "C", explanation: "36 ÷ 60 = 0,60. Multiplicando por 100: 60% de aproveitamento."
    },
    {
        id: 6, subject: "logica", subjectName: "Raciocínio Lógico", topic: "Sequências", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Observe a sequência: 2, 4, 8, 16, 32, ... Mantendo o mesmo padrão, qual será o próximo número?",
        alternatives: [
            { letter: "A", text: "48" }, { letter: "B", text: "54" }, { letter: "C", text: "60" }, { letter: "D", text: "64" }, { letter: "E", text: "72" }
        ],
        correct: "D", explanation: "Cada termo é obtido multiplicando o anterior por 2. 32 × 2 = 64."
    },
    {
        id: 7, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Lei nº 8.662/1993", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Considerando a regulamentação da profissão de Assistente Social no Brasil, assinale a alternativa correta acerca das atribuições privativas.",
        alternatives: [
            { letter: "A", text: "Exercidas por qualquer profissional de nível superior." },
            { letter: "B", text: "Atividades cuja execução é reservada ao Assistente Social." },
            { letter: "C", text: "Exclusivamente atividades administrativas." },
            { letter: "D", text: "Não possuem relação com a regulamentação." },
            { letter: "E", text: "Correspondem apenas a atividades voluntárias." }
        ],
        correct: "B", explanation: "A Lei nº 8.662/1993 regulamenta a profissão e estabelece competências e atribuições privativas."
    },
    {
        id: 8, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Código de Ética", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "No exercício profissional do Serviço Social, a dimensão ética está relacionada:",
        alternatives: [
            { letter: "A", text: "Apenas ao cumprimento de ordens administrativas." },
            { letter: "B", text: "À atuação profissional orientada por princípios e valores estabelecidos no projeto ético-político." },
            { letter: "C", text: "Exclusivamente à relação entre profissional e empregador." },
            { letter: "D", text: "Somente ao cumprimento de normas internas." },
            { letter: "E", text: "À ausência de posicionamento profissional." }
        ],
        correct: "B", explanation: "A dimensão ética está articulada aos princípios e valores do projeto ético-político profissional."
    },
    {
        id: 9, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Políticas Sociais", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A Constituição Federal de 1988 representou importante marco para as políticas sociais brasileiras porque:",
        alternatives: [
            { letter: "A", text: "Eliminou completamente as desigualdades sociais." },
            { letter: "B", text: "Ampliou o reconhecimento dos direitos sociais e estabeleceu bases da Seguridade Social." },
            { letter: "C", text: "Retirou do Estado a responsabilidade pela proteção." },
            { letter: "D", text: "Determinou que todas as políticas fossem privadas." },
            { letter: "E", text: "Extinguiu as políticas de saúde." }
        ],
        correct: "B", explanation: "A CF/88 ampliou direitos sociais e estruturou a Seguridade Social."
    },
    {
        id: 10, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Seguridade Social", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "De acordo com a CF/1988, a Seguridade Social compreende um conjunto integrado de ações relativas à:",
        alternatives: [
            { letter: "A", text: "Educação, cultura e segurança." },
            { letter: "B", text: "Saúde, previdência e assistência social." },
            { letter: "C", text: "Habitação, education e transporte." },
            { letter: "D", text: "Segurança pública e educação." },
            { letter: "E", text: "Trabalho e habitação." }
        ],
        correct: "B", explanation: "Compreende Saúde, Previdência Social e Assistência Social."
    },
    {
        id: 11, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "SUAS", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "O Sistema Único de Assistência Social — SUAS organiza a política considerando:",
        alternatives: [
            { letter: "A", text: "Apenas ações privadas." }, { letter: "B", text: "A organização descentralizada e participativa." },
            { letter: "C", text: "Ações emergenciais." }, { letter: "D", text: "Benefícios previdenciários." }, { letter: "E", text: "Substituição da previdência." }
        ],
        correct: "B", explanation: "O SUAS organiza a assistência social de forma descentralizada e participativa."
    },
    {
        id: 12, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Pesquisa Social", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre a pesquisa social no Serviço Social, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "Não possui relação profissional." }, { letter: "B", text: "Contribui para compreender a realidade e subsidiar a intervenção." },
            { letter: "C", text: "Usa apenas métodos quantitativos." }, { letter: "D", text: "Dispensa teoria." }, { letter: "E", text: "Evita análise crítica." }
        ],
        correct: "B", explanation: "A pesquisa subsidia o conhecimento e a intervenção profissional."
    },
    {
        id: 13, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Questão Social", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Na perspectiva crítica, a questão social está relacionada principalmente:",
        alternatives: [
            { letter: "A", text: "A problemas individuais." }, { letter: "B", text: "Às expressões das desigualdades do capitalismo." },
            { letter: "C", text: "A conflitos familiares." }, { letter: "D", text: "A situações sem economia." }, { letter: "E", text: "À pobreza individual." }
        ],
        correct: "B", explanation: "A questão social refere-se às contradições e desigualdades do sistema capitalista."
    },
    {
        id: 14, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Direitos Sociais", difficulty: "medium", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "A atuação profissional diante das expressões da questão social deve considerar:",
        alternatives: [
            { letter: "A", text: "Somente características individuais." }, { letter: "B", text: "As determinações sociais, econômicas, políticas e culturais." },
            { letter: "C", text: "Apenas aspectos financeiros." }, { letter: "D", text: "Normas administrativas." }, { letter: "E", text: "Exclusão dos usuários." }
        ],
        correct: "B", explanation: "Exige considerar a multiplicidade de determinações na vida dos sujeitos."
    },
    {
        id: 15, subject: "especificos", subjectName: "Conhecimentos Específicos", topic: "Instrumentalidade", difficulty: "hard", banca: "INSTITUTO AVALIA", year: 2026,
        statement: "Sobre a instrumentalidade do Serviço Social, assinale a alternativa correta.",
        alternatives: [
            { letter: "A", text: "Corresponde ao uso de formulários." }, { letter: "B", text: "Envolve mediações que articulam conhecimentos, valores e instrumentos." },
            { letter: "C", text: "Elimina teoria." }, { letter: "D", text: "Limitada ao atendimento individual." }, { letter: "E", text: "Não possui finalidade." }
        ],
        correct: "B", explanation: "A instrumentalidade articula teoria, competências, valores e meios de intervenção."
    }
];

function getCombinedQuestions() {
    try {
        const customData = localStorage.getItem("ibge_custom_questions");
        if (customData) {
            const parsed = JSON.parse(customData);
            if (Array.isArray(parsed)) return [...BASE_QUESTIONS, ...parsed];
        }
    } catch (e) { console.error(e); }
    return [...BASE_QUESTIONS];
}
const QUESTIONS = getCombinedQuestions();

function createDefaultState() {
    return { answered: {}, favorites: [], history: [], lastActivity: null, theme: "light" };
}

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) return createDefaultState();
        const parsed = JSON.parse(saved);
        if (!parsed.theme) parsed.theme = "light"; 
        return { ...createDefaultState(), ...parsed };
    } catch (error) { return createDefaultState(); }
}

function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

let state = loadState();
let currentPage = "dashboard";
let currentQuestions = [];
let currentPageIndex = 1;

/* ============================================================
   IBGE ESTUDOS — SCRIPT V3.3 (PARTE 2/2)
============================================================ */

function toggleTheme() { state.theme = state.theme === "dark" ? "light" : "dark"; saveState(); applyTheme(); }
function applyTheme() {
    const btn = document.getElementById("themeToggle");
    if (state.theme === "dark") { document.documentElement.setAttribute("data-theme", "dark"); if (btn) btn.innerHTML = "☀️"; } 
    else { document.documentElement.removeAttribute("data-theme"); if (btn) btn.innerHTML = "🌙"; }
}

function escapeHTML(text) {
    if (text === undefined || text === null) return "";
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function getQuestionById(id) { return QUESTIONS.find(q => Number(q.id) === Number(id)); }
function getAnsweredQuestion(id) { return state.answered[String(id)] || null; }
function isFavorite(id) { return state.favorites.includes(Number(id)); }
function getQuestionStatus(id) { const i = getAnsweredQuestion(id); return !i ? "new" : i.correct ? "correct" : "wrong"; }

function updateDashboardStats() {
    const answers = Object.values(state.answered);
    const answered = answers.length;
    const correct = answers.filter(item => item.correct === true).length;
    const wrong = answers.filter(item => item.correct === false).length;
    const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

    setText("totalAnswered", answered); setText("statsAnswered", answered);
    setText("totalCorrect", correct); setText("statsCorrect", correct);
    setText("totalWrong", wrong); setText("statsWrong", wrong);
    setText("accuracy", `${accuracy}%`); setText("statsAccuracy", `${accuracy}%`);
}
function setText(id, value) { const el = document.getElementById(id); if (el) el.textContent = value; }

/* ROTEADOR SPA & LIGAÇÃO DOS BOTÕES DO DASHBOARD */
function refreshCurrentView() {
    if (currentPage === "questoes") renderQuestionBank();
    else if (currentPage === "videos") renderVideosPage();
}

function navigateTo(page) {
    document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(page);
    if (target) { target.classList.add("active"); currentPage = page; }

    document.querySelectorAll(".menu-item").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.page === page) btn.classList.add("active");
    });

    const titles = { dashboard: "Olá! 👋", questoes: "Banco de Questões", videos: "Videoaulas", erradas: "Questões Erradas", favoritas: "Minhas Favoritas", estatisticas: "Minhas Estatísticas" };
    setText("pageTitle", titles[page] || "IBGE Estudos");
    document.getElementById("sidebar")?.classList.remove("mobile-open");

    if (page === "questoes") renderQuestionBank();
    if (page === "videos") renderVideosPage();
    if (page === "estatisticas") updateDashboardStats();
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* MODAL DE VÍDEO */
window.openVideoModal = function(url) {
    const modal = document.getElementById('videoModalOverlay');
    const container = document.getElementById('modalVideoContainer');
    if(modal && container) {
        let cleanUrl = url.trim();
        const sep = cleanUrl.includes('?') ? '&' : '?';
        container.innerHTML = `<iframe src="${cleanUrl}${sep}autoplay=1" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`;
        modal.classList.add('active');
    }
};

window.closeVideoModal = function() {
    const modal = document.getElementById('videoModalOverlay');
    const container = document.getElementById('modalVideoContainer');
    if(modal && container) {
        modal.classList.remove('active');
        setTimeout(() => { container.innerHTML = ''; }, 300); 
    }
};

function renderVideosPage() {
    const container = document.getElementById("videosContainer");
    if (!container) return;

    const customVideos = JSON.parse(localStorage.getItem("ibge_video_lessons")) || [];
    const allVideos = [...BASE_VIDEOS, ...customVideos];

    let filterBar = document.getElementById("videoFilterBar");
    if (!filterBar) {
        const videosSection = document.getElementById("videos");
        const header = videosSection.querySelector(".page-header");
        
        filterBar = document.createElement("div");
        filterBar.id = "videoFilterBar";
        filterBar.className = "filters-card";
        filterBar.style.marginTop = "15px";
        filterBar.innerHTML = `
            <div class="filter-group" style="grid-column: 1 / -1;">
                <label>Filtrar Aulas por Disciplina</label>
                <select id="filterVideoSubject" style="width:100%;">
                    <option value="all">Todas as Disciplinas</option>
                    <option value="portugues">Língua Portuguesa</option>
                    <option value="logica">Raciocínio Lógico</option>
                    <option value="especificos">Conhecimentos Específicos</option>
                </select>
            </div>
        `;
        header.after(filterBar);
        document.getElementById("filterVideoSubject").addEventListener("change", renderVideosPage);
    }

    const selectedSubject = document.getElementById("filterVideoSubject")?.value || "all";
    const filteredVideos = allVideos.filter(v => selectedSubject === "all" || v.subject === selectedSubject);

    if (filteredVideos.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><div class="empty-icon">📹</div><h3>Nenhuma videoaula encontrada</h3></div>`;
        return;
    }

    container.innerHTML = filteredVideos.map(v => `
        <article class="video-card" onclick="openVideoModal('${v.embedUrl}')">
            <div class="video-wrapper">
                <iframe src="${v.embedUrl}" tabindex="-1"></iframe>
                <div class="expand-icon-overlay">▶</div>
            </div>
            <div class="video-info">
                <span class="video-subject">${escapeHTML(v.subjectName)}</span>
                <h4 class="video-title">${escapeHTML(v.title)}</h4>
                <p class="video-desc">${escapeHTML(v.description)}</p>
                <div class="video-meta"><span>Adicionado em: ${v.date}</span></div>
            </div>
        </article>
    `).join("");
}

/* BANCO DE QUESTÕES COM PRÁTICA CONTÍNUA */
function getFilteredQuestions() {
    const subject = document.getElementById("filterSubject")?.value || "all";
    const status = document.getElementById("filterStatus")?.value || "all";
    const diff = document.getElementById("filterDifficulty")?.value || "all";

    return QUESTIONS.filter(q => {
        if (subject !== "all" && q.subject !== subject) return false;
        if (diff !== "all" && q.difficulty !== diff) return false;
        const qStatus = getQuestionStatus(q.id);
        if (status !== "all" && qStatus !== status) return false;
        if (status === "favorite" && !isFavorite(q.id)) return false;
        return true;
    });
}

function renderQuestionBank() {
    const container = document.getElementById("questionsContainer");
    if (!container) return;
    const questions = getFilteredQuestions();
    currentQuestions = questions;

    if (questions.length === 0) {
        container.innerHTML = `<div class="empty-state"><h3>Nenhuma questão encontrada</h3><button class="primary-button" id="clearFiltersBtn">Limpar filtros</button></div>`;
        document.getElementById("clearFiltersBtn")?.addEventListener("click", () => {
            document.getElementById("filterSubject").value = "all";
            document.getElementById("filterStatus").value = "all";
            document.getElementById("filterDifficulty").value = "all";
            currentPageIndex = 1; renderQuestionBank();
        });
        return;
    }

    const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
    if (currentPageIndex > totalPages) currentPageIndex = totalPages;
    if (currentPageIndex < 1) currentPageIndex = 1;

    const paginated = questions.slice((currentPageIndex - 1) * QUESTIONS_PER_PAGE, currentPageIndex * QUESTIONS_PER_PAGE);

    let html = `<div class="questions-toolbar"><strong>${questions.length}</strong><span>questões encontradas</span><button class="small-action-button" id="randomQuestionButton">🎲 Questão aleatória</button></div>`;
    html += `<div class="question-list">${paginated.map(q => renderQuestionCard(q)).join("")}</div>`;
    
    if (totalPages > 1) {
        html += `<div class="pagination-controls"><span>Página ${currentPageIndex} de ${totalPages}</span><div class="pagination-actions">
            <button class="secondary-question-button" id="prevPage" ${currentPageIndex === 1 ? 'disabled' : ''}>← Anterior</button>
            <button class="secondary-question-button" id="nextPage" ${currentPageIndex === totalPages ? 'disabled' : ''}>Próxima →</button>
        </div></div>`;
    }
    container.innerHTML = html;
    bindQuestionEvents();
}

function renderQuestionCard(q) {
    const ans = getAnsweredQuestion(q.id);
    const fav = isFavorite(q.id);

    return `
        <article class="question-card" data-question-id="${q.id}">
            <div class="question-card-header">
                <span class="question-number">Q${String(q.id).padStart(3, "0")}</span>
                <button class="favorite-button ${fav ? "active" : ""}" data-fav="${q.id}">${fav ? "★" : "☆"}</button>
            </div>
            ${ans ? `<div style="background: var(--surface-soft); padding: 10px 15px; border-bottom: 1px solid var(--border); font-size: 12px; color: var(--text-light);">ℹ️ Você já respondeu esta questão anteriormente. Pode tentar novamente abaixo:</div>` : ""}
            <div class="question-statement">${escapeHTML(q.statement)}</div>
            <div class="alternatives">
                ${q.alternatives.map(a => {
                    return `<div class="alternative" data-alt="${a.letter}" data-qid="${q.id}">
                        <div class="alternative-main"><span class="alternative-letter">${a.letter}</span>${escapeHTML(a.text)}</div>
                        <button type="button" class="scissors-button" data-sci="${q.id}" data-alt="${a.letter}" title="Eliminar alternativa">✂</button>
                    </div>`;
                }).join("")}
            </div>
            <div class="question-actions">
                <button class="answer-button" data-ans="${q.id}">Responder Novamente</button>
            </div>
            <div class="explanation-box" id="exp-${q.id}">
                <div class="explanation-body">${escapeHTML(q.explanation)}</div>
            </div>
        </article>
    `;
}

function bindQuestionEvents() {
    document.getElementById("prevPage")?.addEventListener("click", () => { currentPageIndex--; renderQuestionBank(); window.scrollTo(0,0); });
    document.getElementById("nextPage")?.addEventListener("click", () => { currentPageIndex++; renderQuestionBank(); window.scrollTo(0,0); });
    document.getElementById("randomQuestionButton")?.addEventListener("click", () => {
        if (!currentQuestions.length) return;
        const rIdx = Math.floor(Math.random() * currentQuestions.length);
        currentPageIndex = Math.floor(rIdx / QUESTIONS_PER_PAGE) + 1;
        renderQuestionBank();
    });

    document.querySelectorAll(".alternative").forEach(el => {
        el.addEventListener("click", function(e) {
            if (e.target.closest(".scissors-button")) return;
            const qid = this.dataset.qid; 
            if (this.classList.contains("eliminated")) return;
            document.querySelectorAll(`.alternative[data-qid="${qid}"]`).forEach(i => i.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    document.querySelectorAll("[data-sci]").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const qid = btn.dataset.sci; const alt = btn.dataset.alt;
            const altDiv = document.querySelector(`.alternative[data-qid="${qid}"][data-alt="${alt}"]`);
            altDiv.classList.remove("selected"); altDiv.classList.toggle("eliminated");
            btn.innerHTML = altDiv.classList.contains("eliminated") ? "↩" : "✂";
        });
    });

    document.querySelectorAll("[data-ans]").forEach(btn => {
        btn.addEventListener("click", () => {
            const qid = btn.dataset.ans; 
            const sel = document.querySelector(`.alternative.selected[data-qid="${qid}"]`);
            if (!sel) return showToast("Selecione uma alternativa.", "warning");
            
            const q = getQuestionById(qid); 
            const selected = sel.dataset.alt; 
            const correct = selected === q.correct;

            state.answered[String(qid)] = { selected, correct, eliminated: [], answeredAt: new Date().toISOString(), showExplanation: true };
            saveState(); 
            updateDashboardStats();

            const card = document.querySelector(`[data-question-id="${qid}"]`);
            if(card) {
                const expBox = card.querySelector(`#exp-${qid}`);
                if(expBox) expBox.classList.add("visible");
                
                card.querySelectorAll(".alternative").forEach(altEl => {
                    const ltr = altEl.dataset.alt;
                    if(ltr === q.correct) altEl.style.background = "var(--green-light)";
                    if(ltr === selected && !correct) altEl.style.background = "var(--red-light)";
                });
            }

            showToast(correct ? "✓ Parabéns, você acertou!" : `✕ Resposta incorreta. O gabarito é ${q.correct}.`, correct ? "success" : "error");
        });
    });

    document.querySelectorAll("[data-fav]").forEach(btn => {
        btn.addEventListener("click", () => {
            const qid = Number(btn.dataset.fav); const idx = state.favorites.indexOf(qid);
            if (idx === -1) { state.favorites.push(qid); showToast("⭐ Favoritada", "success"); }
            else { state.favorites.splice(idx, 1); showToast("Desfavoritada", "info"); }
            saveState(); renderQuestionBank();
        });
    });
}

function showToast(msg, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) { container = document.createElement("div"); container.id = "toastContainer"; document.body.appendChild(container); }
    const toast = document.createElement("div"); toast.className = `toast toast-${type}`; toast.textContent = msg; container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 2800);
}

function initializeApp() {
    document.getElementById("themeToggle")?.addEventListener("click", toggleTheme); applyTheme();
    
    // Liga os itens do menu lateral (Sidebar)
    document.querySelectorAll(".menu-item").forEach(b => {
        b.addEventListener("click", () => {
            const page = b.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // CORREÇÃO: Liga os botões de atalho do Dashboard (ex: "Estudar Português", "Ver todas")
    document.querySelectorAll("[data-page-button]").forEach(b => {
        b.addEventListener("click", () => {
            const page = b.dataset.pageButton;
            if (page) navigateTo(page);
        });
    });

    document.getElementById("mobileMenu")?.addEventListener("click", () => document.getElementById("sidebar")?.classList.toggle("mobile-open"));
    
    ["filterSubject", "filterStatus", "filterDifficulty"].forEach(id => { 
        document.getElementById(id)?.addEventListener("change", () => { currentPageIndex = 1; renderQuestionBank(); }); 
    });

    document.getElementById("startQuestions")?.addEventListener("click", () => navigateTo("questoes"));
    
    const overlay = document.getElementById("videoModalOverlay");
    if(overlay) {
        overlay.addEventListener("click", (e) => { if(e.target === overlay) closeVideoModal(); });
        document.getElementById("closeVideoModalBtn")?.addEventListener("click", closeVideoModal);
        document.addEventListener("keydown", (e) => { if(e.key === "Escape") closeVideoModal(); });
    }

    updateDashboardStats();
    if (currentPage === "videos") renderVideosPage();
}

document.addEventListener("DOMContentLoaded", initializeApp);