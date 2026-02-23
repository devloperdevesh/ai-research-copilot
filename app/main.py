from fastapi import FastAPI
from api.chat import router as chat_router

app = FastAPI(title="AI Research Copilot", description="A Citation-Aware Retrieval-Augmented Generation (RAG) system for Academic Assistance", version="1.0.0")
app.include_router(chat_router, prefix="/api")