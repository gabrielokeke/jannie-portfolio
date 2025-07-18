"use client";
import GalleryItem from "./GalleryItem";

interface Album {
  title: string;
  description: string;
  images: { src: string }[]; // no titles anymore
}

interface GalleryAlbumProps {
  album: Album;
}

const GalleryAlbum: React.FC<GalleryAlbumProps> = ({ album }) => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl text-center font-bold text-yellow-400 mb-4">
        {album.title}
      </h2>
      <p className="text-center text-gray-300 max-w-4xl mx-auto mb-8">
        {album.description}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {album.images.map((img, i) => (
          <GalleryItem key={i} src={img.src} alt={album.title + " image " + (i + 1)} />
        ))}
      </div>
    </section>
  );
};

export default GalleryAlbum;
