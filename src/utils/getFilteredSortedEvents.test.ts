import type { Event } from "../types/event";
import { getFilteredSortedEvents } from "./getFilteredSortedEvents";

describe("getFilteredSortedEvents", () => {
  it("filters by name or location (case-insensitive) and sorts by date", () => {
    const events: Event[] = [
      {
        id: 1,
        name: "Product Management Bootcamp",
        location: "Sheffield",
        date: "2025-01-10",
      },
      {
        id: 2,
        name: "Startup Pitch Night",
        location: "Manchester",
        date: "2025-01-05",
      },
      {
        id: 3,
        name: "Tech Meetup London",
        location: "London",
        date: "2025-01-12",
      },
    ];

    // No query => all sorted
    expect(
      getFilteredSortedEvents({ events, searchTerm: "" }).sortedEvents.map(
        (e) => e.id
      )
    ).toEqual([2, 1, 3]);

    // Location-only match
    expect(
      getFilteredSortedEvents({
        events,
        searchTerm: "CHESTER",
      }).sortedEvents.map((e) => e.id)
    ).toEqual([2]);

    // Name OR location match
    expect(
      getFilteredSortedEvents({ events, searchTerm: "man" }).sortedEvents.map(
        (e) => e.id
      )
    ).toEqual([2, 1]);
  });

  it("does not mutate the input events array", () => {
    const events = [
      { id: 1, name: "B", location: "X", date: "2025-01-10" },
      { id: 2, name: "A", location: "Y", date: "2025-01-05" },
    ];

    const originalOrder = events.map((e) => e.id);

    getFilteredSortedEvents({ events, searchTerm: "" });

    expect(events.map((e) => e.id)).toEqual(originalOrder);
  });

  it("trims whitespace from the search term", () => {
    const events = [
      {
        id: 1,
        name: "Tech Meetup London",
        location: "London",
        date: "2025-01-12",
      },
    ];

    const result = getFilteredSortedEvents({
      events,
      searchTerm: "   london   ",
    });

    expect(result.sortedEvents.map((e) => e.id)).toEqual([1]);
  });
});
