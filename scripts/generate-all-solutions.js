const fs = require('fs');
const path = require('path');
const { QUESTIONS_DATABASE } = require('../pyq-data.js');

const SOLUTIONS_DIR = path.join(__dirname, '..', 'data', 'solutions');
if (!fs.existsSync(SOLUTIONS_DIR)) {
  fs.mkdirSync(SOLUTIONS_DIR, { recursive: true });
}

function makeKey(sub, text) {
  return (sub || '').toLowerCase() + '|' + (text || '').toLowerCase().replace(/[^a-z0-9]/g, ' ').replace(/\s+/g, ' ').trim();
}

const solutionsBySubject = {
  DM: {},
  COA: {},
  DBMS: {},
  OOPJ: {},
  SE: {},
  ES: {},
  IE: {}
};

function registerExact(sub, questionText, chapter, marks, answerMd) {
  const s = sub.toUpperCase();
  const key = makeKey(s, questionText);
  solutionsBySubject[s][key] = {
    key,
    subjectId: s,
    question: questionText,
    chapter,
    marks,
    answerMd: answerMd.trim()
  };
}

function registerPattern(sub, matchFn, answerMd) {
  const s = sub.toUpperCase();
  QUESTIONS_DATABASE.filter(q => q.subjectId === s && matchFn(q)).forEach(q => {
    const key = makeKey(s, q.question);
    solutionsBySubject[s][key] = {
      key,
      subjectId: s,
      question: q.question,
      chapter: q.chapter,
      marks: q.marks,
      answerMd: answerMd.trim()
    };
  });
}

// ============================================================================
// 1. ES (ENVIRONMENTAL SCIENCE) - COMPLETE 24/24 (100% COVERAGE)
// ============================================================================

registerPattern('ES', q => /classification of ecosystems/i.test(q.question), `### Classification of Ecosystems
An **ecosystem** is a self-sustaining structural and functional unit of the biosphere where living organisms interact with each other and their physical environment.

\`\`\`text
                               ECOSYSTEMS
                                   |
         +-------------------------+-------------------------+
         |                                                   |
   TERRESTRIAL (Land-based)                            AQUATIC (Water-based)
         |                                                   |
   +-----+-----+-----+                         +-------------+-------------+
   |     |     |     |                         |                           |
Forest Grass- Desert Tundra               Freshwater                     Marine
        land                             (Rivers, Lakes, Ponds)    (Oceans, Estuaries)
\`\`\`

1. **Terrestrial Ecosystems (Land-based):**
   - **Forest Ecosystem:** High tree density, canopy layers, rich biodiversity (Tropical, Temperate, Boreal/Taiga).
   - **Grassland Ecosystem:** Dominated by herbaceous grasses with moderate rainfall (Savannas, Prairies, Steppes).
   - **Desert Ecosystem:** Arid landscapes with rainfall $< 25\\text{ cm/year}$, drought-tolerant xerophytic vegetation.
   - **Tundra Ecosystem:** Treeless polar regions with permafrost subsoil.

2. **Aquatic Ecosystems (Water-based):**
   - **Freshwater Ecosystem:** Salt concentration $< 0.5\\text{ ppt}$; subdivided into *Lotic* (flowing: rivers, streams) and *Lentic* (standing: lakes, ponds, wetlands).
   - **Marine Ecosystem:** High salinity ($> 35\\text{ ppt}$); includes open oceans, coral reefs, and estuaries.`);

registerPattern('ES', q => /carbon cycle/i.test(q.question), `### 1. Definition of Biogeochemical Cycle
A **biogeochemical cycle** is the pathway by which an essential chemical element or molecule circulates through the biotic (biosphere) and abiotic (lithosphere, hydrosphere, atmosphere) components of Earth.

### 2. The Carbon Cycle
Carbon ($C$) forms the fundamental backbone of all organic biomolecules (carbohydrates, proteins, lipids, and nucleic acids).

\`\`\`text
                  ATMOSPHERIC CO2 (750 Gt C Pool)
                    ^     ^        |
      Respiration  |     | Combustion of Fossil Fuels
                   |     |         v
               Animals  Factories  Photosynthesis
                   ^               |
                   | Grazing       v
               Plants <--------- Organic Carbon
                   |
                   v (Death & Decay)
               Soil Decomposers ---> Fossil Fuels (Millions of years)
\`\`\`

### 3. Core Chemical & Ecological Steps:
1. **Biological Fixation (Photosynthesis):**
   $$6CO_2 + 6H_2O \\xrightarrow{\\text{Light, Chlorophyll}} C_6H_{12}O_6 + 6O_2$$
2. **Biological Release (Cellular Respiration):**
   $$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{ATP}$$
3. **Decomposition:** Microbial decomposers oxidize dead biomass, returning $CO_2$ to soil and air.
4. **Combustion & Anthropogenic Impact:** Industrial fossil-fuel burning produces excess $CO_2$, accelerating global warming.`);

registerPattern('ES', q => /nitrogen cycle/i.test(q.question), `### 1. Definition of Nitrogen Cycle
The **nitrogen cycle** is the biogeochemical cycle by which atmospheric dinitrogen ($N_2$, $78\\%$ of air) is converted into reactive chemical forms usable by living organisms, passed through food webs, and returned to the atmosphere.

### 2. Five Sequential Stages of the Nitrogen Cycle:

\`\`\`text
                Atmospheric Nitrogen (N2)
                  |                  ^
       Nitrogen   |                  | Denitrification
       Fixation   v                  | (Pseudomonas)
             Ammonia (NH3)       Nitrates (NO3-)
                  |                  ^
      Nitrification                  | Nitrification
     (Nitrosomonas)                  | (Nitrobacter)
                  v                  |
                   Nitrites (NO2-) --+
\`\`\`

1. **Nitrogen Fixation:** Reduction of atmospheric $N_2$ into Ammonia ($NH_3$/$NH_4^+$) via biological nitrogen fixers (*Rhizobium* in legume root nodules, *Azotobacter*) or industrial Haber-Bosch process.
2. **Nitrification:** Two-step aerobic biological oxidation:
   - Step 1: $2NH_3 + 3O_2 \\xrightarrow{\\text{Nitrosomonas}} 2NO_2^- + 2H^+ + 2H_2O$
   - Step 2: $2NO_2^- + O_2 \\xrightarrow{\\text{Nitrobacter}} 2NO_3^-$
3. **Assimilation:** Plant roots absorb nitrates ($NO_3^-$) to synthesize essential amino acids and nucleic acids.
4. **Ammonification:** Fungal and bacterial decay of organic excreta/carcasses converts organic nitrogen back into ammonia ($NH_3$).
5. **Denitrification:** Anaerobic bacteria (*Pseudomonas denitrificans*, *Thiobacillus*) reduce $NO_3^-$ back to gaseous $N_2$, completing the cycle.`);

registerPattern('ES', q => /renewable energy/i.test(q.question), `### Renewable Energy Sources & Advantages

### 1. Key Renewable Energy Sources:
1. **Solar Power:** Photovoltaic silicon semiconductors and concentrated solar thermal plants.
2. **Wind Energy:** Large-scale horizontal and vertical axis wind turbines generating rotational kinetic energy.
3. **Hydroelectric Power:** Gravitational head of impounded dam water driving hydraulic turbines.
4. **Biomass & Biogas:** Anaerobic digestion of livestock manure and crop residues yielding methane ($CH_4$).
5. **Geothermal Energy:** Enthalpy of hydrothermal steam from volcanic crustal reservoirs.
6. **Oceanic / Tidal:** Kinetic energy harvested from tidal surges and surface sea waves.

### 2. Environmental & Economic Advantages:
- **Zero Combustion Greenhouse Emissions:** Operates without generating $CO_2$, sulfur dioxide ($SO_2$), or nitrous oxides ($NO_x$).
- **Inexhaustible & Sustainable:** Unaffected by fossil-fuel depletion or OPEC oil embargoes.
- **Decentralized Generation:** Rooftop solar microgrids eliminate transmission and distribution (T&D) losses.
- **Air Quality Improvement:** Drastically lowers particulate matter ($PM_{2.5}$) and acid precipitation.`);

registerPattern('ES', q => /food chain/i.test(q.question), `### Food Chains vs. Food Webs

### 1. Food Chain
A **food chain** is a linear transfer of energy and nutrients as one organism consumes another at successive trophic tiers.

**Terrestrial Grassland Example:**
$$\\text{Green Grass (Producer)} \\xrightarrow{10\\%} \\text{Grasshopper (Primary Consumer)} \\xrightarrow{10\\%} \\text{Frog (Secondary)} \\xrightarrow{10\\%} \\text{Snake} \\xrightarrow{10\\%} \\text{Hawk (Apex Predator)}$$

### 2. Food Web
A **food web** is a complex, interconnected matrix of multiple intersecting food chains within an ecosystem.

\`\`\`text
                       Eagle (Apex)
                      /    |    \\
                   Snake  Hawk   Fox
                    / \\    |     |
                 Frog Mouse Rabbit
                   \\  /    /
                   Grasses (Producers)
\`\`\`

### 3. Key Ecological Principles:
- **Resilience:** A food web confers ecosystem stability because alternative prey choices prevent predator starvation if one species suffers decline.
- **Lindeman's 10% Efficiency Law:** Only $\\approx 10\\%$ of incident chemical energy is assimilated into biomass at the next trophic level; $90\\%$ is dissipated as metabolic respiration heat ($Q$).
- **Biomagnification:** Non-biodegradable lipophilic toxins (DDT, methylmercury) progressively concentrate at higher trophic levels.`);

registerPattern('ES', q => /mineral/i.test(q.question), `### Environmental Consequences of Overexploitation of Mineral Resources

Mining and extraction of non-renewable minerals (iron, bauxite, coal, rare earths) exert profound ecological stresses:

1. **Deforestation and Habitat Fragmentation:**
   - Surface open-cast strip mining clears virgin forest canopies, destroying critical wildlife corridors and ancestral indigenous lands.
2. **Acid Mine Drainage (AMD):**
   - Sulfide-bearing ores (pyrite, $FeS_2$) react with atmospheric oxygen and water:
   $$4FeS_2 + 15O_2 + 14H_2O \\rightarrow 4Fe(OH)_3 + 8H_2SO_4$$
   - Highly toxic sulfuric acid leaches heavy metals (arsenic, lead, mercury) into regional rivers and municipal drinking aquifers.
3. **Severe Air and Particulate Pollution:**
   - Drilling, blasting, crushing, and haul trucks emit clouds of fine respirable dust ($PM_{10}$, $PM_{2.5}$), causing pneumoconiosis and silicosis among miners and neighboring villagers.
4. **Land Subsidence & Mine Spoil Dumps:**
   - Underground gallery collapses trigger surface terrain subsidence, while unmanaged overburden slag heaps generate catastrophic landslides during monsoon rains.`);

registerPattern('ES', q => /big dam|dams/i.test(q.question), `### Multipurpose Big Dams: Benefits vs. Ecological & Socioeconomic Problems

### 1. Benefits of Big Dams:
- **Hydroelectric Power:** Provides grid stabilization and renewable peak electricity without combustion emissions.
- **Command Area Irrigation:** Extensive canal distribution networks convert arid scrublands into fertile agricultural zones (e.g., Bhakra-Nangal, Nagarjuna Sagar).
- **Flood Mitigation:** Moderates extreme monsoon discharge, shielding downstream settlements from flash deluges.
- **Urban Potable Water Reserves:** Guarantees year-round municipal drinking water supplies to major urban centers.

### 2. Environmental & Social Problems:
- **Mass Displacement & Social Injustice:** Submerges ancestral villages, involuntarily displacing millions of indigenous rural populations without equitable rehabilitation.
- **Submergence of Virgin Biodiversity:** Submerges primary riparian forests, drowning endangered flora, endemic fauna, and historic archaeological sites.
- **Silt Trapping & Delta Degradation:** Traps nutrient-rich alluvial sediments in reservoirs, starving downstream agricultural deltas and triggering severe coastal erosion.
- **Reservoir-Induced Seismicity (RIS):** The enormous localized hydrostatic mass of impounded water increases pore-fluid pressures along crustal faults, triggering earthquakes (e.g., Koyna Dam 6.3 magnitude quake).`);

registerPattern('ES', q => /values of biodiversity|consumptive/i.test(q.question), `### Values of Biodiversity

Biodiversity provides immense ecological, financial, and ethical value categorized under the following frameworks:

### 1. Consumptive Use Value:
Direct non-marketed harvest of natural resources consumed locally without passing through commercial marketplaces:
- **Food:** Wild game, fish, tubers, mushrooms, and native seeds.
- **Fuelwood:** Timber and dried shrubs collected by rural households for cooking and domestic heating.
- **Folk Medicine:** Ethnobotanical herbs (e.g., neem, tulsi, cinchona bark for quinine) utilized by indigenous healers.

### 2. Productive Use Value:
Commercial, market-priced commodities harvested from nature for industrial manufacturing:
- **Pharmaceutical Drugs:** Over $25\\%$ of modern prescription drugs originate from wild plant extracts (e.g., paclitaxel/Taxol from yew trees for chemotherapy).
- **Industrial Raw Materials:** Natural rubber, silk, cotton fibers, resins, waxes, dyes, and cosmetic essential oils.

### 3. Ethical and Aesthetic Value:
- **Ethical / Intrinsic Value:** All living species have an inherent right to exist on Earth independent of their utilitarian value to humans.
- **Aesthetic Value:** Spiritual inspiration, ecotourism, nature photography, and recreational hiking.`);

registerPattern('ES', q => /values and services/i.test(q.question), `### Ecosystem Values and Services (Millennium Ecosystem Assessment)

Ecosystem services are the direct and indirect benefits that humankind derives from naturally functioning ecosystems.

### 1. The Four Categories of Ecosystem Services:
1. **Provisioning Services (Material Benefits):**
   - Direct products harvested from nature: timber, fuelwood, crops, potable freshwater, genetic resources, and plant-derived medicinal pharmaceuticals (e.g., quinine, taxol).
2. **Regulating Services (Biospheric Buffering):**
   - Natural balance regulation: atmospheric carbon sequestration by forests, climate moderation, natural pollination of food crops by wild bees, and storm surge buffering by coastal mangrove belts.
3. **Supporting Services (Nutrient Foundations):**
   - Necessary foundations for all other services: primary production, soil formation, photosynthesis, and biogeochemical cycles (Nitrogen, Water).
4. **Cultural Services (Non-material Uplift):**
   - Aesthetic pleasure, ecotourism, outdoor recreation, artistic inspiration, and spiritual/sacred values.`);

registerPattern('ES', q => /deforestation|benefits of forest/i.test(q.question), `### Forests: Ecological Benefits, Deforestation Causes & Consequences

### 1. Ecological & Economic Benefits of Forests:
- **Carbon Sequestration:** Primary terrestrial carbon sink absorbing billions of tons of atmospheric $CO_2$.
- **Hydrological Regulation:** Forest sponge effect slows rainfall runoff, recharges aquifers, and prevents catastrophic flash floods.
- **Soil Conservation:** Extensive tree root networks bind topsoil, stopping erosion and landslides.
- **Timber & Non-Timber Produce:** Yields timber, bamboo, natural gums, honey, and medicinal compounds.

### 2. Primary Causes of Deforestation:
- **Agricultural Expansion:** Clearing vast rainforests for commercial cattle ranching, soybean plantations, and palm oil.
- **Infrastructure & Urban Sprawl:** Construction of expressways, hydroelectric dams, and mining corridors.
- **Commercial Logging:** Legal and illegal logging for paper pulp and hardwood furniture.

### 3. Severe Environmental Consequences:
- **Accelerated Climate Change:** Forest clearing releases stored carbon, responsible for $\\approx 15\\%$ of global greenhouse emissions.
- **Biodiversity Loss & Extinction:** Permanent loss of tropical rainforest habitats housing $> 50\\%$ of world species.
- **Soil Desertification:** Direct exposure of thin tropical topsoils to sunlight and torrential rain leaches nutrients, creating barren laterite wastelands.`);

registerPattern('ES', q => /structure of an ecosystem/i.test(q.question), `### Structure of an Ecosystem
The **structure of an ecosystem** comprises two interdependent fundamental components:

\`\`\`text
                          ECOSYSTEM STRUCTURE
                                   |
         +-------------------------+-------------------------+
         |                                                   |
   ABIOTIC COMPONENTS                                  BIOTIC COMPONENTS
   (Non-living factors)                                (Living organisms)
         |                                                   |
   +-----+-----+                                       +-----+-----+
   |           |                                       |           |
Physical    Chemical                               Autotrophs  Heterotrophs
(Sunlight,  (Proteins,                             (Producers) (Consumers,
 Temp, Soil) N, P, pH)                                           Decomposers)
\`\`\`

### 1. Abiotic Components (Non-Living Environmental Matrix):
- **Physical Factors:** Solar radiation intensity, atmospheric temperature, precipitation, ambient humidity, wind speed, and topographical altitude.
- **Edaphic Factors:** Soil texture, mineral grain size, soil water retention capacity, and pH.
- **Chemical Compounds:** Inorganic nutrients ($C, N, P, K$) and organic matter (humus, amino acids).

### 2. Biotic Components (Living Community):
- **Producers (Autotrophs):** Chlorophyll-bearing plants, phytoplankton, and cyanobacteria capable of synthesizing organic glucose via photosynthesis.
- **Consumers (Heterotrophs):**
  - *Primary Consumers (Herbivores):* Feed directly on producers (zooplankton, deer, cattle).
  - *Secondary Consumers (Carnivores):* Prey on herbivores (frogs, foxes).
  - *Tertiary / Apex Consumers:* Top carnivores (lions, tigers, hawks).
- **Decomposers (Saprotrophs):** Heterotrophic fungi and bacteria that biochemically break down complex detritus into elemental mineral salts, closing the nutrient loop.`);

registerPattern('ES', q => /flood/i.test(q.question), `### Floods: Causes and Socioeconomic Implications

A **flood** is an overflow of an expanse of water that submerges land that is usually dry, resulting from severe meteorological and hydrological conditions.

### 1. Primary Causes:
- Intense prolonged precipitation during monsoon cloudbursts.
- Breaching of river embankments or unplanned emergency dam sluice releases.
- Rapid melting of Himalayan glaciers coupled with debris blockages.
- Urban impervious surfaces (concrete, paved roads) and clogged stormwater drains.

### 2. Socioeconomic Implications:
- **Loss of Life and Mass Displacement:** Human drowning, livestock casualties, and large-scale displacement into temporary relief camps.
- **Agricultural Disaster:** Prolonged submergence of standing paddy and cash crops leads to root rot, total crop failure, and acute food shortages.
- **Critical Infrastructure Breakdown:** Collapse of bridges, submergence of electrical transformers, rail track washouts, and municipal drinking water contamination.
- **Disease Outbreaks:** Explosive post-flood outbreaks of water-borne epidemics (cholera, typhoid, gastroenteritis, leptospirosis) and vector-borne dengue/malaria.`);

registerPattern('ES', q => /drought/i.test(q.question), `### Droughts: Types and Socioeconomic Implications

A **drought** is an extended deficiency in precipitation over a substantial period, resulting in a severe water shortage for some activity, group, or ecological sector.

### 1. Four Recognized Categories:
1. **Meteorological Drought:** Significant percentage deficit in rainfall compared to long-term climatological normals.
2. **Hydrological Drought:** Marked depletion of surface water reserves (lakes, reservoirs) and sinking groundwater water tables.
3. **Agricultural Drought:** Inadequate soil moisture during critical crop phenological growth phases.
4. **Socioeconomic Drought:** When physical water scarcity disrupts the supply and demand of economic goods (drinking water, food, hydroelectricity).

### 2. Socioeconomic Implications:
- **Agrarian Distress & Famine:** Crop desiccation, plummeting farm incomes, and severe farmer debt distress.
- **Rural Out-Migration:** Distress migration of landless agricultural laborers to urban slums.
- **Women & Children Hardship:** Disproportionately forces rural women and girls to trek miles under extreme heat to secure basic drinking water.
- **Fodder Starvation:** Massive mortality of livestock due to parched pastures.`);

registerPattern('ES', q => /universal energy-flow/i.test(q.question), `### Universal Energy Flow Model of an Ecosystem (E.P. Odum Model)

The **Universal Energy Flow Model**, formulated by ecologist Eugene P. Odum, depicts the thermodynamic flow of energy through any biological component, whether an individual organism, a population, or a complete trophic level.

\`\`\`text
                  UNABSORBED / LOST ENERGY (NU)
                           ^
                           |
   INPUT ENERGY (I) ---> [ ASSIMILATED (A) ] ---> RESPIRATION (R) [Heat Loss]
                                |
                                v
                       BIOMASS PRODUCTION (P)
                                |
                 +--------------+--------------+
                 |                             |
          GROWTH (G) / YIELD            EXCRETION / MORTALITY (E)
\`\`\`

### 1. Thermodynamic Balance Equation:
$$\\mathbf{I = A + NU}$$
$$\\mathbf{A = P + R}$$

Where:
- $\\mathbf{I}$ = Total gross energy input ingested or intercepted.
- $\\mathbf{NU}$ = Not utilized energy (passed out unassimilated in feces or reflected light).
- $\\mathbf{A}$ = Assimilated energy absorbed across digestive/cellular boundaries.
- $\\mathbf{R}$ = Energy lost as metabolic maintenance heat through cellular respiration (irreversible loss as per 2nd Law of Thermodynamics).
- $\\mathbf{P}$ = Net secondary production converted into organic structural tissues (growth $G$ and reproduction).

### 2. Unidirectional / Non-Cyclic Nature:
Unlike nutrients which cycle infinitely via biogeochemical loops, **energy flow is strictly unidirectional**—it enters as solar radiant photons and leaves as degraded thermal entropy into outer space.`);

registerPattern('ES', q => /pyramid of energy|ecological pyramids/i.test(q.question), `### Ecological Pyramids and the Pyramid of Energy

### 1. Types of Ecological Pyramids:
- **Pyramid of Numbers:** Shows the number of individual organisms at each trophic level. Can be upright (grassland) or inverted (a single oak tree hosting millions of insects).
- **Pyramid of Biomass:** Quantifies dry organic weight per unit area. Upright in terrestrial forests; inverted in marine ecosystems where microscopic phytoplankton have high turnover rates.
- **Pyramid of Energy:** Shows total energy flowing through each trophic level per unit area per unit time ($\\text{kJ}/\\text{m}^2/\\text{year}$).

### 2. The Pyramid of Energy is Universally Upright:
\`\`\`text
        Top Carnivore (10 J)        [Apex]
              ^
        Secondary Carnivore (100 J)
              ^
        Primary Consumer (1,000 J)
              ^
        Primary Producer (10,000 J) [Broad Base]
\`\`\`

**Scientific Reason:**
Governed by the **Second Law of Thermodynamics** and **Lindeman's 10% Rule**:
- At each successive trophic step, approximately $90\\%$ of consumed energy is dissipated as metabolic respiration heat ($Q$), entropy, or unconsumed waste.
- Only $\\approx 10\\%$ of energy is converted into living biomass available to the next consumer.
- Since energy cannot increase as it moves up trophic tiers, the pyramid of energy can **never be inverted** under any circumstances.`);

registerPattern('ES', q => /genetic, species/i.test(q.question), `### Genetic, Species, and Ecosystem Biodiversity

Biodiversity is structured across three hierarchical levels:

### 1. Genetic Diversity
Variation of genetic alleles and chromosomes within a single biological species.
- **Significance:** Provides adaptive evolutionary resilience against epidemics and climate extremes.
- **Examples:** Over $50,000$ distinct cultivars of rice (*Oryza sativa*) across India; over $1,000$ mango varieties (*Mangifera indica*).

### 2. Species Diversity
The variety and abundance of different biological species inhabiting an ecosystem.
- Measured via **Species Richness** (total distinct species count) and **Species Evenness** (relative numerical equitability).
- **Example:** High amphibian and floral richness in the Western Ghats and Indo-Burma biodiversity hotspots.

### 3. Ecosystem Diversity
The variety of distinct geographic landscapes, biomes, and ecological niches.
- **Example:** India contains diverse biomes spanning Himalayan alpine pastures, mangrove swamps in the Sundarbans, the Thar desert, and Andaman coral reefs.`);

// ============================================================================
// 2. DISCRETE MATHEMATICS (DM) EXPANDED SOLUTIONS
// ============================================================================

registerPattern('DM', q => /lattice/i.test(q.question), `### 1. Formal Definition of a Lattice
A partially ordered set (poset) $(L, \\le)$ is called a **lattice** if every pair of elements $a, b \\in L$ has:
1. A unique **Least Upper Bound (LUB)** or *join* (supremum), denoted by $a \\vee b = \\sup\\{a, b\\}$.
2. A unique **Greatest Lower Bound (GLB)** or *meet* (infimum), denoted by $a \\wedge b = \\inf\\{a, b\\}$.

Formally:
$$\\forall a, b \\in L: \\quad (a \\vee b \\in L) \\quad \\text{and} \\quad (a \\wedge b \\in L)$$

### 2. Standard Example
Consider $S = \\{1, 2\\}$. The power set $P(S)$ ordered by subset inclusion $\\subseteq$ is:
$$P(S) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{1, 2\\}\\}$$

For any two subsets $A, B \\in P(S)$:
- **Meet (GLB):** $A \\wedge B = A \\cap B \\in P(S)$
- **Join (LUB):** $A \\vee B = A \\cup B \\in P(S)$

### 3. Hasse Diagram
\`\`\`text
       {1, 2}
       /    \\
     {1}    {2}
       \\    /
         ∅
\`\`\`

### 4. Conclusion
Since every pair of elements has a unique meet and join, $(P(S), \\subseteq)$ is a valid distributive lattice.`);

registerPattern('DM', q => /tautology/i.test(q.question), `### Definition of a Tautology
A compound propositional formula $P(p_1, p_2, \\dots, p_n)$ is called a **tautology** (denoted $\\mathbf{T}$) if it evaluates to **True** for every possible assignment of truth values to its constituent variables.

### Key Formula & Example:
**Law of Excluded Middle:**
$$p \\vee \\neg p \\equiv \\mathbf{T}$$

| $p$ | $\\neg p$ | $p \\vee \\neg p$ |
|:---:|:---------:|:-----------------:|
| T | F | **T** |
| F | T | **T** |

**Modus Ponens:**
$$((p \\rightarrow q) \\wedge p) \\rightarrow q \\equiv \\mathbf{T}$$

$\\therefore$ A formula whose truth table final column consists purely of True (T) values is a tautology.`);

registerPattern('DM', q => /well formed/i.test(q.question), `### Well-Formed Formula (WFF)
In propositional logic, a **Well-Formed Formula (WFF)** is a syntactically valid string of symbols generated according to the formal inductive rules of logic:

1. **Base Step:** Any atomic propositional variable ($P, Q, R$) or truth constant (T, F) is a WFF.
2. **Recursive Step:** If $A$ and $B$ are WFFs, then $\\neg A$, $(A \\wedge B)$, $(A \\vee B)$, $(A \\rightarrow B)$, and $(A \\leftrightarrow B)$ are also WFFs.
3. **Closure Step:** No other string is a WFF.

**Example:**
- Valid WFF: $(P \\rightarrow (Q \\wedge \\neg R))$
- Invalid String: $P \\wedge \\vee Q \\neg$`);

registerPattern('DM', q => /equivalence relation/i.test(q.question), `### Equivalence Relation
A binary relation $R$ on a non-empty set $A$ is an **equivalence relation** if and only if it satisfies three axioms:

1. **Reflexive:** $\\forall x \\in A, \\quad (x, x) \\in R$.
2. **Symmetric:** $\\forall x, y \\in A, \\quad (x, y) \\in R \\implies (y, x) \\in R$.
3. **Transitive:** $\\forall x, y, z \\in A, \\quad [(x, y) \\in R \\wedge (y, z) \\in R] \\implies (x, z) \\in R$.

### Standard Example:
Congruence modulo $m$ on integers $\\mathbb{Z}$:
$$a R b \\iff a \\equiv b \\pmod m \\iff m \\mid (a - b)$$
This relation is reflexive ($a-a = 0$), symmetric ($m|(a-b) \\implies m|(b-a)$), and transitive ($a-b=k_1m, b-c=k_2m \\implies a-c=(k_1+k_2)m$).
$\\therefore$ Congruence modulo $m$ is an equivalence relation.`);

registerPattern('DM', q => /monoid/i.test(q.question), `### Definition of a Monoid
An algebraic system $(M, *)$ consisting of a non-empty set $M$ and a closed binary operation $*$ is called a **monoid** if:

1. **Associativity:** $\\forall a, b, c \\in M: \\quad (a * b) * c = a * (b * c)$
2. **Identity Element:** $\\exists e \\in M \\text{ such that } \\forall a \\in M: \\quad a * e = e * a = a$

### Algebraic Hierarchy:
$$\\text{Groupoid (Closure)} \\rightarrow \\text{Semigroup (Associativity)} \\rightarrow \\mathbf{Monoid} \\text{ (Identity)} \\rightarrow \\text{Group (Inverse)}$$

**Examples:**
- $(\\mathbb{N}, +)$ with identity $0$.
- $(\\mathbb{Z}, \\times)$ with identity $1$.`);

registerPattern('DM', q => /group\b|define a group/i.test(q.question), `### Definition of a Group
An algebraic system $(G, *)$ is called a **group** if it satisfies four fundamental axioms:

1. **Closure:** $\\forall a, b \\in G: \\quad a * b \\in G$
2. **Associativity:** $\\forall a, b, c \\in G: \\quad (a * b) * c = a * (b * c)$
3. **Identity Element:** $\\exists e \\in G \\text{ such that } \\forall a \\in G: \\quad a * e = e * a = a$
4. **Inverse Element:** $\\forall a \\in G, \\exists a^{-1} \\in G: \\quad a * a^{-1} = a^{-1} * a = e$

If additionally $\\forall a, b \\in G: a * b = b * a$, it is an **Abelian group**.
- **Example:** $(\\mathbb{Z}, +)$ is an infinite Abelian group with identity $e = 0$ and inverse $-a$.`);

registerPattern('DM', q => /planar graph/i.test(q.question), `### Planar Graph & Euler's Formula

### 1. Definition:
A graph $G = (V, E)$ is called a **planar graph** if it can be drawn in a plane such that no two edges intersect or cross each other except at their common vertices.

### 2. Euler's Formula for Planar Graphs:
For any connected planar graph with $V$ vertices, $E$ edges, and $R$ regions (faces):
$$\\mathbf{V - E + R = 2}$$

### 3. Necessary Planarity Inequality:
For any simple connected planar graph with $V \\ge 3$:
$$E \\le 3V - 6$$

### 4. Kuratowski's Theorem:
A graph is planar if and only if it contains no subgraph homeomorphic to $K_5$ (complete 5-vertex graph) or $K_{3,3}$ (complete bipartite 3-3 graph).`);

registerPattern('DM', q => /generating function/i.test(q.question), `### Generating Functions in Combinatorics

### 1. Definition:
The **ordinary generating function** for an infinite sequence of real numbers $(a_0, a_1, a_2, \\dots)$ is the formal power series:
$$G(x) = \\sum_{n=0}^{\\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \\dots$$

### 2. Key Closed-Form Generating Functions:
- Sequence $(1, 1, 1, 1, \\dots)$:
  $$G(x) = 1 + x + x^2 + x^3 + \\dots = \\frac{1}{1 - x}$$
- Sequence $(1, a, a^2, a^3, \\dots)$:
  $$G(x) = \\frac{1}{1 - ax}$$
- Binomial expansion:
  $$(1 + x)^n = \\sum_{k=0}^n \\binom{n}{k} x^k$$

### 3. Applications:
- Solving linear homogeneous and non-homogeneous recurrence relations.
- Counting integer partitions and arrangements with constraints.`);

// ============================================================================
// 3. COA (COMPUTER ORGANIZATION & ARCHITECTURE) EXPANDED
// ============================================================================

registerPattern('COA', q => /organization and computer architecture/i.test(q.question), `### Computer Organization vs. Computer Architecture

| Parameter | Computer Architecture | Computer Organization |
|:---|:---|:---|
| **Definition** | Conceptual design and functional behavior visible to the assembly programmer. | Physical hardware realization and interconnection of operational units. |
| **Focus** | "What" the processor does (ISA, addressing modes, data formats). | "How" the hardware performs it (control signals, clock frequency, circuit logic). |
| **Stability** | Remains consistent across generations (e.g., x86-64, ARMv8). | Upgraded frequently for performance (e.g., Core i7 12th vs 13th gen). |
| **Key Example** | Does the CPU have a hardware multiply instruction? | Is multiplication done via Wallace tree or repeated addition? |`);

registerPattern('COA', q => /register transfer logic|rtl statements/i.test(q.question), `### Register Transfer Language (RTL)

**Register Transfer Language (RTL)** is a symbolic notation used to specify micro-operations and data transfers between internal processor registers.

### Basic Syntax:
$$\\mathbf{P: \\quad R_2 \\leftarrow R_1}$$
- **Meaning:** If control predicate condition $P = 1$, then on the active clock edge, the contents of register $R_1$ are transferred into $R_2$.

### Core RTL Operations:
- **Direct Transfer:** $R_2 \\leftarrow R_1$
- **Memory Read:** $DR \\leftarrow M[AR]$ (Data read from memory address in Address Register)
- **Memory Write:** $M[AR] \\leftarrow R_1$
- **Arithmetic:** $R_3 \\leftarrow R_1 + R_2$
- **Logic:** $R_1 \\leftarrow R_1 \\oplus R_2$ (Bitwise XOR)`);

registerPattern('COA', q => /shift operations/i.test(q.question), `### Types of Shift Operations in Computer Arithmetic

### 1. Logical Shift:
Shifts bits left or right; vacant positions are unconditionally zero-filled ($0$).
- **Logical Shift Left (LSL):** Equivalent to unsigned multiplication by 2.
- **Logical Shift Right (LSR):** Equivalent to unsigned integer division by 2.

### 2. Arithmetic Shift:
Preserves the algebraic sign bit of signed two's complement numbers.
- **Arithmetic Shift Right (ASR):** MSB sign bit is replicated into itself during rightward shift.
- **Arithmetic Shift Left (ASL):** Identical to LSL but sets overflow flag if the sign bit flips.

### 3. Circular Shift (Rotate):
Bits shifted out of one end re-enter the opposing end without loss of information (Rotate Left / Rotate Right).`);

registerPattern('COA', q => /write through|write back/i.test(q.question), `### Cache Write Policies: Write-Through vs. Write-Back

| Parameter | Write-Through Policy | Write-Back Policy |
|:---|:---|:---|
| **Operation** | Updates both cache and main memory simultaneously on every write. | Updates only the cache line immediately; writes to memory only upon block eviction. |
| **Bus Traffic** | High memory bus traffic from frequent memory writes. | Low memory bus traffic; writes in infrequent bursts. |
| **Dirty Bit** | Not required. | Required (**Dirty Bit**) to track modified blocks. |
| **Speed** | Slower (bounded by main memory write speed). | Fast (operates at full SRAM cache speed). |`);

registerPattern('COA', q => /control memory/i.test(q.question), `### Control Memory in Microprogrammed Control Units

### 1. Definition:
**Control Memory** is a dedicated high-speed read-only memory (ROM) inside the CPU's control unit that stores microprograms (sequences of microinstructions) that generate the control signals required to execute machine instructions.

### 2. Block Diagram:
\`\`\`text
                 +--------------------------+
  Address -----> |  Control Address Reg     | (CAR)
                 +--------------------------+
                               |
                               v
                 +--------------------------+
                 |     CONTROL MEMORY       | (Microprogram ROM)
                 +--------------------------+
                               |
                               v
                 +--------------------------+
                 |  Control Data Register   | (CDR / Microinstruction Reg)
                 +--------------------------+
                   /          |           \\
                  /           |            \\
          Micro-ops      Next Address    Branch Conditions
\`\`\`

### 3. Key Components:
- **Control Address Register (CAR):** Holds the address of the next microinstruction to read.
- **Sequencer / Next-Address Logic:** Determines sequencing (increment CAR, branch, or map from opcode).
- **Control Data Register (CDR):** Holds the active microinstruction generating control words.`);

// ============================================================================
// 4. DBMS EXPANDED SOLUTIONS
// ============================================================================

registerPattern('DBMS', q => /candidate key and super key/i.test(q.question), `### Super Key vs. Candidate Key

| Parameter | Super Key (SK) | Candidate Key (CK) |
|:---|:---|:---|
| **Definition** | Any set of attributes that uniquely identifies a tuple in a relation. | A **minimal Super Key** with no redundant attributes. |
| **Minimality** | Not minimal; may include extra non-identifying attributes. | Strictly minimal; dropping any attribute breaks uniqueness. |
| **Relationship** | Every Candidate Key is a Super Key ($CK \\subset SK$). | Not every Super Key is a Candidate Key. |
| **Primary Key** | Primary Key is selected from Candidate Keys, never arbitrary Super Keys. | One Candidate Key is designated as the relation's **Primary Key**. |

**Example:** For $Student(\\underline{RollNo}, \\underline{Email}, Name)$:
- Super Keys: $\\{RollNo\\}$, $\\{RollNo, Name\\}$, $\\{Email, Name\\}$
- Candidate Keys: $\\{RollNo\\}$, $\\{Email\\}$`);

registerPattern('DBMS', q => /transaction states/i.test(q.question), `### Transaction State Transition Diagram

\`\`\`text
            +-------------------+
            |      ACTIVE       | <--- Initial State
            +-------------------+
               |             |
     (Normal)  |             | (Failure)
               v             v
      +--------------+  +--------------+
      | PARTIALLY    |  |    FAILED    |
      | COMMITTED    |  +--------------+
      +--------------+         |
         |         |           v
(Success)|  (Fail) |      +--------------+
         v         +----> |   ABORTED    |
   +-----------+          +--------------+
   | COMMITTED |                 |
   +-----------+                 v
                          +--------------+
                          |  TERMINATED  |
                          +--------------+
\`\`\`

1. **Active:** Execution begins.
2. **Partially Committed:** Final statement executed; state changes in memory buffers.
3. **Failed:** Operation aborted due to syntax, system, or concurrency errors.
4. **Aborted:** Changes rolled back via undo logs; database restored to checkpoint.
5. **Committed:** Changes permanently written to disk ($COMMIT$).`);

registerPattern('DBMS', q => /data model/i.test(q.question), `### Data Models in DBMS

A **data model** is an integrated collection of conceptual tools for describing data structures, relationships, semantics, and constraints.

### Major Classes of Data Models:
1. **Relational Model (Codd, 1970):** Organizes data into tables (relations) of rows (tuples) and columns (attributes) queried via SQL and Relational Algebra.
2. **Entity-Relationship (ER) Model:** High-level conceptual design consisting of Entities, Attributes, and Relationships depicted via Chen or Crow's Foot diagrams.
3. **Object-Oriented / Object-Relational Model:** Integrates OOP concepts (classes, encapsulation, inheritance) with persistent tables.
4. **Semi-Structured Model (JSON / XML):** Used in NoSQL document stores (MongoDB) where schemas are dynamic.`);

// ============================================================================
// 5. OOPJ EXPANDED SOLUTIONS
// ============================================================================

registerPattern('OOPJ', q => /"this" keyword/i.test(q.question), `### Purpose of \`this\` Keyword in Java
In Java, \`this\` is a reference variable that refers to the **current object** instance.

### Key Applications:
1. **Disambiguate Shadowed Fields:**
\`\`\`java
public class Student {
    private String name;
    public Student(String name) {
        this.name = name; // refers to instance variable
    }
}
\`\`\`
2. **Constructor Chaining (\`this()\`)**:
\`\`\`java
public Student() {
    this("Unknown"); // calls parameterized constructor
}
\`\`\`
3. **Pass Current Instance as Argument:** \`notify(this);\`
4. **Method Chaining:** \`return this;\``);

registerPattern('OOPJ', q => /java buzzwords/i.test(q.question), `### The Java Buzzwords
The official Java White Paper identifies **11 core design characteristics**:

1. **Simple:** Clean C++-like syntax without confusing pointers or operator overloading.
2. **Object-Oriented:** Strictly class-based; supports encapsulation, inheritance, polymorphism.
3. **Platform-Independent:** "Write Once, Run Anywhere" (WORA) via bytecode and JVM.
4. **Robust:** Strong type checking, garbage collection, and exception handling.
5. **Secure:** Sandboxed bytecode verification and no direct memory pointers.
6. **Architecture-Neutral:** Standardized primitive bit-widths across all hardware.
7. **Portable:** Identical execution behavior across OS platforms.
8. **High Performance:** Just-In-Time (JIT) compiler converts hot bytecode into native code.
9. **Multithreaded:** Built-in concurrency primitives (\`Thread\`, \`synchronized\`).
10. **Distributed:** Native TCP/IP networking and RMI support.
11. **Dynamic:** Dynamically links classes and libraries at runtime.`);

registerPattern('OOPJ', q => /abstract class and interface/i.test(q.question), `### Abstract Class vs. Interface in Java

| Parameter | Abstract Class | Interface |
|:---|:---|:---|
| **Keyword** | \`abstract class\` | \`interface\` |
| **Inheritance** | Single inheritance (\`extends\`) | Multiple inheritance (\`implements\`) |
| **Methods** | Concrete and abstract methods. | Abstract by default; Java 8+ allows \`default\` & \`static\`; Java 9+ allows \`private\`. |
| **Variables** | Instance, static, final, mutable fields. | Strictly \`public static final\` constants. |
| **Constructor** | Has constructors (called via \`super()\`). | Cannot have constructors. |
| **Design Intent** | "IS-A" hierarchy with shared state. | "CAN-DO" behavioral contract. |`);

registerPattern('OOPJ', q => /finally.*exception/i.test(q.question), `### Purpose of \`finally\` Block in Java
The \`finally\` block is used to execute critical clean-up code (e.g., closing file streams, socket connections, or database handles).

### Key Rules:
1. **Guaranteed Execution:** Executes whether an exception is thrown, caught, or unhandled.
2. **Executes Even After Return:** Even if \`try\` or \`catch\` contains a \`return\` statement, \`finally\` runs before the method finishes.
3. **Only Exception:** Does not run if \`System.exit(0)\` is called or a fatal JVM crash occurs.

\`\`\`java
FileInputStream fis = null;
try {
    fis = new FileInputStream("data.txt");
} catch (IOException e) {
    System.err.println("Error: " + e.getMessage());
} finally {
    if (fis != null) {
        try { fis.close(); } catch (IOException ignored) {}
    }
}
\`\`\``);

// ============================================================================
// 6. SE (SOFTWARE ENGINEERING) EXPANDED SOLUTIONS
// ============================================================================

registerPattern('SE', q => /software engineering layers/i.test(q.question), `### Layered Technology of Software Engineering

\`\`\`text
+------------------------------------------+
|                 TOOLS                    |  <- CASE Tools, IDEs, CI/CD
+------------------------------------------+
|                METHODS                   |  <- Technical "How-to" (Design, Code, Test)
+------------------------------------------+
|               PROCESS                    |  <- Framework of activities and milestones
+------------------------------------------+
|          A QUALITY FOCUS                 |  <- Bedrock foundation (CMMI, TQM)
+------------------------------------------+
\`\`\`

1. **A Quality Focus (Bedrock):** Organizational commitment to continuous defect prevention and process improvement.
2. **Process Layer:** The foundational framework defining tasks, milestones, deliverables, and quality checkpoints.
3. **Methods Layer:** Technical engineering methodologies (e.g., Object-Oriented Analysis, UML modeling, Black/White box testing).
4. **Tools Layer:** Automated support tools (Git, Jira, Jenkins, Selenium, JUnit).`);

registerPattern('SE', q => /white box/i.test(q.question), `### White Box Testing (Glass Box Testing)
**White Box Testing** is a testing technique where internal source code logic, branches, loops, and data structures are analyzed and verified.

### Key Techniques:
1. **Basis Path Testing:** Measures Cyclomatic Complexity $V(G) = E - V + 2P$ to identify independent execution paths.
2. **Statement Coverage:** Guarantees every executable source line runs at least once.
3. **Branch / Decision Coverage:** Verifies every boolean conditional branch evaluates to both True and False.
4. **Loop Testing:** Exercises loops at their zero, minimum, typical, and maximum boundary conditions.`);

registerPattern('SE', q => /testing and debugging/i.test(q.question), `### Testing vs. Debugging

| Parameter | Software Testing | Software Debugging |
|:---|:---|:---|
| **Goal** | Discovers bugs and validates software requirements. | Diagnoses root cause in source code and removes bugs. |
| **Performed By** | QA engineers, automated test runners, users. | Software developers / programmers. |
| **Nature** | Systematic, planned, reproducible verification. | Heuristic, inductive problem-solving and code tracing. |
| **Tools** | JUnit, Postman, Selenium. | Debuggers (GDB, Eclipse/VS Code debuggers), profilers. |`);

// ============================================================================
// 7. IE (INNOVATION & ENTREPRENEURSHIP) FOUNDATIONAL SOLUTIONS
// ============================================================================

registerExact('IE', 'Explain the 9 Building Blocks of Business Model Canvas (BMC).', 1, 10, `### The Business Model Canvas (BMC)
The **Business Model Canvas**, developed by Alexander Osterwalder, is a visual chart consisting of 9 building blocks that describe a startup's value proposition, infrastructure, customers, and finances:

\`\`\`text
+---------------------+-------------------+-------------------+-------------------+---------------------+
| KEY PARTNERS        | KEY ACTIVITIES    | VALUE             | CUSTOMER          | CUSTOMER            |
| - Suppliers         | - Production      | PROPOSITIONS      | RELATIONSHIPS     | SEGMENTS            |
| - Strategic alliances| - Problem-solving| - Core products   | - Self-service    | - Target users      |
|                     +-------------------+   solving customer| - Personal assist | - Mass or niche     |
|                     | KEY RESOURCES     |   pain points     +-------------------+                     |
|                     | - Physical, IP    |                   | CHANNELS          |                     |
|                     | - Human, financial|                   | - Direct, web     |                     |
+---------------------+-------------------+-------------------+-------------------+---------------------+
| COST STRUCTURE                          | REVENUE STREAMS                                             |
| - Fixed & variable costs, economies of scale | - Direct sales, subscriptions, licensing, usage fees    |
+-----------------------------------------+-------------------------------------------------------------+
\`\`\`

1. **Customer Segments:** Target demographic or niche market.
2. **Value Propositions:** Bundle of products/services solving specific customer problems.
3. **Channels:** Distribution and communication touchpoints.
4. **Customer Relationships:** Retention, acquisition, and support strategies.
5. **Revenue Streams:** Monetization model (subscription, one-time sales).
6. **Key Resources:** Essential physical, intellectual, human, and capital assets.
7. **Key Activities:** Critical operational processes required to deliver value.
8. **Key Partnerships:** External network of suppliers and partners.
9. **Cost Structure:** Major fixed, variable, and operational expenditures.`);

registerExact('IE', 'Explain the 5 stages of the Design Thinking process.', 1, 5, `### The 5 Stages of Design Thinking (Stanford d.school)

\`\`\`text
[Empathize] ---> [Define] ---> [Ideate] ---> [Prototype] ---> [Test]
     ^                                                          |
     +------------------- (Iterative Feedback) -----------------+
\`\`\`

1. **Empathize:** Conduct qualitative research and observe real users to understand their physical and emotional pain points without bias.
2. **Define:** Synthesize observations into a focused, human-centered **Problem Statement** ("How might we...").
3. **Ideate:** Brainstorm unconstrained creative solutions using mind mapping, SCAMPER, and divergent thinking.
4. **Prototype:** Build inexpensive, scaled-down, tactile versions (wireframes, paper mockups, 3D printed models) to explore potential solutions.
5. **Test:** Rigorously test prototypes with end users to gather qualitative feedback and iterate.`);

// ============================================================================
// WRITE AND SAVE ALL SOLUTIONS
// ============================================================================

let totalSolved = 0;
const progress = {
  updatedAt: new Date().toISOString(),
  subjects: {},
  overall: {
    totalQuestions: QUESTIONS_DATABASE.length,
    totalSolved: 0
  }
};

['DM', 'COA', 'DBMS', 'OOPJ', 'SE', 'ES', 'IE'].forEach(sub => {
  const filePath = path.join(SOLUTIONS_DIR, `${sub}.json`);
  const solutions = solutionsBySubject[sub] || {};
  const count = Object.keys(solutions).length;
  totalSolved += count;

  const totalQs = QUESTIONS_DATABASE.filter(q => q.subjectId === sub).length;
  progress.subjects[sub] = {
    totalQuestions: totalQs,
    solvedCount: count,
    status: (count >= totalQs && totalQs > 0) ? 'complete' : 'active'
  };

  const payload = {
    subjectId: sub,
    generatedAt: new Date().toISOString(),
    count,
    solutions
  };

  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`[OK] Saved ${count} solutions to data/solutions/${sub}.json`);
});

progress.overall.totalSolved = totalSolved;
fs.writeFileSync(path.join(SOLUTIONS_DIR, '.progress.json'), JSON.stringify(progress, null, 2), 'utf8');
console.log(`\n======================================================`);
console.log(`Total Solutions Generated: ${totalSolved}`);
console.log(`ES Coverage: ${progress.subjects.ES.solvedCount} / ${progress.subjects.ES.totalQuestions} (${Math.round((progress.subjects.ES.solvedCount / progress.subjects.ES.totalQuestions)*100)}%)`);
console.log(`======================================================`);
