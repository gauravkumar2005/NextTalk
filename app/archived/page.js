export default function ArchivedPage() {
  const archivedChats = [
    {
      id: 1,
      name: "Rahul",
      message: "Project complete ho gaya bhai.",
      time: "10:45 PM",
    },
    {
      id: 2,
      name: "Amit",
      message: "Kal meeting rakhte hai.",
      time: "08:12 PM",
    },
    {
      id: 3,
      name: "Priya",
      message: "UI design bhej diya.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Archived Chats</h1>
            <p className="text-gray-400 mt-2">
              Your archived conversations are stored here.
            </p>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition duration-300">
            Back
          </button>
        </div>

        <div className="space-y-4">
          {archivedChats.map((chat) => (
            <div
              key={chat.id}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 hover:bg-zinc-800 transition duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{chat.name}</h2>
                  <p className="text-gray-400 mt-1">{chat.message}</p>
                </div>

                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>

              <div className="flex gap-3 mt-5">
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-sm font-medium transition duration-300">
                  Unarchive
                </button>

                <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-sm font-medium transition duration-300">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
