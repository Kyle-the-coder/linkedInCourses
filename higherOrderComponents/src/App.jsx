import { printProps } from "./H.O.C./printProps";
import { withUser } from "./H.O.C./withUser";
import { UserInfo } from "./UserInfo";
import UserInfoForm from "./UserInfoForm";
export const addy = "http://localhost:8080";

const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return <UserInfoForm />;
}

export default App;
