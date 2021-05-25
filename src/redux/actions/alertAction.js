import { v4 as uuidv4 } from "uuid";

import { ALERT_SET } from "./types";

export const setAlert = (msg, alert) => (dispatch) => {
  const id = uuidv4();

  dispatch({
    type: ALERT_SET,
    payload: { msg, alert, id },
  });

  // setTimeout(() => dispatch(actionRemoveAlert), 500);
};
// export const removeAlert = (id) => (dispatch) => {
//    const actionRemoveAlert = {
//       type: REMOVE_ALERT,
//       payload: id,
//    };
//    dispatch(actionRemoveAlert);
// };
