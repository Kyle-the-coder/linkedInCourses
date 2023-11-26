import { printProps } from "./H.O.C./printProps";
import { UserInfo } from "./UserInfo";

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return <UserInfoWrapped a={1} b="hello" c={{ name: "Kyle" }} />;
}

export default App;
