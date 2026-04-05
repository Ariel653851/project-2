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
    { 
        id: "fact-dilut", chapterId: "c-mol-1", title: "8. Facteur de dilution (F)", 
        formula: "F = \\frac{C_{mère}}{C_{fille}} = \\frac{V_{fille}}{V_{mère}}", 
        definition: "Nombre de fois qu'une solution a été diluée.",
        properties: "F est toujours supérieur à 1 (sans unité).",
        units: "Cm [Mère] (mol/L), Cf [Fille] (mol/L), Vf [Fille] (L), Vm [Mère] (L)"
    },

    // --- OPTIQUE & COULEURS ---
    { 
        id: "opt-conj", chapterId: "p-optique-1", title: "Relation de conjugaison", 
        formula: "\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{\\overline{OF'}}", 
        definition: "Lien entre la position de l'objet A, de l'image A' et du foyer image F'.",
        properties: "Utiliser des valeurs algébriques (signes).",
        units: "OA [Pos. objet] (m), OA' [Pos. image] (m), OF' [Distance focale] (m)"
    },
    { 
        id: "opt-verg", chapterId: "p-optique-1", title: "Vergence de la lentille", 
        formula: "\\delta = \\frac{1}{\\overline{OF'}}", 
        definition: "Capacité d'une lentille à faire converger ou diverger la lumière.",
        properties: "OF' doit être en mètres obligatoirement.",
        units: "δ [Vergence] (δ/dioptries), OF' [Distance focale] (m)"
    },
    { 
        id: "opt-gamma", chapterId: "p-optique-1", title: "Gamma", 
        formula: "\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}", 
        definition: "Le grandissement γ quantifie le rapport de taille et le sens de l'image par rapport à l'objet.",
        properties: "Gamma est sans unité.",
        units: "A'B' [Taille image], AB [Taille objet], OA' [Pos. image], OA [Pos. objet]"
    },
    { 
        id: "opt-caract", chapterId: "p-optique-1", title: "Caractéristiques de l'image", 
        formula: "\\begin{array}{l} \\text{- Si } \\gamma < 0 : \\text{ image renversée} \\\\ \\text{- Si } \\gamma > 0 : \\text{ image droite} \\\\ \\text{- Si } |\\gamma| > 1 : \\text{ image agrandie} \\\\ \\text{- Si } |\\gamma| < 1 : \\text{ image rétrécie} \\end{array}", 
        definition: "Ces 4 critères permettent de conclure sur la nature de l'image après avoir calculé la valeur de γ.",
        properties: "Analyse de l'image par rapport à l'objet.",
        units: ""
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
    { 
        id: "redox-demi", chapterId: "c-redox-1", title: "Demi-équation (Exemple)", 
        formula: "\\begin{array}{l} \\text{Demi-équation complète :} \\\\ MnO_4^- + 8H^+ + 5e^- = Mn^{2+} + 4H_2O \\\\ \\downarrow \\\\ \\text{Forme simplifiée (seulement redox) :} \\\\ MnO_4^- + 5e^- \\rightarrow Mn^{2+} \\end{array}", 
        definition: "La demi-équation montre le gain ou la perte d'électrons pour un seul couple.",
        properties: "L'oxydant est toujours du côté des électrons (e-).",
        units: "MnO4- [Oxydant], Mn2+ [Réducteur]"
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

    // --- ONDES MÉCANIQUES ---
    { 
        id: "onde-freq", chapterId: "p-ondes-1", title: "Fréquence (f)", 
        formula: "f = \\frac{1}{T}", 
        definition: "La fréquence représente le nombre de répétitions d'un phénomène périodique par seconde.",
        properties: "La fréquence correspond à l'inverse de la période.",
        units: "f [Fréquence] (Hz), T [Période] (s)"
    },
    { 
        id: "onde-per", chapterId: "p-ondes-1", title: "Période (T)", 
        formula: "T = \\frac{1}{f}", 
        definition: "La période est la plus petite durée au bout de laquelle le phénomène se répète identique à lui-même.",
        properties: "C'est la durée d'un motif élémentaire. Elle s'exprime en secondes dans le système international.",
        units: "T [Période] (s), f [Fréquence] (Hz)"
    },
    { 
        id: "onde-lambda-t", chapterId: "p-ondes-1", title: "Longueur d'onde avec Période (λ)", 
        formula: "\\lambda = v \\cdot T", 
        definition: "La longueur d'onde est la distance parcourue par l'onde pendant une période temporelle T.",
        properties: "Relation utilisant la période T. v (ou c) est la célérité de l'onde.",
        units: "λ [Longueur d'onde] (m), v [Célérité] (m/s), T [Période] (s)"
    },
    { 
        id: "onde-lambda-f", chapterId: "p-ondes-1", title: "Longueur d'onde avec Fréquence (λ)", 
        formula: "\\lambda = \\frac{v}{f}", 
        definition: "La longueur d'onde spatiale est proportionnelle à la célérité et inversement proportionnelle à la fréquence temporelle.",
        properties: "Relation utilisant la fréquence f. v (ou c) est la célérité de l'onde.",
        units: "λ [Longueur d'onde] (m), v [Célérité] (m/s), f [Fréquence] (Hz)"
    },
    { 
        id: "onde-retard", chapterId: "p-ondes-1", title: "Retard de l'onde (\\(\\tau\\))", 
        formula: "\\tau = \\frac{MM'}{v}", 
        definition: "Le retard (noté avec la lettre grecque tau « τ », à ne pas confondre avec la période T) est la durée que met une onde pour parcourir la distance séparant deux points M et M'.",
        properties: "L'onde au point M' reproduit le mouvement du point M avec un décalage temporel égal au retard τ.",
        units: "\\tau [Retard] (s), MM' [Distance M à M'] (m), v [Célérité] (m/s)"
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
    },
    { 
        id: "proto-titrage", chapterId: "proto-chimie-1", title: "Protocole : Titrage colorimétrique", 
        formula: "", 
        definition: "1. On ajoute petit à petit la solution titrante dans la solution titrée.\n2. Dès la première goutte versée, la réaction chimique se produit immédiatement.\n3. Tant que l'équivalence n'est pas atteinte, le réactif titrant est consommé immédiatement.\n4. À l'équivalence, le réactif titré est lui aussi totalement consommé : on observe un changement de couleur brusque.\n\nVolume à l'équivalence : Veq",
        properties: "", units: ""
    }
];

// --- APP LOGIC (Navigation, Search, Modals) ---

// --- APP LOGIC (Navigation, Search, Modals) ---

let currentLevel = '1ere'; // Default
let currentSubject = 'all';
let currentChapterId = null;
let currentSearch = '';
let currentView = 'home';
let currentNav = 'formulas'; // NEW: 'formulas' or 'definitions'

function render() {
    const homeView = document.getElementById('home-view');
    const appView = document.getElementById('app-view');
    const subjTabs = document.getElementById('subject-tabs-container');
    const chapTabs = document.getElementById('chapter-nav-tabs');
    const backBtn = document.getElementById('back-btn');
    const viewTitle = document.getElementById('view-title');
    const levelLabel = document.getElementById('level-label');

    // Reset visibility
    homeView.classList.add('hidden');
    appView.classList.add('hidden');
    subjTabs.classList.add('hidden');
    chapTabs.classList.add('hidden');
    backBtn.classList.add('hidden');

    if (currentSearch.length > 0) {
        appView.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Résultats";
        renderSearch();
    } else if (currentView === 'home') {
        homeView.classList.remove('hidden');
    } else if (currentView === 'chapters') {
        appView.classList.remove('hidden');
        subjTabs.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Chapitres";
        levelLabel.textContent = currentLevel === '1ere' ? 'Première' : 'Seconde';
        renderChapters();
    } else if (currentView === 'formulas') {
        appView.classList.remove('hidden');
        const chapter = chapters.find(c => c.id === currentChapterId);
        
        // Show navigation tabs ONLY IF NOT A PROTOCOL
        const isProtoChapter = chapter && chapter.subject === 'protocoles';
        if (!isProtoChapter) {
            chapTabs.classList.remove('hidden');
        }

        backBtn.classList.remove('hidden');
        viewTitle.textContent = chapter ? chapter.title : "Détails";
        
        if (currentNav === 'formulas' || isProtoChapter) renderFormulas();
        else renderDefinitions();
    }

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
        div.onclick = () => { 
            currentChapterId = c.id; 
            currentView = 'formulas'; 
            currentNav = 'formulas'; // Reset to formulas when entering
            updateNavTabs();
            render(); 
        };
        grid.appendChild(div);
    });
}

function renderFormulas() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    formulas.filter(f => f.chapterId === currentChapterId).forEach(f => grid.appendChild(createCard(f)));
}

function renderDefinitions() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    
    // Custom definitions based on chapter
    let defs = [];
    if (currentChapterId === 'c-mol-1') {
        defs = [
            { t: "La Mole", d: "Unité de quantité de matière (symbole : mol) contenant exactement 6,022 x 10^23 entités élémentaires." },
            { t: "Masse Molaire (M)", d: "Masse d'une mole d'une substance donnée. Elle s'exprime en g/mol." },
            { t: "Concentration Molaire (C)", d: "Quantité de soluté (en mol) présente dans un litre de solution." },
            { t: "Dilution", d: "Opération consistant à ajouter du solvant à une solution pour en diminuer la concentration." }
        ];
    } else if (currentChapterId === 'c-redox-1') {
        defs = [
            { t: "Oxydant", d: "Espèce chimique capable de capter un ou plusieurs électrons." },
            { t: "Réducteur", d: "Espèce chimique capable de céder un ou plusieurs électrons." },
            { t: "Oxydation", d: "Réaction au cours de laquelle une espèce chimique perd des électrons (le réducteur est oxydé)." },
            { t: "Réduction", d: "Réaction au cours de laquelle une espèce chimique gagne des électrons (l'oxydant est réduit)." },
            { t: "Couple Oxydant / Réducteur", d: "Ensemble formé par l'oxydant et le réducteur qui passent de l'un à l'autre par gain ou perte d'électrons. On le note Ox / Red." }
        ];
    } else if (currentChapterId === 'p-optique-1') {
        defs = [
            { t: "Lentille Convergente", d: "Système optique qui dévie les rayons lumineux parallèles vers un point unique appelé foyer image." },
            { t: "Distance Focale (f')", d: "Distance entre le centre optique O de la lentille et le foyer image F'. Elle s'exprime en mètres." },
            { t: "Vergence", d: "Grandeur notée δ qui caractérise la capacité d'une lentille à faire converger la lumière. Elle est l'inverse de la distance focale." },
            { t: "Grandissement (γ)", d: "Rapport entre la taille de l'image et la taille de l'objet." }
        ];
    } else if (currentChapterId === 'p-ondes-1') {
        defs = [
            { t: "Onde Mécanique", d: "Phénomène de propagation d'une perturbation dans un milieu matériel sans transport de matière mais avec transport d'énergie." },
            { t: "Période (T)", d: "Plus petite durée au bout de laquelle le phénomène se répète à l'identique." },
            { t: "Fréquence (f)", d: "Nombre de motifs élémentaires (périodes) par seconde. f = 1/T." },
            { t: "Longueur d'onde (λ)", d: "Distance parcourue par l'onde pendant une période T." },
            { t: "Retard (τ)", d: "Durée mise par une onde pour aller d'un point M à un point M'." }
        ];
    } else if (currentChapterId === 'p-energie-1') {
        defs = [
            { t: "Énergie Cinétique (Ec)", d: "Énergie que possède un corps en raison de sa vitesse." },
            { t: "Énergie Potentielle (Ep)", d: "Énergie que possède un corps en fonction de sa position (ici son altitude)." },
            { t: "Énergie Mécanique (Em)", d: "Somme de l'énergie cinétique et de toutes les énergies potentielles du système." }
        ];
    } else if (currentChapterId === 'p-elec-1') {
        defs = [
            { t: "Intensité (I)", d: "Débit de charges électriques dans un circuit. Elle s'exprime en Ampères (A)." },
            { t: "Tension (U)", d: "Différence de potentiel entre deux points d'un circuit. Elle s'exprime en Volts (V)." },
            { t: "Effet Joule", d: "Dégagement de chaleur lors du passage d'un courant électrique dans un conducteur." }
        ];
    } else {
        defs = [{ t: "À venir", d: "Les définitions pour ce chapitre arrivent bientôt ! Ariel les ajoutera prochainement." }];
    }

    defs.forEach(def => {
        const div = document.createElement('div');
        div.className = 'formula-card definitions-style';
        div.innerHTML = `
            <span class="card-tag chemistry">DÉFINITION</span>
            <h3>${def.t}</h3>
            <p style="margin-top:1rem; line-height:1.6; color:var(--text-muted);">${def.d}</p>
        `;
        grid.appendChild(div);
    });
}

function renderSearch() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    const results = formulas.filter(f => f.title.toLowerCase().includes(currentSearch.toLowerCase()));
    if (results.length === 0) { 
        document.getElementById('no-results').classList.remove('hidden'); 
        return; 
    }
    results.forEach(f => grid.appendChild(createCard(f)));
}

function updateNavTabs() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.nav === currentNav);
    });
}

function createCard(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';
    const div = document.createElement('div');
    div.className = `formula-card ${chapter.subject}`;
    div.dataset.id = f.id;
    
    const pillsHtml = f.units && !isProto ? f.units.split(',').map(u => {
        const txt = u.trim();
        const sym = txt.includes('[') ? txt.split('[')[0].trim() : (txt.includes('(') ? txt.split('(')[0].trim() : txt);
        const unit = txt.includes('(') ? txt.split('(')[1].split(')')[0] : '';
        if (!sym && !unit) return '';
        return `<div class="unit-pill"><span class="pill-sym">${sym}</span><span class="pill-arrow">↑</span><span class="pill-unit">${unit}</span></div>`;
    }).join('') : "";

    div.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">
            ${isProto ? `
                <div class="proto-icon-wrapper">
                    <i data-lucide="beaker" class="proto-svg"></i>
                </div>
            ` : `\\[ ${f.formula} \\]`}
        </div>
        <div class="bottom-legend-area">${isProto ? "" : pillsHtml}</div>
        <div class="card-footer"><span>${isProto ? 'Voir le protocole' : 'Voir détails'}</span><i data-lucide="arrow-right"></i></div>
    `;
    div.onclick = () => openModal(f);
    return div;
}

function openModal(f) {
    const chapter = chapters.find(c => c.id === f.chapterId);
    const isProto = chapter.subject === 'protocoles';

    document.querySelector('.modal-tabs').style.display = isProto ? 'none' : 'flex';
    document.getElementById('tab-eqn').style.display = isProto ? 'none' : 'block';
    document.querySelector('.tab-trigger[data-tab="def"]').style.display = isProto ? 'none' : 'block';

    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-tag').textContent = `${chapter.subject.toUpperCase()} • ${chapter.level}`;
    document.getElementById('modal-tag').className = `modal-badge ${chapter.subject}`;
    document.getElementById('modal-units').textContent = f.units;
    document.getElementById('modal-def').textContent = f.definition;
    document.getElementById('modal-prop').textContent = f.properties;
    document.getElementById('math-box').innerHTML = f.formula ? `\\[ ${f.formula} \\]` : "";
    
    if (isProto) {
        switchTab('def');
    } else {
        switchTab('eqn');
    }
    
    document.getElementById('modal-overlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function switchTab(id) {
    document.querySelectorAll('.tab-trigger').forEach(b => b.classList.toggle('active', b.dataset.tab === id));
    document.querySelectorAll('.tab-panel').forEach(p => { 
        const isActive = p.id === `tab-${id}`;
        p.classList.toggle('active', isActive); 
        p.style.display = isActive ? 'block' : 'none'; 
    });
}

function selectLevel(lvl) { currentLevel = lvl; currentView = 'chapters'; render(); }
function goBack() { 
    if (currentSearch) { 
        currentSearch = ''; 
        document.getElementById('main-search').value = ''; 
    } else if (currentView === 'formulas') { 
        currentView = 'chapters'; 
    } else { 
        currentView = 'home'; 
    } 
    render(); 
}

// Event Listeners
document.getElementById('back-btn').onclick = goBack;
document.querySelectorAll('.sub-tab').forEach(t => t.onclick = () => { 
    document.querySelectorAll('.sub-tab').forEach(x => x.classList.remove('active')); 
    t.classList.add('active'); 
    currentSubject = t.dataset.subject; 
    render(); 
});
document.querySelectorAll('.tab-trigger').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
document.querySelectorAll('.nav-tab').forEach(t => t.onclick = () => {
    currentNav = t.dataset.nav;
    updateNavTabs();
    render();
});
document.getElementById('main-search').oninput = (e) => { currentSearch = e.target.value; render(); };
document.querySelector('.modal-close').onclick = () => {
    document.getElementById('modal-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Start
render();
document.getElementById('main-search').oninput = (e) => { currentSearch = e.target.value; render(); };
document.querySelector('.modal-close').onclick = () => { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; };
window.onclick = (e) => { if (e.target === document.getElementById('modal-overlay')) { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; } };

document.getElementById('count-num').textContent = formulas.length;
render();
