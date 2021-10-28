---
title: Server deployment
---

##### Static HTML pages

To install TissUUmaps on an Apache web server, follow instructions from [https://github.com/wahlby-lab/TissUUmaps](https://github.com/wahlby-lab/TissUUmaps){:target="_blank"}.

##### Docker container

Start the docker container `cavenel/tissuumaps:latest` from Docker Hub:
```bash
docker run -it -p 56733:80 --name=tissuumaps -v /path/to/local/tiles:/mnt/data cavenel/tissuumaps:latest
```
