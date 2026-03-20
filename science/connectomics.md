# Connectomics and Brain Emulation: State of the Field
## Science Reference Document — Prism v2

*Compiled: March 2026 | Project: Prism — Human-AI Symbiosis Codex | License: CC BY 4.0*
*Citation format: [Author/Source, Year](URL)*

---

## Table of Contents

1. [Connectome Mapping Progress](#1-connectome-mapping-progress)
   - 1.1 C. elegans — 302 neurons (White 1986, Cook 2019)
   - 1.2 Drosophila FlyWire — 139,255 neurons (9 Nature papers 2024)
   - 1.3 MICrONS Mouse — 1 mm³ mammalian cortex (2025)
   - 1.4 Human H01 — 1 mm³ temporal cortex (2024)
2. [Key Findings from Connectomics](#2-key-findings)
3. [Whole Brain Emulation (WBE)](#3-whole-brain-emulation)

---

## 1. Connectome Mapping Progress

### 1.1 C. elegans (302 Neurons) — The Foundational Connectome

**White et al. (1986)**: The complete synaptic wiring diagram of *C. elegans* hermaphrodite — 302 neurons, ~5,000 chemical synapses, 2,000 neuromuscular junctions, 600 gap junctions — was first published by White, Southgate, Thomson, and Brenner in *Philosophical Transactions of the Royal Society B*, 314:1–340, 1986. The project required 15 years of electron microscopy reconstruction and founded the field of connectomics. The paper has been cited >2,500 times.

Source: [White et al. 1986, PMC commentary](https://pmc.ncbi.nlm.nih.gov/articles/PMC4360118/)

**Cook et al. (2019)**: Updated complete connectome of the adult hermaphrodite incorporating all neurons, gap junctions, and more rigorous synapse quantification. Published *Nature*, 571:63–71, 2019.

Source: [Cook et al. 2019, Nature](https://www.nature.com/articles/s41586-019-1352-7)

**The behavior gap — critical finding**: Despite 35+ years of study, the 302-neuron connectome has **not been sufficient to fully compute behavior from structure alone**. Neuropeptide "wireless" signaling — extrasynaptic chemical communication not captured in the wiring diagram — plays a major role. Ripoll-Sánchez et al. (2023, *Neuron*) identified 461 peptide–GPCR signaling pairs in C. elegans, delineating an extensive neuropeptidergic connectome operating in parallel with the synaptic wiring diagram.

A 2025 PNAS study demonstrated that C. elegans connectivity can be accurately predicted from a small set of biological parameters — neuronal cell type, birth timing, spatial proximity, reciprocity, and pruning — suggesting nervous system architecture arises from compact developmental programs.

**Closed-loop simulations** of C. elegans can reproduce basic locomotor behaviors, but complex behaviors like chemotaxis and learning remain incompletely explained by structure alone, emphasizing the roles of dynamics, neuromodulation, and plasticity. The connectome-to-behavior gap persists even at 302 neurons.

---

### 1.2 Drosophila melanogaster — FlyWire Full Adult Brain Connectome (2024)

In October 2024, the FlyWire Consortium published **nine papers simultaneously in *Nature***, unveiling the first complete synaptic-resolution connectome of an adult animal brain. This is the largest and most complex connectome ever assembled.

**Scale**:
- **139,255 neurons** (also cited as ~130,000–140,000 in companion papers depending on threshold)
- **~50 million synaptic connections** (15.1 million weighted edges at 5-synapse threshold; 50+ million total)
- **~100 terabytes** of whole-brain electron microscopy volume (FAFB dataset)
- **1.6 petabytes** of processed data

**Consortium**: 200+ researchers at 50+ labs, led by Princeton University (Sebastian Seung lab), with major contributions from University of Cambridge and University of Vermont.

Source: [NIMH press release, Oct 2, 2024](https://www.nimh.nih.gov/news/science-updates/2024/researchers-fully-map-neural-connections-of-the-fruit-fly-brain); [Schlegel et al., Nature 2024; DOI: 10.1038/s41586-024-07968-y](https://www.nature.com/articles/s41586-024-07968-y); [Dorkenwald et al., Nature 2024](https://www.nature.com/articles/s41586-024-07686-5)

**Key scientific findings**:

**1. Rich-club organization**: 30% of neurons (~40,218) form a "rich club" — a densely interconnected core with connection probability **5.4× higher** than average. Central brain neurons are over-represented in the rich club; optic lobe intrinsic neurons are under-represented. Broadcasters (predominantly cholinergic, 75%) differ from integrators (predominantly visual projection neurons). ([Schlegel et al., Nature, 2024; DOI: 10.1038/s41586-024-07968-y](https://www.nature.com/articles/s41586-024-07968-y))

**2. Small-world and recurrent architecture**: Average shortest directed path length between any two neurons is **4.42 hops**; every neuron is reachable within 13 hops. Clustering coefficient = 0.0477 (significantly higher than random networks), indicating a recurrent, non-feedforward architecture.

**3. Connectivity patterns**: Every neuron connects to an average of approximately 44 other neurons. Neurotransmitter classifications cover six types: acetylcholine (excitatory), GABA (inhibitory), glutamate (largely inhibitory in fly), dopamine, octopamine, and serotonin.

**4. Stereotypy**: 3,643 high-confidence consensus cell types identified across multiple brain hemispheres. Cells with ≥0.9% of a neuron's total input have >90% chance of being present in any individual fly brain — high stereotypy across individuals.

**5. Disease relevance**: 75% of human disease-related genes have homologues in the Drosophila genome, making the connectome directly relevant to human brain disorder research. (Seung, Neuroscience 2024 press conference)

**6. Circuit tracing**: The connectome allows tracing of complete circuits from sensory input to motor output for the first time in an adult complex brain.

**Data accessibility**: All data publicly available at [FlyWire Codex](https://codex.flywire.ai).

---

### 1.3 Mouse Brain Connectome — MICrONS (2025)

In April 2025, Allen Institute, Baylor College of Medicine, and Princeton University published results from the MICrONS program in a **10-paper special issue of *Nature*** — the largest combined structural-functional connectome of a mammalian brain.

**Scale (MICrONS dataset)**:
- **1 cubic millimeter** of mouse primary visual cortex (VISp)
- **200,000+ cells** (neurons, glia, vasculature)
- **4 kilometers of axons** traced
- **524 million synaptic connections**
- **1.6 petabytes** of data (~22 years of continuous HD video)
- Represents approximately **1/500th** (0.2%) of the full volume of a mouse brain

**Methodology**: The mouse was presented with visual stimuli (movies, YouTube clips) while calcium imaging captured activity from ~75,000 neurons. The same cubic millimeter was then sliced into ~28,000 layers (~30 nm thick each), imaged via electron microscopy, and reconstructed by AI with human proofreading.

**Key finding**: First dataset combining **functional activity recordings with structural connectivity from the same tissue** — "structure-function" alignment. Revealed specific connectivity rules governing how visual neurons with shared response properties connect.

Source: [Allen Institute press release, Jul 2025](https://alleninstitute.org/news/scientists-complete-largest-wiring-diagram-and-functional-map-of-the-brain-to-date/); [NIH press release, Apr 2025](https://www.nih.gov/news-events/news-releases/scientists-map-unprecedented-detail-connections-visual-perception-mouse-brain); [Princeton Engineering, Apr 2025](https://engineering.princeton.edu/news/2025/04/09/scientists-map-vision-centers-mammalian-brain)

**Scale context** — what fraction of mouse brain is mapped:
- The MICrONS mm³ is **1/500th** of the mouse brain by volume
- Mouse brain: ~70 million neurons total; 8–14 million in cerebral cortex
- Current structural connectomics covers at best **~0.17%** of the full mouse connectome

**What it would take to map a full mouse connectome**:
Allen Institute / Wellcome Trust estimated (2023):
- **500 petabytes** storage
- **$200–300 million** for imaging
- **$7–21 billion** for human proofreading
- **17 years** at then-current methods

Technological breakthroughs (expansion microscopy, AI tracing — PATHFINDER reducing proofreading time by 80×) have brought estimates down substantially. NIH BRAINS CONNECT project aims to map 1/30th of the mouse brain by 2028 and the full mouse brain by ~2033 at ~$100 million projected cost with updated methods.

---

### 1.4 Human Connectome — Current Status

**Two distinct paradigms**:

#### A. Macroscale — Human Connectome Project (HCP, MRI-based)

NIH-funded, headquartered at Washington University in St. Louis and University of Minnesota. Maps white-matter tract connectivity and functional connectivity at millimeter resolution — approximately **1 million times coarser** than synaptic resolution.

- **Status (2025)**: Data from 1,200 young adults (ages 22–35) publicly available; lifespan cohorts available; >1,500 papers cited HCP data as of 2021
- **What it maps**: Mesoscale white-matter pathway topology, functional connectivity (resting-state networks), heritability of tract metrics (some as high as 0.9)
- **What it does NOT map**: Individual synapses, individual neuron morphology, exact wiring

Source: [Human Connectome Project](https://www.humanconnectome.org)

#### B. Nanoscale — H01 Dataset (Electron Microscopy, 2024)

**H01 Dataset specifics (published May 2024, Science)**:
- **1 cubic millimeter** of human temporal lobe cortex
- **57,000 cells** reconstructed
- **150 million synaptic connections** (102.5M excitatory, 50.3M inhibitory — alternative analyses differ slightly)
- **230 millimeters of blood vessels**
- **1,400 terabytes (1.4 petabytes)** of electron microscopy data
- Led by Jeff Lichtman (Harvard) and Google Research

**Notable finding**: Single axon making up to **50 synapses** onto another axon ("axon-to-axon" connections) — previously unreported in human cortex.

Source: [Shapson-Coe et al., Science 2024; DOI: 10.1126/science.adk4858](https://www.science.org/doi/10.1126/science.adk4858); [Harvard Gazette, May 2024](https://news.harvard.edu/gazette/story/2024/05/the-brain-as-weve-never-seen-it/)

**What fraction of the human brain is mapped at synaptic resolution?**

| Quantity | Value |
|---|---|
| Human neurons | ~86 billion |
| Human synapses | ~100 trillion |
| Brain volume | ~1,300 cm³ (1.3 × 10⁶ mm³) |
| H01 coverage | 1 mm³ |
| **Fraction of brain mapped** | **~1/1,300,000 (0.000077%)** |
| Estimated full human connectome data size | 2.8 zettabytes |
| Estimated cost at current efficiency | ~$100 billion |

Dr. Forrest Collman (Allen Institute) stated in 2025: *"The prospect of reconstructing the entire human brain at the level of all of the connections — that's something for the distant future."* (CNN/KESQ, April 2025)

---

## 2. Key Findings from Connectomics

### 2.1 Rich-Club Organization

First demonstrated mathematically in human fMRI data ([van den Heuvel & Sporns, 2011, J Neuroscience](https://www.jneurosci.org/content/31/44/15775)); now confirmed at synaptic resolution in the fly connectome (FlyWire, 2024).

**Definition**: Nodes (neurons or brain regions) with many connections are more likely to be connected to each other than expected by chance — forming a densely interconnected "rich club." In the FlyWire fly connectome, the rich club:
- Comprises 30% of neurons
- Has connection probability 5.4× higher than average
- Is over-represented by central brain neurons; under-represented by optic lobe neurons

In human brain (MRI-level): Rich-club regions include superior frontal cortex, precuneus, superior parietal cortex, subcortical structures. Rich-club connections are disproportionately costly (long axons, high myelination) and disproportionately important — their disruption correlates with cognitive impairment in neurological disorders.

### 2.2 Path Length and Connectivity Patterns

From FlyWire (2024):
- Average shortest directed path: **4.42 hops**
- Maximum path between any two neurons: **13 hops**
- Clustering coefficient: **0.0477** (vs. random networks — significantly higher)

These metrics indicate a **small-world topology**: locally clustered (efficient information segregation) with short global paths (efficient information integration) — the same architecture seen in human brain functional connectivity networks.

### 2.3 The Connectome-to-Behavior Gap — Neuropeptide "Wireless" Signaling

**The core gap**: Even the fully mapped 302-neuron C. elegans connectome cannot fully predict behavior. The reason is "wireless" signaling — neuropeptides (monoamines, neuropeptides) that are released from neurons and act on receptors throughout the nervous system, not just at specific synaptic junctions.

Ripoll-Sánchez et al. (*Neuron*, 2023) identified **461 peptide–GPCR signaling pairs** in C. elegans — a neuropeptidergic "wireless connectome" operating in parallel with the synaptic wiring diagram. This volumetric/extrasynaptic signaling is not captured by electron microscopy connectomics.

**Implication for brain emulation**: A complete structural connectome, even at full synaptic resolution, is **not sufficient** to emulate a nervous system. Neuromodulatory dynamics, plasticity rules, and volumetric signaling must also be captured — adding multiple additional layers of complexity.

---

## 3. Whole Brain Emulation (WBE)

### 3.1 Sandberg & Bostrom (2008) Roadmap — Current Relevance

Sandberg A, Bostrom N. *Whole Brain Emulation: A Roadmap*. Technical Report #2008-3. Future of Humanity Institute, Oxford University, 2008. ([FHI Technical Report](https://www.fhi.ox.ac.uk/brain-emulation-roadmap-report.pdf))

The roadmap identified the following necessary steps for WBE:

1. **Scanning**: Obtain complete structural data on a brain at sufficient resolution (estimated: ~1 nm for synaptic resolution)
2. **Translation**: Convert scan data into a computational model of sufficient detail
3. **Simulation**: Run the model at sufficient speed and with sufficient fidelity to emulate the original nervous system

The roadmap emphasized this is a **conditional feasibility** argument — WBE is theoretically possible if: (a) mind is substrate-independent, (b) scanning and simulation technologies advance sufficiently, and (c) structural data is sufficient to capture functional properties. None of these conditionals is established.

**Current relevance**: The MICrONS (2025) and FlyWire (2024) projects represent exactly the kind of progress the Sandberg roadmap predicted would be necessary — but the scale gap between current capabilities and the full human brain remains enormous.

### 3.2 Computational Requirements (Current Estimates)

**For the human brain**:

| Quantity | Estimate | Source |
|---|---|---|
| Neurons | ~86 billion | Standard neuroanatomy |
| Synapses | ~100–500 trillion | Standard neuroanatomy |
| Computations equivalent to brain | 10¹⁵ – 10¹⁷ FLOPS/s | [Sandberg & Bostrom, 2008](https://www.fhi.ox.ac.uk/brain-emulation-roadmap-report.pdf) |
| Current fastest supercomputer (Frontier, 2024) | ~2 × 10¹⁸ FLOPS/s (peak) | [TOP500, Jun 2024](https://www.top500.org) |
| Energy cost of brain | ~20 watts | Standard estimate |
| Energy cost of equivalent compute (current) | ~gigawatts | Order-of-magnitude estimate |

**Important caveat**: The neuron-level simulation approach (treating each neuron as a spiking unit) may significantly underestimate required computation, as sub-neuronal processes (dendritic computation, synaptic dynamics, neuromodulation) may also be computationally critical. Conversely, efficient compiled representations might reduce requirements if the right functional abstraction level is identified.

**Current capability context**:
- The MICrONS project used 1.6 petabytes to represent 1 mm³ of mouse cortex with ~524 million synapses
- Scaling to a full human brain: ~1.3 million mm³ × 1.6 petabytes = ~2 zettabytes of structural data alone
- Full functional simulation would require orders of magnitude more computation

Source: [Asimov Press WBE analysis, 2026](https://press.asimov.com/articles/brains)

### 3.3 Expert Timeline Estimates

There is no consensus on WBE timelines among experts. The range is large:

- **Pessimistic view (mainstream neuroscience)**: WBE within the 21st century is implausible due to fundamental unknowns about the relationship between structure and function, the role of non-synaptic signaling, and the irreducibility of biological dynamics to digital simulation
- **Moderate transhumanist view (Kurzweil, 2005)**: Human-level brain emulation by ~2029, based on exponential growth curves for computational power and neuroscience understanding
- **Sandberg & Bostrom (2008)**: No specific timeline; emphasized necessary preconditions and uncertainties
- **Asimov Press analysis (2026)**: Mouse brain full connectome by ~2033 is plausible with current trajectories; human brain: no realistic near-term date
- **Current expert consensus**: Meaningful whole-brain emulation of a mammalian brain is a multi-decade challenge at minimum

### 3.4 Feasibility Assessment

**What is established**:
- Connectome mapping at synaptic resolution is technically feasible and progressing rapidly
- Digital simulation of small nervous systems (C. elegans level) can reproduce some behaviors
- Computational infrastructure is growing but not yet near requirements for human-scale emulation

**What is not established**:
- Whether structural connectome + basic cell-type data is **sufficient** for functional emulation (the neuropeptide gap suggests it is not)
- Whether there exist efficient abstractions that reduce computational requirements without losing functional fidelity
- Whether human consciousness would be "transferred" vs. "copied" in an emulation scenario (this is a philosophical question, not a technical one)
- The ethical and identity status of brain emulations

**Summary table — connectome scale progression**:

| System | Neurons | Synapses | Year completed | Data size |
|---|---|---|---|---|
| C. elegans (hermaphrodite) | 302 | ~5,000 | 1986 (White); 2019 (Cook update) | <1 GB |
| Drosophila adult brain | 139,255 | ~50 million | 2024 (FlyWire) | ~1.6 petabytes |
| Mouse visual cortex 1 mm³ | ~200,000 cells | 524 million | 2025 (MICrONS) | 1.6 petabytes |
| Mouse full brain | ~70 million | ~100 billion | ~2033 (projected) | ~500 petabytes |
| Human cortex 1 mm³ | 57,000 cells | 150 million | 2024 (H01) | 1.4 petabytes |
| Human full brain | ~86 billion | ~100 trillion | Not projected | ~2.8 zettabytes (est.) |

**Key open questions**:
1. Is synaptic connectivity alone sufficient to capture brain function, or are subcellular and volumetric processes essential?
2. How much neuromodulatory/peptidergic data is required for functional emulation?
3. Can efficient functional abstractions reduce computational requirements without losing fidelity?
4. What level of structural detail is required to capture learning and plasticity?
5. Would an emulation running faster than biological speed count as the "same" mind?

---

*Document type: Science reference (factual, cited). No speculative claims. Part of Prism v2 project.*
*Prism v2 | Science | CC BY 4.0 | Author: Gennady Prigodsky*
