import { setEmail } from "./userSlice";

export const updateEmail = (email) => (dispatch) => {
    dispatch(setEmail(email)); // Dispatch action to update email
};
