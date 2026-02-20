from fastapi import APIRouter
from fastapi.responses import StreamingResponse
import asyncio

router = APIRouter()

async def fake_stream():

    text = "This is streaming AI response like ChatGPT."

    for char in text:
        yield char
        await asyncio.sleep(0.02)

@router.post("/chat")
async def chat():

    return StreamingResponse(fake_stream(), media_type="text/plain")
