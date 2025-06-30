# Docker Development Guide

This project includes Docker configuration to make local development easier by providing a PostgreSQL database without requiring local installation.

## Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop) installed and running
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Quick Start with Docker

### Option 1: Automated Setup (Recommended)
```bash
# Windows
npm run dev:setup

# Or manually run the batch file
scripts\dev-setup.bat
```

### Option 2: Manual Setup
```bash
# 1. Start PostgreSQL container
npm run docker:up

# 2. Wait for database to be ready, then run migrations
npx prisma migrate deploy

# 3. Seed the database with business config
npm run db:seed

# 4. Start the development server
npm run dev
```

## Docker Commands

```bash
# Start PostgreSQL container
npm run docker:up

# Stop PostgreSQL container
npm run docker:down

# View PostgreSQL logs
npm run docker:logs

# Stop and remove all data (fresh start)
npm run docker:clean
```

## Database Configuration

The Docker setup creates a PostgreSQL database with these credentials (defined in `docker-compose.yml`):

- **Host**: `localhost`
- **Port**: `5432`
- **Database**: `chatbot_db`
- **Username**: `chatbot_user`
- **Password**: `chatbot_password`

These credentials are automatically configured in `.env.local`.

## Troubleshooting

### Container won't start
```bash
# Check if port 5432 is already in use
netstat -an | findstr :5432

# If another PostgreSQL instance is running, stop it or change the port in docker-compose.yml
```

### Database connection errors
```bash
# Check container status
docker-compose ps

# View logs for errors
npm run docker:logs

# Restart the container
npm run docker:down
npm run docker:up
```

### Fresh database reset
```bash
# This will remove all data and start fresh
npm run docker:clean
npm run docker:up
npx prisma migrate deploy
npm run db:seed
```
