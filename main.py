from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import pandas as pd
import os

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'rf_model.joblib')
model = joblib.load(MODEL_PATH)

class SymptomRequest(BaseModel):
    symptoms: dict

@app.post("/predict")
def predict_disease(req: SymptomRequest):
    # Convert symptoms dict to DataFrame
    X = pd.DataFrame([req.symptoms])
    pred = model.predict(X)[0]
    return {"prediction": pred}

@app.post("/chatbot")
def chatbot(req: SymptomRequest):
    # For demo: just predict disease
    X = pd.DataFrame([req.symptoms])
    pred = model.predict(X)[0]
    return {"response": f"Based on your symptoms, you may have: {pred}"}

@app.get("/")
def root():
    return {"message": "Sanjeevni FastAPI backend running."}
