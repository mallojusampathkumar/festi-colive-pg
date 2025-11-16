# backend/app/schemas.py
from pydantic import BaseModel, Field
from typing import Optional

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    message: Optional[str] = None

class BookingCreate(BaseModel):
    # core fields
    name: str
    phone: str
    room_type: Optional[str] = None

    # daily booking
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    days: Optional[int] = None
    guests: Optional[int] = Field(default=1, ge=1)

    # pricing / flags
    with_food: Optional[bool] = False
    price_per_person_per_day: Optional[float] = None
    price_per_person_per_month: Optional[float] = None
    total_amount: Optional[float] = None

    # other metadata
    type: Optional[str] = None  # e.g. "daily", "monthly_enquiry"

    class Config:
        # Keep extra fields allowed just in case
        extra = "allow"

class RoomCreate(BaseModel):
    type: str
    price_per_month: str
    description: Optional[str] = None
