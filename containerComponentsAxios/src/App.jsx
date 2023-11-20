import { CurrentUserLoader } from "./CurrentUserLoader";

import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function App() {
  return (
    <>
      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="2">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="3">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
