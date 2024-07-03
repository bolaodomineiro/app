import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-screen">
        <Image
          src="/logotipo.png"
          alt="Bolão do Mineiro"
          width={200}
          height={300}
          className="mx-auto"
        />
        <div className="m-8 text-center">
          <h1 className="text-3xl font-bold">Bolão do Mineiro</h1>
          <h3>Diversão e emoção andam juntas!</h3>
        </div>
      </div>
    </>
  );
}
