import { UserInfo } from "./components/UserInfo";
export const addy = "http://localhost:8080";

function App() {
  return (
    <>
      <UserInfo userId={"234"} />
      <UserInfo userId={"123"} />
      <UserInfo userId={"345"} />
    </>
  );
}

export default App;
