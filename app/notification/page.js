"use client";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "New Message",
      desc: "Rahul sent you a message",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Friend Request",
      desc: "Aman sent you a request",
      time: "10 min ago",
    },
    {
      id: 3,
      title: "Group Invite",
      desc: "You were added to React Group",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      
      {/* Card */}
      <div className="w-[360px] bg-white rounded-2xl shadow-lg p-5">
        
        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Notif</h2>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-gray-100 rounded-lg flex justify-between items-start"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}