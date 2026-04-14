import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="bg-purple-200">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className="text-2xl font-bold">
            The best URL shortner in the market</p>
          <p className="px-26 text-center">
            We are the most straight forward URL shortner in the world.Most of the URL shortners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortner</p>
            <div className='flex gap-3 justify-start'>
          <Link href="/generate"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
        </div>
        </div>
        <div className="justify-start object-contain relative">
          <Image className="mix-blend-darken" alt="vector" src={"/vector.jpg"} fill={true}/> 

        </div>

      </section>
    </main>
  );
}
