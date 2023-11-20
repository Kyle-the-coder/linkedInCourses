import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { UserLoader } from "./UserLoader";
import axios from "axios";
export const addy = "http://localhost:8080";

const getServerData = (url) => async () => {
  const res = await axios.get(url);
  return res.data;
};

function getLocalStorageData(key) {
  return localStorage.getItem(key);
}

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      <DataSource
        getDataFunc={getServerData(`${addy}/users/2`)}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunc={() => getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
