import React, { useState } from "react";
import { english, kikuyu } from "./content.js";
import PhotoCollage from "./PhotoCollage.jsx";
import { backgroundImage } from "./images.js";
import MapLocation from "./MapLocation.jsx";
import Program from "./Program.jsx";

const UI = {
  en: { collageTitle: "In Loving Memory" },
  ki: { collageTitle: "In Loving Memory" },
};

function Eulogy({ data, lang }) {
  return (
    <article className="eulogy" lang={lang}>
      <h2 className="eulogy-title">{data.title}</h2>
      {data.sections.map((s) => (
        <div className="eulogy-block" key={s.heading}>
          <h3>{s.heading}</h3>
          <p>{s.text}</p>
        </div>
      ))}
      {data.closing && <p className="closing">{data.closing}</p>}
      <blockquote className="scripture">
        <p>{data.scripture}</p>
        <cite>{data.scriptureRef}</cite>
      </blockquote>
    </article>
  );
}

export default function App() {
  const [view, setView] = useState("en"); // en | ki | both

  return (
    <div className="page">
      <header
        className="hero"
        style={{ "--hero-img": `url("${backgroundImage}")` }}
      >
        <p className="eyebrow">1943 — 2026</p>
        <h1>John Ngugi Gikonyo</h1>
        <p className="hero-sub">Forever in our hearts</p>
      </header>

      <Program />

      <nav className="switcher no-print" aria-label="Language">
        <button
          className={view === "en" ? "active" : ""}
          onClick={() => setView("en")}
        >
          English
        </button>
        <button
          className={view === "ki" ? "active" : ""}
          onClick={() => setView("ki")}
        >
          Gikuyu
        </button>
        <button
          className={view === "both" ? "active" : ""}
          onClick={() => setView("both")}
        >
          Both
        </button>
      </nav>

      <main className={`eulogies ${view === "both" ? "two-col" : ""}`}>
        {(view === "en" || view === "both") && (
          <Eulogy data={english} lang="en" />
        )}
        {(view === "ki" || view === "both") && (
          <Eulogy data={kikuyu} lang="ki" />
        )}
      </main>

      <PhotoCollage labels={UI.en} />

      <MapLocation />

      <footer className="foot">
        <p>ACK St James Kiiniki</p>
      </footer>
    </div>
  );
}