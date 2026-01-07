type Props = {
  hasSearchQuery: boolean;
  resultsCount: number;
};

export const ResultsMeta = ({ hasSearchQuery, resultsCount }: Props) => {
  if (!hasSearchQuery) return null;

  if (resultsCount === 0) {
    return <p className="text-center text-gray-500 mt-8">No events found!</p>;
  }

  return (
    <p className="text-sm text-gray-500 mb-1">
      {resultsCount} result{resultsCount > 1 ? "s" : ""} found
    </p>
  );
};
