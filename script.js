/**
 * MAIMOLAB V3 - SCRIPT.JS
 * Portail Navigation with Protocol-specific UI
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
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },

    // --- PROTOCOLES ---
    { id: "proto-chimie-1", title: "Protocoles de Chimie", subject: "protocoles", level: "1ere" }
];

// --- DATA: FORMULAS ---
const formulas = [
    { 
        id: "n-m-m", chapterId: "c-mol-1", title: "Quantité de matière (Masse)", 
        formula: "n = \\frac{m}{M}", 
        definition: "Relation entre la mole, la masse de l'échantillon et la masse molaire.",
        properties: "n en mol, m en g, M en g/mol.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)"
    },
    { 
        id: "d-rho-rho", chapterId: "c-mol-1", title: "Densité (d)", 
        formula: "d = \\frac{\\rho}{\\rho_{eau}}", 
        definition: "Rapport de la masse volumique du corps par celle de l'eau.",
        properties: "Grandeur sans unité.",
        units: "d [Densité], ρ [Masse vol.] (kg/L)"
    },
    { 
        id: "rho-m-v", chapterId: "c-mol-1", title: "Masse volumique (ρ)", 
        formula: "\\rho = \\frac{m}{V}", 
        definition: "Masse de l'unité de volume d'un corps donné.",
        properties: "Relie masse et volume d'un corps pur.",
        units: "ρ [Masse vol.] (g/L), m [Masse] (g), V [Volume] (L)"
    },
    { 
        id: "c-cm-m", chapterId: "c-mol-1", title: "Lien C et Cm", 
        formula: "C = \\frac{C_m}{M}", 
        definition: "Relation permettant de convertir une concentration massique en concentration molaire.",
        properties: "M est la masse molaire du soluté.",
        units: "C (mol/L), Cm (g/L), M (g/mol)"
    },
    { 
        id: "n-cv", chapterId: "c-mol-1", title: "Quantité de matière (Solution)", 
        formula: "n = C \\times V", 
        definition: "Calcul des moles dans un volume V de solution de concentration molaire C.",
        properties: "Valable pour les solutés dissous.",
        units: "n [Qté matière] (mol), C [Conc. molaire] (mol/L), V [Volume] (L)"
    },
    { 
        id: "beer-lamb", chapterId: "c-dosage-1", title: "Loi de Beer-Lambert", 
        formula: "A = \\epsilon \\cdot l \\cdot C", 
        definition: "Lien entre l'absorbance d'une solution colorée et sa concentration.",
        properties: "A est sans unité, ε est le coef. d'extinction.",
        units: "A [Absorbance], C [Concentration] (mol/L)"
    },
    { 
        id: "titrage-equiv", chapterId: "c-dosage-1", title: "Relation à l'Équivalence", 
        formula: "\\frac{C_A \\cdot V_A}{a} = \\frac{C_B \\cdot V_{eq}}{b}", 
        definition: "A l'équivalence, les réactifs sont introduits dans les proportions stoechiométriques.",
        properties: "a et b sont les coefficients stoechiométriques.",
        units: "Ca, Cb [Conc.] (mol/L), Va, Veq [Volume] (L)"
    },
    { 
        id: "pe-etalon-1", chapterId: "proto-chimie-1", title: "Dosage par étalonnage (Spectrophotométrie)", 
        formula: "", 
        definition: "• PRÉLIMINAIRE : Réglage du spectrophotomètre (Le Blanc).\n• ÉTAPE 0 : Déterminer le spectre d'absorption (λmax).\n• ÉTAPE 1 : À partir d'une solution connue, on prépare par dilutions successives des solutions étalons.\n• ÉTAPE 2 : Préparer des solutions étalons à concentrations connues et croissantes.\n• ÉTAPE 3 : Refaire le blanc à λmax.\n• ÉTAPE 4 : Mesurer l'absorbance de chaque solution et noter les valeurs.\n• ÉTAPE 5 : Tracer la courbe d'étalonnage A=f(c).\n• ÉTAPE 6 : Mesurer l'absorbance de la solution inconnue et déduire sa concentration.\n\nLoi de Beer-Lambert : A = k × C (Droite passant par l'origine).",
        properties: "",
        units: ""
    },
    { 
        id: "proto-dissol", chapterId: "proto-chimie-1", title: "Protocole de Dissolution", 
        formula: "", 
        definition: "BUT : Dissoudre un soluté solide pour préparer une solution.\n\n1. Placer la coupelle vide sur la balance et tarer.\n2. Peser exactement la masse m de solide à l'aide d'une spatule.\n3. Introduire le solide dans la fiole jaugée avec un entonnoir.\n4. Rincer la coupelle et l'entonnoir à l'eau distillée (verser dans la fiole).\n5. Remplir la fiole aux 2/3 avec de l'eau distillée.\n6. Boucher et agiter jusqu'à dissolution complète.\n7. Compléter jusqu'au trait de jauge avec de l'eau distillée.\n8. Boucher et agiter pour homogénéiser.",
        properties: "",
        units: ""
    },
    { 
        id: "proto-dilut", chapterId: "proto-chimie-1", title: "Protocole de Dilution", 
        formula: "", 
        definition: "BUT : Diminuer la concentration d'une solution.\n\n1. Verser un volume de solution mère dans un bécher propre.\n2. Prélever le volume V_mère à l'aide d'une pipette jaugée munie d'une propipette.\n3. Verser le prélèvement dans une fiole jaugée (volume V_fille).\n4. Compléter la fiole avec de l'eau distillée jusqu'au trait de jauge.\n5. Boucher et agiter pour homogénéiser.\n\nNote : F = V_fille / V_mère = C_mère / C_fille",
        properties: "",
        units: ""
    },
    { 
        id: "cm-m-v", chapterId: "c-mol-1", title: "Concentration en masse", 
        formula: "C_m = \\frac{m}{V}", 
        definition: "Rapport de la masse du soluté par le volume total de la solution.",
        properties: "Relation: Cm = C x M.",
        units: "Cm [Conc. masse] (g/L), m [Masse sol.] (g), V [Volume] (L)"
    },
    { 
        id: "v-n-vm", chapterId: "c-mol-1", title: "Volume molaire (Gaz)", 
        formula: "n = \\frac{V}{V_m}", 
        definition: "⚠️ VALABLE UNIQUEMENT POUR LES GAZ !",
        properties: "Vm ≈ 24 L/mol.",
        units: "n [Qté matière] (mol), V [Volume] (L), Vm [Vol. mol] (L/mol)"
    },
    { 
        id: "redox-gen", chapterId: "c-redox-1", title: "Équation d'oxydoréduction", 
        formula: "Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2", 
        definition: "Transfert d'électrons entre deux couples redox.",
        properties: "Ox capte e-, Red cède e-.",
        units: "Ox [Oxydant], Red [Réducteur]"
    },
    { 
        id: "ec-1-v3", chapterId: "p-energie-1", title: "Énergie Cinétique", 
        formula: "E_c = \\frac{1}{2} m v^2", 
        definition: "Énergie liée au mouvement.",
        properties: "Ec en Joules.",
        units: "Ec (J), m (kg), v (m/s)"
    }
];

// --- STATE MANAGEMENT ---
let currentView = 'home'; 
let currentLevel = null;
let currentSubject = 'all'; 
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

// --- NAVIGATION ---
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

// --- RENDERING ---
function render() {
    homeView.classList.toggle('hidden', currentView !== 'home' && currentSearch.length === 0);
    appView.classList.toggle('hidden', currentView === 'home' && currentSearch.length === 0);
    noResults.classList.add('hidden');
    subjectTabs.classList.toggle('hidden', currentView !== 'chapters');
    backBtn.classList.toggle('hidden', currentView === 'home');

    if (currentSearch.length > 0) {
        renderSearchResults();
    } else if (currentView === 'chapters') {
        renderChapterGrid();
    } else if (currentView === 'formulas') {
        renderFormulaList();
    }

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
    document.getElementById('count-num').textContent = formulas.length;
}

function renderChapterGrid() {
    viewTitle.textContent = "Chapitres";
    gridContainer.innerHTML = '';
    let filtered = chapters.filter(c => c.level === currentLevel);
    if (currentSubject !== 'all') filtered = filtered.filter(c => c.subject === currentSubject);

    filtered.forEach(c => {
        const count = formulas.filter(f => f.chapterId === c.id).length;
        const card = document.createElement('div');
        card.className = 'chapter-card';
        card.innerHTML = `
            <div class="subj-dot ${c.subject}"></div>
            <div class="card-info">${c.subject.toUpperCase()}</div>
            <h3>${c.title}</h3>
            <div class="card-info">${count} élément(s)</div>
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
    filtered.forEach(f => gridContainer.appendChild(generateFormulaCard(f)));
}

function renderSearchResults() {
    viewTitle.textContent = "Résultats de recherche";
    gridContainer.innerHTML = '';
    const lowerSearch = currentSearch.toLowerCase();
    const matchingFormulas = formulas.filter(f => f.title.toLowerCase().includes(lowerSearch));
    if (matchingFormulas.length === 0) { noResults.classList.remove('hidden'); return; }
    matchingFormulas.forEach(f => gridContainer.appendChild(generateFormulaCard(f)));
}

function generateFormulaCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const card = document.createElement('div');
    const isProto = chapter.subject === 'protocoles';
    card.className = `formula-card ${chapter.subject}`;
    
    card.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()} • ${chapter.level}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn" style="${isProto ? 'min-height:40px' : ''}">
            ${isProto ? '<i data-lucide="test-tube-2" style="opacity:0.4;width:40px"></i>' : `\\[ ${f.formula} \\]`}
        </div>
        <div class="card-footer">
            <span>${isProto ? "Voir le protocole" : "Voir définitions"}</span>
            <i data-lucide="arrow-right"></i>
        </div>
    `;
    card.onclick = () => openModal(f);
    return card;
}

function openModal(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';
    
    document.querySelector('.modal-tabs').style.display = isProto ? 'none' : 'flex';
    document.getElementById('tab-eqn').style.display = isProto ? 'none' : 'block';
    
    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-tag').textContent = `${chapter.subject.toUpperCase()} • ${chapter.level}`;
    document.getElementById('modal-tag').className = `modal-badge ${chapter.subject}`;
    document.getElementById('modal-units').textContent = f.units;
    document.getElementById('modal-def').textContent = f.definition;
    document.getElementById('modal-prop').textContent = f.properties;
    document.getElementById('math-box').innerHTML = `\\[ ${f.formula} \\]`;
    
    if (isProto) {
        document.getElementById('tab-def').classList.add('active');
        document.getElementById('tab-def').style.display = 'block';
    } else {
        document.getElementById('tab-def').classList.remove('active');
        document.getElementById('tab-def').style.display = 'none';
        switchTab('eqn');
    }
    
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-trigger').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabId));
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === `tab-${tabId}`);
        panel.style.display = panel.id === `tab-${tabId}` ? 'block' : 'none';
    });
}

// --- EVENTS ---
backBtn.onclick = goBack;
subTabs.forEach(tab => {
    tab.onclick = () => {
        subTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentSubject = tab.dataset.subject;
        render();
    };
});

document.querySelectorAll('.tab-trigger').forEach(btn => {
    btn.onclick = () => switchTab(btn.dataset.tab);
});

mainSearch.oninput = (e) => {
    currentSearch = e.target.value;
    render();
};

document.querySelector('.modal-close').onclick = () => {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target == modalOverlay) {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

render();
