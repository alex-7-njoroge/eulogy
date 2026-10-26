import React from "react";

const PLACE_NAME = "ACK St. James Kiiniki, Kiambu";

// Your original share link, used for the button
const SHARE_URL = "https://maps.app.goo.gl/54ygrCbSJgesBWpk9";

const embedUrl =
  "https://maps.google.com/maps?cid=13251236282632117527&hl=en&z=16&output=embed";

export default function MapLocation() {
  return (
    <section className="map-section no-print">
      <div className="collage-head">
        <h2>Service Venue</h2>
        <p className="map-place">{PLACE_NAME}</p>
      </div>

      <div className="map-frame">
        <iframe
          title={`Map of ${PLACE_NAME}`}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="map-actions">
        <a className="btn" href={SHARE_URL} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}