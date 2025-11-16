from pathlib import Path
from dotenv import load_dotenv
import os

# load .env file if exists
env_path = Path(__file__).resolve().parents[1] / ".env"
load_dotenv(dotenv_path=env_path)

MONGO_URL = os.getenv("MONGO_URL")  # e.g. mongodb+srv://sampath:PASS@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
DB_NAME = os.getenv("DB_NAME", "festicolive")
