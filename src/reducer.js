export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  top_artists: null,
  discover_weekly: null,
  spotify: null,
  token: "",
  // just to complete the project we use the token inside this state (helps a lot while dubugging) else we just keep it null
  // token:
  //   "BQAqj02L8z8a25yJSxMJzk7HIEbvvDZT1MfEP3AaSytAuVQF2VkoJsvjpmko16LhV8kH7nSRdSDtC8UnHW2rZm4jhw4kM9Ak7grur8pNRGHWl4S4NWLBM22KkgvKVtrWsyhwuIg2VdeQG6F6V-qfM-ciSZkM_9VQA6rA5TmK6EW00Tw5",
};

// the primary job of a reducer is just to listen for actions

// now actions have two things -> type & [payload]
const reducer = (state, action) => {
  console.log(action); //it will be like debuggnig tool and saves a lot of headache.
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};
export default reducer;
