from pydantic import BaseModel, Field
from typing import Optional

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: Optional[str] = None

class BookingCreate(BaseModel):
    name: str
    phone: str
    room_type: str
    start_date: Optional[str] = None
    with_food: Optional[bool] = False

class RoomCreate(BaseModel):
    type: str
    price_per_month: str
    description: Optional[str] = None
