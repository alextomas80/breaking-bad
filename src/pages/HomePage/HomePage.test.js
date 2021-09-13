import { render, waitFor, screen } from "test/customRender";
import configureStore from "redux-mock-store"; //ES6 modules

import { startGetCharacters } from "redux/store/actions/characters";
import charactersMock from "test/mocks/charactersMock";
import HomePage from "./HomePage";

const mockStore = configureStore([]);

const renderHomeScreenPage = () => {
  const page = <HomePage />;
  return render(page, {
    props: {
      state: { characters: { loading: false, characters: charactersMock } },
    },
  });
};

describe("Testing HomeScreen languages", () => {
  test("should dispatch action", () => {
    renderHomeScreenPage();

    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(startGetCharacters());

    const actions = store.getActions();
    const expectedPayload = { type: "START_GET_CHARACTERS" };

    expect(actions).toEqual([expectedPayload]);
  });

  test("should have at least one character", async () => {
    renderHomeScreenPage();
    await waitFor(() => {
      expect(screen.getByLabelText("CharacterCard")).toBeInTheDocument();
    });
  });
});
