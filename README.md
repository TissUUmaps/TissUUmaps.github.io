# TissUUmaps website

[![Deploy](https://github.com/TissUUmaps/tissuumaps.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/TissUUmaps/tissuumaps.github.io/actions/workflows/deploy.yaml)

The [TissUUmaps](https://github.com/TissUUmaps/TissUUmaps) website, built with [Docusaurus](https://docusaurus.io/).

The documentation is written in the TissUUmaps repository.

## Local preview

Clone this repository next to a TissUUmaps checkout and generate the API docs there:

```bash
cd ../TissUUmaps
pnpm install
pnpm run build && pnpm run build:docs
```

Then start the website with the TissUUmaps docs as the current version:

```bash
pnpm install
TISSUUMAPS_DOCS=../TissUUmaps/docs pnpm run start
```

Most changes, including changes to the TissUUmaps docs, are reflected live.
