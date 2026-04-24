/**
 * MAIMOLAB V3 - SCRIPT.JS (v1.3)
 * Portail Navigation with Protocol-specific UI
 */

// --- DATA: CHAPTERS ---
const chapters = [
    { id: "c-mol-1", title: "La Mole & Quantités de Matière", subject: "chimie", level: "1ere" },
    { id: "c-redox-1", title: "Oxydoréduction & Tableau d'avancement", subject: "chimie", level: "1ere" },
    { id: "c-dosage-1", title: "Dosages & Titrages", subject: "chimie", level: "1ere" },
    { id: "c-lewis-1", title: "Schéma de Lewis & Polarité", subject: "chimie", level: "1ere", src: "assets/vsepr_table_colored.png" },
    { id: "c-nom-1", title: "Nomenclature", subject: "chimie", level: "1ere", type: "image", src: "assets/nomenclature_final.png" },
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-inter-1", title: "Interactions Fondamentales", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },
    { id: "proto-chimie-1", title: "Protocoles de Chimie", subject: "protocoles", level: "1ere" },
    { id: "term-empty", title: "À venir...", subject: "chimie", level: "term" }
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
        id: "c-nv", chapterId: "c-mol-1", title: "5. Concentration molaire", 
        formula: "C = \\frac{n}{V}", 
        definition: "Relation permettant de calculer la concentration molaire d'une solution.",
        properties: "Valable pour les solutés dissous.",
        units: "C [Conc. molaire] (mol/L), n [Qté matière] (mol), V [Volume] (L)"
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
        definition: "L'équivalence est le moment où les réactifs ont été introduits dans les proportions stœchiométriques.",
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

    // --- SCHÉMA DE LEWIS ---
    { 
        id: "lewis-polar-1", chapterId: "c-lewis-1", title: "Liaison Polarisée", 
        formula: `<div style="display:flex; flex-direction:column; gap:0.8rem; padding: 0.5rem 0; width:100%;">
            <div style="display:flex; flex-direction:column; align-items:center; background:#f0fdf4; border: 1px solid #bbf7d0; padding: 0.8rem; border-radius: 12px; text-align:center;">
                <span style="font-size:1.2rem; font-weight:700; font-family:serif; color:#166534; margin-bottom:0.3rem;">|χ<sub>A</sub> - χ<sub>B</sub>| ≥ 0,4</span>
                <span style="color:#15803d; font-weight:800; font-size:0.8rem;">POLARISÉE ✓</span>
            </div>
            <div style="display:flex; flex-direction:column; align-items:center; background:#fef2f2; border: 1px solid #fecaca; padding: 0.8rem; border-radius: 12px; text-align:center;">
                <span style="font-size:1.2rem; font-weight:700; font-family:serif; color:#991b1b; margin-bottom:0.3rem;">|χ<sub>A</sub> - χ<sub>B</sub>| &lt; 0,4</span>
                <span style="color:#dc2626; font-weight:800; font-size:0.8rem;">APOLAIRE ✗</span>
            </div>
        </div>`,
        definition: "Une liaison covalente est polarisée si la différence d'électronégativité entre les deux atomes liés est supérieure ou égale à 0,4.",
        properties: "|χA − χB| < 0,4 → liaison apolaire | |χA − χB| ≥ 0,4 → liaison polarisée | |χA − χB| ≥ 1,7 → liaison ionique",
        units: "χA [Électronégativité de A], χB [Électronégativité de B]"
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
        definition: "La fréquence est le nombre de fois que le phénomène se répète en une seconde.",
        properties: "La fréquence correspond à l'inverse de la période.",
        units: "f [Fréquence] (Hz), T [Période] (s)"
    },
    { 
        id: "onde-per", chapterId: "p-ondes-1", title: "Période (T)", 
        formula: "T = \\frac{1}{f}", 
        definition: "La période temporelle correspond au plus petit intervalle de temps au cours duquel le phénomène se répète identique à lui-même.",
        properties: "C'est la durée d'un motif élémentaire. Elle s'exprime en secondes dans le système international.",
        units: "T [Période] (s), f [Fréquence] (Hz)"
    },
    { 
        id: "onde-lambda-t", chapterId: "p-ondes-1", title: "Longueur d'onde avec Période (λ)", 
        formula: "\\lambda = v \\cdot T", 
        definition: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase",
        properties: "Relation utilisant la période T. v (ou c) est la célérité de l'onde.",
        units: "λ [Longueur d'onde] (m), v [Célérité] (m/s), T [Période] (s)"
    },
    { 
        id: "onde-lambda-f", chapterId: "p-ondes-1", title: "Longueur d'onde avec Fréquence (λ)", 
        formula: "\\lambda = \\frac{v}{f}", 
        definition: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase",
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
        formula: "", img: "assets/proto_etalonnage.png", 
        definition: "1. Réglage du spectrophotomètre (Le Blanc).\n2. Déterminer λmax (spectre d'absorption).\n3. Préparer des solutions étalons à partir d'une solution mère.\n4. Mesurer l'absorbance de chaque étalon.\n5. Tracer la courbe d'étalonnage A=f(c).\n6. Mesurer l'absorbance de l'inconnue et déduire sa concentration via la courbe.\n\nLoi : A = k × C",
        properties: "", units: ""
    },
    { 
        id: "proto-dissol", chapterId: "proto-chimie-1", title: "Protocole : Dissolution", 
        formula: "", img: "assets/proto_dissolution.png", 
        definition: "BUT : Préparer une solution à partir d'un solide.\n\n1. Placer la coupelle vide sur la balance et tarer.\n2. Peser exactement la masse m de solide.\n3. Introduire le solide dans la fiole jaugée (entonnoir).\n4. Rincer la coupelle et l'entonnoir (eau distillée).\n5. Remplir la fiole aux 2/3 avec de l'eau distillée.\n6. Boucher et agiter jusqu'à dissolution.\n7. Compléter au trait de jauge.\n8. Agiter pour homogénéiser.",
        properties: "", units: ""
    },
    { 
        id: "proto-dilut", chapterId: "proto-chimie-1", title: "Protocole : Dilution", 
        formula: "", img: "assets/proto_dilution.png", 
        definition: "BUT : Préparer une solution moins concentrée.\n\n1. Verser la solution mère dans un bécher.\n2. Prélever V_mère avec une pipette jaugée.\n3. Verser dans la fiole jaugée (V_fille).\n4. Compléter avec de l'eau distillée (trait de jauge).\n5. Boucher et agiter pour homogénéiser.\n\nF = V_fille / V_mère = C_mère / C_fille",
        properties: "", units: ""
    },
    { 
        id: "proto-titrage", chapterId: "proto-chimie-1", title: "Protocole : Titrage colorimétrique", 
        formula: "", img: "assets/proto_titrage.png", 
        definition: "1. On ajoute petit à petit la solution titrante (dans la burette graduée) dans la solution titrée (dans l'Erlenmeyer).\n2. Dès la première goutte versée, la réaction chimique se produit immédiatement.\n3. Tant que l'équivalence n'est pas atteinte, le réactif titrant est consommé immédiatement.\n4. À l'équivalence, le réactif titré est lui aussi totalement consommé : on observe un changement de couleur brusque.\n\nLe montage nécessite une potence (pour la burette) et un agitateur magnétique avec barreau aimanté (pour homogénéiser).",
        properties: "Volume à l'équivalence : Veq", units: ""
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
    document.getElementById('no-results').classList.add('hidden');

    if (currentSearch.length > 0) {
        appView.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Résultats";
        renderSearch();
    } else if (currentView === 'home') {
        homeView.classList.remove('hidden');
        document.getElementById('no-results').classList.remove('hidden'); // Re-show on home as requested
    } else if (currentView === 'chapters') {
        appView.classList.remove('hidden');
        subjTabs.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        viewTitle.textContent = "Chapitres";
        levelLabel.textContent = currentLevel === '1ere' ? 'Première' : (currentLevel === 'term' ? 'Terminale' : 'Seconde');
        renderChapters();
    } else if (currentView === 'formulas') {
        appView.classList.remove('hidden');
        const chapter = chapters.find(c => c.id === currentChapterId);
        
        // Show navigation tabs ONLY IF NOT A PROTOCOL OR Nomenclature (full image chapters)
        const isProtoChapter = chapter && chapter.subject === 'protocoles';
        
        if (!isProtoChapter && currentChapterId !== 'c-nom-1') {
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
    if (filtered.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
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
    
    const chapter = chapters.find(c => c.id === currentChapterId);
    if (chapter && chapter.id === 'c-nom-1') {
        const imgDiv = document.createElement('div');
        imgDiv.className = "image-view-container";
        imgDiv.innerHTML = `
            <img src="${chapter.src}" alt="${chapter.title}" style="max-width:100%; border-radius: var(--radius); border: 1px solid var(--border); box-shadow: var(--shadow); background: white; padding: 1.5rem;">
            <p style="margin-top: 1.5rem; color: var(--text-muted); font-weight: 600;">Fiche récapitulative : Nomenclature (Groupes Alkyl -yl)</p>
        `;
        grid.appendChild(imgDiv);
        return;
    }
    
    // Header table if chapter has VSEPR src
    if (chapter && chapter.src && chapter.id !== 'c-nom-1') {
        const tableHeader = document.createElement('div');
        tableHeader.className = 'formula-card chimie';
        tableHeader.style.cursor = 'default';
        tableHeader.style.gridColumn = 'span 2'; // On utilise 2/4 (50%)
        tableHeader.innerHTML = `
            <span class="card-tag chimie">CHIMIE</span>
            <h3 style="margin-bottom: 0.75rem;">Tableau VSEPR</h3>
            <div style="overflow-x: auto; margin-top: 0.5rem;">
                <table style="width:100%; border-collapse:collapse; font-size:0.82rem; text-align:center;">
                    <thead>
                        <tr style="background: #dbeafe; border-bottom: 2px solid #bfdbfe;">
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">Total</th>
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">X</th>
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">E</th>
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">Formule</th>
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">Géométrie</th>
                            <th style="padding:5px 6px; font-weight:700; color:#1e40af; border: 1px solid #bfdbfe; white-space:nowrap;">Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style="padding:4px 6px; border:1px solid #edf2f7;">2</td><td style="padding:4px 6px; border:1px solid #edf2f7;">2</td><td style="padding:4px 6px; border:1px solid #edf2f7;">0</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>2</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Linéaire</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Linéaire</td></tr>
                        <tr style="background:#eff6ff;"><td style="padding:4px 6px; border:1px solid #edf2f7;">3</td><td style="padding:4px 6px; border:1px solid #edf2f7;">3</td><td style="padding:4px 6px; border:1px solid #edf2f7;">0</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>3</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Triangulaire</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Triangulaire</td></tr>
                        <tr><td style="padding:4px 6px; border:1px solid #edf2f7;">3</td><td style="padding:4px 6px; border:1px solid #edf2f7;">2</td><td style="padding:4px 6px; border:1px solid #edf2f7;">1</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>2</sub>E<sub>1</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Coudée en V</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Coudée</td></tr>
                        <tr style="background:#eff6ff;"><td style="padding:4px 6px; border:1px solid #edf2f7;">4</td><td style="padding:4px 6px; border:1px solid #edf2f7;">4</td><td style="padding:4px 6px; border:1px solid #edf2f7;">0</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>4</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Tétraédrique</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Tétraédrique</td></tr>
                        <tr><td style="padding:4px 6px; border:1px solid #edf2f7;">4</td><td style="padding:4px 6px; border:1px solid #edf2f7;">3</td><td style="padding:4px 6px; border:1px solid #edf2f7;">1</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>3</sub>E<sub>1</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Pyramide trig.</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Pyramide</td></tr>
                        <tr style="background:#eff6ff;"><td style="padding:4px 6px; border:1px solid #edf2f7;">4</td><td style="padding:4px 6px; border:1px solid #edf2f7;">2</td><td style="padding:4px 6px; border:1px solid #edf2f7;">2</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>2</sub>E<sub>2</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Coudée en V</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Coudée</td></tr>
                        <tr><td style="padding:4px 6px; border:1px solid #edf2f7;">5</td><td style="padding:4px 6px; border:1px solid #edf2f7;">5</td><td style="padding:4px 6px; border:1px solid #edf2f7;">0</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>5</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Bipyramide</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Bipyramide</td></tr>
                        <tr style="background:#eff6ff;"><td style="padding:4px 6px; border:1px solid #edf2f7;">5</td><td style="padding:4px 6px; border:1px solid #edf2f7;">6</td><td style="padding:4px 6px; border:1px solid #edf2f7;">0</td><td style="padding:4px 6px; border:1px solid #edf2f7;">AX<sub>6</sub></td><td style="padding:4px 6px; border:1px solid #edf2f7;">Octaédrique</td><td style="padding:4px 6px; border:1px solid #edf2f7; font-weight:600;">Octaèdre</td></tr>
                    </tbody>
                </table>
            </div>
        `;
        grid.appendChild(tableHeader);
    }
    
    const filteredFormulas = formulas.filter(f => f.chapterId === currentChapterId);
    if (filteredFormulas.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    filteredFormulas.forEach(f => {
        const card = createCard(f);
        if (f.id === 'lewis-polar-1') {
            card.style.gridColumn = "span 2"; 
        }
        grid.appendChild(card);
    });
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
            { t: "Couple Oxydant / Réducteur", d: "Ensemble formé par l'oxydant et le réducteur qui passent de l'un à l'autre par gain ou perte d'électrons. On le note Ox / Red." },
            { t: "Équation d'oxydo-réduction", d: "Une équation d'oxydo-réduction est une réaction au cours de laquelle le réducteur d'un couple cède des électrons à un oxydant d'un autre couple." }
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
            { t: "Onde Mécanique Progressive", d: "Une onde mécanique progressive est le phénomène de propagation d’une perturbation dans un milieu matériel sans transport de matière et avec transfert d’énergie." },
            { t: "Onde Sonore Périodique", d: "Une onde sonore périodique est le phénomène de propagation d’une succession de zones de compression-dilatation du milieu de propagation, créées par la vibration d’une source (haut-parleur, émetteur d’ultrasons) à la fréquence f." },
            { t: "Période (T)", d: "La période temporelle correspond au plus petit intervalle de temps au cours duquel le phénomène se répète identique à lui-même." },
            { t: "Fréquence (f)", d: "La fréquence est le nombre de fois que le phénomène se répète en une seconde." },
            { t: "Longueur d'onde (λ)", d: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase" },
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
    } else if (currentChapterId === 'c-dosage-1') {
        defs = [
            { t: "Dosage", d: "Action de déterminer la quantité de matière ou la concentration d'une espèce chimique dans une solution." },
            { t: "Titrage", d: "Dosage par une réaction chimique totale et rapide entre une espèce titrée et une espèce titrante." },
            { t: "Équivalence", d: "L'équivalence est le moment où les réactifs ont été introduits dans les proportions stœchiométriques." },
            { t: "Loi de Beer-Lambert", d: "L'absorbance A d'une solution est proportionnelle à sa concentration C. A = k x C." },
            { t: "Validité de Beer-Lambert", d: "La solution doit être diluée car la loi de Beer-Lambert n'est vérifiée que pour des concentrations inférieures à 1,0 x 10^-2 mol.L^-1." },
            { t: "Vérification de Beer-Lambert", d: "En observant la courbe obtenue, on constate que l'absorbance A est une fonction linéaire de C et il existe donc une relation de proportionnalité entre A et C, ce qui confirme que la loi de Beer-Lambert est vérifiée." },
            { t: "Choix de λ_max", d: "On choisit la longueur d'onde correspondant au maximum d'absorption car c'est celle où l'espèce absorbe le plus. D'après la loi de Beer-Lambert, cela maximise la différence d'absorbance entre deux solutions de concentrations différentes et rend la mesure plus sensible et plus précise." }
        ];
    } else if (currentChapterId === 'c-lewis-1') {
        defs = [
            { t: "Règle du duet", d: "Pour les atomes avec Z ≤ 4, ils cherchent à avoir 2 électrons sur leur première couche." },
            { t: "Règle de l'octet", d: "Pour les atomes avec Z ≥ 5, ils cherchent à avoir 8 électrons sur leur couche externe." },
            { t: "Doublet liant", d: "Paire d'électrons partagée entre deux atomes pour former une liaison covalente." },
            { t: "Doublet non-liant", d: "Paire d'électrons de la couche externe d'un atome qui ne participe pas aux liaisons." },
            { t: "Électronégativité", d: "Grandeur traduisant la capacité d'un atome à attirer les électrons d'une liaison vers lui." },
            { t: "Liaison polarisée", d: "Liaison entre deux atomes d'électronégativités différentes (différence > 0,4)." }
        ];
    } else {
        defs = [];
    }

    if (defs.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    defs.forEach(def => {
        const div = document.createElement('div');
        div.className = 'formula-card definitions-style';
        div.innerHTML = `
            <span class="card-tag chemistry">DÉFINITION</span>
            <h3>${def.t}</h3>
            <p style="margin-top:1rem; line-height:1.6; color:var(--text-muted);">${def.d}</p>
        `;
        div.onclick = (e) => {
            e.stopPropagation();
            const isExpanded = div.classList.contains('expanded');
            
            // Reset all
            document.querySelectorAll('.formula-card.definitions-style').forEach(c => c.classList.remove('expanded'));
            grid.classList.remove('has-expanded');
            
            if (!isExpanded) {
                div.classList.add('expanded');
                grid.classList.add('has-expanded');
            }
        };
        grid.appendChild(div);
    });

    // Reset when clicking empty space
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.formula-card.definitions-style')) {
            document.querySelectorAll('.formula-card.definitions-style').forEach(c => c.classList.remove('expanded'));
            grid.classList.remove('has-expanded');
        }
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

    // Icônes personnalisées pour les protocoles
    let protoIcon = "beaker";
    if (f.id === "pe-etalon-1") protoIcon = "bar-chart-3"; // Étalonnage
    else if (f.id === "proto-dissol") protoIcon = "droplets"; // Dissolution
    else if (f.id === "proto-dilut") protoIcon = "test-tubes"; // Dilution
    else if (f.id === "proto-titrage") protoIcon = "flask-conical"; // Titrage

    div.innerHTML = `
        <span class="card-tag ${chapter.subject}">${chapter.subject.toUpperCase()}</span>
        <h3>${f.title}</h3>
        <div class="card-eqn">
            ${isProto ? `
                <div class="proto-icon-wrapper">
                    <i data-lucide="${protoIcon}" class="proto-svg"></i>
                </div>
            ` : (f.img ? `
                <div class="proto-icon-wrapper" style="background:#fff; border-radius: 8px; overflow:hidden; border: 1px solid var(--border);">
                    <img src="${f.img}" style="width:100%; height:100%; object-fit:contain;">
                </div>
            ` : (f.formula && f.formula.includes('<table') ? `
                <div class="proto-icon-wrapper" style="background:#f0f9ff; color:#0369a1;">
                    <i data-lucide="table-2" class="proto-svg"></i>
                </div>
            ` : (f.formula.includes('<') ? f.formula : `\\[ ${f.formula} \\]`)))}
        </div>
        <div class="bottom-legend-area">${isProto ? "" : pillsHtml}</div>
        <div class="card-footer"><span>${isProto ? 'Voir le protocole' : (f.img ? 'Agrandir le tableau' : 'Voir détails')}</span><i data-lucide="arrow-right"></i></div>
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
    
    // Parse units into nice grid layout
    let unitsHtml = "—";
    if (f.units && !isProto) {
        unitsHtml = '<div class="modal-units-grid">';
        f.units.split(',').forEach(u => {
            const txt = u.trim();
            if(!txt) return;
            
            let sym = txt;
            if (txt.includes('[')) sym = txt.split('[')[0].trim();
            else if (txt.includes('(')) sym = txt.split('(')[0].trim();

            let name = "";
            if (txt.includes('[')) name = txt.split('[')[1].split(']')[0].trim();

            let unit = "";
            if (txt.includes('(')) unit = txt.split('(')[1].split(')')[0].trim();

            if (sym || name || unit) {
                unitsHtml += `
                    <div class="modal-unit-item">
                        <span class="mu-sym">${sym}</span>
                        <span class="mu-details">
                            <span class="mu-name">${name ? ' = ' + name : ''}</span>
                            <span class="mu-unit">${unit ? '(' + unit + ')' : ''}</span>
                        </span>
                    </div>
                `;
            }
        });
        unitsHtml += '</div>';
    }
    
    document.getElementById('modal-units').innerHTML = unitsHtml;
    
    document.getElementById('modal-def').innerHTML = f.definition || "—";
    document.getElementById('modal-prop').innerHTML = f.properties || "—";
    if (f.img) {
        document.getElementById('math-box').innerHTML = `<img src="${f.img}" style="max-width:100%; border-radius:8px; box-shadow: var(--shadow);">`;
        document.getElementById('math-box').style.fontSize = "1rem";
    } else if (f.formula && f.formula.includes('<table')) {
        document.getElementById('math-box').innerHTML = f.formula;
        document.getElementById('math-box').style.fontSize = "1.1rem"; // Plus gros
    } else {
        document.getElementById('math-box').innerHTML = f.formula ? `\\[ ${f.formula} \\]` : "";
        document.getElementById('math-box').style.fontSize = "1.8rem"; // Reset normal
    }
    
    if (isProto) {
        const modalWin = document.querySelector('.modal-window');
        modalWin.classList.add('protocol-mode');
        
        // Custom rendering for protocol: side-by-side
        const steps = (f.definition || "").split('\n').filter(s => s.trim().length > 0);
        let stepsHtml = '<ul class="protocol-steps-list">';
        steps.forEach((step, idx) => {
            const cleanStep = step.replace(/^\d+\.\s*/, ''); // Remove existing numbers if any
            stepsHtml += `
                <li class="protocol-step-item">
                    <span class="step-number">${idx + 1}</span>
                    <span class="step-text">${cleanStep}</span>
                </li>
            `;
        });
        stepsHtml += '</ul>';

        document.querySelector('.modal-body').innerHTML = `
            <div class="protocol-flex">
                <div class="protocol-image-side">
                    <div class="protocol-image-container">
                        <img src="${f.img}" alt="${f.title}">
                    </div>
                    <p style="margin-top:1rem; font-size:0.8rem; color:var(--text-muted); font-weight:600; text-align:center;">
                        Schéma du montage expérimental
                    </p>
                </div>
                <div id="tab-def" class="protocol-content-container">
                    <h4 style="margin-bottom:1rem; color:var(--protocoles); text-transform:uppercase; font-size:0.8rem; letter-spacing:0.05em;">Étapes du protocole</h4>
                    ${stepsHtml}
                    <div style="margin-top:1.5rem; padding:1rem; background: #fffbeb; border-radius:12px; border:1px solid #fef3c7;">
                        <h4 style="font-size:0.85rem; color:#92400e; margin-bottom:0.5rem;">Détails & Propriétés</h4>
                        <p style="font-size:0.9rem; color:#92400e; line-height:1.5;">${f.properties || "—"}</p>
                    </div>
                </div>
            </div>
        `;
    } else {
        const modalWin = document.querySelector('.modal-window');
        modalWin.classList.remove('protocol-mode');
        
        // Restore normal modal body structure
        document.querySelector('.modal-body').innerHTML = `
            <div class="tab-panel active" id="tab-eqn">
                <div class="math-display" id="math-box"></div>
                <div class="units-legend">
                    <h4>Unités & Symboles :</h4>
                    <div id="modal-units">—</div>
                </div>
            </div>
            <div class="tab-panel" id="tab-def">
                <p id="modal-def">—</p>
            </div>
            <div class="tab-panel" id="tab-prop">
                <p id="modal-prop">—</p>
            </div>
        `;

        document.getElementById('modal-def').innerHTML = f.definition || "—";
        document.getElementById('modal-prop').innerHTML = f.properties || "—";
        if (f.img) {
            document.getElementById('math-box').innerHTML = `<img src="${f.img}" style="max-width:100%; border-radius:8px; box-shadow: var(--shadow);">`;
            document.getElementById('math-box').style.fontSize = "1rem";
        } else if (f.formula && f.formula.includes('<table')) {
            document.getElementById('math-box').innerHTML = f.formula;
            document.getElementById('math-box').style.fontSize = "1.1rem";
        } else {
            document.getElementById('math-box').innerHTML = f.formula ? `\\[ ${f.formula} \\]` : "";
            document.getElementById('math-box').style.fontSize = "1.8rem";
        }
        
        document.getElementById('modal-units').innerHTML = unitsHtml;
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
        const chapter = chapters.find(c => c.id === currentChapterId);
        if (chapter && chapter.subject === 'protocoles') {
            currentSubject = 'all'; // réinitialiser l'onglet sur "Tous" pour éviter la carte isolée
            document.querySelectorAll('.sub-tab').forEach(x => {
                x.classList.toggle('active', x.dataset.subject === 'all');
            });
        }
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
    
    // --- MODIFICATION : Raccourci direct seulement en 1ère ---
    if (currentSubject === 'protocoles' && currentLevel === '1ere') {
        currentView = 'formulas';
        currentChapterId = 'proto-chimie-1';
        currentNav = 'formulas';
    }
    
    render(); 
});
document.querySelectorAll('.tab-trigger').forEach(t => t.onclick = () => switchTab(t.dataset.tab));
document.querySelectorAll('.nav-tab').forEach(t => t.onclick = () => {
    currentNav = t.dataset.nav;
    updateNavTabs();
    render();
});
// --- INIT ---
document.getElementById('count-num').textContent = formulas.length;
document.getElementById('def-num').textContent = 39;
render();

// Global listeners
document.getElementById('main-search').oninput = (e) => { currentSearch = e.target.value; render(); };
document.querySelector('.modal-close').onclick = () => { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; };
window.onclick = (e) => { if (e.target === document.getElementById('modal-overlay')) { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; } };

// Re-init icons for new elements
lucide.createIcons();
