import React from "react";

// All images loaded from public/ using PUBLIC_URL
const IMAGES = {
  room1share: process.env.PUBLIC_URL + "/1share.png",
  room2share: process.env.PUBLIC_URL + "/2share.png",
  room3share: process.env.PUBLIC_URL + "/3share.png",
  room4share: process.env.PUBLIC_URL + "/room.png",
  kitchen: process.env.PUBLIC_URL + "/kitchen.png",
  dining: process.env.PUBLIC_URL + "/dinning.png",
  common: process.env.PUBLIC_URL + "/room.png",
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* FIXED SCROLLING ANNOUNCEMENT */}
      <HorizontalAnnouncement />

      {/* FIXED HEADER */}
      <Header />

      {/* HERO SECTION (MOVED DOWN BELOW BOTH BARS) */}
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <Rooms />
        <Gallery />
        <BookingForm /> 
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918500414375"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl text-xl"
      >
        💬
      </a>
    </div>
  );
}

/* ----------------------------------------------------------
   SCROLLING ANNOUNCEMENT BAR (FIXED AT TOP)
----------------------------------------------------------- */
function HorizontalAnnouncement() {
  return (
    <div className="w-full bg-emerald-600 h-12 flex items-center overflow-hidden fixed top-0 left-0 z-[100]">
      <div className="scroll-text text-white text-xl font-bold whitespace-nowrap">
        ➤ We are going to open our 2nd PG named as FestiCoLive II on 15th Nov 2025 ➤
      </div>

      <style>{`
        .scroll-text {
          display: inline-block;
          padding-left: 100%;
          animation: scrollLeft 10s linear infinite;
        }
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}

/* ----------------------------------------------------------
   HEADER (NOW FIXED BELOW ANNOUNCEMENT)
----------------------------------------------------------- */
function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50 top-12">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-emerald-600">FESTI CO-LIVE PG</div>

        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="md:hidden text-sm px-3 py-2 bg-emerald-500 text-white rounded">
          Book
        </a>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------
   HERO (PUSHED DOWN 120px SO NOTHING OVERLAPS)
----------------------------------------------------------- */
function Hero() {
  return (
    <section
      className="h-[55vh] flex items-center text-white mt-[120px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${IMAGES.common})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold">FESTI CO-LIVE PG</h1>
        <p className="mt-3 text-lg opacity-90">
          Clean • Secure • Affordable rooms near Hafeezpet, Hyderabad.
        </p>

        <a
          href="#rooms"
          className="mt-6 inline-block px-5 py-3 bg-emerald-500 rounded text-white font-medium"
        >
          View Rooms
        </a>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   ROOMS
----------------------------------------------------------- */
function Rooms() {
  return (
    <section id="rooms" className="space-y-6">
      <h2 className="text-3xl font-bold">Rooms & Pricing</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RoomCard
          img={IMAGES.room1share}
          title="1-Sharing Room"
          price="₹20,000 / month"
          features={["High Privacy", "AC / Non-AC", "Attached Washroom", "Workspace"]}
        />

        <RoomCard
          img={IMAGES.room2share}
          title="2-Sharing Room"
          price="₹12,000 / month"
          features={["2 Beds", "Spacious", "Wi-Fi", "Housekeeping"]}
        />

        <RoomCard
          img={IMAGES.room3share}
          title="3-Sharing Room"
          price="₹9,000 / month"
          features={["Budget-Friendly", "Good Ventilation", "Power Backup", "Wi-Fi Included"]}
        />

        <RoomCard
          img={IMAGES.room4share}
          title="4-Sharing Room"
          price="₹8,000 / month"
          features={["Affordable", "Clean Rooms", "Lockers", "Wi-Fi"]}
        />
      </div>

      <p className="text-sm text-gray-600">
        * Electricity charges negligible & based on usage.  
        * Veg & Non-Veg Weekly Food (Chicken fry, Chicken biryani, Omelette).
      </p>
    </section>
  );
}

function RoomCard({ img, title, price, features }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src={img} alt={title} className="w-full h-44 object-cover" />

      <div className="p-4">
        <h4 className="font-semibold text-lg">{title}</h4>
        <div className="text-emerald-600 font-bold">{price}</div>

        <ul className="mt-3 text-sm text-gray-600 space-y-1">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   GALLERY
----------------------------------------------------------- */
function Gallery() {
  return (
    <section id="gallery" className="space-y-6">
      <h2 className="text-3xl font-bold">Gallery</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <img src={IMAGES.room1share} className="rounded object-cover h-48 w-full" alt="1 share" />
        <img src={IMAGES.room2share} className="rounded object-cover h-48 w-full" alt="2 share" />
        <img src={IMAGES.room3share} className="rounded object-cover h-48 w-full" alt="3 share" />
        <img src={IMAGES.kitchen} className="rounded object-cover h-48 w-full" alt="kitchen" />
        <img src={IMAGES.dining} className="rounded object-cover h-48 w-full" alt="dining" />
        <img src={IMAGES.room4share} className="rounded object-cover h-48 w-full" alt="4 share" />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   CONTACT
----------------------------------------------------------- */
function Contact() {
  return (
    <section id="contact" className="bg-neutral-900 text-white rounded-xl p-8 grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-3xl font-bold">Contact Us</h3>

        <p className="mt-3 text-gray-300">
          For bookings or visits, call us anytime.
        </p>

        <div className="mt-6 space-y-3">
          <p><strong>Phone:</strong> 8500414375 / 9390006302</p>
          <p>
            <strong>Address:</strong><br />
            Survey No 80, Plot No 17, Marthanda Nagar Rd,<br />
            New Hafeezpet, Gopal Reddy Nagar, Hyderabad 500049
          </p>
        </div>
      </div>

      <iframe
        title="Festi Co-Live PG Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2005470193374!2d78.357!3d17.490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b!2s!5e0!3m2!1sen!2sin!4v000000000"
        width="100%"
        height="220"
        className="rounded-xl border-0"
        loading="lazy"
      ></iframe>
    </section>
  );
}

/* ----------------------------------------------------------
   FOOTER
----------------------------------------------------------- */
function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} FESTI CO-LIVE PG. All Rights Reserved.
    </footer>
  );
}

function BookingForm() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    room_type: "",
    with_food: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      (process.env.REACT_APP_API_URL || "http://localhost:8000/api") + "/book",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      }
    );

    const data = await res.json();
    alert("Booking sent! ID: " + data.id);

    setForm({ name: "", phone: "", room_type: "", with_food: false });
  };

  return (
    <section className="bg-white shadow p-6 rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        />

        <select
          name="room_type"
          value={form.room_type}
          onChange={handleChange}
          className="w-full p-3 border rounded"
          required
        >
          <option value="">Select Room Type</option>
          <option value="1-sharing">1 Sharing</option>
          <option value="2-sharing">2 Sharing</option>
          <option value="3-sharing">3 Sharing</option>
          <option value="4-sharing">4 Sharing</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="with_food"
            checked={form.with_food}
            onChange={handleChange}
          />
          Need Food Included
        </label>

        <button
          type="submit"
          className="px-4 py-2 bg-emerald-600 text-white rounded"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
