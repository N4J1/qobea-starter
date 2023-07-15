import Image from "next/image";

export default function Home() {
   return (
      <>
         {/* header */}
         <header className="fixed top-0 left-0 w-full h-24 p-3 flex justify-center items-center bg-transparent shadow-md">
            <div className="w-11/12 flex justify-between items-center">
               <div className="w-1/12">
                  <Image src="/favicon.ico" width={30} height={30} alt="logo" />
               </div>
            </div>
         </header>
         {/* main */}
         <main className="min-h-screen flex flex-col justify-center items-center">
            <p className="font-extrabold mb-10 text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#1b003e] via-[#350069] to-[#590daf]">
               qobea
            </p>
            <p className="text-base">COMMING SOON...</p>
         </main>
      </>
   );
}
