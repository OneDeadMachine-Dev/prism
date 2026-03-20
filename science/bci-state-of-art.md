# Brain-Computer Interfaces: State of the Art
## Science Reference Document — Prism v2

*Compiled: March 2026 | Project: Prism — Human-AI Symbiosis Codex | License: CC BY 4.0*
*Citation format: [Author/Source, Year](URL)*

---

## Table of Contents

1. [Overview of the BCI Field](#1-overview)
2. [Major Platforms](#2-major-platforms)
   - 2.1 Neuralink N1 — PRIME Clinical Trial
   - 2.2 Synchron Stentrode — SWITCH and COMMAND Trials
   - 2.3 Blackrock Neurotech — Utah Array Longevity Data
   - 2.4 BrainGate — Speech Decoding Achievements
3. [Bidirectional BCIs: State of the Art](#3-bidirectional-bcis)
4. [Signal Decoding Benchmarks](#4-signal-decoding-benchmarks)
5. [Key Limitations](#5-key-limitations)
6. [Frontier Research](#6-frontier-research)
7. [Summary Table: Platform Comparison](#7-summary-table)

---

## 1. Overview of the BCI Field

A brain-computer interface (BCI) is a system that establishes a direct communication pathway between the brain and an external device, bypassing conventional neuromuscular output channels. BCIs can be classified by invasiveness (non-invasive scalp EEG, minimally invasive endovascular, invasive intracortical), by directionality (read-only, write-only, or bidirectional), and by clinical indication (motor restoration, communication, sensory substitution, neuromodulation).

As of 2026, the field has produced the following milestones:

- **First-in-human permanently implanted FDA-IDE BCI**: Synchron Stentrode (COMMAND trial, 2022–2024)
- **First fully wireless intracortical BCI in humans**: Neuralink N1 (PRIME trial, January 2024)
- **First inner-speech BCI exceeding conversational rates**: BrainGate, 145–146 words per minute ([Kunz et al., Cell, 2025](https://www.nih.gov/news-events/nih-research-matters/decoding-inner-speech-brain-signals))
- **Largest electrode-count wireless BCI**: Precision Neuroscience Layer 7, 1,024-channel μECoG, FDA 510(k) cleared April 2025 ([FDA K242618, 2025](https://www.accessdata.fda.gov/cdrh_docs/pdf24/K242618.pdf))
- **Longest continuous BCI use in a human**: Nathan Copeland (Blackrock Utah Array), approximately 10 years as of 2024 ([Blackrock Neurotech, 2024](https://blackrockneurotech.com/insights/the-state-of-clinical-trials-of-implantable-brain-computer-interfaces/))

The field is characterized by rapid capability advances alongside persistent engineering challenges: electrode degradation, immune response, signal bandwidth limitations, and the gap between laboratory performance and chronic real-world use.

---

## 2. Major Platforms

### 2.1 Neuralink N1 — PRIME Clinical Trial

#### Device Specifications

| Parameter | Specification | Source |
|---|---|---|
| Electrode count | 1,024 | [Neuralink PRIME Update, Apr 2024](https://neuralink.com/updates/prime-study-progress-update/) |
| Thread count | 64 flexible polymer threads | [FDA IDE Summary, 2023](https://neuralink.com) |
| Electrodes per thread | 16 | [Arbaugh Q&A, Big Technology, Dec 2024](https://www.bigtechnology.com/p/full-qa-neuralink-patient-noland) |
| Thread material | Polyimide (biocompatible polymer) | [IJPS Journal, Jul 2025](https://www.ijpsjournal.com/article/Recent+Progress+on+Neuralinks+BrainComputer+Interfaces) |
| Thread diameter | 4–6 µm | [IJPS Journal, Jul 2025](https://www.ijpsjournal.com/article/Recent+Progress+on+Neuralinks+BrainComputer+Interfaces) |
| Implant dimensions | 23 mm × 8 mm (coin-sized) | [IJPS Journal, Jul 2025](https://www.ijpsjournal.com/article/Recent+Progress+on+Neuralinks+BrainComputer+Interfaces) |
| Wireless protocol | Bluetooth 2.4 GHz | [FDA IDE Summary, 2023](https://neuralink.com) |
| Data rate | 10 Mbps bidirectional | [FDA IDE Summary, 2023](https://neuralink.com) |
| ADC sampling rate | 20 kHz per channel | [Sparkco AI, Nov 2025](https://sparkco.ai/blog/brain-computer-interface-neuralink-fda-approval) |
| Signal bandwidth | 500 Hz – 7.5 kHz (action potentials) | [Sparkco AI, Nov 2025](https://sparkco.ai/blog/brain-computer-interface-neuralink-fda-approval) |
| Battery life | ~5 hours (inductive wireless charging) | [Fortune/Arbaugh, Aug 2025](https://fortune.com/2025/08/23/neuralink-participant-1-noland-arbaugh-18-months-post-surgery-life-changed-elon-musk/) |
| Surgical system | R1 robotic insertion | [Neuralink blog](https://neuralink.com) |
| Target region | Primary motor cortex (hand) | [Neuralink PRIME Update, Apr 2024](https://neuralink.com/updates/prime-study-progress-update/) |

Electrode density (~1 electrode per mm³) represents approximately 10× improvement over the conventional Utah Array (96–128 electrodes). On-chip ASICs perform spike sorting and velocity Kalman filtering before wireless transmission. Each electrode is dual-functional: recording and stimulation.

#### PRIME Study Enrollment

- **Regulatory pathway**: FDA Breakthrough Device Designation; IDE approval May 2023
- **First implantation**: January 28, 2024, Barrow Neurological Institute, Phoenix, Arizona
- **First patient (P1)**: Noland Arbaugh, 29 years old, tetraplegic (C5 spinal cord injury, 2016)
- **Enrollment as of August 2025**: 9 participants (including one woman), all with paralysis or ALS
- **Geographic expansion**: US, Canada (CAN-PRIME, November 2024), UK (UCL Hospitals, Newcastle), UAE
- **CONVOY sub-trial**: Launched November 2024, investigating N1 for investigational robotic arm control

Source: [Neuralink "A Year of Telepathy," Feb 2025](https://neuralink.com/updates/a-year-of-telepathy/); [IJPS Journal, Jul 2025](https://www.ijpsjournal.com/article/Recent+Progress+on+Neuralinks+BrainComputer+Interfaces)

#### P1 Clinical Performance

- **Day 1**: Beat 2017 world record for cursor control speed and precision on first day of device use ([Fortune/Arbaugh, Aug 2025](https://fortune.com/2025/08/23/neuralink-participant-1-noland-arbaugh-18-months-post-surgery-life-changed-elon-musk/))
- **Daily use**: ~10 hours per day at 18 months post-surgery
- **Demonstrated tasks**: Cursor control, chess, web browsing, gaming, TV control, smart home appliance control

#### Thread Retraction Incident

Approximately one month post-surgery, Arbaugh experienced significant functional loss due to thread retraction — the most important documented engineering failure in Neuralink clinical data to date.

**Quantified severity**: 85% of implanted threads retracted from cortical tissue. Arbaugh stated: *"I have 15% of the electrodes still in place on my brain, plus or minus 10%, so it could be as little as 5%."* ([Arbaugh, Big Technology, Dec 2024](https://www.bigtechnology.com/p/full-qa-neuralink-patient-noland))

**Mechanism**: Brain pulsation at 3× anticipated displacement (~3 mm per pulse vs. expected 1 mm) caused repeated mechanical displacement of threads implanted at 3–5 mm depth. ([Scientific American, Jun 2024](https://www.scientificamerican.com/article/neuralinks-first-user-describes-life-with-elon-musks-brain-chip/))

**Remediation**: Software modification — transition from single-neuron spike detection to multi-unit activity detection. No surgical re-implantation. Arbaugh reports performance exceeding pre-retraction baseline. ([Neuralink blog, May 2024](https://neuralink.com/updates/prime-study-progress-update-user-experience/))

**Protocol change for P2+**: Electrode threads implanted at 8 mm depth (vs. 3–5 mm for P1). P2 (implanted August 2024, spinal cord injury) had 400 active electrodes at announcement. ([Reuters, Aug 2024](https://www.reuters.com/technology/neuralink-implanted-second-trial-patient-with-brain-chip-musk-says-2024-08-04/))

#### Signal Quality and Longevity

- Pre-clinical (ovine) models: 70–80% signal retention at 6 months in flexible thread arrays
- Expected biocompatibility lifetime: 5–10 years (polyimide substrate; manufacturer projection — no human confirmation of multi-year longevity yet)
- Thread failure rates for flexible polymer systems: 5–10% annual failure (independent assessments, [IEEE TBME, 2023](https://ieeexplore.ieee.org))

---

### 2.2 Synchron Stentrode — SWITCH and COMMAND Trials

#### Device Architecture

The Stentrode is placed entirely within the vasculature — specifically the superior sagittal sinus (SSS), a large venous dural sinus overlying the motor cortex — via catheter through the jugular vein. No craniotomy required; no brain tissue penetration.

| Feature | Specification |
|---|---|
| Approach | Endovascular — catheter through jugular vein |
| Electrode count | 16 (SWITCH configuration) |
| Material | Nitinol stent-electrode array |
| Signal type | Electrocorticography (ECoG)-like local field potentials through vessel wall |
| Signal bandwidth | Mean 233 (SD 16) Hz — stable throughout 12-month SWITCH study |

Source: [Mitchell et al., JAMA Neurology, 2023](https://jamanetwork.com/journals/jamaneurology/fullarticle/2799839)

#### SWITCH Study (Australia, First-in-Human)

Published: JAMA Neurology, March 2023 (80(3):270–278). ClinicalTrials.gov NCT03834857.

- **Participants**: 4 patients, all male, mean age 61, severe bilateral upper-limb paralysis
- **Primary safety endpoint**: Met — no device-related serious adverse events in any of 4 patients at 12 months
- **Signal stability**: 233 Hz bandwidth stable throughout the study
- **BCI-only accuracy (Patient 4)**: 97.4% (SD 4.2%) mean accuracy for 5-option selection; 10/10 yes/no questions correct in 2 sessions; text messages sent without eye-tracking assistance
- **Tasks accomplished**: Hands-free texting, emailing, online banking and shopping

Source: [Mitchell et al., JAMA Neurol, 2023; DOI: 10.1001/jamaneurol.2022.4847](https://jamanetwork.com/journals/jamaneurology/fullarticle/2799839)

#### COMMAND Study (US, 2022–2024)

The first FDA-approved Investigational Device Exemption trial of a permanently implanted BCI in the United States. ClinicalTrials.gov NCT05035823.

- **Sites**: Mount Sinai Health System, University at Buffalo/Gates Vascular Institute, UPMC / Carnegie Mellon
- **Participants**: 6 patients with severe chronic bilateral upper-limb paralysis, unresponsive to therapy
- **Primary safety endpoint**: Met — zero device-related serious adverse events in all 6 patients at 12-month evaluation
- **No SAEs** related to brain or vasculature during 12-month period
- **Deployment success**: 100% of cases; median deployment time 20 minutes
- **Functional outcomes**: ALS patients controlled Apple Vision Pro headsets, communicated via OpenAI technology, operated Amazon Alexa smart home devices
- **Total experience at results presentation (September 30, 2024)**: 5 years of data from 10 research participants across Australia and US

Source: [Synchron press release/BioSpace, Sep 2024](https://www.biospace.com/news/synchron-announces-positive-results-from-u-s-command-study-of-endovascular-brain-computer-interface); [NeuroNews International, Oct 2024](https://neuronewsinternational.com/synchrons-endovascular-bci-achieves-positive-results-in-us-command-study/)

---

### 2.3 Blackrock Neurotech — Utah Array

#### Device Specifications

| Parameter | Specification |
|---|---|
| Standard configuration | 96 active electrode channels per 4×4 mm² array |
| Custom maximum | Up to 1,024 channels across multiple arrays |
| Typical BCI deployment | 4–6 arrays (400–600 electrodes) |
| Electrode material | Silicon shanks with iridium oxide (IrOx) tips |
| Shank length | 1.0–1.5 mm |
| Sampling rate | Up to 30 kHz per channel |
| Field citations | >20,000 peer-reviewed citations |
| Laboratory use | >1,000 laboratories worldwide |

Source: [Blackrock Neurotech Utah Array product page](https://blackrockneurotech.com/products/utah-array/); [Medical Design and Outsourcing, Oct 2022](https://www.medicaldesignandoutsourcing.com/utah-array-brain-computer-interface-blackrock-neurotech/)

#### Longevity Data

- **Participants implanted**: Blackrock's NeuroPort Array used in 38 of 67 participants across all identified implantable BCI clinical trials worldwide between 1998 and 2023 ([Nature Portfolio Reviews Bioengineering, 2024](https://www.nature.com/biomedeng))
- **13 research groups** have used Blackrock's devices in human trials
- **Best-case longevity**: Successful function restoring motor and communication ability for up to **8 years** in some patients
- **Total device experience**: >30,000 implant-days of human data
- **Nathan Copeland (University of Pittsburgh)**: ~10 years with implanted BCI as of 2024 — longest recorded human BCI use; Utah Arrays in both motor and somatosensory cortex

Source: [Blackrock Neurotech, Sep 2024](https://blackrockneurotech.com/insights/the-state-of-clinical-trials-of-implantable-brain-computer-interfaces/)

#### Electrode Degradation Data

- **SNR decline**: 20–50% reduction in signal-to-noise ratio within 1–2 years of chronic implantation ([Journal of Neural Engineering, 2023](https://iopscience.iop.org/journal/1741-2552))
- **Annual channel degradation**: 20–30% in clinical settings ([UC Davis analysis, 2022, cited in Sparkco AI, 2025](https://sparkco.ai/blog/brain-computer-interface-neuralink-fda-approval))
- **IrOx tip improvement**: A Blackrock/University of Utah accelerated aging study found new "research metallization" showed significant improvement in stimulation stability compared to current-practice metallization ([PMC 12743391, Bioelectronic Medicine, Dec 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12743391/))

---

### 2.4 BrainGate — Speech Decoding Achievements

BrainGate (Brown University, MGH, Stanford, Case Western, VA Rehab R&D) is the longest-running academic intracortical BCI clinical trial program. Key 2024–2025 publications:

#### Rapidly Calibrating Speech Neuroprosthesis (NEJM, 2024)

- **Participant**: 45-year-old man with ALS and tetraparesis, severe dysarthria (BrainGate2, NCT00912041)
- **Hardware**: 4 NeuroPort arrays in left ventral precentral gyrus (speech motor cortex), 256 intracortical electrodes total
- **Day 1**: 99.6% accuracy on 50-word vocabulary after only 30 minutes of training
- **Day 2**: 90.2% accuracy on 125,000-word vocabulary after 1.4 additional hours of training
- **Sustained performance**: 97.5% accuracy over 8.4 months post-implantation
- **Communication rate**: ~32 words per minute (self-paced conversations)
- **Total use**: 248+ cumulative hours of self-paced conversation over 8 months

Source: [Card et al., NEJM 2024; 391(7):609–618. DOI: 10.1056/NEJMoa2314132](https://pubmed.ncbi.nlm.nih.gov/39141853/)

#### Inner Speech BCI (Cell, 2025)

- **Key finding**: Inner speech (purely imagined words) is robustly represented in motor cortex and decodable in real time
- **Speed**: Up to 145–146 words per minute in best-performing participant, exceeding attempted speech (59–97 wpm)
- **Error rates**: 14% (50-word vocabulary), 26% (125,000-word vocabulary) for inner speech
- **Privacy protection**: Password system detected chosen keyword with >98% accuracy to prevent unintended decoding

Source: [Kunz et al., Cell 2025; DOI: 10.1016/j.cell.2025.06.015](https://www.nih.gov/news-events/nih-research-matters/decoding-inner-speech-brain-signals)

#### Finger Decoding and Quadcopter Control (Nature Medicine, 2025)

- **Participant**: T5, 69-year-old man with C4 spinal cord injury; 2 arrays implanted in left precentral gyrus (192 channels), in use since 2016
- **Achievement**: 4 degrees of freedom (DOF) continuous finger decoding — 2D thumb, 1D index-middle, 1D ring-little
- **Performance**: 76 targets per minute, 100% trial completion, 2.60 ± 0.12 bits per second

Source: [Willsey et al., Nat Med 2025; 31(1):96–104. DOI: 10.1038/s41591-024-03341-8](https://pubmed.ncbi.nlm.nih.gov/39833405/)

#### Historical Longevity Benchmarks

- Participant T7 (ALS): Used BCI typing at **1,994 days** post-implant ([BrainGate, 2015](https://www.braingate.org/publications/))
- Participant with brainstem stroke: **1,000+ days** of neural cursor control
- These are best-case scenarios; population-level stability is more variable

---

## 3. Bidirectional BCIs: State of the Art

### 3.1 Definition

A bidirectional BCI performs both neural recording (efferent, "reading") and neural stimulation (afferent, "writing"). As of 2024–2026:

1. **ICMS somatosensory feedback** is well-established in human participants
2. **Closed-loop motor-sensory restoration** (neural control of prosthetic with tactile feedback) demonstrated in multiple humans
3. **Deep brain stimulation (DBS)** for Parkinson's, dystonia, essential tremor: most widely deployed "write" technology, ~200,000+ patients worldwide — but currently open-loop
4. **Adaptive DBS (aDBS)**: Closed-loop DBS adjusting based on real-time neural biomarkers — in active human trials

### 3.2 ICMS Tactile Feedback — Human Clinical Data

Published: *Nature Biomedical Engineering*, December 6, 2024.

- **Investigators**: Bensmaia lab (University of Chicago) / BrainGate
- **Participants**: 3 humans with cervical SCI; each implanted with 4 electrode arrays (2 motor cortex, 2 somatosensory cortex S1); includes Nathan Copeland (~10 years BCI)
- **Key findings**:
  - Tactile percepts stable over **several years** of experiments
  - Multi-electrode ICMS (biomimetic): **19.5 discriminable sensation intensity levels** vs. ~11 for single-electrode
  - Multi-electrode ICMS: **7.5% error rate** vs. 25% for single-electrode ICMS in compliance discrimination
  - ICMS provided force feedback from a sensorized bionic hand — full closed-loop bidirectional BCI demonstrated

Source: [Bensmaia/BrainGate, Nat Biomed Eng, Dec 2024; DOI: 10.1038/s41551-024-01299-z](https://www.nature.com/articles/s41551-024-01299-z)

### 3.3 Brain-Spine Interface (Locomotion Restoration)

Published: *Nature*, June 2023.

- **Team**: Lorach, Galvez, Spagnolo et al. (EPFL / Lausanne University Hospital)
- **Participant**: Man with 12-year-old spinal cord injury (incomplete; had partial residual function)
- **System**: Epidural spinal stimulation + wireless BCI; decodes intended leg movements from motor cortex, transmits to implanted spinal stimulator with <300 ms latency
- **Outcome**: Patient walked naturally over ground, climbed stairs, navigated ramps
- **Key distinction**: "Brain-spine interface" completes neural circuit bypassing injury, enabling near-natural gait — not just functional electrical stimulation

Source: [Lorach et al., Nature 2023; 618:126–133. DOI: 10.1038/s41586-023-06094-5](https://www.nature.com/articles/s41586-023-06094-5)

---

## 4. Signal Decoding Benchmarks

### 4.1 Accuracy Table

| Task | Platform | Accuracy / Speed | Source |
|---|---|---|---|
| Speech — 50-word vocabulary | BrainGate (intracortical, 256 ch) | 99.6% | [Card et al., NEJM, 2024](https://pubmed.ncbi.nlm.nih.gov/39141853/) |
| Speech — 125K-word vocabulary | BrainGate (intracortical, 256 ch) | 90.2% | [Card et al., NEJM, 2024](https://pubmed.ncbi.nlm.nih.gov/39141853/) |
| Inner speech — 50-word | BrainGate (intracortical) | 86% (14% error) | [Kunz et al., Cell, 2025](https://www.nih.gov/news-events/nih-research-matters/decoding-inner-speech-brain-signals) |
| Inner speech — conversational speed | BrainGate (intracortical) | 145–146 wpm | [Kunz et al., Cell, 2025](https://www.nih.gov/news-events/nih-research-matters/decoding-inner-speech-brain-signals) |
| Cursor control (5-option) | Synchron Stentrode (endovascular) | 97.4% | [Mitchell et al., JAMA Neurol, 2023](https://jamanetwork.com/journals/jamaneurology/fullarticle/2799839) |
| 4-DOF finger decoding | BrainGate (intracortical, 192 ch) | 76 targets/min, 100% trials | [Willsey et al., Nat Med, 2025](https://pubmed.ncbi.nlm.nih.gov/39833405/) |
| Typing (virtual keyboard) | BrainGate/MGH (intracortical) | ~80% of able-bodied speed | [STAT News/Nat Neurosci, Mar 2026](https://www.statnews.com/2026/03/16/brain-computer-interface/) |
| Motor imagery EEG (laboratory) | Non-invasive EEG | 78–90% | [JMIR Biomed Eng review, Nov 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12588595/) |
| 8-direction movement (fUS) | Functional ultrasound (primate) | 34–45% (chance: 12.5%) | [Griggs et al., Nat Neurosci, 2024](https://www.nature.com/articles/s41593-023-01500-7) |

### 4.2 Information Transfer Rate Context

- Practical BCI bandwidth (current clinical intracortical): **~2–3 bits/second** ([Hochberg et al., 2006–present](https://www.braingate.org))
- Natural speech: ~50 bits/second
- BrainGate finger BCI (4-DOF): **2.60 ± 0.12 bits/second** ([Willsey et al., Nat Med, 2025](https://pubmed.ncbi.nlm.nih.gov/39833405/))
- The gap between BCI bandwidth and natural communication remains the defining engineering challenge

---

## 5. Key Limitations

### 5.1 Electrode Degradation and Foreign Body Response

Upon implantation, a multi-phase cascade begins:

**Phase 1 — Acute (hours to days)**: Microglia respond within 30 minutes; astrocyte activation begins within hours; complement cascade activation; proinflammatory cytokines (IL-1α, IL-1β, IL-6, TNF-α) upregulated. ([Journal of Nanobiotechnology review, Jul 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12243264/))

**Phase 2 — Subacute (weeks to months)**: Reactive astrocytes form glial scar (astrogliosis) around electrode; BBB permeability increases; peripheral immune cells infiltrate implant site.

**Phase 3 — Chronic (months to years)**: Persistent ROS generation by activated microglia causes neuronal death, electrode corrosion, and degradation of insulating polymer layers.

**Quantified consequences**:
- Average SNR across cortical layers: ~2.74 (week 1) → ~1.33 (week 16) in rodent models — **linear decay ~0.338 SNR units/month** ([Frontiers in Neuroscience, 2023, PMC10113640](https://pmc.ncbi.nlm.nih.gov/articles/PMC10113640/))
- FBR structural changes spread **up to 150 µm** from implant site
- L4–L5 electrode sites most stable; L2/3 shows largest neuron loss ([Frontiers in Neuroscience, 2023](https://pmc.ncbi.nlm.nih.gov/articles/PMC10113640/))

Key design principle: smaller, more compliant, untethered electrodes produce less inflammation. A 2013 Biomaterials study showed 15 µm cylindrical electrodes induced significantly less glial scarring than 50–75 µm planar tethered electrodes over 12 weeks. ([Karumbaiah et al., Biomaterials 2013; 34(33):8061–74. DOI: 10.1016/j.biomaterials.2013.07.016](https://pubmed.ncbi.nlm.nih.gov/23891081/))

### 5.2 Immune Response

The brain's immune response to foreign objects is the primary driver of long-term signal degradation. No current implant has solved chronic biocompatibility. Best performers:
- Mesh electronics (Lieber group): Near-zero immune response at 4 and 12 weeks; neurons grow *through* mesh ([PNAS, 2017](https://www.pnas.org/doi/10.1073/pnas.1705509114))
- CNT arrays (Seoul National/KIST, Sep 2025): ~4,000× softer than silicon; lower astrocyte/microglial activation at 1 month vs. tungsten microwires ([Advanced Functional Materials, Sep 2025](https://phys.org/news/2025-09-hybrid-nanotube-electrodes-safer-brain.html))

### 5.3 Signal Bandwidth Limitations

| Platform | Practical signal bandwidth |
|---|---|
| Scalp EEG | <40 Hz (practical BCI use) |
| ECoG (cortical surface) | 1–300 Hz |
| Stentrode (endovascular) | ~233 Hz (population signals) |
| Utah Array (intracortical) | Up to 7,500 Hz spike-band, 30 kHz sampling |
| Neuralink N1 | 500–7,500 Hz target; 20 kHz ADC |

Wireless power and data transmission constraints limit channels that can be simultaneously active, especially in fully implanted systems. Neuralink's 5-hour battery represents a significant daily management burden for users.

---

## 6. Frontier Research

### 6.1 BISC — Wireless High-Bandwidth BCI Chip

Published: *Nature Electronics*, December 8, 2025. Columbia University/Stanford/Penn/NYP.

- **Architecture**: Single silicon chip (~3 mm³ volume, 50 µm thin), integrates radio transceiver, wireless power, digital control, data converters, recording/stimulation circuits
- **Wireless data rate**: 100 Mbps via custom ultrawideband (UWB) radio — **at least 100× higher throughput than any competing wireless BCI**
- **Fabrication**: TSMC 0.13-µm BCD technology
- **Clinical path**: Minimally invasive subdural placement without brain-penetrating electrodes

Source: [Columbia Engineering, Dec 2025](https://www.engineering.columbia.edu/about/news/silicon-chips-brain-researchers-announce-new-generation-brain-computer-interface)

### 6.2 Precision Neuroscience Layer 7 — Flexible High-Density Surface Array

FDA 510(k) cleared April 21, 2025 (K242618).

- **Architecture**: 1,024 microelectrodes in flexible thin film (thinner than human hair); subdural ECoG, non-penetrating
- **Coverage**: ~1.5 cm²
- **Clinical experience**: 37 participants across Beth Israel, West Virginia University, Perelman, Mount Sinai
- **Intraoperative performance** (4 awake craniotomy patients): 4-word speech classification 77.5% accuracy; 4-direction motor cursor 78–84% accuracy in single intraoperative session ([Neurosurgery Focus, Feb 2026; DOI: 10.3171/2025.11.FOCUS25908](https://pubmed.ncbi.nlm.nih.gov/41621103/))

### 6.3 INBRAIN Graphene Electrodes — First-in-Human 2025

INBRAIN Neuroelectronics (Barcelona) announced interim results from the first-in-human graphene-based BCI, July 2025 (4 glioblastoma resection patients, Manchester Centre for Clinical Neurosciences):

- No device-related adverse events
- High-resolution recording including **gamma signals associated with language** during awake brain mapping
- Device thickness: **only 10 µm** — thinner than a human hair
- Holds FDA Breakthrough Device Designation for Parkinson's disease

Source: [PCB Barcelona / INBRAIN, Jul 2025](https://www.pcb.ub.edu/en/inbrain-neuroelectronics-announces-promising-results-from-the-first-human-study-of-its-graphene-based-brain-computer-interface/); [Fierce Biotech, Jul 2025](https://www.fiercebiotech.com/medtech/inbrain-neuroelectronics-reports-positive-interim-results-study-bci-tech)

Graphene electrode stability: Nanoporous rGO microelectrodes with hybrid polyimide/Al₂O₃ encapsulation maintained stable electrochemical performance after soaking in PBS at 57°C for **>377 days** and **1 billion biphasic current pulses at 1 mC/cm²**. ([Small Methods, Nov 2025, PMC12716225](https://pmc.ncbi.nlm.nih.gov/articles/PMC12716225/))

### 6.4 Neural Dust and Distributed Microimplants

"Neural dust" (coined 2016 by Seo, Maharbiz, Carmena at Berkeley) describes mm-scale wirelessly powered sensor motes using ultrasound backscatter for power and data. Current status:

| Technology | Power | Data | Developer | Status |
|---|---|---|---|---|
| Ultrasound motes (neural dust) | Piezoelectric + ultrasound | Ultrasound backscatter | Berkeley → Iota Biosciences (acq. Astellas 2020) | FDA IDE approved for bladder 2024; brain application paused |
| Neurograins (RF motes) | Radio frequency | RF backscatter | Brown University (Nurmikko lab) | Pre-clinical in primates |
| Magnetoelectric nanoparticles | Magnetic field | Magnetic/electrical | Khizroev/Liang groups | Pre-clinical (rodent) |

Key limitations: None of these distributed systems have achieved dense, stable single-unit recording at scale in humans or non-human primates. ([Neurofounders, Feb 2026](https://www.neurofounders.co/articles/what-happened-to-neural-dust)); original publication: ([Seo et al., Neuron 2016; 91(3):529–539. DOI: 10.1016/j.neuron.2016.05.010](https://pubmed.ncbi.nlm.nih.gov/27497221/))

---

## 7. Summary Table: Platform Comparison

| Parameter | Neuralink N1 | Synchron Stentrode | Blackrock Utah Array | Precision Layer 7 | BISC (2025) |
|---|---|---|---|---|---|
| Type | Intracortical (penetrating) | Endovascular | Intracortical (penetrating) | Subdural ECoG | Subdural ECoG |
| Electrode count | 1,024 | 16–64 | 96 (std); up to 1,024 | 1,024 | Scalable |
| Signal resolution | Single-unit | Population LFP | Single-unit | LFP/gamma | LFP/ECoG |
| Invasiveness | Craniotomy + dural | Catheter, no craniotomy | Craniotomy + dural | Minimal craniotomy | Minimal subdural |
| Wireless | Yes (BT, 10 Mbps) | Yes | Optional (wired standard) | Yes (FDA cleared 2025) | Yes (UWB, 100 Mbps) |
| FDA status | IDE (PRIME study) | IDE (COMMAND — first US perm. implant) | 510(k) <30 days; IDE chronic | 510(k) <30 days (2025) | Research device |
| Clinical participants | 9 (Aug 2025) | 10 total (5-yr experience) | 38 across 13 groups | 37 | Surgical feasibility |
| Longevity data | 18+ months (P1 active); 85% thread retraction event | 12 months; 0 SAEs; 0 migration | Up to 8 years (best case); 20–30%/yr channel loss | <30 days clinical | New (2025) |
| Key strength | Highest electrode count; fully wireless; motor cortex proven | Safest profile; no craniotomy | 25+ yr validated; most clinical data | FDA cleared; reversible; high-density surface | Extreme miniaturization; highest wireless bandwidth |
| Key limitation | Thread retraction; 5-hr battery; invasiveness | Lower resolution; population signals | Wired standard; 20–30% channel loss/year | Lower resolution than penetrating | No chronic human data |

---

*Document type: Science reference (factual, cited). No speculative claims. Part of Prism v2 project.*
*Prism v2 | Science | CC BY 4.0 | Author: Gennady Prigodsky*
