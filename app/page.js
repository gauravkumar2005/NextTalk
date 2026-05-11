import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300  text-center px-4 py-10">
     <h2 className=" text-4xl sm:text-5xl md:6xl text-blue-600 font-bold">This is a chatting Website</h2>
     <br>
     </br>
     <div className="bg-red-600 wt-6 p-2 text-center hover:bg-green-600 rounded-md">
      <Link href="/chat"
       className="text-white px-6 py-3 rounded-md"
      >Go to Chat</Link>
     </div>
    </div>
  );
} 
