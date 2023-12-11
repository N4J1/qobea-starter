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
         <main className="min-h-screen flex flex-col justify-center items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#cc01ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <p className="font-extrabold mb-10 text-transparent text-7xl bg-clip-text bg-gradient-to-r from-[#7400c2] via-[#2a00d2] to-[#a408b2]">
               Aspyer
            </p>
            <p className="glow">LOADING...</p>
         </main>
      </>
   );
}
