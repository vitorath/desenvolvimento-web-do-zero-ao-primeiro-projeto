import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const login = useSelector(state => state);
  
  return (
    <Route {...rest}
      render={({ location }) => {
        if (login) {
          return children;
        } else {
          return <Redirect to={{
            pathname: "/acesso-negado", 
            state: { from: location }
          }}/>
        }
      }}
    >

    </Route>
  )
}