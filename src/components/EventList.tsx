import type { Event } from "../types/event";
import { EventCard } from "./EventCard";

type Props = {
  events: Event[];
  searchTerm: string;
};

export const EventList = ({ events, searchTerm }: Props) => {
  return (
    <ul className="space-y-4" aria-label="Events">
      {events.map((event) => (
        <li key={event.id}>
          <EventCard event={event} searchTerm={searchTerm} />
        </li>
      ))}
    </ul>
  );
};
