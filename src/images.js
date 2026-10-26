// Loads every image in /pics and sorts them by the number in the filename.
// Works whether files are named "image 1.jpeg" or "image1.jpeg".
const modules = import.meta.glob("../pics/*.jpeg", {
  eager: true,
  import: "default",
});

const byNumber = {};
for (const [path, url] of Object.entries(modules)) {
  const m = path.match(/image\s*(\d+)\.jpeg$/i);
  if (m) byNumber[Number(m[1])] = url;
}

export const backgroundImage = byNumber[15];

export const collagePhotos = Array.from({ length: 43 }, (_, i) => i + 1)
  .filter((n) => n !== 15)
  .map((n) => ({ n, src: byNumber[n] }))
  .filter((p) => p.src);