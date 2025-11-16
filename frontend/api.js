const API = process.env.REACT_APP_API_URL || "http://localhost:8000/api";

export async function sendBooking(formData) {
  const res = await fetch(`${API}/book`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return await res.json();
}
