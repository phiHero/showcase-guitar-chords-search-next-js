<h1 align="center">
 🎸 Instant Guitar Chord Positions Search, powered by Typesense - NextJS
</h1>
<div align="center">
  <div><h3>Other versions</h3></div>
  <a href="https://github.com/typesense/showcase-guitar-chords-search-nuxt-js">NuxtJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-next-js">NextJS</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-angular">Angular 15</a> |
  <a href="https://github.com/typesense/showcase-guitar-chords-search-vanilla-js">Vanilla JS</a>
</div>

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- NextJS
- Typescript
- Sass
- Vitest
- Cypress

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

The web app is deployed on Vercel, powered by Typesense cluster running on <a href="https://cloud.typesense.org" target="_blank">Typesense Cloud</a>.

## Repo structure

- `src/` contains UI components
- `scripts/` contains file to index data from `scripts/data` into Typesense

## Development

To run this project locally, make sure you have docker and nodejs, install the dependencies and run the local server:

Installation

```shell
git clone https://github.com/typesense/showcase-guitar-chords-search-next-js.git

cd showcase-guitar-chords-search-next-js

npm i
```

Start typesense server

```shell
npm run start:typesense # or: docker compose up
```

Index data into typesense

```shell
npm run index:typesense
```

Start the dev web app

```shell
npm run dev
```

Open http://localhost:3000 to see the app ✌️

## Deployment

Set env variables to point the app to the Typesense Cluster

```env
NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY=xxx
NEXT_PUBLIC_TYPESENSE_HOST=xxx.typesense.net
NEXT_PUBLIC_TYPESENSE_PORT=443
NEXT_PUBLIC_TYPESENSE_PROTOCOL=https
```
