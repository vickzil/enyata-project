export const SET_CURRENT_PAGE = (state, currentPage) => {
  state.currentPage = currentPage;
  state.mobileMenu = false;
};
export const TOGGLE_MOBIBLE_MENU = (state) => {
  state.mobileMenu = !state.mobileMenu;
};

export const SAVE_FILMS = (state, payload) => {
  state.films = payload;
};

export const SAVE_STARSHIPS = (state, payload) => {
  state.starships = payload;
};

export const SAVE_PEOPLE = (state, payload) => {
  state.people = payload;
};

export const SAVE_SPECIES = (state, payload) => {
  state.species = payload;
};

export const SAVE_SINGLE_FILM = (state, payload) => {
  state.filmDetail = payload;
};

export const SAVE_SINGLE_STARSHIP = (state, payload) => {
  state.starshipDetail = payload;
};

export const SAVE_PEOPLE_DETAILS = (state, payload) => {
  state.peopleDetail = payload;
};

export const SAVE_SPECIES_DETAILS = (state, payload) => {
  state.speciesDetail = payload;
};
