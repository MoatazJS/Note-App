"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default function Home() {
  const username = "Moataz";

  const [notes, setNotes] = useState([
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
    { id: 1, text: "Buy groceries and milk 🥛" },
    { id: 2, text: "Finish Next.js project 🚀" },
    { id: 3, text: "Call Ahmed about wedding plans 📞" },
  ]);

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 sticky top-0 bg-black z-10 py-4">
        <h1 className="text-3xl font-bold text-slate-200 text-center md:text-left">
          Welcome, <span className="text-purple-400">{username}</span>
        </h1>

        {/* Add Note button only on md+ */}
        <button className="hidden md:flex cursor-pointer items-center gap-2 bg-slate-800 border border-slate-600 px-5 py-2 rounded-xl shadow hover:bg-slate-700 transition mt-4 md:mt-0">
          <Plus size={20} /> Add Note
        </button>
      </header>

      {/* Notes grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            {/* Note text */}
            <p className="text-slate-300 whitespace-pre-wrap">{note.text}</p>

            {/* Actions */}
            <div className="flex justify-end gap-4 mt-4">
              <button className="text-slate-400 hover:text-blue-400 transition">
                <Edit2 size={18} />
              </button>
              <button className="text-slate-400 hover:text-red-400 transition">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating button - only on mobile */}
      <button className="md:hidden fixed bottom-6 right-6 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full shadow-lg transition z-20">
        <Plus size={22} />
        Add Note
      </button>
    </div>
  );
}
