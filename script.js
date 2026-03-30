/**
 * MAIMOLAB V3 - SCRIPT.JS (v1.3)
 * Portail Navigation with Protocol-specific UI
 */

// --- DATA: CHAPTERS ---
const chapters = [
    { id: "c-mol-1", title: "La Mole & Quantités de Matière", subject: "chimie", level: "1ere" },
    { id: "c-redox-1", title: "Oxydoréduction & Tableau d'avancement", subject: "chimie", level: "1ere" },
    { id: "c-dosage-1", title: "Dosages & Titrages", subject: "chimie", level: "1ere" },
    { id: "c-lewis-1", title: "Schéma de Lewis, Polarité & Nomenclature", subject: "chimie", level: "1ere" },
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-inter-1", title: "Interactions Fondamentales", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },
    { id: "proto-chimie-1", title: "Protocoles de Chimie", subject: "protocoles", level: "1ere" }
];

// --- DATA: FORMULAS & PROTOCOLS ---
const formulas = [
    // --- MOLE & QTÉ DE MATIÈRE ---
    { 
        id: "n-m-m", chapterId: "c-mol-1", title: "1. Quantité de matière (Masse)", 
        formula: "n = \\frac{m}{M}", 
        definition: "Relation entre la mole, la masse de l'échantillon et la masse molaire.",
        properties: "n en mol, m en g, M en g/mol.",
        units: "n [Qté matière] (mol), m [Masse] (g), M [Masse molaire] (g/mol)"
    },
    { 
        id: "d-rho-rho", chapterId: "c-mol-1", title: "2. Densité (d)", 
        formula: "d = \\frac{\\rho}{\\rho_{eau}}", 
        definition: "Rapport de la masse volumique du corps par celle de l'eau.",
        properties: "Grandeur sans unité. Pour l'eau, rho_eau = 1000 g/L.",
        units: "d [Densité], ρ [Masse vol.] (kg/L)"
    },
    { 
        id: "rho-m-v", chapterId: "c-mol-1", title: "3. Masse volumique (ρ)", 
        formula: "\\rho = \\frac{m}{V}", 
        definition: "Masse de l'unité de volume d'un corps donné.",
        properties: "Relie masse et volume d'un corps pur.",
        units: "ρ [Masse vol.] (g/L), m [Masse] (g), V [Volume] (L)"
    },
    { 
        id: "c-cm-m", chapterId: "c-mol-1", title: "4. Lien C et Cm", 
        formula: "C = \\frac{C_m}{M}", 
        definition: "Relation permettant de convertir une concentration massique en concentration molaire.",
        properties: "M est la masse molaire du soluté.",
        units: "C (mol/L), Cm (g/L), M (g/mol)"
    },
    { 
        id: "n-cv", chapterId: "c-mol-1", title: "5. Quantité de matière (Solution)", 
        formula: "n = C \\times V", 
        definition: "Calcul des moles dans un volume V de solution de concentration molaire C.",
        properties: "Valable pour les solutés dissous.",
        units: "n [Qté matière] (mol), C [Conc. molaire] (mol/L), V [Volume] (L)"
    },
    { 
        id: "cm-m-v", chapterId: "c-mol-1", title: "6. Concentration en masse (Cm)", 
        formula: "C_m = \\frac{m}{V}", 
        definition: "Rapport de la masse du soluté par le volume total de la solution.",
        properties: "Relation: Cm = C x M.",
        units: "Cm [Conc. masse] (g/L), m [Masse sol.] (g), V [Volume] (L)"
    },
    { 
        id: "v-n-vm", chapterId: "c-mol-1", title: "7. Volume molaire (Gaz)", 
        formula: "n = \\frac{V}{V_m}", 
        definition: "⚠️ VALABLE UNIQUEMENT POUR LES GAZ !",
        properties: "Vm ≈ 24 L/mol.",
        units: "n [Qté matière] (mol), V [Volume] (L), Vm [Vol. mol] (L/mol)"
    },

    // --- DOSAGES & TITRAGES ---
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

    // --- OXYDORÉDUCTION ---
    { 
        id: "redox-gen", chapterId: "c-redox-1", title: "Équation d'oxydoréduction", 
        formula: "Ox_1 + Red_2 \\rightarrow Red_1 + Ox_2", 
        definition: "Transfert d'électrons entre deux couples redox.",
        properties: "Ox capte e-, Red cède e-.",
        units: "Ox [Oxydant], Red [Réducteur]"
    },

    // --- ÉNERGIE MÉCANIQUE ---
    { 
        id: "ec-1-v3", chapterId: "p-energie-1", title: "Énergie Cinétique", 
        formula: "E_c = \\frac{1}{2} m v^2", 
        definition: "Énergie liée au mouvement d'un système de masse m et de vitesse v.",
        properties: "Toujours positive ou nulle. m en kg, v en m/s.",
        units: "Ec [Joules] (J)"
    },
    { 
        id: "ep-1-v3", chapterId: "p-energie-1", title: "Énergie Potentielle (Pesanteur)", 
        formula: "E_p = m \\cdot g \\cdot z", 
        definition: "Énergie liée à l'altitude z d'un système de masse m.",
        properties: "g = 9.81 N/kg sur Terre.",
        units: "Ep [Joules] (J), z [Altitude] (m)"
    },
    { 
        id: "em-1-v3", chapterId: "p-energie-1", title: "Énergie Mécanique", 
        formula: "E_m = E_c + E_p", 
        definition: "Somme de l'énergie cinétique et de l'énergie potentielle.",
        properties: "Se conserve si les frottements sont négligés.",
        units: "Em [Joules] (J)"
    },

    // --- PROTOCOLES ---
    { 
        id: "pe-etalon-1", chapterId: "proto-chimie-1", title: "Protocole : Dosage par étalonnage", 
        formula: "", 
        definition: "1. Réglage du spectrophotomètre (Le Blanc).\n2. Déterminer λmax (spectre d'absorption).\n3. Préparer des solutions étalons à partir d'une solution mère.\n4. Mesurer l'absorbance de chaque étalon.\n5. Tracer la courbe d'étalonnage A=f(c).\n6. Mesurer l'absorbance de l'inconnue et déduire sa concentration via la courbe.\n\nLoi : A = k × C",
        properties: "", units: ""
    },
    { 
        id: "proto-dissol", chapterId: "proto-chimie-1", title: "Protocole : Dissolution", 
        formula: "", 
        definition: "BUT : Préparer une solution à partir d'un solide.\n\n1. Placer la coupelle vide sur la balance et tarer.\n2. Peser exactement la masse m de solide.\n3. Introduire le solide dans la fiole jaugée (entonnoir).\n4. Rincer la coupelle et l'entonnoir (eau distillée).\n5. Remplir la fiole aux 2/3 avec de l'eau distillée.\n6. Boucher et agiter jusqu'à dissolution.\n7. Compléter au trait de jauge.\n8. Agiter pour homogénéiser.",
        properties: "", units: ""
    },
    { 
        id: "proto-dilut", chapterId: "proto-chimie-1", title: "Protocole : Dilution", 
        formula: "", 
        definition: "BUT : Préparer une solution moins concentrée.\n\n1. Verser la solution mère dans un bécher.\n2. Prélever V_mère avec une pipette jaugée.\n3. Verser dans la fiole jaugée (V_fille).\n4. Compléter avec de l'eau distillée (trait de jauge).\n5. Boucher et agiter pour homogénéiser.\n\nF = V_fille / V_mère = C_mère / C_fille",
        properties: "", units: ""
    }
];

// --- APP LOGIC (Navigation, Search, Modals) ---

let currentLevel = null;
let currentSubject = 'all';
let currentChapterId = null;
let currentSearch = '';
let currentView = 'home';

function render() {
    document.getElementById('home-view').classList.toggle('hidden', currentView !== 'home' && currentSearch.length === 0);
    document.getElementById('app-view').classList.toggle('hidden', currentView === 'home' && currentSearch.length === 0);
    document.getElementById('subject-tabs').classList.toggle('hidden', currentView !== 'chapters');
    document.getElementById('back-btn').classList.toggle('hidden', currentView === 'home');
    document.getElementById('no-results').classList.add('hidden');

    if (currentSearch.length > 0) { renderSearch(); }
    else if (currentView === 'chapters') { renderChapters(); }
    else if (currentView === 'formulas') { renderFormulas(); }

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function renderChapters() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    let filtered = chapters.filter(c => c.level === currentLevel);
    if (currentSubject !== 'all') filtered = filtered.filter(c => c.subject === currentSubject);
    filtered.forEach(c => {
        const div = document.createElement('div');
        div.className = 'chapter-card';
        div.innerHTML = `<div class="subj-dot ${c.subject}"></div><div class="card-info">${c.subject.toUpperCase()}</div><h3>${c.title}</h3>`;
        div.onclick = () => { currentChapterId = c.id; currentView = 'formulas'; render(); };
        grid.appendChild(div);
    });
}

function renderFormulas() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    formulas.filter(f => f.chapterId === currentChapterId).forEach(f => grid.appendChild(createCard(f)));
}

function renderSearch() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    const results = formulas.filter(f => f.title.toLowerCase().includes(currentSearch.toLowerCase()));
    if (results.length === 0) { document.getElementById('no-results').classList.remove('hidden'); return; }
    results.forEach(f => grid.appendChild(createCard(f)));
}

function createCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';
    const div = document.createElement('div');
    div.className = `formula-card ${chapter.subject}`;
    
    // Recovery of pills logic (V1.5 Robust Parser)
    const pillsHtml = f.units && !isProto ? f.units.split(',').map(u => {
        const txt = u.trim();
        const sym = txt.includes('[') ? txt.split('[')[0].trim() : (txt.includes('(') ? txt.split('(')[0].trim() : txt);
        const unit = txt.includes('(') ? txt.split('(')[1].split(')')[0] : '';
        if (!sym && !unit) return '';
        return `
            <div class="unit-pill">
                <span class="pill-sym">${sym}</span>
                <span class="pill-arrow">↑</span>
                <span class="pill-unit">${unit}</span>
            </div>
        `;
    }).join('') : "";

    div.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">${isProto ? '<i data-lucide="test-tube-2" style="width:40px;opacity:0.3"></i>' : `\\[ ${f.formula} \\]`}</div>
        <div class="bottom-legend-area">${isProto ? "" : pillsHtml}</div>
        <div class="card-footer"><span>${isProto ? 'Voir le protocole' : 'Voir définitions'}</span><i data-lucide="arrow-right"></i></div>
    `;
    div.onclick = () => openModal(f);
    return div;
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
    document.getElementById('tab-def').classList.toggle('active', isProto);
    document.getElementById('tab-def').style.display = isProto ? 'block' : 'none';
    if (!isProto) switchTab('eqn');
    document.getElementById('modal-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function switchTab(id) {
    document.querySelectorAll('.tab-trigger').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    document.querySelectorAll('.tab-panel').forEach(p => { p.classList.toggle('active', p.id === `tab-${id}`); p.style.display = (p.id === `tab-${id}` ? 'block' : 'none'); });
}

function selectLevel(lvl) { currentLevel = lvl; currentView = 'chapters'; render(); }
function goBack() { if (currentSearch) { currentSearch = ''; document.getElementById('main-search').value = ''; } else if (currentView === 'formulas') { currentView = 'chapters'; } else { currentView = 'home'; } render(); }

document.getElementById('back-btn').onclick = goBack;
document.querySelectorAll('.sub-tab').forEach(t => t.onclick = () => { document.querySelectorAll('.sub-tab').forEach(x => x.classList.remove('active')); t.classList.add('active'); currentSubject = t.dataset.subject; render(); });
document.querySelectorAll('.tab-trigger').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
document.getElementById('main-search').oninput = (e) => { currentSearch = e.target.value; render(); };
document.querySelector('.modal-close').onclick = () => { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; };
window.onclick = (e) => { if (e.target === document.getElementById('modal-overlay')) { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; } };

document.getElementById('count-num').textContent = formulas.length;
render();
