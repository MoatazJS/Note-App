"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { apiServices } from "@/lib/ApiCalls/services";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { Note } from "@/lib/Interfaces/types";

export default function Home() {
  const username = "Moataz";

  const [notes, setNotes] = useState<Note[]>([
    { id: "1", title: "Groceries", text: "Buy groceries and milk 🥛" },
    { id: "2", title: "Project", text: "Finish Next.js project 🚀" },
    { id: "3", title: "Call", text: "Call Ahmed about wedding plans 📞" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newText, setNewText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function HandleCreateNote() {
    if (!newTitle.trim() || !newText.trim()) return;

    try {
      // Call API
      setIsLoading(true);
      const response = await apiServices.createNewNoteApi({
        title: newTitle,
        content: newText,
      });
      console.log(response);
      // Add the new note to state (use response.note from your API)
      setNotes([
        ...notes,
        {
          id: response.note._id, // use the backend ID
          title: response.note.title,
          text: response.note.content, // map "content" to our local "text"
        },
      ]);

      // Clear inputs
      setNewTitle("");
      setNewText("");
      setIsLoading(false);
    } catch (error) {
      console.error("Error creating note:", error);
    }
  }
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-8">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-10 sticky top-0 bg-black z-10 py-4">
        <h1 className="text-3xl font-bold text-slate-200 text-center md:text-left">
          Welcome, <span className="text-purple-400">{username}</span>
        </h1>

        {/* Add Note button only on md+ */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="hidden md:flex cursor-pointer items-center gap-2 bg-slate-800 border border-slate-600 px-5 py-2 rounded-xl shadow hover:bg-slate-700 transition mt-4 md:mt-0">
              <Plus size={20} /> Add Note
            </button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border border-slate-700 text-slate-200 rounded-2xl shadow-lg">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-purple-400">
                Add a new note
              </DialogTitle>
              <DialogDescription className="text-slate-400">
                Fill in the title and note details below:
              </DialogDescription>
            </DialogHeader>

            {/* Title input */}
            <input
              type="text"
              className="w-full p-3 rounded-md bg-slate-800 text-slate-200 border border-slate-600 
               focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Note Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />

            {/* Note area */}
            <textarea
              className="w-full mt-3 p-3 rounded-md bg-slate-800 text-slate-200 border border-slate-600 
               focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={4}
              placeholder="Write your note..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />

            {/* Save button */}
            <button
              onClick={HandleCreateNote}
              disabled={isLoading}
              className="cursor-pointer mt-3 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg 
               transition w-full font-medium"
            >
              Save Note
            </button>
          </DialogContent>
        </Dialog>
      </header>

      {/* Notes grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:shadow-purple-500/20 transition"
          >
            <h2 className="text-lg font-semibold text-purple-400 mb-2">
              {note.title}
            </h2>
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
      <Dialog>
        <DialogTrigger asChild>
          <button className="md:hidden fixed bottom-6 right-6 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-full shadow-lg transition z-20">
            <Plus size={22} />
            Add Note
          </button>
        </DialogTrigger>
        <DialogContent
          className="bg-slate-900 border border-slate-700 text-slate-200 
               rounded-2xl shadow-lg shadow-purple-500/30"
        >
          <DialogHeader>
            <DialogTitle className="text-slate-100">Add a new note</DialogTitle>
            <DialogDescription className="text-slate-400">
              Fill in the title and note details below:
            </DialogDescription>
          </DialogHeader>

          {/* Title input */}
          <input
            type="text"
            className="w-full p-3 rounded-md bg-slate-800 text-slate-200 
                 border border-slate-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500"
            placeholder="Note Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          {/* Note area */}
          <textarea
            className="w-full mt-3 p-3 rounded-md bg-slate-800 text-slate-200 
                 border border-slate-600 focus:outline-none 
                 focus:ring-2 focus:ring-purple-500"
            rows={4}
            placeholder="Write your note..."
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          {/* Save button */}
          <button
            disabled={isLoading}
            onClick={HandleCreateNote}
            className="cursor-pointer mt-3 bg-purple-600 hover:bg-purple-500 
                 px-4 py-2 rounded-lg transition w-full text-white"
          >
            Save Note
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
