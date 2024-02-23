import Image from "next/image";

export default function Home() {
  return (
    <figure id="container">
      <Image
      src="/bg.jpg"
      width={1920}
      height={1280}
      / >
      <figcaption>Bolão do Mineiro</figcaption>
    </figure>
  );
}
