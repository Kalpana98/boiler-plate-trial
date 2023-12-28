Created this when I was unnecessarily determined to serve my cra app on a
separate server in **watch mode**. Although I could pull it off (not
gracefully🥲), not wasting time on this is recommended. Use a bundler instead.

What may be helpful?

1. Enabled ESM on server [Checkout (server/entry.js)](server/entry.js).
2. Concurrently running the client and server in watch mode (not in the best
   possible way as it creates a production build every time).

To run:

`npm i`

`npm run dev:server`

Todo:

May try to eject and explore more.
