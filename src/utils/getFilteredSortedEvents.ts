import type { Event } from "../types/event";

type Params = {
  events: Event[];
  searchTerm: string;
};

export const getFilteredSortedEvents = ({ events, searchTerm }: Params) => {
  const query = searchTerm.trim().toLowerCase();
  const hasSearchQuery = query.length > 0;

  const filtered = !query
    ? events
    : events.filter((event) => {
        const searchableText = `${event.name} ${event.location}`.toLowerCase();
        return searchableText.includes(query);
      });

  const sortedEvents = [...filtered].sort((a, b) => a.date.localeCompare(b.date));

  return { sortedEvents, hasSearchQuery, query };
};
