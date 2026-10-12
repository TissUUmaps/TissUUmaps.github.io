---
title: DEPICTER
description: Deep representation clustering for histology annotation, shown on a whole-slide image of the CAMELYON17 dataset.
image: ./thumbnail.jpg
link: https://depicter-2024.serve.scilifelab.se/patient_022_node_4.tmap?path=DEPICTER/camelyon
tags: [Histology, H&E, Deep learning]
---

DEPICTER (Deep rEPresentatIon ClusTERing) is an interactive segmentation tool for histopathology annotation. It produces a patch-wise dense segmentation map of a whole-slide image, in three steps:

1. A pretrained model computes embeddings from image patches.
2. The user selects a few benign and cancerous patches in the multi-resolution image.
3. Guided by the embeddings, the labels spread to the rest of the image, by seeded iterative clustering or by gating in the embedding space.

[Open the demo on the CAMELYON17 dataset](https://depicter-2024.serve.scilifelab.se/patient_022_node_4.tmap?path=DEPICTER/camelyon).

Publication: E. Chelebian, C. Avenel, F. Ciompi and C. Wählby. DEPICTER: Deep representation clustering for histology annotation. _Computers in Biology and Medicine_, 108026, 2024. [doi:10.1016/j.compbiomed.2024.108026](https://doi.org/10.1016/j.compbiomed.2024.108026)
