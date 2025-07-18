/* eslint-disable @next/next/no-img-element */
"use client";

interface GalleryItemProps {
  src: string;
  alt?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div>
      <img
        src={src}
        alt={alt || ""}
        className="w-full h-auto object-cover rounded-md"
        loading="lazy"
      />
    </div>
  );
};

export default GalleryItem;
