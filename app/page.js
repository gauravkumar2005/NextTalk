import Link from "next/link";

export default function Home() {
  return (
    <div className="text-4xl m-5 bg-gray-300  text-center p-20">
     <h2 className=" text-blue-600 font-bold">This is a chatting Website</h2>
     <div className="bg-red-600 w-50 p-2 text-center  rounded-md">
      <Link href="/chat">Go to Chat</Link>
     </div>
    </div>
  );
} 
