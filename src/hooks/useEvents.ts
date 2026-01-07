import { useEffect, useState } from "react";
import type { Event } from "../types/event";
import { fetchEvents } from "../api/events";
import { EVENTS_API_ENDPOINT } from "../config/api";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchEvents(EVENTS_API_ENDPOINT);
        setEvents(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load events");
      } finally {
        setIsLoading(false);
      }
    };

    load();
  }, []);

  return { events, isLoading, error };
};