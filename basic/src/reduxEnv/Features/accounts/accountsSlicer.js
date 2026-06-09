const initialAccount = {
  fullName: "",
  email: "",
  date: "",
};

const accountReducer = (state = initialAccount, action) => {
  switch (action.type) {
    case "account/createAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        email: action.payload.email,
        date: action.payload.date,
      };
    case "account/updateAccount":
      return {
        ...state,
        fullName: action.payload.fullName,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export function createAccount(fullName, email) {
  if (fullName === "" || email === "") return;
  return {
    type: "account/createAccount",
    payload: {
      fullName: fullName,
      email: email,
      date: new Date().toLocaleDateString(),
    },
  };
}

export function updateAccount(fullName) {
  if (fullName === "") return;
  return {
    type: "account/updateAccount",
    payload: {
      fullName: fullName,
      date: new Date().toLocaleDateString(),
    },
  };
}
export default accountReducer;
