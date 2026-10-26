import React from "react";
import { collagePhotos } from "./images.js";

const ROWS = 3;

export default function PhotoCollage({ labels }) {
  // Split the photos evenly into 3 rows
  const perRow = Math.ceil(collagePhotos.length / ROWS);
  const rows = Array.from({ length: ROWS }, (_, r) =>
    collagePhotos.slice(r * perRow, (r + 1) * perRow)
  );

  return (
    <section className="collage-section">
      <div className="collage-head">
        <h2>{labels.collageTitle}</h2>
      </div>

      <div className="gallery-rows">
        {rows.map((row, r) => (
          <div className="gallery-row" key={r}>
            {row.map(({ n, src }) => (
              <figure key={n} className="gallery-item">
                <img src={src} alt={`Memory ${n}`} loading="lazy" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}