/** @format */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const mockEvents = [
  {
    id: 1,
    name: "Product Management Bootcamp",
    date: "2025-01-10",
    location: "Sheffield",
  },
  {
    id: 2,
    name: "Startup Pitch Night",
    date: "2025-01-05",
    location: "Manchester",
  },
  { id: 3, name: "Tech Meetup London", date: "2025-01-12", location: "London" },
];

const mockFetchOk = () =>
  jest.spyOn(global, "fetch").mockResolvedValue({
    ok: true,
    json: async () => mockEvents,
  } as any);

describe("App integration", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders events sorted by soonest date after loading", async () => {
    mockFetchOk();
    render(<App />);

    const first = await screen.findByText("Startup Pitch Night");
    expect(first).toBeInTheDocument();

    const items = screen.getAllByText(
      /Startup Pitch Night|Product Management Bootcamp|Tech Meetup London/
    );
    expect(items.map((n) => n.textContent)).toEqual([
      "Startup Pitch Night",
      "Product Management Bootcamp",
      "Tech Meetup London",
    ]);
  });

  it("filters events as the user types in the search input", async () => {
    mockFetchOk();

    render(<App />);

    expect(await screen.findByText("Startup Pitch Night")).toBeInTheDocument();

    const input =
      screen.getByPlaceholderText(/enter event name or location/i);

    await userEvent.type(input, "chester");

    expect(screen.getByText("Startup Pitch Night")).toBeInTheDocument();
    expect(
      screen.queryByText("Product Management Bootcamp")
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Tech Meetup London")).not.toBeInTheDocument();
  });

  it("shows empty state when no events match the search", async () => {
    mockFetchOk();

    render(<App />);
    expect(await screen.findByText("Startup Pitch Night")).toBeInTheDocument();

    const input =
      screen.getByPlaceholderText(/enter event name or location/i);

    await userEvent.clear(input);
    await userEvent.type(input, "zzzz");

    expect(screen.getByText(/no events found/i)).toBeInTheDocument();
  });
});
