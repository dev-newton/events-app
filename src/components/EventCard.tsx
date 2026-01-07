import type { Event } from "../types/event";
import { highlightText } from "../utils/highlightText";

type Props = {
  event: Event;
  searchTerm: string;
};

export const EventCard = ({ event, searchTerm }: Props) => {
  const dateLabel = new Date(event.date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="border border-gray-300 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="font-semibold text-lg truncate max-w-[28ch]"
            title={event.name}
          >
            {highlightText(event.name, searchTerm)}
          </p>
          <p className="text-sm text-gray-600">
            {highlightText(event.location, searchTerm)}
          </p>
        </div>

        <time
          className="text-sm text-gray-500 whitespace-nowrap"
          dateTime={event.date}
          aria-label={`Event date ${dateLabel}`}
        >
          {dateLabel}
        </time>
      </div>
    </div>
  );
};
