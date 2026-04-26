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
    { id: "c-nom-1", title: "Nomenclature", subject: "chimie", level: "1ere", src: "assets/nomenclature_final.png" },
    { id: "p-optique-1", title: "Optique & Couleurs", subject: "physique", level: "1ere" },
    { id: "p-ondes-1", title: "Ondes Mécaniques", subject: "physique", level: "1ere" },
    { id: "p-energie-1", title: "Énergie Mécanique", subject: "physique", level: "1ere" },
    { id: "p-fluide-1", title: "Fluides", subject: "physique", level: "1ere" },
    { id: "p-inter-1", title: "Interactions Fondamentales", subject: "physique", level: "1ere" },
    { id: "p-elec-1", title: "Électricité", subject: "physique", level: "1ere" },
    { id: "proto-chimie-1", title: "Protocoles de Chimie", subject: "protocoles", level: "1ere" }
];

// --- DATA: DEFINITIONS (Centralized) ---
const allDefinitions = {
    "c-redox-1": [
        { t: "Oxydant", d: "Espèce chimique capable de capter un ou plusieurs électrons." },
        { t: "Réducteur", d: "Espèce chimique capable de céder un ou plusieurs électrons." },
        { t: "Oxydation", d: "Réaction au cours de laquelle une espèce chimique perd des électrons (le réducteur est oxydé)." },
        { t: "Réduction", d: "Réaction au cours de laquelle une espèce chimique gagne des électrons (l'oxydant est réduit)." },
        { t: "Couple Oxydant / Réducteur", d: "Ensemble formé par l'oxydant et le réducteur qui passent de l'un à l'autre par gain ou perte d'électrons. On le note Ox / Red." },
        { t: "Équation d'oxydo-réduction", d: "Une équation d'oxydo-réduction est une réaction au cours de laquelle le réducteur d'un couple cède des électrons à un oxydant d'un autre couple." }
    ],
    "c-mol-1": [
        { t: "La Mole", d: "Unité de quantité de matière (symbole : mol) contenant 6,022 x 10^23 entités." },
        { t: "Concentration Molaire (C)", d: "Quantité de soluté par litre de solution (mol/L)." },
        { t: "Dilution", d: "Action d'ajouter du solvant pour diminuer la concentration." },
        { t: "Concentration Massique (Cm)", d: "Masse de soluté dissous par litre de solution (g/L)." },
        { t: "Soluté", d: "Espèce minoritaire qui est dissoute dans un solvant." },
        { t: "Solvant", d: "Milieu liquide majoritaire dans lequel on dissout le soluté." }
    ],
    "p-optique-1": [
        { t: "Lentille Convergente", d: "Système optique qui dévie les rayons lumineux parallèles vers un point unique appelé foyer image." },
        { t: "Distance Focale (f')", d: "Distance entre le centre optique O de la lentille et le foyer image F'. Elle s'exprime en mètres." },
        { t: "Vergence", d: "Grandeur notée δ qui caractérise la capacité d'une lentille à faire converger la lumière. Elle est l'inverse de la distance focale." },
        { t: "Grandissement (γ)", d: "Rapport entre la taille de l'image et la taille de l'objet." }
    ],
    "p-ondes-1": [
        { t: "Onde Mécanique Progressive", d: "Une onde mécanique progressive est le phénomène de propagation d’une perturbation dans un milieu matériel sans transport de matière et avec transfert d’énergie." },
        { t: "Onde Sonore Périodique", d: "Une onde sonore périodique est le phénomène de propagation d’une succession de zones de compression-dilatation du milieu de propagation, créées par la vibration d’une source (haut-parleur, émetteur d’ultrasons) à la fréquence f." },
        { t: "Période (T)", d: "La période temporelle correspond au plus petit intervalle de temps au cours duquel le phénomène se répète identique à lui-même." },
        { t: "Fréquence (f)", d: "La fréquence est le nombre de fois que le phénomène se répète en une seconde." },
        { t: "Longueur d'onde (λ)", d: "La longueur d'onde (la période spatiale) est la plus petite distance séparant deux points en phase" },
        { t: "Retard (τ)", d: "Durée mise par une onde pour aller d'un point M à un point M'." }
    ],
    "p-energie-1": [
        { t: "Énergie Cinétique (Ec)", d: "Énergie que possède un corps en raison de sa vitesse." },
        { t: "Énergie Potentielle (Ep)", d: "Énergie que possède un corps en fonction de sa position (ici son altitude)." },
        { t: "Énergie Mécanique (Em)", d: "Somme de l'énergie cinétique et de toutes les énergies potentielles du système." }
    ],
    "p-elec-1": [
        { t: "Intensité (I)", d: "Débit de charges électriques dans un circuit. Elle s'exprime en Ampères (A)." },
        { t: "Tension (U)", d: "Différence de potentiel entre deux points d'un circuit. Elle s'exprime en Volts (V)." },
        { t: "Effet Joule", d: "Dégagement de chaleur lors du passage d'un courant électrique dans un conducteur." },
        { t: "Loi d'Ohm", d: "La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité qui le traverse (U = R.I)." },
        { t: "Conducteur Ohmique", d: "Composant dont la caractéristique tension-courant est une droite passant par l'origine." }
    ],
    "c-dosage-1": [
        { t: "Dosage", d: "Action de déterminer la quantité de matière ou la concentration d'une espèce chimique dans une solution." },
        { t: "Titrage", d: "Dosage par une réaction chimique totale et rapide entre une espèce titrée et une espèce titrante." },
        { t: "Équivalence", d: "L'équivalence est le moment où les réactifs ont été introduits dans les proportions stœchiométriques." },
        { t: "Loi de Beer-Lambert", d: "L'absorbance A d'une solution est proportionnelle à sa concentration C. A = k x C." },
        { t: "Validité de Beer-Lambert", d: "La solution doit être diluée car la loi de Beer-Lambert n'est vérifiée que pour des concentrations inférieures à 1,0 x 10^-2 mol.L^-1." },
        { t: "Vérification de Beer-Lambert", d: "En observant la courbe obtenue, on constate que l'absorbance A est une fonction linéaire de C et il existe donc une relation de proportionnalité entre A et C, ce qui confirme que la loi de Beer-Lambert est vérifiée." },
        { t: "Choix de λ_max", d: "On choisit la longueur d'onde correspondant au maximum d'absorption car c'est celle où l'espèce absorbe le plus. D'après la loi de Beer-Lambert, cela maximise la différence d'absorbance entre deux solutions de concentrations différentes et rend la mesure plus sensible et plus précise." },
        { t: "Indicateur Coloré", d: "Espèce chimique dont la couleur change selon le milieu, utilisée pour repérer l'équivalence." }
    ],
    "c-lewis-1": [
        { t: "Règle du duet", d: "Pour les atomes avec Z ≤ 4, ils cherchent à avoir 2 électrons sur leur première couche." },
        { t: "Règle de l'octet", d: "Pour les atomes avec Z ≥ 5, ils cherchent à avoir 8 électrons sur leur couche externe." },
        { t: "Doublet liant", d: "Paire d'électrons partagée entre deux atomes pour former une liaison covalente." },
        { t: "Doublet non-liant", d: "Paire d'électrons de la couche externe d'un atome qui ne participe pas aux liaisons." },
        { t: "Électronégativité", d: "Grandeur traduisant la capacité d'un atome à attirer les électrons d'une liaison vers lui." },
        { t: "Liaison polarisée", d: "Liaison entre deux atomes d'électronégativités différentes (différence > 0,4)." },
        { t: "Molécule Polaire", d: "Molécule possédant des liaisons polarisées et dont les centres de charges + et - ne sont pas confondus." }
    ],
    "p-fluide-1": [
        { t: "Pression (P)", d: "Force pressante exercée par unité de surface (P = F/S, en Pascals)." },
        { t: "Loi de Mariotte", d: "À température constante, le produit P.V d'une masse de gaz est constant." },
        { t: "Masse Volumique (ρ)", d: "Masse d'un corps par unité de volume (kg/m3)." }
    ]
};

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
        formula: "\\small\\begin{array}{l} \\text{- Si } \\gamma < 0 : \\text{ image renversée} \\\\ \\text{- Si } \\gamma > 0 : \\text{ image droite} \\\\ \\text{- Si } |\\gamma| > 1 : \\text{ image agrandie} \\\\ \\text{- Si } |\\gamma| < 1 : \\text{ image rétrécie} \\end{array}",
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
    {
        id: "pe-etalon-1", chapterId: "proto-chimie-1", title: "Protocole : Dosage par étalonnage",
        formula: "",
        definition: "BUT : Déterminer la concentration d'une espèce colorée en comparant son absorbance à celle de solutions étalons.\n\n1. Réglage du spectrophotomètre (Faire le Blanc).\n2. Déterminer la longueur d'onde de travail λmax.\n3. Préparer une gamme de solutions étalons.\n4. Mesurer l'absorbance et tracer A = f(C).",
        properties: "Loi de Beer-Lambert : A = ε × l × C", units: ""
    },
    {
        id: "proto-dissol", chapterId: "proto-chimie-1", title: "Protocole : Dissolution",
        formula: `<svg viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" style="background: transparent; width: 100%; height: 100%;">
            <defs>
                <linearGradient id="gGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f8fafc" /><stop offset="50%" stop-color="#ffffff" /><stop offset="100%" stop-color="#e2e8f0" />
                </linearGradient>
            </defs>
            <!-- Fiole jaugée -->
            <path d="M200 800 Q200 830 230 830 L370 830 Q400 830 400 800 L330 550 L330 350 L270 350 L270 550 L200 800 Z" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
            <!-- Eau dans fiole -->
            <path d="M210 790 L390 790 L345 630 L255 630 Z" fill="#7dd3fc" opacity="0.4" />
            <!-- Trait de jauge -->
            <line x1="270" y1="450" x2="330" y2="450" stroke="#ef4444" stroke-width="3" />
            
            <!-- Entonnoir -->
            <path d="M260 350 L340 350 L420 180 L180 180 Z" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" opacity="0.8" />
            
            <!-- Coupelle de pesée -->
            <path d="M210 150 L390 150 L360 100 L240 100 Z" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
        </svg>`,
        definition: "BUT : Préparer une solution de concentration précise à partir d'un solide.\n\n1. Peser exactement la masse m de solide dans la coupelle.\n2. Introduire le solide dans la fiole jaugée via un entonnoir.\n3. Remplir la fiole aux 2/3 avec de l'eau distillée et agiter.\n4. Compléter jusqu'au trait de jauge, boucher et homogénéiser.",
        properties: "Relation massique : m = C × V × M", units: ""
    },
    {
        id: "proto-dilut", chapterId: "proto-chimie-1", title: "Protocole : Dilution",
        formula: `<svg viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg" style="background: transparent; width: 100%; height: 100%;">
            <defs>
                <linearGradient id="gGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f8fafc" /><stop offset="50%" stop-color="#ffffff" /><stop offset="100%" stop-color="#e2e8f0" />
                </linearGradient>
            </defs>
            <!-- Fiole jaugée (Fille) -->
            <path d="M200 800 Q200 830 230 830 L370 830 Q400 830 400 800 L330 550 L330 350 L270 350 L270 550 L200 800 Z" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
            
            <!-- Pipette jaugée -->
            <rect x="285" y="100" width="15" height="500" rx="4" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
            <rect x="275" y="250" width="35" height="150" rx="15" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
            
            <!-- Poira à pipeter (Poire) -->
            <circle cx="292" cy="80" r="35" fill="#ef4444" stroke="#991b1b" stroke-width="3" />
        </svg>`,
        definition: "BUT : Préparer une solution moins concentrée à partir d'une solution mère.\n\n1. Prélever le volume V_mère de solution mère avec une pipette jaugée.\n2. Introduire le prélèvement dans la fiole jaugée de volume V_fille.\n3. Remplir aux 2/3 avec de l'eau distillée et agiter pour mélanger.\n4. Ajuster au trait de jauge avec de l'eau distillée et homogénéiser.",
        properties: "Facteur de dilution : F = V_fille / V_mère", units: ""
    },
    { 
        id: "proto-titrage", chapterId: "proto-chimie-1", title: "Protocole : Titrage colorimétrique", 
        formula: `<svg viewBox="0 0 600 950" xmlns="http://www.w3.org/2000/svg" style="background: transparent; width: 100%; height: 100%;">
            <defs>
                <linearGradient id="gStand" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#94a3b8" /><stop offset="100%" stop-color="#475569" />
                </linearGradient>
                <linearGradient id="gGlass" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#f8fafc" /><stop offset="50%" stop-color="#ffffff" /><stop offset="100%" stop-color="#e2e8f0" />
                </linearGradient>
                <linearGradient id="gTitrant" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#d8b4fe" /><stop offset="100%" stop-color="#a855f7" />
                </linearGradient>
                <linearGradient id="gTitree" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#bae6fd" /><stop offset="100%" stop-color="#7dd3fc" />
                </linearGradient>
            </defs>

            <!-- Agitateur Magnétique (Base) -->
            <rect x="150" y="850" width="300" height="70" rx="15" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="400" cy="885" r="12" fill="#94a3b8" /> <!-- Bouton -->
            <rect x="180" y="870" width="50" height="20" rx="6" fill="#cbd5e1" /> <!-- Écran -->

            <!-- Potence (Socle + Tige) -->
            <rect x="50" y="900" width="150" height="20" rx="6" fill="url(#gStand)" />
            <rect x="90" y="50" width="12" height="850" rx="6" fill="url(#gStand)" />
            
            <!-- Pinces de la potence -->
            <!-- Pince haute -->
            <rect x="100" y="150" width="160" height="15" rx="5" fill="#64748b" />
            <rect x="245" y="140" width="30" height="35" rx="3" fill="#475569" />
            
            <!-- Pince basse -->
            <rect x="100" y="600" width="160" height="15" rx="5" fill="#64748b" />
            <rect x="245" y="590" width="30" height="35" rx="3" fill="#475569" />

            <!-- Burette Graduée -->
            <rect x="250" y="30" width="22" height="650" rx="4" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" opacity="0.95" />
            <!-- Solution Titrante dans Burette -->
            <rect x="253" y="80" width="16" height="420" fill="url(#gTitrant)" opacity="0.7" />
            
            <!-- Graduations détaillées -->
            <line x1="250" y1="100" x2="265" y2="100" stroke="#475569" stroke-width="1.5" />
            <line x1="250" y1="150" x2="260" y2="150" stroke="#475569" stroke-width="1" />
            <line x1="250" y1="200" x2="265" y2="200" stroke="#475569" stroke-width="1.5" />
            <line x1="250" y1="250" x2="260" y2="250" stroke="#475569" stroke-width="1" />
            <line x1="250" y1="300" x2="265" y2="300" stroke="#475569" stroke-width="1.5" />
            <line x1="250" y1="350" x2="260" y2="350" stroke="#475569" stroke-width="1" />
            <line x1="250" y1="400" x2="265" y2="400" stroke="#475569" stroke-width="1.5" />
            <line x1="250" y1="450" x2="260" y2="450" stroke="#475569" stroke-width="1" />
            <line x1="250" y1="500" x2="265" y2="500" stroke="#475569" stroke-width="1.5" />

            <!-- Robinet de la burette -->
            <path d="M250 680 L272 680 L261 715 Z" fill="#475569" stroke="#334155" stroke-width="1" />
            <rect x="235" y="690" width="50" height="10" rx="3" fill="#1e293b" /> <!-- Poignée -->

            <!-- Erlenmeyer -->
            <path d="M235 760 L285 760 L360 850 L160 850 Z" stroke="#475569" stroke-width="2.5" fill="url(#gGlass)" />
            <!-- Solution Titrée dans Erlen -->
            <path d="M185 815 L335 815 L355 845 L165 845 Z" fill="url(#gTitree)" opacity="0.6" />
            
            <!-- Barreau Aimanté (Pill shape) -->
            <rect x="235" y="835" width="50" height="12" rx="6" fill="#0f172a" /> 
        </svg>`, 
        definition: "BUT : Déterminer la concentration d'une espèce en solution par une réaction chimique totale et rapide.\n\n1. On ajoute petit à petit la solution titrante (dans la burette graduée) dans la solution titrée (dans l'Erlenmeyer).\n2. Dès la première goutte versée, la réaction chimique se produit immédiatement.\n3. Tant que l'équivalence n'est pas atteinte, le réactif titrant est consommé immédiatement.\n4. À l'équivalence, le réactif titré est lui aussi totalement consommé.",
        properties: "Volume à l'équivalence : Veq", units: ""
    }
];

// --- APP LOGIC (Navigation, Search, Modals) ---

let currentLevel = '1ere';
let currentSubject = 'all';
let currentChapterId = null;
let currentSearch = '';
let currentView = 'home';
let currentNav = 'formulas';

function render() {
    const homeView = document.getElementById('home-view');
    const appView = document.getElementById('app-view');
    const subjTabs = document.getElementById('subject-tabs-container');
    const chapTabs = document.getElementById('chapter-nav-tabs');
    const backBtn = document.getElementById('back-btn');
    const viewTitle = document.getElementById('view-title');
    const levelLabel = document.getElementById('level-label');

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
    filtered.forEach((c, i) => {
        const div = document.createElement('div');
        div.className = 'chapter-card';
        div.style.opacity = '0';
        div.style.transform = 'translateY(16px)';
        div.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        div.style.transitionDelay = (i * 0.04) + 's';
        div.innerHTML = `<div class="subj-dot ${c.subject}"></div><div class="card-info">${c.subject.toUpperCase()}</div><h3>${c.title}</h3>`;
        div.onclick = () => {
            currentChapterId = c.id;
            currentView = 'formulas';
            currentNav = 'formulas';
            updateNavTabs();
            render();
        };
        grid.appendChild(div);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                div.style.opacity = '1';
                div.style.transform = 'translateY(0)';
            });
        });
    });
}

function renderFormulas() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    const chapter = chapters.find(c => c.id === currentChapterId);
    
    if (chapter && chapter.src && chapter.id !== 'c-nom-1') {
        const tableCard = document.createElement('div');
        tableCard.className = 'formula-card chimie';
        tableCard.style.gridColumn = 'span 2';
        tableCard.innerHTML = `
            <span class="card-tag chimie">TABLEAU RECAPITULATIF</span>
            <h3 style="margin-bottom: 1.5rem; font-size:1.5rem;">Géométrie des Molécules (VSEPR)</h3>
            <div style="background:#fff; border-radius:16px; padding:10px; border:1px solid var(--border); overflow:hidden;">
                <img src="${chapter.src}" style="width:100%; height:auto; display:block; cursor:zoom-in;" onclick="openModal({title:'Tableau VSEPR', img:'${chapter.src}', chapterId:'c-lewis-1'})">
            </div>
            <p style="margin-top:1rem; font-size:0.9rem; color:var(--text-muted); font-weight:600; text-align:center;">Cliquez sur l'image pour agrandir</p>
        `;
        grid.appendChild(tableCard);
    }

    const filteredFormulas = formulas.filter(f => f.chapterId === currentChapterId);
    if (filteredFormulas.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    filteredFormulas.forEach(f => {
        const card = createCard(f);
        if (f.id === 'lewis-polar-1') card.style.gridColumn = "span 2";
        grid.appendChild(card);
    });
}

function renderDefinitions() {
    const grid = document.getElementById('grid-container');
    grid.innerHTML = '';
    let defs = allDefinitions[currentChapterId] || [];

    if (defs.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }

    if (defs.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    }
    defs.forEach(def => {
        const div = document.createElement('div');
        div.className = 'formula-card definitions-style';
        div.innerHTML = `
            <div style="font-size:0.75rem; font-weight:800; color:var(--text); letter-spacing:0.05em; margin-bottom:0.8rem; text-transform:uppercase;">DÉFINITION</div>
            <h3 style="margin-bottom: 0.5rem;">${def.t}</h3>
            <p style="margin-top:0.5rem; line-height:1.6; color:var(--text-muted); font-size:1.05rem;">${def.d}</p>
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

    document.getElementById('modal-title').textContent = f.title;
    document.getElementById('modal-tag').textContent = `${chapter.subject.toUpperCase()} • ${chapter.level}`;
    document.getElementById('modal-tag').className = `modal-badge ${chapter.subject}`;

    const modalBody = document.getElementById('modal-body');
    const modalWin = document.querySelector('.modal-window');
    const modalTabs = document.querySelector('.modal-tabs');

    modalTabs.style.display = isProto ? 'none' : 'flex';

    if (isProto) {
        modalWin.className = "modal-window protocol-mode";
        modalWin.style.maxWidth = "1200px";
        modalWin.style.width = "98%";
        
        const rawLines = (f.definition || "").split('\n').filter(s => s.trim().length > 0);
        let butHtml = "";
        let stepsHtml = '<div class="protocol-steps-list">';
        
        let stepCount = 1;
        rawLines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.toUpperCase().startsWith("BUT")) {
                butHtml = `<div class="proto-but-banner"><span>${trimmed}</span></div>`;
            } else if (/^[0-9]+[\.\)]/.test(trimmed)) {
                const text = trimmed.replace(/^[0-9]+[\.\)]\s*/, "");
                stepsHtml += `
                    <div class="protocol-step-item">
                        <div class="step-number">${stepCount++}</div>
                        <div class="step-text">${text}</div>
                    </div>`;
            }
        });
        stepsHtml += '</div>';

        const labelsMap = {
            'proto-dissol': `
                <div class="titration-label l-coupelle">Coupelle de pesée</div>
                <div class="titration-label l-entonnoir">Entonnoir</div>
                <div class="titration-label l-fiole">Fiole jaugée</div>
                <div class="titration-label l-trait">Trait de jauge</div>`,
            'proto-dilut': `
                <div class="titration-label l-poire">Poire à pipeter</div>
                <div class="titration-label l-pipette">Pipette jaugée</div>
                <div class="titration-label l-fiole-dil">Fiole jaugée</div>`,
            'proto-titrage': `
                <div class="titration-label l-burette">Burette graduée</div>
                <div class="titration-label l-sol-titrante">Solution titrante</div>
                <div class="titration-label l-erlen">Erlenmeyer</div>
                <div class="titration-label l-sol-titree">Solution titrée</div>
                <div class="titration-label l-barreau">Barreau aimanté</div>
                <div class="titration-label l-stirrer">Agitateur magnétique</div>
                <div class="titration-label l-potence">Potence</div>`
        };

        modalBody.innerHTML = `
            <div class="protocol-flex">
                <div class="protocol-content-container">
                    ${butHtml}
                    <h4 class="proto-section-title" style="margin-top:20px; font-weight:800; font-size:1rem; color:var(--protocoles); letter-spacing:0.05em; text-transform:uppercase;">Étapes à suivre</h4>
                    ${stepsHtml}
                    ${f.properties ? `
                    <div class="proto-props-box" style="margin-top:20px; background:#fff7ed; padding:20px; border-radius:12px; border-left:4px solid #f97316;">
                        <h5 style="color:#9a3412; font-weight:800; margin-bottom:8px; text-transform:uppercase; font-size:0.85rem; letter-spacing:0.05em;">Détails techniques</h5>
                        <p style="color:#c2410c; font-weight:700; font-size:0.9rem;">${f.properties}</p>
                    </div>` : ''}
                </div>
                <div class="protocol-image-container" style="position:relative;">
                    ${labelsMap[f.id] || ''}
                    ${f.formula || `<img src="${f.img}" style="max-width:100%;">`}
                </div>
            </div>
        `;
    } else {
        modalWin.style.maxWidth = "700px";
        modalWin.style.width = "90%";
        modalBody.innerHTML = `
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

        // Render normal content...
        let unitsHtml = "—";
        if (f.units) {
            unitsHtml = '<div class="modal-units-grid">';
            f.units.split(',').forEach(u => {
                const txt = u.trim();
                if(!txt) return;
                let sym = txt.includes('[') ? txt.split('[')[0].trim() : (txt.includes('(') ? txt.split('(')[0].trim() : txt);
                let name = txt.includes('[') ? txt.split('[')[1].split(']')[0].trim() : "";
                let unit = txt.includes('(') ? txt.split('(')[1].split(')')[0].trim() : "";
                unitsHtml += `<div class="modal-unit-item"><span class="mu-sym">${sym}</span><span class="mu-details"><span class="mu-name">${name ? ' = ' + name : ''}</span><span class="mu-unit">${unit ? '(' + unit + ')' : ''}</span></span></div>`;
            });
            unitsHtml += '</div>';
        }
        document.getElementById('modal-units').innerHTML = unitsHtml;
        document.getElementById('modal-def').innerHTML = f.definition || "—";
        document.getElementById('modal-prop').innerHTML = f.properties || "—";
        
        const mathBox = document.getElementById('math-box');
        if (f.img) {
            mathBox.innerHTML = `<img src="${f.img}" style="max-width:100%; border-radius:8px; box-shadow: var(--shadow);">`;
        } else if (f.formula) {
            mathBox.innerHTML = f.formula.includes('<') ? f.formula : `\\[ ${f.formula} \\]`;
        }
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
function updateStatus() {
    const totalFormulas = formulas.length;
    let totalDefs = 0;
    Object.values(allDefinitions).forEach(arr => totalDefs += arr.length);
    
    const countEl = document.getElementById('count-num');
    const defEl = document.getElementById('def-num');
    if (countEl) countEl.textContent = totalFormulas;
    if (defEl) defEl.textContent = totalDefs;
}

updateStatus();
render();

// Global listeners
document.getElementById('main-search').oninput = (e) => { currentSearch = e.target.value; render(); };
document.querySelector('.modal-close').onclick = () => { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; };
window.onclick = (e) => { if (e.target === document.getElementById('modal-overlay')) { document.getElementById('modal-overlay').style.display = 'none'; document.body.style.overflow = 'auto'; } };

// Re-init icons for new elements
lucide.createIcons();
