/**
 * MAIMOLAB V3 - SCRIPT.JS
 * Portail Navigation with Chapter Grid & Subject Filtering
 */

// --- DATA: CHAPTERS ---
const chapters = [
    // --- PREMIERE CHIMIE ---
    { id: "c-mol-1", title: "La Mole & Quantités de Matière", subject: "chimie", level: "1ere" },
    { id: "c-redox-1", title: "Oxydoréduction & Tableau d'avancement", subject: "chimie", level: "1ere" },
    { id: "c-dosage-1", title: "Dosages & Titrages", subject: "chimie", level: "1ere" },
    { id: "c-lewis-1", title: "Schéma de Lewis, Polarité & Nomenclature", subject: "chimie", level: "1ere" },
    
    // --- PREMIERE PHYSIQUE ---
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-inter-1", title: "Interactions Fondamentales", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" }
];

// --- DATA: FORMULAS (ONLY 1ERE) ---
const formulas = [
    { 
        id: "n-m-m", chapterId: "c-mol-1", title: "Quantité de matière (Masse)", 
        formula: "n = \\frac{m}{M}", 
        definition: "Relation entre la mole, la masse de l'échantillon et la masse molaire.",
        properties: "n en mol, m en g, M en g/mol.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)"
    },
    { 
        id: "n-cv", chapterId: "c-mol-1", title: "Quantité de matière (Solution)", 
        formula: "n = C \\times V", 
        definition: "Calcul des moles dans un volume V de solution de concentration molaire C.",
        properties: "Valable pour les solutés dissous.",
        units: "n [Qté matière] (mol), C [Conc. molaire] (mol/L), V [Volume] (L)"
    },
    { 
        id: "cm-m-v", chapterId: "c-mol-1", title: "Concentration en masse", 
        formula: "C_m = \\frac{m}{V}", 
        definition: "Rapport de la masse du soluté par le volume total de la solution.",
        properties: "Attention : Cm = C x M (relation avec la concentration molaire).",
        units: "Cm [Conc. masse] (g/L), m [Masse soluté] (g), V [Volume sol.] (L)"
    },
    { 
        id: "v-n-vm", chapterId: "c-mol-1", title: "Volume molaire (Gaz)", 
        formula: "n = \\frac{V}{V_m}", 
        definition: "⚠️ VALABLE UNIQUEMENT POUR LES GAZ ! Permet de calculer la quantité de matière occupant un volume V.",
        properties: "Vm ne dépend que de la température et de la pression (ex: 24 L/mol).",
        units: "n [Qté matière] (mol), V [Volume gaz] (L), Vm [Vol. molaire] (L/mol)"
    },
    { 
        id: "d-rho-rho", chapterId: "c-mol-1", title: "Densité (d)", 
        formula: "d = \\frac{\\rho}{\\rho_{eau}}", 
        definition: "Rapport de la masse volumique du corps par celle de l'eau.",
        properties: "La densité d est une grandeur sans unité.",
        units: "d [Densité], ρ [Masse vol.] (kg/L), ρe [Masse vol. eau] (kg/L)"
    },
    { 
        id: "rho-m-v", chapterId: "c-mol-1", title: "Masse volumique (ρ)", 
        formula: "\\rho = \\frac{m}{V}", 
        definition: "Masse de l'unité de volume d'un corps donné.",
        properties: "Permet de relier masse et volume d'un corps pur.",
        units: "ρ [Masse vol.] (g/L), m [Masse] (g), V [Volume] (L)"
    },
    { 
        id: "c-cm-m", chapterId: "c-mol-1", title: "Lien C et Cm", 
        formula: "C = \\frac{C_m}{M}", 
        definition: "Relation permettant de convertir une concentration massique en concentration molaire.",
        properties: "Cm est la concentration en masse (g/L), M est la masse molaire.",
        units: "C [Conc. molaire] (mol/L), Cm [Conc. masse] (g/L), M [Masse mol.] (g/mol)"
    },
    { 
        id: "redox-gen", chapterId: "c-redox-1", title: "Équation d'oxydoréduction", 
        formula: "Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2", 
        definition: "Transfert d'électrons entre deux couples redox.",
        properties: "L'oxydant capte des électrons, le réducteur en cède.",
        units: "Ox [Oxydant], Red [Réducteur], e- [Électrons]"
    },
    { 
        id: "tableau-av-redox", chapterId: "c-redox-1", title: "Exemple : Tableau d'avancement", 
        formula: "\\begin{array}{|c|c|c|c|c|} \\hline \\text{Équation} & Cu & + & 2Ag^+ & \\rightarrow & Cu^{2+} & + & 2Ag \\\\ \\hline x=0 & n_1 & & n_2 & & 0 & & 0 \\\\ \\hline x & n_1-x & & n_2-2x & & x & & 2x \\\\ \\hline x_{max} & n_1-x_{max} & & n_2-2x_{max} & & x_{max} & & 2x_{max} \\\\ \\hline \\end{array}", 
        definition: "Outil de suivi des quantités de matière au cours d'une transformation chimique.",
        properties: "Le réactif limitant est celui qui s'annule en premier (nf = 0).",
        units: "n [Moles] (mol), x [Avancement] (mol), xmax [Max] (mol)"
    },
    { 
        id: "beer-lamb", chapterId: "c-dosage-1", title: "Loi de Beer-Lambert", 
        formula: "A = \\epsilon \\cdot l \\cdot C", 
        definition: "Lien entre l'absorbance d'une solution colorée et sa concentration.",
        properties: "Valable pour des solutions diluées. A est sans unité.",
        units: "A [Absorbance], ε [Coef. extinction] (L/mol/cm), l [Largeur] (cm), C [Conc.] (mol/L)"
    },
    { 
        id: "titrage-eq", chapterId: "c-dosage-1", title: "Relation à l'équivalence", 
        formula: "\\frac{n_A}{a} = \\frac{n_B}{b}", 
        definition: "À l'équivalence d'un titrage, les réactifs ont été introduits dans les proportions stoechiométriques.",
        properties: "Permet de déterminer la concentration inconnue.",
        units: "n [Moles] (mol), a/b [Coef. stoechio]"
    },
    { 
        id: "ec-1-v3", chapterId: "p-energie-1", title: "Énergie Cinétique", 
        formula: "E_c = \\frac{1}{2} m v^2", 
        definition: "Énergie liée au mouvement d'un système de masse m et de vitesse v.",
        properties: "Ec toujours positive.",
        units: "Ec [Énergie Cin.] (J), m [Masse] (kg), v [Vitesse] (m/s)"
    },
    { 
        id: "p-ui", chapterId: "p-elec-1", title: "Puissance Électrique", 
        formula: "P = U \\cdot I", 
        definition: "Puissance reçue par un récepteur ou fournie par un générateur.",
        properties: "Relation valable en courant continu.",
        units: "P [Puissance] (W), U [Tension] (V), I [Intensité] (A)"
    }
];

// --- STATE MANAGEMENT ---
let currentView = 'home'; // 'home', 'chapters', 'formulas'
let currentLevel = null;
let currentSubject = 'all'; // 'all', 'physique', 'chimie'
let currentChapterId = null;
let currentSearch = '';

// --- DOM ELEMENTS ---
const homeView = document.getElementById('home-view');
const appView = document.getElementById('app-view');
const gridContainer = document.getElementById('grid-container');
const levelLabel = document.getElementById('level-label');
const viewTitle = document.getElementById('view-title');
const backBtn = document.getElementById('back-btn');
const subjectTabs = document.getElementById('subject-tabs');
const subTabs = document.querySelectorAll('.sub-tab');
const mainSearch = document.getElementById('main-search');
const noResults = document.getElementById('no-results');

const modalOverlay = document.getElementById('modal-overlay');

// --- NAVIGATION FUNCTIONS ---

function selectLevel(level) {
    currentLevel = level;
    currentView = 'chapters';
    currentSubject = 'all';
    currentChapterId = null;
    levelLabel.textContent = level === '1ere' ? 'Première' : 'Seconde';
    render();
}

function selectChapter(id) {
    currentChapterId = id;
    currentView = 'formulas';
    render();
}

function goBack() {
    if (currentSearch.length > 0) {
        currentSearch = '';
        mainSearch.value = '';
        currentChapterId ? (currentView = 'formulas') : (currentView = 'chapters');
    } else if (currentView === 'formulas') {
        currentChapterId = null;
        currentView = 'chapters';
    } else if (currentView === 'chapters') {
        currentView = 'home';
        currentLevel = null;
    }
    render();
}

// --- RENDERING LOGIC ---

function render() {
    // Hide all main sections
    homeView.classList.add('hidden');
    appView.classList.add('hidden');
    noResults.classList.add('hidden');
    subjectTabs.classList.add('hidden');
    backBtn.classList.add('hidden');

    if (currentSearch.length > 0) {
        showAppView();
        renderSearchResults();
    } else if (currentView === 'home') {
        homeView.classList.remove('hidden');
    } else if (currentView === 'chapters') {
        showAppView();
        subjectTabs.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        renderChapterGrid();
    } else if (currentView === 'formulas') {
        showAppView();
        backBtn.classList.remove('hidden');
        renderFormulaList();
    }

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
    document.getElementById('count-num').textContent = formulas.length;
}

function showAppView() {
    appView.classList.remove('hidden');
}

function renderChapterGrid() {
    viewTitle.textContent = "Chapitres";
    gridContainer.innerHTML = '';
    
    let filtered = chapters.filter(c => c.level === currentLevel);
    if (currentSubject !== 'all') {
        filtered = filtered.filter(c => c.subject === currentSubject);
    }

    filtered.forEach(c => {
        const count = formulas.filter(f => f.chapterId === c.id).length;
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="subj-dot ${c.subject}"></div>
            <div class="card-info">${c.subject.toUpperCase()}</div>
            <h3>${c.title}</h3>
            <div class="card-info">${count} formule(s)</div>
        `;
        card.onclick = () => selectChapter(c.id);
        gridContainer.appendChild(card);
    });
}

function renderFormulaList() {
    const chapter = chapters.find(c => c.id === currentChapterId);
    viewTitle.textContent = chapter.title;
    gridContainer.innerHTML = '';

    const filtered = formulas.filter(f => f.chapterId === currentChapterId);
    if (filtered.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    filtered.forEach(f => {
        gridContainer.appendChild(generateFormulaCard(f));
    });
}

function renderSearchResults() {
    viewTitle.textContent = "Résultats pour \"" + currentSearch + "\"";
    gridContainer.innerHTML = '';
    
    const lowerSearch = currentSearch.toLowerCase();

    // 1. CHERCHER LES CHAPITRES
    const matchingChapters = chapters.filter(c => 
        c.title.toLowerCase().includes(lowerSearch)
    );

    // 2. CHERCHER LES FORMULES
    const matchingFormulas = formulas.filter(f => 
        f.title.toLowerCase().includes(lowerSearch) ||
        f.definition.toLowerCase().includes(lowerSearch)
    );

    if (matchingChapters.length === 0 && matchingFormulas.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }

    // AFFICHER LES CHAPITRES TROUVÉS
    matchingChapters.forEach(c => {
        const formulaCount = formulas.filter(f => f.chapterId === c.id).length;
        const card = document.createElement('div');
        card.className = 'chapter-card search-result';
        card.innerHTML = `
            <div class="subj-dot ${c.subject}"></div>
            <div class="card-info">${c.subject.toUpperCase()} • CHAPITRE</div>
            <h3>${c.title}</h3>
            <div class="card-info">${formulaCount} formule(s)</div>
        `;
        card.onclick = () => {
            currentSearch = '';
            mainSearch.value = '';
            currentChapterId = c.id;
            currentView = 'formulas';
            render();
        };
        gridContainer.appendChild(card);
    });

    // AFFICHER LES FORMULES TROUVÉES
    matchingFormulas.forEach(f => {
        gridContainer.appendChild(generateFormulaCard(f));
    });
}

function generateFormulaCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const card = document.createElement('div');
    card.className = `formula-card`;
    
    const pillsHtml = f.units ? f.units.split(',').map(u => {
        const parts = u.trim().split('[');
        const desc = parts[0].trim();
        const unit = parts[1] ? parts[1].split(']')[0] : '';
        const realUnit = parts[1] ? parts[1].split('(')[1]?.replace(')', '') : '';
        return `
            <div class="unit-pill">
                <span class="pill-sym">${desc}</span>
                <span class="pill-arrow">↑</span>
                <span class="pill-unit">${realUnit || unit}</span>
            </div>
        `;
    }).join('') : "";

    card.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()} • ${chapter.level}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">\\[ ${f.formula} \\]</div>
        <div class="bottom-legend-area">${pillsHtml}</div>
        <div class="card-footer">
            <span>Définitions & Propriétés</span>
            <i data-lucide="arrow-right" style="width:16px"></i>
        </div>
    `;
    card.onclick = () => openModal(f);
    return card;
}

// --- MODAL ---
function openModal(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    
    // Update contents
    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-tag').textContent = `${chapter.subject.toUpperCase()} • ${chapter.level}`;
    document.getElementById('modal-tag').className = `modal-badge ${chapter.subject}`;
    document.getElementById('modal-units').textContent = f.units;
    document.getElementById('modal-def').textContent = f.definition;
    document.getElementById('modal-prop').textContent = f.properties;
    document.getElementById('math-box').innerHTML = `\\[ ${f.formula} \\]`;
    
    // Reset to first tab
    switchTab('eqn');
    
    // Show modal
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    if (window.MathJax) window.MathJax.typesetPromise();
}

function switchTab(tabId) {
    // Buttons
    document.querySelectorAll('.tab-trigger').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    // Panels
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
    });
}

// --- EVENTS ---
backBtn.onclick = goBack;

// Subject tabs
subTabs.forEach(tab => {
    tab.onclick = () => {
        subTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSubject = tab.dataset.subject;
        render();
    };
});

// Modal tabs
document.querySelectorAll('.tab-trigger').forEach(btn => {
    btn.onclick = () => {
        const target = btn.getAttribute('data-tab');
        switchTab(target);
    };
});

mainSearch.oninput = (e) => {
    currentSearch = e.target.value;
    if (currentSearch.length > 0) {
        currentView = 'chapters'; // Search works globally
    }
    render();
};

document.querySelector('.brand').onclick = () => {
    currentView = 'home';
    currentLevel = null;
    currentSearch = '';
    mainSearch.value = '';
    render();
};

document.querySelector('.modal-close').onclick = () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Close modal when clicking outside
window.onclick = (event) => {
    if (event.target == modalOverlay) {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Start
render();
