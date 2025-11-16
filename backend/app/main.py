# backend/app/main.py
import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from .schemas import ContactCreate, BookingCreate, RoomCreate
from . import crud
from .database import db  # for optional health-check

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("festicolive")

app = FastAPI(title="FestiCoLive API")

# TEMPORARY: allow everything for testing; later restrict to your Netlify origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # <-- set to ["https://festicolive.netlify.app"] after testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Incoming: {request.method} {request.url}")
    try:
        response = await call_next(request)
        logger.info(f"Responded: {response.status_code} for {request.method} {request.url}")
        return response
    except Exception:
        logger.exception("Unhandled exception while processing request")
        raise

@app.get("/")
def root():
    return {"status": "backend running"}

@app.get("/health")
def health():
    try:
        # cheap DB call to test connectivity
        names = db.list_collection_names()
        return {"status":"ok","db":True,"collections":len(names)}
    except Exception as e:
        return {"status":"error","db":False,"error": str(e)}

@app.post("/api/contact", status_code=201)
async def post_contact(payload: ContactCreate):
    contact = payload.dict()
    inserted_id = await crud.create_contact(contact)
    return {"id": inserted_id, "message": "contact saved"}

@app.post("/api/book", status_code=201)
async def post_booking(payload: BookingCreate):
    booking = payload.dict()
    inserted_id = await crud.create_booking(booking)
    return {"id": inserted_id, "message": "booking saved"}

@app.post("/api/rooms", status_code=201)
async def post_room(payload: RoomCreate):
    room = payload.dict()
    inserted_id = await crud.add_room(room)
    return {"id": inserted_id, "message": "room added"}

@app.get("/api/rooms")
def get_rooms():
    return {"rooms": crud.list_rooms()}

@app.get("/api/bookings")
def get_bookings():
    return {"bookings": crud.list_bookings()}
