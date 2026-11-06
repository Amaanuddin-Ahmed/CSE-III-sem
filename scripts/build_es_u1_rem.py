# -*- coding: utf-8 -*-
"""
Helper to append remaining Unit 1 solutions to build_es_u1.py
"""

U1_REMAINING = [
  (
    "ES-B1-046",
    "How does nitrogen (N2) cycle maintain proper functioning of the ecosystem?",
    1,
    3,
    """### 1. Essential Ecological Role of Nitrogen
Nitrogen ($N_2$) comprises ~78% of the Earth's atmosphere by volume, but atmospheric nitrogen is inert and chemically inaccessible to higher plants and animals due to its exceptionally strong covalent triple bond ($N \\equiv N$, bond dissociation energy: $945\\text{ kJ/mol}$).

The **Nitrogen Cycle** is the complex biogeochemical cycle that transforms atmospheric $N_2$ into biologically available forms (nitrates, nitrites, ammonium) and eventually returns it to the atmosphere, maintaining ecosystem homeostasis.

---

### 2. Major Stages in Ecosystem Maintenance

```
Atmospheric Nitrogen (N2)
       │
       ▼ (Nitrogen Fixation: Rhizobium, Azotobacter, Lightning)
Ammonium / Ammonia (NH4+ / NH3)
       │
       ▼ (Nitrification - Phase 1: Nitrosomonas)
Nitrites (NO2-)
       │
       ▼ (Nitrification - Phase 2: Nitrobacter)
Nitrates (NO3-) ───► Plant Uptake & Assimilation (Amino Acids, DNA, Proteins)
       ▲                                               │
       │                                               ▼ (Herbivores & Consumers)
       │                                        Animal Biomass
       │                                               │
       │                                               ▼ (Death & Excretion)
Ammonification (Decomposers: Bacillus, Clostridium) ◄──┘
       │
       ▼ (Denitrification: Pseudomonas, Thiobacillus)
Atmospheric Nitrogen (N2) Returns to Air
```

1. **Cellular Synthesis & Biomass Production:**
   - Nitrogen is the indispensable building block for amino acids, proteins, enzymes, chlorophyll, and nucleic acids ($DNA$ and $RNA$).
   - Assimilation of inorganic nitrates ($NO_3^-$) by plant roots supports the foundational primary productivity of terrestrial and aquatic food chains.

2. **Decomposition & Soil Fertility Recycling (Ammonification):**
   - Heterotrophic ammonifying bacteria (*Bacillus*, *Clostridium*) break down organic nitrogenous dead biomass and animal urea/feces into ammonia ($NH_3/NH_4^+$), preventing organic waste pileup and maintaining soil organic matter.

3. **Prevention of Nitrate Toxicity & Atmospheric Balance (Denitrification):**
   - Anaerobic denitrifying bacteria (*Pseudomonas denitrificans*, *Thiobacillus*) reduce excess nitrates back into $N_2$ gas.
   - This prevents lethal nitrate leaching into aquifers (which causes infant methemoglobinemia / *blue baby syndrome*) and maintains stable atmospheric nitrogen concentrations.

> **∴ Examination Takeaway:** The nitrogen cycle sustains ecosystem productivity by transforming inaccessible $N_2$ into essential biomolecules via microbial fixation and recycling nutrients without soil nitrogen exhaustion."""
  ),

  (
    "ES-B1-049",
    "Differentiate biomagnification and bioaccumulation.",
    1,
    2,
    """### 1. Definitions & Conceptual Distinction
Both **Bioaccumulation** and **Biomagnification** describe the uptake and concentration of persistent chemical pollutants within living organisms, but they operate at distinct ecological scales:

- **Bioaccumulation** occurs **within a single organism** over its lifespan.
- **Biomagnification** occurs **across multiple trophic levels** throughout an entire food chain.

---

### 2. Direct Comparative Matrix

| Feature | Bioaccumulation | Biomagnification (Biological Amplification) |
| :--- | :--- | :--- |
| **Ecological Scale** | Operates at the **individual organism** level within a single trophic level. | Operates across the **entire food chain** across multiple trophic levels. |
| **Mechanism** | Rate of chemical intake from food, water, or air exceeds the organism's rate of metabolic excretion and catabolism ($R_{\\text{uptake}} > R_{\\text{elimination}}$). | Progressive transfer and amplification of non-biodegradable, fat-soluble toxins from prey to predator. |
| **Time Frame** | Occurs over the organism's individual lifespan as it ages (older organisms have higher concentrations). | Occurs progressively from producer ($T_1$) to top carnivore ($T_4 / T_5$). |
| **Trophic Level Dynamic** | Can occur in any individual at any trophic level (e.g., a fish absorbing heavy metals directly from lake water). | Strictly increases with each successive step up the ecological pyramid ($T_1 < T_2 < T_3 < T_4$). |
| **Typical Contaminants** | Fat-soluble pesticides (DDT, Lindane), heavy metals (Mercury, Lead, Cadmium). | Recalcitrant, lipid-soluble persistent organic pollutants (POPs) such as DDT, PCBs, Methylmercury. |
| **Classical Example** | An individual carp accumulating cadmium in its kidneys from industrial runoff over 5 years. | DDT amplifying from lake water ($0.000003\\text{ ppm}$) through zooplankton to fish and bald eagles ($25\\text{ ppm}$). |

> **∴ Examination Takeaway:** Bioaccumulation is time-dependent accumulation in one organism; biomagnification is trophic-dependent amplification across a food chain."""
  ),

  (
    "ES-B1-051",
    "Why is food web more important ecologically than the concept of simple food chain?",
    1,
    2,
    """### 1. Ecological Significance of Food Webs
A **food chain** represents an idealized, linear sequence of organisms where energy flows in a single straight path ($A \\to B \\to C \\to D$). However, in natural ecosystems, linear food chains rarely exist in isolation. Instead, multiple food chains are interconnected into a complex, multidirectional network known as a **Food Web**.

The food web is far more ecologically significant for several reasons:

1. **Ecosystem Resilience & Dynamic Stability:**
   - In a simple food chain, if one species is removed or struck by disease (e.g., rabbits dying in a grass $\\to$ rabbit $\\to$ fox chain), the predator faces starvation and the producer overgrows, destabilizing the ecosystem.
   - In a **food web**, predators have **alternative food choices** (the fox eats mice, squirrels, berries, or birds). This ecological redundancy stabilizes populations against localized disturbances.

2. **Maintenance of Population Homeostasis (Self-Regulation):**
   - Food webs prevent explosive overpopulation of any single species through polyphagous feeding (predators shift hunting preference toward whatever prey species is currently abundant, preventing any single prey explosion).

3. **Nutrient Recycling & Multiple Niche Pathways:**
   - Food webs integrate both **grazing food chains** (living plant-based) and **detritus food chains** (decomposer-based), ensuring that energy and essential bio-elements are recycled continuously through micro-habitats without deadlocks.

```
       [Hawks / Top Predators]
         ▲               ▲
         │ ╲           ╱ │
         │   ╲       ╱   │
      [Snakes] ───► [Frogs]
         ▲             ▲
         │ ╲         ╱ │
         │   ╲     ╱   │
     [Insects] ───► [Mice]
         ▲             ▲
         │ ╲         ╱ │
         └──── [Plants] ────┘
  (Multiple interconnected feeding pathways create resilience)
```

> **∴ Examination Takeaway:** Food webs provide dietary alternatives and ecological redundancy, rendering natural ecosystems resilient and self-stabilizing against environmental shocks."""
  )
]

print("Remaining U1 solutions defined:", len(U1_REMAINING))
