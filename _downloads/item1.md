---
title: Local installation
---

[FlaskTissUUmaps](https://github.com/wahlby-lab/FlaskTissUUmaps/) is a minimal python server for [TissUUmaps](https://tissuumaps.research.it.uu.se/) using Flask that comes with a standalone User Interface.

##### Installation from PIP

> Note that steps 1-4 are optional and can be replaced by installing a recent version of Python.

1. Install [Anaconda](https://docs.anaconda.com/anaconda/install/) (or miniconda).
1. Create a new conda environment from an Anaconda prompt:
    ```bash
	conda create --name tissuumaps --channel conda-forge python=3.9
    ```

1. Activate the new conda environment:
    ```bash
	conda activate tissuumaps
    ```

1. You should be in the tissuumaps environment:
    ```bash
	(tissuumaps) C:\
    ```

1. Install the TissUUmaps library:
    ```bash
	pip install TissUUmaps
    ```

###### Option 1: Start the Graphical User Interface of TissUUmaps

1. Start the TissUUmaps user interface:
    ```bash
	tissuumaps
    ```

###### Option 2: Start only the flask server

1. Start TissUUmaps as a server:
    ```bash
	tissuumaps_server path_to_your_images
    ```

1. Open http://127.0.0.1:5000/ in your favorite browser.

   > :warning: Remember that Flask is running on a built-in development server (`flask run`) and should not be used in production. If you want to deploy FlaskTissUUmaps on a production server, please read https://flask.palletsprojects.com/en/1.1.x/tutorial/deploy/ or any similar tutorial.

##### Windows installation

1. Download the Windows Installer from [the last release](https://github.com/wahlby-lab/FlaskTissUUmaps/releases/latest) and install it. Note that the installer is not signed yet and may trigger warnings from the browser and from the firewall. You can safely pass these warnings.

1. Start TissUUmaps.
