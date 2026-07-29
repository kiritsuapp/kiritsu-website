import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kiritsu",
    short_name: "Kiritsu",
    description: "A private, local-first study companion.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7f5",
    theme_color: "#2f6f5e",
    icons: [{ src: "/kiritsu.png", sizes: "512x512", type: "image/png" }],
  };
}
