---
title: "Automated identification of the mouse brain's spatial compartments from in situ sequencing data"
feature_image: "/assets/gallery_images/automated.png"
link: "https://tissuumaps.research.it.uu.se/demo/isseq.html"
---

Neuroanatomical compartments of the mouse brain are identified and outlined mainly based on manual annotations of samples using features related to tissue and cellular morphology, taking advantage of publicly available reference atlases. However, this task is challenging since sliced tissue sections are rarely perfectly parallel or angled with respect to sections in the reference atlas and organs from different individuals may vary in size and shape and requires manual annotation. Here, we show how in situ sequencing data combined with dimensionality reduction and unsupervised clustering can be used to identify spatial compartments that correspond to known anatomical compartments of the brain. Here we show results on four different sections of mouse brains.

More information is available in this <a href="doi.org/10.1186/s12915-020-00874-5"> publication</a>: \
G. Partel, M.M. Hilscher, G. Milli, L. Solorzano, A.H. Klemm, M. Nilsson, and C. Wählby.  Automated identification of the mouse brain’s spatial compartments from in situ sequencing data.  BMC Biology, <a href="doi.org/10.1186/s12915-020-00874-5"> doi.org/10.1186/s12915-020-00874-5</a>, Oct 2020.

**Dataset 1**: Mouse 1, hippocampal section 1:  \
<a href="https://tissuumaps.research.it.uu.se/demo/170315_161220_hippo_4_1.html"> https://tissuumaps.research.it.uu.se/demo/170315_161220_hippo_4_1.html</a> \
**Dataset 2**: Mouse 1, hippocampal section 2:  \
<a href="https://tissuumaps.research.it.uu.se/demo/161230_161220_hippo_3_1.html"> https://tissuumaps.research.it.uu.se/demo/161230_161220_hippo_3_1.html</a> \
**Dataset 3**: Mouse 2, hippocampal section:  \
<a href="https://tissuumaps.research.it.uu.se/demo/1442_hippo.html"> https://tissuumaps.research.it.uu.se/demo/1442_hippo.html</a> \
**Dataset 4**: Mouse 2, olfactory region: \
<a href="https://tissuumaps.research.it.uu.se/demo/1442_OB.html "> https://tissuumaps.research.it.uu.se/demo/1442_OB.html </a>

The original raw ISS data was published in Qian, X., Harris, K. D., Hauling, T., Nicoloutsopoulos, D., Muñoz-Manchado, A. B., Skene, N., ... & Nilsson, M. (2020). Probabilistic cell typing enables fine mapping of closely related cell types in situ. <a href="https://doi.org/10.1038/s41592-019-0631-4"> Nature methods</a>, 17(1), 101-106. 

Data and code availability: All software was developed in Python 3 using open source libraries, and data processing of pipeline workflows was carried out using <a href="10.1093/bioinformatics/btz133">Anduril2</a> analysis framework. The processing pipelines, data, and the software version used to generate the analysis results and figures presented in this paper are available at <a href="https://doi.org/10.5281/zenodo.3928219">https://doi.org/10.5281/zenodo.3928219</a> or from our github repository <a href="https://github.com/wahlby-lab/graph-iss">https://github.com/wahlby-lab/graph-iss</a>. 