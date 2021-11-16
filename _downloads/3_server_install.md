---
title: Server deployment
---

##### Static HTML pages

To install TissUUmaps on an Apache web server, follow instructions from [https://github.com/wahlby-lab/TissUUmaps](https://github.com/wahlby-lab/TissUUmaps){:target="_blank"}.

##### Docker container

1. Start the docker container `cavenel/tissuumaps:latest` from Docker Hub:
```bash
docker run -it -p 56733:80 --name=tissuumaps -v /path/to/local/images:/mnt/data cavenel/tissuumaps:latest
```
1. Place your images in the local folder `/path/to/local/images/share`.
1. Open [http://127.0.0.1:56733/](http://127.0.0.1:56733/){:target="_blank"} in your favorite browser.
