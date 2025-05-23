import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const { code } = useParams();
  const location = useLocation();

  let title = "";
  let description = "";
  let imageUrl = "";

  switch (code) {
    case "400":
      title = "Bad Request";
      description = "Permintaan tidak valid. Silakan periksa kembali.";
      imageUrl = "/img/400.webp";
      break;
    case "401":
      title = "Unauthorized";
      description = "Anda belum login atau tidak memiliki akses.";
      imageUrl = "/img/401.png";
      break;
    case "403":
      title = "Forbidden";
      description = "Akses ke halaman ini ditolak.";
      imageUrl = "/img/403.png";
      break;
    case "404":
      title = "Not Found";
      description = "Halaman tidak ditemukan.";
      imageUrl = "/img/404.jpg";
      break;
    default:
      title = `Unknown Error ${code || "Unknown"}`;
      description = "Terjadi kesalahan yang tidak dikenali.";
      imageUrl = "/img/404.jpg";
      break;
  }

  // Optionally, we can customize message based on current path or layout
  // For example, if the path is under /login or /register, show a more auth-related message

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-gray-50 dark:bg-gray-900">
      <img
        src={imageUrl}
        alt={`Error ${code}`}
        className="w-64 h-64 object-contain"
        onError={(e) => {
          e.target.src = "/img/default-error.jpg";
        }}
      />
      <h2 className="text-3xl font-semibold mt-4 text-red-600 dark:text-red-400">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-md">{description}</p>
      <p className="mt-4 text-sm text-gray-400">{`At path: ${location.pathname}`}</p>
    </div>
  );
}

