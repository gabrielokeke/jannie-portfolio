import GalleryAlbum from "@/components/GalleryAlbum";

const albums = [
  {
  title: "Kiss the rose",
  description:
    "Kiss the Rose is a visual love letter to elegance, passion, and vulnerability. Each frame captures the delicate balance between beauty and strength like a rose kissed by dusk. With soft lighting, expressive emotion, and romantic depth, this collection whispers stories of longing, grace, and quiet power blooming in full color.",
  images: [
    { src: "/bskt.jpg" },
    { src: "/bskt1.jpg" },
    { src: "/bskt2.jpg" },
    { src: "/bskt3.jpg" },
  ],
  },

    {
  title: "Kiss the rose",
  description:
    "Kiss the Rose is a visual love letter to elegance, passion, and vulnerability. Each frame captures the delicate balance between beauty and strength like a rose kissed by dusk. With soft lighting, expressive emotion, and romantic depth, this collection whispers stories of longing, grace, and quiet power blooming in full color.",
  images: [
    { src: "/rose1.jpg" },
    { src: "/rose2.jpg" },
    { src: "/rose4.jpg" },
    { src: "/rose5.jpg" },
  ],
  },

    {
    title: "Urban Edge",
    description:
      "Urban Edge reflects the gritty and stylish life of the city streets. Bold attitudes meet sleek fashion in this modern, edgy collection.",
    images: [
      { src: "/29.jpg" },
      { src: "/30.jpg" },
      { src: "/31.5.jpg" },
      { src: "/32.jpg" },
    ],
  },

    {
    title: "Power Moves",
    description:
      "Power Moves embodies confidence and assertiveness. This album features dynamic poses and impactful moments that convey unstoppable energy and drive.",
    images: [
      { src: "/33.jpg" },
      { src: "/34.jpg" },
      { src: "/35.jpg" },
      { src: "/36.jpg" },
    ],
  },

  {
    title: "Texas Style Shoot",
    description:
      "Experience the rugged charm and bold spirit of the Lone Star State through this Texas Style Shoot. From the wide-open plains to the intimate moments, these photos capture the essence of Western flair and timeless fashion, showcasing powerful poses and vibrant energy.",
    images: [
      { src: "/37.jpg" },
      { src: "/38.jpg" },
      { src: "/39.jpg" },
      { src: "/40.jpg" },
    ],
  },
  {
    title: "Hearts in Harmony",
    description:
      "Celebrate the tender moments and deep connections of love with Hearts in Harmony. This album captures the essence of romance from gentle glances to passionate embraces set against soft lighting and heartfelt expressions, making every photo a tribute to affection and togetherness.",
    images: [
      { src: "/21.jpg" },
      { src: "/22.jpg" },
      { src: "/23.jpg" },
      { src: "/24.jpg" },
    ],
  },

  {
    title: "Moana 2: Montchu Peak",
    description:
      "Inspired by the fearless spirit of Moana, “Montchu Peak” is a tribute to the modern muse bold, rooted, and unapologetically radiant. This modeling series captures strength in softness, grace in rebellion, and heritage in high fashion. Set against windswept backdrops and earthy tones, each pose channels a warrior’s heart and a queen’s poise a celebration of identity, nature, and the journey toward self-discovery.",
    images: [
      { src: "/moana.jpg" },
      { src: "/moana1.jpg" },
      { src: "/moana2.jpg" },
      { src: "/moana3.jpg" },
    ],
  },

  {
    title: "We Outside",
    description:
      "We Outside celebrates boldness and freedom, capturing models in their element beyond the studio walls. This collection highlights raw energy, natural light, and street-smart style where every pose tells a story of confidence, connection, and unstoppable vibes.",
    images: [
      { src: "/01.jpg" },
      { src: "/02.jpg" },
      { src: "/03.jpg" },
      { src: "/04.jpg" },
    ],
  },

  {
  title: "Sunset Serenity",
  description:
    "Bask in the tranquil hues of golden hour with Sunset Serenity. This collection captures peaceful moments drenched in warm light, showcasing nature’s most breathtaking colors and serene atmospheres.",
  images: [
    { src: "/25.jpg" },
    { src: "/26.jpg" },
    { src: "/27.jpg" },
    { src: "/28.jpg" },
    ],
  },

  {
    title: "Runway Royalty",
    description:
      "Experience high fashion and commanding presence in Runway Royalty. These photos showcase elegance, poise, and bold runway looks fit for the most discerning audiences.",
    images: [
      { src: "/12.5.jpg" },
      { src: "/10.jpg" },
      { src: "/11.jpg" },
      { src: "/12.jpg" },
    ],
  },

  {
    title: "Black & Bold",
    description:
      "Black & Bold captures the essence of strength and sophistication. A collection that balances dark tones with fearless expressions and striking compositions.",
    images: [
      { src: "/05.jpg" },
      { src: "/06.jpg" },
      { src: "/07.jpg" },
      { src: "/08.jpg" },
    ],
  },

  {
    title: "Korean Vibes: Jhae Nae😅",
    description:
      "Korean Vibes: Jhae Nae😅 captures the sleek mini clothing vibe with sharp, tailored looks and youthful energy. This collection blends confident poses with a playful, “caught off guard” charm the perfect mix of style and personality.",
    images: [
      { src: "/17.jpg" },
      { src: "/18.jpg" },
      { src: "/19.jpg" },
      { src: "/20.jpg" },
    ],
  },

];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-40 bg-black py-16 px-4">
      <h1 className="text-center text-5xl font-bold mb-10 text-yellow-400">
        Jannie's Gallery
      </h1>
      <br />
      <br />

      {albums.map((album, i) => (
        <GalleryAlbum key={i} album={album} />
      ))}
    </div>
  );
}
