const MessageHistory = ({ messages }) => {
  return (
    <div className="rounded-lg bg-white p-4 sm:p-5">
      <h2 className="mb-4 text-base font-semibold text-gray-900">Message History</h2>

      {messages.length === 0 ? (
        <p className="text-xs text-gray-600 sm:text-sm">No messages yet.</p>
      ) : (
        <div className="space-y-2.5">
          {messages.map((msg) => (
            <div key={msg.id} className="flex flex-col gap-2 rounded-md border border-gray-200 px-3 py-2.5 sm:flex-row sm:items-start sm:gap-3">
              <div className="flex -space-x-1.5">
                {msg.senders.slice(0, 3).map((sender) => (
                  <div
                    key={`${msg.id}-${sender}`}
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-linear-to-br from-blue-400 to-blue-600 text-xs font-bold text-white"
                  >
                    {sender[0]}
                  </div>
                ))}
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-900 sm:text-sm">{msg.senders.join(", ")}</p>
                <p className="mt-1 text-xs text-gray-600 sm:text-sm">{msg.message}</p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-xs text-gray-600">{msg.date}</p>
                <p className="text-xs text-gray-600">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageHistory;
