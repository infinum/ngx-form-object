# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Versioning

Everytime a new build is released we should tag a new docs version.
Tagging new versions: https://docusaurus.io/docs/versioning#tagging-a-new-version

After tagging the new version, we should delete all other tags with the same major version.
Deleting version tags: https://docusaurus.io/docs/versioning#deleting-an-existing-version
