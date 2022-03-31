---
title: PIP installation (for Linux and Mac)
---

1. Install `libvips` for your system: [https://www.libvips.org/install.html](https://www.libvips.org/install.html){:target="_blank"}

    An easy way to install `libvips` is to use an [Anaconda](https://docs.anaconda.com/anaconda/install/index.html){:target="_blank"} environment with `libvips`:
    ```bash
    conda create -y -n tissuumaps_env -c conda-forge python=3.9 libvips
    conda activate tissuumaps_env
    ```

1. Install the TissUUmaps library using `pip`:
    ```bash
    pip install "TissUUmaps[full]"
    ```

1. Start the TissUUmaps user interface:
    ```bash
    tissuumaps
    ```

1. Or start TissUUmaps as a local server:
    ```bash
    tissuumaps_server path_to_your_images
    ```
    And open [http://127.0.0.1:5000/](http://127.0.0.1:5000/){:target="_blank"} in your favorite browser.
