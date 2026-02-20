# AI Research Copilot

Production-ready RAG system with FastAPI backend and Next.js frontend.

## Tech Stack

- FastAPI
- Retrieval Augmented Generation (RAG)
- Vector Search
- Next.js App Router
- Docker

## Architecture

Backend:
- API layer
- RAG pipeline
- Services layer

Frontend:
- Chat UI
- Research tools

## Setup

Backend:

pip install -r requirements.txt
uvicorn app.main:app --reload

Frontend:

cd frontend
npm install
npm run dev