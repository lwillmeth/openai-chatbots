# Experimental B2B OpenAI Monorepo

This repository contains all services and content for an experimental B2B chatbot service.  The goal was to better understand the OpenAI API including providing context to the agent, and explore what a B2B solution might look like.

## Getting Started

### 1. Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### 2. Start All Services

From the project root, run:

```bash
docker compose up --build
```

This command will build and start all services defined in [`docker-compose.yml`](./docker-compose.yml).  The docker images are configured for watch mode and shouldn't need to be restarted unless you modify infra settings.

### 3. Accessing Services

- **Backend (Chatbot service API, database, etc):**  
  http://localhost:3000
  (see [`backend/`](./backend/README.md) for API endpoints and docs)

- **Client 2 - The Bendt Baguette (Next.js app):**  
  http://localhost:3001
  (see [`the-bendt-baguette/`](./the-bendt-baguette/README.md))

- **Client 2 - Bend Birdfood LLC (Next.js app):**  
  http://localhost:3002
  (see [`bend-birdfood-llc/`](./bend-birdfood-llc/README.md))

### 4. Stopping Services

To stop all running containers:

```bash
docker compose down
```

## Project Structure

- [`backend/`](./backend/) – API, business logic, and database migrations
- [`the-bendt-baguette/`](./the-bendt-baguette/) – Client 1, using bakery chatbot
- [`bend-birdfood-llc/`](./bend-birdfood-llc/) – Client 2, using bird chatbot

## More Information

See the README in each subdirectory for service-specific setup and development instructions.