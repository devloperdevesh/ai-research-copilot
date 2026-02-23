from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from models.schemas import ChatRequest
from modes.research_agent import run_agent

router = APIRouter()

@router.post("/chat")
async def chat(req: ChatRequest):

    async def stream():
        async for chunk in run_agent(req.query, req.mode):
            yield chunk

    return StreamingResponse(stream(), media_type="text/plain")