import { useMemo } from "react";
import type { Event } from "../types/event";
import { getFilteredSortedEvents } from "../utils/getFilteredSortedEvents";

export const useEventSearch = (events: Event[], searchTerm: string) => {
  return useMemo(() => {
    return getFilteredSortedEvents({ events, searchTerm });
  }, [events, searchTerm]);
};