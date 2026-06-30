const initialState = {
  users: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "users/removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export function addUser(user) {
  if (!user) return;
  return {
    type: "users/addUser",
    payload: user,
  };
}

export function removeUser(id) {
  if (!id) return;
  return {
    type: "users/removeUser",
    payload: { id },
  };
}
