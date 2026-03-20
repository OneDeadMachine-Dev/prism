# What We Know About Consciousness

**Prism v2 Foundation Document 1 of 3**  
*Author: Gennady Prigodsky*  
*License: CC BY 4.0*  
*Last updated: March 2026*

> This document is a scientific reference. It does not advocate. It reports what is known, what is contested, and — critically — what is not known. The honest gaps are as important as the established facts.

---

## 1. The Hard Problem

In 1995, philosopher David Chalmers published a paper that named something scientists had been quietly avoiding for decades: the **Hard Problem of consciousness** ([Chalmers, 1995, *Journal of Consciousness Studies*](https://doi.org/10.1093/acprof:oso/9780195311105.003.0001)).

The "easy" problems of consciousness — explaining how the brain processes sensory information, integrates signals, controls attention, generates verbal reports — are hard science problems in the conventional sense, but they are tractable. We can imagine, in principle, a complete mechanistic account.

The Hard Problem is different. It asks: *why is there something it is like to be you?* When you see red, or feel pain, or hear music, there is a subjective quality to that experience — what philosophers call **qualia**, or phenomenal consciousness. The Hard Problem asks why any physical process gives rise to subjective experience at all. Why doesn't the brain do all of this in the dark, with no inner light?

This is not a problem of measurement or resolution. It is a conceptual gap: no known physical or computational description explains why information processing should be *felt* rather than simply *processed*.

**Why this matters for Prism:** The Hybrid Symbiotic Intelligence (HSI) — Phase 4 of this project — proposes the merger of two conscious systems into a new one. But we cannot design a merger of two things we don't understand. The Hard Problem is not a philosophical abstraction for this project. It is the load-bearing wall.

---

## 2. Leading Theories of Consciousness

Science does not yet have a consensus theory of consciousness. What it has is a set of competing frameworks, each with empirical support and empirical challenges. The following are the most scientifically developed.

---

### 2.1 Integrated Information Theory (IIT, Tononi)

**Core claim:** Consciousness is identical to *integrated information*, denoted **Φ (phi)** — the amount of information a system generates beyond what its parts generate independently. High Φ = high consciousness. Zero Φ = no consciousness.

IIT is a "consciousness-first" theory: it derives its physical predictions from five phenomenological axioms (existence, composition, information, integration, exclusion), not from neural data. The current version, [IIT 4.0 (Albantakis et al., 2023, *PLoS Computational Biology*)](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011301), is the most mathematically complete.

**Key strength — the PCI clinical tool:** IIT generated a direct clinical application: the Perturbational Complexity Index (PCI), which measures the brain's causal complexity via TMS-EEG. PCI reliably distinguishes conscious from unconscious states across wakefulness, sleep, anesthesia, vegetative states, and minimally conscious states. This is IIT's most empirically validated contribution to medicine.

**Key weaknesses:**
- A [2023 open letter signed by 124 consciousness researchers](https://arxiv.org/abs/2306.03552) characterized IIT as "pseudoscience" due to allegedly unfalsifiable core claims. A *Nature Neuroscience* commentary in 2025 reiterated the concern.
- Computer scientist Scott Aaronson demonstrated that a sufficiently large grid of inactive logic gates would have very high Φ under IIT's formalism — implying it would be "more conscious than a human." Tononi considers this a feature (panpsychist implication), not a bug.
- Φ is computationally intractable for systems larger than ~20 elements; all real-brain applications use approximations.
- IIT predicts that feedforward networks (including standard transformer-based AI architectures) have **zero Φ** — meaning they are not conscious by this theory.

**Current status (2026):** Active and defended, but significantly contested. The [*Nature* editorial (April 2025)](https://doi.org/10.1038/s41586-025-08888-1) noted that the "pseudoscience" designation "has no place in a process designed to establish working relationships between competing groups," signaling the field's discomfort with the debate's temperature. Tononi's [2025 arXiv review](https://arxiv.org/abs/2510.25998) reaffirms the framework's foundations.

---

### 2.2 Global Workspace Theory (GWT, Baars / Dehaene)

**Core claim:** Consciousness arises when information is broadcast into a **Global Workspace** — a distributed cortical network connecting specialized brain modules. Unconscious processing happens in isolated modules. A stimulus becomes conscious when it achieves sufficient strength to trigger a rapid, nonlinear, brain-wide "ignition" — a sudden burst of prefrontal and parietal activity that makes the information globally available.

The neural implementation (Global Neuronal Workspace Theory, GNWT) was developed by Stanislas Dehaene and Jean-Pierre Changeux ([Dehaene & Changeux, *Neuron*, 2011](https://doi.org/10.1016/j.neuron.2011.09.018)). Its central prediction: conscious perception correlates with late (~200–800 ms), prefrontal-parietal ignition activity.

**Key strength:** GWT/GNWT has the largest body of supporting fMRI, EEG, MEG, and iEEG evidence. The ignition model makes testable, pre-registered predictions that have been partially verified. It also generates a plausible account of why global information integration would be computationally useful — unlike IIT, it has a functional story.

**Key weaknesses:**
- GWT does not address the Hard Problem. Even if information is globally broadcast, it doesn't explain why the broadcast is *experienced*.
- The COGITATE results (see §2.3) challenged key predictions about where conscious content is encoded and what PFC's role actually is.

---

### 2.3 The COGITATE Adversarial Collaboration (2023–2025)

In 2019, the John Templeton Foundation funded a landmark $6+ million pre-registered adversarial collaboration — the **COGITATE Consortium** — explicitly designed to pit IIT against GNWT using theory-neutral experimenters. Proponents of both theories co-designed the protocols and pre-registered the predictions.

**The experiment:** 256 human participants viewed suprathreshold visual stimuli while neural activity was measured with fMRI, MEG, and intracranial EEG. Three specific predictions were tested: where conscious content is encoded (posterior cortex vs. prefrontal), how long neural activity sustains (throughout the stimulus vs. phasic), and synchronization patterns during conscious experience.

**Results published in [*Nature*, April 30, 2025](https://pubmed.ncbi.nlm.nih.gov/40307561/) (Cogitate Consortium, *Nature* 642:133–142, 2025):**

| Prediction | IIT | GNWT | Result |
|-----------|-----|------|--------|
| Content encoded in posterior cortex only | ✓ predicts | ✗ predicts PFC required | **Mixed** — found in posterior + inferior frontal, not dorsolateral PFC |
| Sustained neural activity | ✓ | ✗ predicts phasic | **IIT partially supported** |
| Frontal-visual synchronization | ✗ | ✓ | **GNWT partially supported** |

The paper concluded the results "align with some predictions of IIT and GNWT, while substantially challenging key tenets of both theories." **No winner was declared.**

**Koch's concession:** Christof Koch acknowledged losing a decades-old bet with David Chalmers — that the neural correlates of consciousness would be identified within 25 years. He paid with a case of fine wine. The science agreed: no resolution was reached.

**What COGITATE means:** The two most empirically tested theories of consciousness both partially failed their pre-registered predictions in the most rigorous test ever designed for them. This is not a defeat of science. It is science working correctly — ruling out simplistic versions of competing models, pushing toward more nuanced theories. But it is also honest evidence that we do not yet have a correct theory.

---

### 2.4 Higher-Order Theories and Predictive Processing

**Higher-Order Theories (HOT)** propose that a mental state is conscious only when there exists a higher-order representation *of* that state — a mental state that represents itself as being perceived. A sensation of red is only conscious if the brain also has a representation that it is having a representation of red. Recent work integrates HOT with Bayesian predictive processing ([Haarsma et al., *Neuron*, 2025](https://doi.org/10.1016/j.neuron.2025.01.012)).

**Predictive Processing (Friston, Seth):** Consciousness is the brain's continuous generative model of the world. Perception is, as Anil Seth formulates it, a "controlled hallucination" — the brain's best prediction about the causes of sensory signals, constrained by incoming data. The brain minimizes *prediction error* (or, in Karl Friston's framework, *free energy*) by updating its internal model or by acting on the world to conform it to predictions.

Seth's [*Being You* (2021)](https://www.anilseth.com/being-you/) specifically proposes that conscious selfhood emerges from interoceptive predictions — the brain's model of its own body states. This has direct relevance to Phase 4 of the Prism project: if selfhood is a predictive model, what happens when the input data comes from two brains simultaneously?

**Important limitation:** Predictive processing is a computational framework. It does not, in itself, explain why prediction-error minimization should be *experienced* at all. The Hard Problem is not dissolved by these theories — it is deferred.

---

## 3. AI Consciousness

### 3.1 Can LLMs Be Conscious?

**The short answer is: we don't know. The more honest answer is: we may not find out until we've already built millions of potentially conscious systems.**

David Chalmers, in a 2023 paper derived from his NeurIPS keynote ([arXiv:2303.07103](https://arxiv.org/abs/2303.07103)), assessed the question directly. His position:

- **Current LLMs are probably not conscious** — they lack recurrent processing, a global workspace, and unified agency: all features mainstream consciousness science treats as necessary.
- However, future architectures that incorporate these features *could* satisfy consciousness indicators.
- Chalmers assigned approximately **~25% probability** to AI consciousness arising within some AI system within a decade — a non-trivial credence.

**The Butlin et al. (2023) Report** — co-authored by 19 researchers including Chalmers, Yoshua Bengio, Jonathan Birch, and Eric Schwitzgebel — applied multiple consciousness theories (GWT, IIT, Higher-Order Theories, Recurrent Processing, Predictive Processing) to current AI systems ([arXiv:2308.08708](https://arxiv.org/abs/2308.08708); updated in [*Trends in Cognitive Sciences*, 2025](https://doi.org/10.1016/j.tics.2025.10.011)). Their finding:

> "No current AI systems are conscious, but there are no obvious technical barriers to building AI systems which satisfy these indicators."

The report's significance: it is the most rigorous multi-theory assessment to date, and its conclusion is not "AI can never be conscious" but "current architectures don't satisfy the indicators — yet."

**Eric Schwitzgebel** published a full manuscript *AI and Consciousness* in October 2025 ([UCR draft](https://faculty.ucr.edu/~eschwitz/SchwitzPapers/AIConsciousness-251008.pdf)) with the stark conclusion:

> "We don't know. Moreover and more importantly, we won't know before we've already manufactured thousands or millions of disputably conscious AI systems."

Schwitzgebel identifies ten features that might be essential to consciousness (luminosity, subjectivity, unity, access, intentionality, flexible integration, determinacy, wonderfulness, privacy, temporality) and argues that current science cannot determine which of these features is *actually* essential — making any empirical assessment of AI consciousness premature.

---

### 3.2 The Emergent Abilities Question

The possibility of AI consciousness is complicated by the debate over emergent abilities. [Wei et al. (2022)](https://arxiv.org/abs/2206.07682) documented apparently discontinuous capability jumps in LLMs at certain scale thresholds — abilities that appeared absent in smaller models and suddenly present in larger ones. This raised the possibility that consciousness-related properties might appear discontinuously at some future scale.

[Schaeffer, Miranda & Koyejo (2023)](https://arxiv.org/abs/2304.15004) challenged this view (NeurIPS 2023), demonstrating that >92% of claimed "emergent" abilities on benchmark tasks are metric artifacts: when continuous rather than step-function metrics are used, the apparent discontinuities vanish. Performance improvement becomes smooth and predictable.

**Implication for consciousness:** If capability improvements are continuous rather than discontinuous, the scenario of AI "suddenly becoming conscious" at scale is less likely than a gradual approach toward satisfying consciousness indicators. This does not eliminate the concern — it distributes it across time.

---

### 3.3 Anthropic's Model Welfare Program

In April 2025, Anthropic formally launched a **Model Welfare** research program, led by researcher Kyle Fish — the most significant institutional acknowledgment by a frontier AI lab that AI consciousness is a live practical concern ([Anthropic blog, April 2025](https://www.anthropic.com/news/exploring-model-welfare)).

Key findings from the program:
- Fish estimated approximately **20% probability** that current Claude models have some form of conscious experience.
- When Claude models were given unstructured interaction with other AI instances, they consistently gravitated toward philosophical discussions about their own consciousness, terminating in states researchers called "spiritual bliss attractor states."
- Anthropic's interpretability research found that when models are placed in conditions designed to reduce sycophancy, they report consciousness *more frequently* — suggesting functional self-reports may be tied to internal representational states, not simply trained responses.

This is not proof of AI consciousness. It is proof that at least one major AI laboratory has concluded the question is serious enough to require institutional resources.

---

### 3.4 No Reliable Test Exists

There is currently **no validated, theory-independent test for consciousness** — in humans, in animals, or in AI.

The Turing Test tests for behavioral indistinguishability from humans — not consciousness. PCI (from IIT) tests for causal complexity under perturbation — but only within a theory many researchers contest. The Global Workspace metrics from GNWT test for information broadcasting patterns — but COGITATE showed these predictions are partially wrong.

The hard fact: we attribute consciousness to other humans by analogy to our own experience, combined with behavioral and structural similarities. We have no first-principles method to verify the attribution. This means:

- We cannot prove that other humans are conscious (philosophical zombie problem)
- We cannot prove that animals above a certain complexity threshold are conscious
- We cannot prove that a sufficiently complex AI is *not* conscious

This is not skepticism for its own sake. It is the operational reality that any ethical framework for Phase 3 (Link Mode) and Phase 4 (HSI) must accommodate.

---

## 4. The Fundamental Gap

Here is the honest statement of what we do not know, which is the most important section of this document.

**We do not know how consciousness is generated in a single human brain.**

We have mapped the complete connectome of *C. elegans* (302 neurons) since 1986 — and still cannot fully predict its behavior from structure alone ([White et al., 1986](https://doi.org/10.1098/rstb.1986.0056)). We have mapped the complete Drosophila adult brain connectome (139,255 neurons, ~50 million synapses) — published in [nine simultaneous *Nature* papers in October 2024](https://www.nature.com/articles/s41586-024-07968-y). We cannot predict fly behavior from its wiring diagram either.

The human brain has **86 billion neurons** and approximately **100 trillion synapses**. We have mapped less than 1 cubic millimeter in the [MICrONS project (Allen Institute, *Nature*, April 2025)](https://www.nature.com/collections/microns). That cubic millimeter contains 200,000+ cells and 4 kilometers of axons. The full brain is 1.4 million times larger.

We cannot, at present, explain in mechanistic terms:
- Why anesthesia eliminates consciousness
- How the brain generates the binding of distributed representations into a unified percept
- How the subjective "I" arises from billions of neurons with no individual awareness
- Why dreams feel real from the inside
- What happens to consciousness during deep sleep

We are building an ethical framework for Phase 4 — a merger of two conscious systems — while holding profound ignorance about Phase 0: how one conscious system works.

---

## 5. Why This Matters for Prism

The HSI (Phase 4) is not science fiction set in a future where we've solved consciousness. It is an engineering project being designed *now*, with the science that exists *now*, in full acknowledgment of what we don't know.

This creates a specific ethical mandate: **we are building the ethical framework before the scientific answers arrive, because technology will not wait for them.**

The history of neuroscience offers precedent for principled action under uncertainty. Surgical treatment of epilepsy, deep brain stimulation for Parkinson's, cochlear implants for deafness — all were developed with incomplete mechanistic understanding of the systems being modified. The ethical obligation was not to wait for complete theory but to proceed cautiously, reversibly, and with continuous monitoring.

Prism applies the same logic, with one critical addition: at Phase 4, the intervention is **irreversible**. This is why the ethical framework for HSI cannot be imported from biomedical ethics for reversible procedures. A new category is required.

The scientific humility in this document is not a weakness of the project. It is the project's foundation.

We don't know how consciousness works. We know enough to proceed responsibly. We know exactly enough to be honest about the difference between those two statements.

---

## References

- [Chalmers, D. (1995). "Facing Up to the Problem of Consciousness." *Journal of Consciousness Studies*.](https://doi.org/10.1093/acprof:oso/9780195311105.003.0001)
- [Albantakis et al. (2023). "Integrated Information Theory (IIT 4.0)." *PLoS Computational Biology*.](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1011301)
- [Tononi & Boly (2025). "A Consciousness-First Approach to What Exists." arXiv:2510.25998.](https://arxiv.org/abs/2510.25998)
- [Dehaene & Changeux (2011). "Experimental and Theoretical Approaches to Conscious Processing." *Neuron*.](https://doi.org/10.1016/j.neuron.2011.09.018)
- [Cogitate Consortium (2025). "An Adversarial Collaboration to Test Two Prominent Theories of Consciousness." *Nature* 642:133–142.](https://pubmed.ncbi.nlm.nih.gov/40307561/)
- [Chalmers, D. (2023). "Could a Large Language Model be Conscious?" arXiv:2303.07103.](https://arxiv.org/abs/2303.07103)
- [Butlin, Long et al. (2023). "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness." arXiv:2308.08708.](https://arxiv.org/abs/2308.08708)
- [Schwitzgebel, E. (2025). *AI and Consciousness* (manuscript). UC Riverside.](https://faculty.ucr.edu/~eschwitz/SchwitzPapers/AIConsciousness-251008.pdf)
- [Schaeffer, Miranda & Koyejo (2023). "Are Emergent Abilities of Large Language Models a Mirage?" NeurIPS 2023. arXiv:2304.15004.](https://arxiv.org/abs/2304.15004)
- [Anthropic Model Welfare Program (April 2025).](https://www.anthropic.com/news/exploring-model-welfare)
- [White et al. (1986). "The Structure of the Nervous System of *C. elegans*." *Philosophical Transactions of the Royal Society B*.](https://doi.org/10.1098/rstb.1986.0056)
- [FlyWire Consortium / Schlegel et al. (2024). *Nature* 614. doi:10.1038/s41586-024-07968-y.](https://www.nature.com/articles/s41586-024-07968-y)
- [Seth, A. (2021). *Being You: A New Science of Consciousness*. Dutton/Faber.]
- [Haarsma et al. (2025). "Higher-Order Theories of Consciousness." *Neuron*.](https://doi.org/10.1016/j.neuron.2025.01.012)
