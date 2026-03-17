import { useState } from "react";
import MessageHistory from "./components/MessageHistory";

function Team_messaging() {
  const [selectedCleaners, setSelectedCleaners] = useState([]);
  const [selectedCityFilter, setSelectedCityFilter] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageHistory, setMessageHistory] = useState([
    {
      id: 1,
      senders: ["Sarah Khan", "James Miller", "Emma Wilson"],
      message: "Please ensure all cleaning supplies are restocked before this weekend.",
      date: "05/02/2026",
      time: "09:30",
    },
    {
      id: 2,
      senders: ["Sarah Khan", "James Miller", "Emma Wilson"],
      message: "Please ensure all cleaning supplies are restocked before this weekend.",
      date: "05/02/2026",
      time: "09:30",
    },
    {
      id: 3,
      senders: ["Sarah Khan", "James Miller", "Emma Wilson"],
      message: "Please ensure all cleaning supplies are restocked before this weekend.",
      date: "05/02/2026",
      time: "09:30",
    },
  ]);

  // Sample cleaners data - All cleaners available for selection
  const allCleaners = [
    { id: 1, name: "Sarah Khan", city: "Bradford" },
    { id: 2, name: "James Miller", city: "Leeds" },
    { id: 3, name: "Emma Wilson", city: "Halifax" },
    { id: 4, name: "John Smith", city: "Leeds" },
    { id: 5, name: "Lisa Chen", city: "Leeds" },
    { id: 6, name: "Michael Johnson", city: "Halifax" },
  ];

  // All cleaners for the sidebar
  const cleanersByCities = {
    Bradford: allCleaners.filter(c => c.city === "Bradford"),
    Halifax: allCleaners.filter(c => c.city === "Halifax"),
    Leeds: allCleaners.filter(c => c.city === "Leeds"),
  };

  const handleSelectCleaner = (cleaner) => {
    if (!selectedCleaners.find((c) => c.id === cleaner.id)) {
      setSelectedCleaners([...selectedCleaners, cleaner]);
    }
  };

  const handleRemoveCleaner = (cleanerId) => {
    setSelectedCleaners(selectedCleaners.filter((c) => c.id !== cleanerId));
  };

  const handleUnselectAll = () => {
    setSelectedCleaners([]);
  };

  const handleSendMessage = () => {
    if (messageText.trim() && selectedCleaners.length > 0) {
      const newMessage = {
        id: messageHistory.length + 1,
        senders: selectedCleaners.map((c) => c.name),
        message: messageText,
        date: new Date().toLocaleDateString("en-GB"),
        time: new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessageHistory([newMessage, ...messageHistory]);
      setMessageText("");
      setSelectedCleaners([]);
    }
  };

  const cities = ["Bradford", "Halifax", "Leeds"];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="px-4 py-4 sm:px-6">
        <h1 className="m-0 text-xl font-bold text-gray-900">Team Messaging</h1>
        <p className="mt-1 text-xs text-gray-600 sm:text-sm">Send messages to cleaners - appears on their dashboards</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4 p-4 sm:p-6 xl:flex-row">
        {/* Left Section - Compose Message */}
        <div className="flex-1">
          <div className="mb-4 rounded-lg bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="m-0 text-base font-semibold text-gray-900">Compose Message</h2>
            </div>

            {/* Select Cleaners */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-medium text-gray-700 sm:text-sm">Select Cleaners *</label>
                {selectedCleaners.length > 0 && (
                  <button
                    onClick={handleUnselectAll}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    Unselect All
                  </button>
                )}
              </div>

              {/* Selected Cleaners Grid */}
              <div className="grid grid-cols-1 gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3 sm:grid-cols-2 xl:grid-cols-3">
                {selectedCleaners.length > 0 ? (
                  selectedCleaners.map((cleaner) => (
                    <div
                      key={cleaner.id}
                      className="flex items-center gap-2 rounded-md bg-white p-2"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        onChange={() => handleRemoveCleaner(cleaner.id)}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
                        {cleaner.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate text-xs font-medium text-gray-900 sm:text-sm">{cleaner.name}</p>
                        <p className="text-xs text-gray-600">{cleaner.city}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="py-4 text-center text-xs text-gray-600 sm:col-span-2 xl:col-span-3">No cleaners selected</p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-4">
              <label className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">Message *</label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message here..."
                className="w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-xs outline-none focus:border-blue-600 sm:text-sm"
                rows="4"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim() || selectedCleaners.length === 0}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Send Message
            </button>
          </div>

          <MessageHistory messages={messageHistory} />
        </div>

        {/* Right Section - All Cleaners Sidebar */}
        <div className="w-full xl:w-80">
          <div className="rounded-lg bg-white p-4">
            {/* City Dropdown */}
            <div className="mb-4">
              <select
                value={selectedCityFilter}
                onChange={(e) => setSelectedCityFilter(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs text-gray-700 outline-none focus:border-blue-600 sm:text-sm"
              >
                <option value="">City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* All Cleaners Section */}
            <div className="mb-3 flex items-center gap-2">
              <div className="w-5 h-5 flex items-center justify-center">👥</div>
              <h3 className="m-0 text-sm font-semibold text-gray-900">All Cleaners</h3>
            </div>

            <div className="max-h-80 space-y-2 overflow-y-auto">
              {selectedCityFilter ? (
                // Show cleaners from selected city
                cleanersByCities[selectedCityFilter]?.length > 0 ? (
                  cleanersByCities[selectedCityFilter].map((cleaner) => (
                    <div
                      key={cleaner.id}
                      className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-100 p-2 transition hover:bg-gray-50"
                      onClick={() => handleSelectCleaner(cleaner)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCleaners.some((c) => c.id === cleaner.id)}
                        onChange={() => handleSelectCleaner(cleaner)}
                        className="h-4 w-4 cursor-pointer"
                      />
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
                        {cleaner.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-gray-900 sm:text-sm">{cleaner.name}</p>
                        <p className="text-xs text-gray-600">{cleaner.city}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="py-6 text-center text-xs text-gray-600">No cleaners in this city</p>
                )
              ) : (
                // Show all cleaners when no city is selected
                allCleaners.map((cleaner) => (
                  <div
                    key={cleaner.id}
                    className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-100 p-2 transition hover:bg-gray-50"
                    onClick={() => handleSelectCleaner(cleaner)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCleaners.some((c) => c.id === cleaner.id)}
                      onChange={() => handleSelectCleaner(cleaner)}
                      className="h-4 w-4 cursor-pointer"
                    />
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-blue-600 text-xs font-bold text-white">
                      {cleaner.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-900 sm:text-sm">{cleaner.name}</p>
                      <p className="text-xs text-gray-600">{cleaner.city}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team_messaging;
