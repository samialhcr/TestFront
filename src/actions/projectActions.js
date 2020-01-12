import axios from "axios";
import { GET_COMPTES, GET_COMPTEBYID } from "./types";
import { async } from "q";

export const getcomptes = () => async dispatch => {
  const res = await axios.get(
    "http://localhost:8081/api/compte/AllAccountsAbonne/1"
  );

  dispatch({
    type: GET_COMPTES,
    payload: res.data
  });
};

export const getCompteById = (id, history) => async dispatch => {
  const res = await axios.get(`http://localhost:8081/api/compte/Account/${id}`);

  dispatch({
    type: GET_COMPTEBYID,
    payload: res.data
  });
};
