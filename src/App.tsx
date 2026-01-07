import { useState } from "react";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { ResultsMeta } from "./components/ResultsMeta";
import { EventList } from "./components/EventList";
import { useEvents } from "./hooks/useEvents";
import { useEventSearch } from "./hooks/useEventSearch";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { events, isLoading, error } = useEvents();
  const { sortedEvents, hasSearchQuery } = useEventSearch(events, searchTerm);

  return (
    <main className="max-w-2xl mx-auto my-5">
      <Header
        title="Event App"
        subTitle="Find Your Event! View and search upcoming events"
      />

      <SearchInput value={searchTerm} onChange={setSearchTerm} />

      {error && (
        <p className="text-sm text-red-600 mt-4" role="alert">
          {error}
        </p>
      )}
      {isLoading && (
        <p
          className="text-sm text-gray-500 mt-4"
          role="status"
          aria-live="polite"
        >
          Loading events...
        </p>
      )}

      {!isLoading && (
        <div
          className="mt-6 h-[500px] overflow-y-auto"
          tabIndex={0}
          aria-label="Scrollable list of events"
        >
          <ResultsMeta
            hasSearchQuery={hasSearchQuery}
            resultsCount={sortedEvents.length}
          />
          <EventList events={sortedEvents} searchTerm={searchTerm} />
        </div>
      )}
    </main>
  );
};

export default App;
