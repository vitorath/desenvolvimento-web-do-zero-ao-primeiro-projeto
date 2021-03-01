import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../actions/loginAction";

export default function AuthButton(props) {
  const login = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    login ? 
      <button
        onClick={() => dispatch(logoutAction())}
      >
        Logout
      </button> : 
      <button
        onClick={() => dispatch(loginAction())}
      >
        Login
      </button>
  )
}