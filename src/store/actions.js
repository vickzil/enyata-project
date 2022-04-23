import axios from "axios";

export const globalFunctions = ({ dispatch }) => {
  dispatch("getFilms");
  dispatch("getStarships");
  dispatch("getPeople");
  dispatch("getSpecies");
};

// GET FILMS
export const getFilms = async ({ state, commit }) => {
  const url = `${state.baseUrl}/films`;

  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_FILMS", response.data);
      console.log("films", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET STARSHIPS
export const getStarships = async ({ state, commit }) => {
  const url = `${state.baseUrl}/starships`;

  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_STARSHIPS", response.data);
      console.log("starship", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET PEOPLE
export const getPeople = async ({ state, commit }) => {
  const url = `${state.baseUrl}/people`;

  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_PEOPLE", response.data);
      console.log("people", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET SPECIES
export const getSpecies = async ({ state, commit }) => {
  const url = `${state.baseUrl}/species`;

  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_SPECIES", response.data);
      console.log("species", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET SINGLE FILM
export const fetchSingleFilm = async ({ commit }, url) => {
  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_SINGLE_FILM", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET SINGLE STARSHIP
export const fetchSingleStarship = async ({ commit }, url) => {
  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_SINGLE_STARSHIP", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET POEPLE DETAILS
export const fetchPeopleDetails = async ({ commit }, url) => {
  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_PEOPLE_DETAILS", response.data);
      console.log("more people", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

// GET SPECIES DETAILS
export const fetchSpeciesDetails = async ({ commit }, url) => {
  const response = await axios.get(url);

  try {
    if (response && response.data) {
      commit("SAVE_SPECIES_DETAILS", response.data);
      console.log("more species", response.data);
    }
  } catch (error) {
    console.log(error);
  }

  return response;
};

export const setCurrentPage = ({ commit }, currentPage) => {
  commit("SET_CURRENT_PAGE", currentPage);
};

export const toggleMobileMenu = ({ commit }) => {
  commit("TOGGLE_MOBIBLE_MENU");
};
