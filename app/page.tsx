import { getServerSession } from "next-auth";
import Image from "next/image";
// import Link from "next/link";
import { authOptions } from "./api/auth/authOptions";
// import coffee from "./images/coffee.jpeg";
// import { Metadata } from "next";

export default async function Home() {
  const session = await getServerSession(authOptions);

  //If i use <Image> from next/image
  //the endpoint that serves the optimised images = /_next/image
  ///_next/image?url=%2Fpath%2Fto%2Fimage.jpg&w=750&q=75

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <main className="relative h-screen">
        {/* use next Image tag rather than normal html image tag better optimisation */}
        {/* use fill for dynamic sizing, objectFit: cover to fix weird image */}
        {/*  the main element is static by default, so when we use fill we need to set main to relative, abosolute or sticky*/}
        {/* <HeavyComponent /> */}
        <Image
          src={"https://bit.ly/react-cover"}
          alt="coffee"
          fill
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </main>
    </div>
  );
}

// For pages that have dynamic endpoints (catchall statements)
//We need
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("")

//   return {
//     title: "product.title"
//   }
// }
// export const metaData: Metadata = {
//   title: "...",

// }
