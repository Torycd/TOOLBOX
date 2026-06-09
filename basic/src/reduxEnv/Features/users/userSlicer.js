const initialState = {
  users: [],
};

export default function userSlicer(state = initialState, action) {
  switch (action.type) {
    case "users/addUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
  }
}

function addUser(user) {
  if (!user) return;
  return {};
}
