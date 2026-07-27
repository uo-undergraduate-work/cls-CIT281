# CIT 281 — Server-Side JavaScript

Coursework archive for **CIT 281** (University of Oregon), completed by Ethan Reinhart in 2024.
Work in this repository dates from **2024-08-23 to 2024-09-13**.

The course works through server-side JavaScript with Node.js: starting from CLI and
language fundamentals, moving through modules and modern ES syntax, then building
progressively richer HTTP APIs with [Fastify](https://fastify.dev/), and finishing with
ES6 classes, error handling, and consuming external APIs.

> **Status: archived.** This is a read-only backup of finished coursework, preserved for
> reference. It is not maintained and takes no contributions.

## Layout

Work is organized into one directory per course part (`p1`–`p8`). Each part generally
holds an **assignment/project** (`pN-*.js`) alongside the **lab** work that preceded it
(`lab-NN*`). Screenshots (`.png`) are the terminal and browser captures submitted as
evidence for each exercise.

| Part | Contents | Topics |
|------|----------|--------|
| `p1` | Assignment 1 + Lab 1 | Node CLI basics, shell/terminal exercises, editor shortcuts, `Date`, random string generation |
| `p2` | Assignment 2 + Lab 2 + `Hangman-Game/` | Refactoring declarations into function expressions and arrow functions; git basics and `.gitignore` |
| `p3` | Assignment 3 + Labs 3–4 | Object destructuring, template literals, `module.exports`/`require`, first Fastify server and query-string routes |
| `p4` | Assignment 4 + Lab 5 | Fastify JSON REST APIs — route params, `POST` bodies, validation and error objects, 404 handling |
| `p5` | Project 5 | ES6 classes and composition — a delay-driven monster battle simulation |
| `p6` | Assignment 6 + Labs 6–7 | Class inheritance (`extends`/`super`), getters, encapsulation, custom `Error` subclasses, `try`/`catch`/`finally` |
| `p7` | Lab 8 | Consuming an external API server-side with `node-fetch`, proxying JSON through Fastify |
| `p8` | *(empty)* | Created by `makemefolders.sh` but never used |

`makemefolders.sh` is the Lab 1 one-liner that scaffolded the `p1`–`p8` directories.

### Selected work

- **`p3/p3-server.js`** — Fastify server serving `index.html` plus `/coin` and `/coins`
  routes, backed by `p3-module.js`, which totals coin values using variadic arguments,
  `Array.flat()`, and `reduce()`.
- **`p4/p4-server.js`** — REST API over a question/answer dataset (`p4-data.js`), with
  `p4-module.js` returning structured `{ error, statusCode, ... }` payloads and defensive
  input validation.
- **`p5/p5-monster-game.js`** — `MonsterGame` class driving `Monster` instances
  (`p5-monster.js`) through randomized life-drain rounds on a timer.
- **`p6/lab-06.js`** — `Library`/`Book` classes using getters and defensive copying to
  keep internal state private.

## Running the code

Requires [Node.js](https://nodejs.org/) (v18+ recommended; the Fastify 4.x work was
written against Node 20).

Standalone scripts run directly:

```bash
node p1/p1-random.js
node p5/p5.js
node p6/lab-06.js
```

Parts with a `package.json` need dependencies installed first. `node_modules/` is
intentionally not tracked here — reinstall from the committed lockfiles:

```bash
cd p3 && npm install && node p3-server.js   # then open http://localhost:8080
```

The directories with their own `package.json` are `p3`, `p3/lab-04`, `p4`, `p4/lab-05`,
and `p7/lab8`. Each Fastify example listens on `localhost:8080`.

> **Dependencies are pinned to Fastify 4.x and are no longer patched.** `npm audit`
> reports known advisories (including high-severity ReDoS issues in `find-my-way`) against
> the committed lockfiles. They are left as submitted so the archive reflects the original
> work. Treat this code as a reference only and do not expose it to a network; the routing
> code also relies on Fastify 4's variadic `listen()` signature, which was removed in
> Fastify 5.

## Provenance

Two subdirectories did not originate as standalone work in this repository:

- **`p2/Hangman-Game/`** — third-party project cloned from
  [`the-realest-stu/Hangman-Game`](https://github.com/the-realest-stu/Hangman-Game),
  used as the subject of the course's git and refactoring exercises. Not original work;
  original authorship and licensing belong upstream.
- **`p6/cit281-lab7/`** — Lab 7, originally completed in a separate per-lab repository
  (`UO-CIT-ereinha3/cit281-lab7`) and folded in here.

## Archive notes

This repository was tidied when the local working copy was retired. For transparency, the
following changes were made to the original snapshot:

- Coursework was moved from a nested `cit281/` directory up to the repository root,
  matching the existing layout already committed here.
- `node_modules/` (~6,200 files) and `.DS_Store` files were removed from version control;
  dependencies are reproducible from the committed lockfiles.
- 15 `.zip`/`.tar` submission archives were removed after verifying that every file they
  contained was already present, extracted, in the working tree. Two were `.zip` files
  that were in fact tar archives; `p1/lab-01/lab-01-node.js` existed *only* inside one of
  them and was recovered before deletion.
- `p2/refactor/p2-random-commits.txt`, `p2/refactor/p2-random-files.txt`, and
  `p2/lab-02/ignored.txt` were added. These lab deliverables had been excluded from the
  original commit by lab-local `.gitignore` rules (`*.txt` and `ignored.txt`); the
  `.gitignore` files are retained since they are themselves part of the git lab.
- Per-lab nested git repositories were flattened into this repository, so their individual
  commit histories are not preserved here.
