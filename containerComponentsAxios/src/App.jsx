import { CurrentUserLoader } from "./CurrentUserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { UserLoader } from "./UserLoader";
export const addy = "http://localhost:8080";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl={`${addy}/users/2`} resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl={`${addy}/products/2`} resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
