import type { Event } from "../types/event";

export const fetchEvents = async (url: string): Promise<Event[]> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch events: ${res.status}`);
  }

  const data = (await res.json()) as Event[];
  return data;
};