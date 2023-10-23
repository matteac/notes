import type { Note } from "$lib/types";
import { redirect } from "@sveltejs/kit";

let notes: Note[] = [
  {
    id: Math.random().toString(36).substring(2),
    title: "Meeting Agenda",
    content:
      "Discuss project updates, assign tasks, and plan the next milestone.",
  },
  {
    id: Math.random().toString(36).substring(2),
    title: "Grocery List",
    content: "Buy milk, eggs, and cheese.",
  },
];

export async function load() {
  return { notes: notes };
}

export const actions = {
  add: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    if (typeof title !== "string" || typeof content !== "string") {
      return;
    }
    let id = Math.random().toString(36).substring(2);
    if (title.trim() == "") {
      return;
    }
    notes = [...notes, { title, content, id }];
  },
  delete: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const id = data.get("id");
    if (typeof id !== "string") {
      return;
    }
    notes = notes.filter((note) => note.id !== id);
    throw redirect(302, "/");
  },
  edit: async ({ request }: { request: Request }) => {
    const data = await request.formData();
    const title = data.get("title");
    const content = data.get("content");
    const id = data.get("id");
    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      typeof id !== "string"
    ) {
      return;
    }
    if (title.trim() == "") {
      return;
    }
    notes = notes.map((note) =>
      note.id === id ? { ...note, title, content } : note,
    );
    throw redirect(302, "/");
  },
};
