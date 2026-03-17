import React, { useState } from "react";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";

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
      <div className="px-10 py-5 ">
        <h1 className="text-2xl font-bold text-gray-900 m-0">Team Messaging</h1>
        <p className="text-sm text-gray-600 mt-1">Send messages to cleaners - appears on their dashboards</p>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 p-10">
        {/* Left Section - Compose Message */}
        <div className="flex-1">
          <div className="bg-white rounded-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-900 m-0">Compose Message</h2>
            </div>

            {/* Select Cleaners */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">Select Cleaners *</label>
                {selectedCleaners.length > 0 && (
                  <button
                    onClick={handleUnselectAll}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Unselect All
                  </button>
                )}
              </div>

              {/* Selected Cleaners Grid */}
              <div className="grid grid-cols-3 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
                {selectedCleaners.length > 0 ? (
                  selectedCleaners.map((cleaner) => (
                    <div
                      key={cleaner.id}
                      className="flex items-center gap-2 bg-white p-3 rounded-lg"
                    >
                      <input
                        type="checkbox"
                        checked={true}
                        onChange={() => handleRemoveCleaner(cleaner.id)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-xs font-bold">
                        {cleaner.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{cleaner.name}</p>
                        <p className="text-xs text-gray-600">{cleaner.city}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="col-span-3 text-sm text-gray-600 text-center py-6">No cleaners selected</p>
                )}
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-600 text-sm resize-none"
                rows="5"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSendMessage}
              disabled={!messageText.trim() || selectedCleaners.length === 0}
              className=" px-10 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              📨 Send Message
            </button>
          </div>

          {/* Message History */}
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Message History</h2>
            <div className="space-y-4">
              {messageHistory.map((msg) => (
                <div key={msg.id} className="flex gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                  {/* Avatars */}
                  <div className="flex -space-x-2">
                    {msg.senders.slice(0, 3).map((sender, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                      >
                        {sender[0]}
                      </div>
                    ))}
                  </div>

                  {/* Message Content */}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{msg.senders.join(", ")}</p>
                    <p className="text-sm text-gray-600 mt-2">{msg.message}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-600">{msg.date}</p>
                    <p className="text-xs text-gray-600">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - All Cleaners Sidebar */}
        <div className="w-96">
          <div className="bg-white rounded-lg p-6">
            {/* City Dropdown */}
            <div className="mb-6">
              <select
                value={selectedCityFilter}
                onChange={(e) => setSelectedCityFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-blue-600 text-sm text-gray-700"
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 flex items-center justify-center">👥</div>
              <h3 className="font-semibold text-gray-900 text-base m-0">All Cleaners</h3>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedCityFilter ? (
                // Show cleaners from selected city
                cleanersByCities[selectedCityFilter]?.length > 0 ? (
                  cleanersByCities[selectedCityFilter].map((cleaner) => (
                    <div
                      key={cleaner.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition border border-gray-100"
                      onClick={() => handleSelectCleaner(cleaner)}
                    >
                      <input
                        type="checkbox"
                        checked={selectedCleaners.some((c) => c.id === cleaner.id)}
                        onChange={() => handleSelectCleaner(cleaner)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {cleaner.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{cleaner.name}</p>
                        <p className="text-xs text-gray-600">{cleaner.city}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-600 text-center py-6">No cleaners in this city</p>
                )
              ) : (
                // Show all cleaners when no city is selected
                allCleaners.map((cleaner) => (
                  <div
                    key={cleaner.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition border border-gray-100"
                    onClick={() => handleSelectCleaner(cleaner)}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCleaners.some((c) => c.id === cleaner.id)}
                      onChange={() => handleSelectCleaner(cleaner)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {cleaner.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{cleaner.name}</p>
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
