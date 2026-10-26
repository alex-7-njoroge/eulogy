import React from "react";

const ITEMS = [
  ["08:00am", "Departure from home"],
  ["08:30am", "Arrival at Gachie SDA Funeral home"],
  ["09:00am", "Viewing of the body & prayers"],
  ["09:15am", "Departure from SDA Funeral Home"],
  ["09:30am", "Departure from SDA funeral home"],
  ["10:00am", "Arrival at ACK St. James Kiiniki"],
  ["11:00am", "Church Service"],
];

const SPEECHES = [
  ["Welcoming guests", ""],
  ["Eulogy", "Mburu Gikonyo"],
  ["Transport manager", "Ngugi Willies"],
  ["Master of Ceremony", "Simon Gikonyo"],
  ["Vote of thanks", "David Kamau"],
  ["First Aides", "Njenga Mberere"],
  ["Church Event Coordinator", "Peter Gikonyo Njeri"],
];

export default function Program() {
  return (
    <section className="program-section">
      <div className="collage-head">
        <h2>Order of Program</h2>
      </div>

      <div className="program-card">
        <ul className="program-list">
          {ITEMS.map(([time, what]) => (
            <li key={time}>
              <span className="p-time">{time}</span>
              <span className="p-what">{what}</span>
            </li>
          ))}
        </ul>

        <h3 className="program-sub">Speeches</h3>
        <ul className="program-list">
          {SPEECHES.map(([role, who]) => (
            <li key={role}>
              <span className="p-time">{who ? role : ""}</span>
              <span className="p-what">{who || role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}