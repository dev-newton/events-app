type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="event-search" className="sr-only">
        Search events by name or location
      </label>
      <input
        id="event-search"
        className="border border-gray-500 h-10 w-full px-3"
        type="search"
        placeholder="Enter event name or location"
        value={value}
        onChange={(e) => onChange(e.target.value)}
         aria-describedby="event-search-hint"
        autoComplete="off"
      />

      <p id="event-search-hint" className="sr-only">
        Results update as you type.
      </p>
    </form>
  );
};
