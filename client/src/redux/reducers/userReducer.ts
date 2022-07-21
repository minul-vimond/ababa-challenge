import {
  LOGIN_END,
  LOGIN_START,
  LOGIN_SUCCESS,
  UserDispatchType
} from '../actions/userActionTypes';

interface DefaultStateI {
  loading: boolean;
  authenticated: boolean;
  username?: string;
  token?: string;
}

const defaultState: DefaultStateI = {
  authenticated: false,
  loading: false
};

const userReducer = (state: DefaultStateI = defaultState, action: UserDispatchType) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_END:
      return { ...state, loading: false };
    case LOGIN_SUCCESS:
      return { username: action.username, token: action.token, authenticated: true };
    default:
      return state;
  }
};

export default userReducer;
