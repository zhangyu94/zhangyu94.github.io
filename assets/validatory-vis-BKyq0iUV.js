var e=`---
title: Visualizing to Validate GenAI
date: 2025-11-03
excerpt: Thoughts on the validatory paradigm popularized by Generative AI and its implications for visualization.
---

# Visualizing to Validate GenAI

*Thoughts on the validatory paradigm popularized by GenAI and its implications for visualization.*

Generative AI is increasingly embedded in everyday productivity tools, such as code editors like Cursor.
These tools help users produce drafts quickly, yet users must still **validate** the AI's output, a process that is becoming a major bottleneck.
This **validatory interaction paradigm** is prevalent in AI-powered applications for content creation (e.g., writing, coding, and drawing).
As AI becomes more capable, content **validation**, not generation, may become the primary human workload in everyday work.

This leads to a key question: <u>**How should we design interfaces to support efficient validation of GenAI outputs?**</u>
**I believe that visualizations will play an important role.**

In what follows, I use the term **validatory visualization** to refer to **in-situ minimalist** visualizations designed to help users validate GenAI outputs, particularly in everyday applications for casual users.
These simple visualizations, like colored text for comparison, are crucial for helping users judge the correctness and appropriateness of GenAI outputs.

## Argument Chain

Here is the argument chain for the claim that **validatory visualization is valuable for many casual users and deserves more attention**:

- ① GenAI cannot fully automate many generative tasks.
- ① ⇒ ② Human validation is usually required in GenAI applications.
- ③ Many everyday tasks are generative (e.g., writing) in nature and benefit from GenAI.
- ② + ③ ⇒ ④ Many casual users need to validate AI-generated content.
- ⑤ GenAI produces content at a high rate.
- ⑥ Visualization amplifies human information-processing capabilities.
- ④ + ⑤ + ⑥ ⇒ ⑦ Validatory visualization is valuable for many casual users.

## Opportunities for Visualization

So, what opportunities does the validatory paradigm bring?
One is to improve validatory visualizations in productivity tools.

For example, we can challenge ourselves to improve Cursor's design for highlighting and summarizing AI-generated code.
Specifically, the design of the chat panel, which only entered mainstream code editors in the past few years, may be suboptimal.

This raises several questions:

- How can we improve the visual representation of the model's reasoning and execution traces?
- How can we better summarize and present code changes?

To address these questions, we can draw inspiration from the rich literature on software visualization and visual comparison.

## A Reflection on the Value of Visualization

Jarke van Wijk stated in the paper [**The Value of Visualization**](http://doi.org/10.1109/VISUAL.2005.1532781):

> a great visualization method is used by many people, who use it routinely to obtain highly valuable knowledge, without having to spend time and money on hardware, software, and effort

While the visualization community has extensively explored visualizations that help users obtain valuable insights, validatory visualizations, which focus on supporting large and diverse user populations in everyday contexts, have received comparatively less attention.

## More Details

Our [position paper](https://zhangyu94.github.io/projects/2025/Zhang2025Validatory/paper.pdf) (and [presentation slides](/projects/2025/Zhang2025Validatory/slides-2025-@VISxGenAI.pdf)) at the [VIS x GenAI workshop](https://visxgenai.github.io/) introduces more details on the conceptual framing, a cost-benefit analysis, and design considerations for validatory visualizations.
`;export{e as default};