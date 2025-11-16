from .database import db
from bson.objectid import ObjectId

async def create_contact(contact: dict):
    result = db.contacts.insert_one(contact)
    return str(result.inserted_id)

async def create_booking(booking: dict):
    result = db.bookings.insert_one(booking)
    return str(result.inserted_id)

async def add_room(room: dict):
    result = db.rooms.insert_one(room)
    return str(result.inserted_id)

def list_rooms():
    docs = db.rooms.find()
    items = []
    for d in docs:
        d["id"] = str(d["_id"])
        d.pop("_id", None)
        items.append(d)
    return items

def list_bookings():
    docs = db.bookings.find()
    items = []
    for d in docs:
        d["id"] = str(d["_id"])
        d.pop("_id", None)
        items.append(d)
    return items
