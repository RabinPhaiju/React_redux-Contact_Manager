import { ALERT_SET } from "../actions/types";
import { toast } from "react-toastify";

const initialState = {};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ALERT_SET:
      switch (payload.alert) {
        case "warn":
          toast.warn(payload.msg, {
            position: "bottom-left",
            toastId: payload.id,
          });
          break;
        case "success":
          toast.success(payload.msg, {
            position: "bottom-left",
            toastId: payload.id,
          });
          break;
        case "error":
          toast.error(payload.msg, {
            position: "bottom-left",
            toastId: payload.id,
          });
          break;
        default:
          toast.info("Invalid Error Message", {
            position: "bottom-left",
            toastId: payload.id,
          });
      }

      return { ...state, payload };
    // case REMOVE_ALERT:
    //    return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alertReducer;
