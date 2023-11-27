import { ProductInfo } from "./components/ProductInfo";
import { UserInfo } from "./components/UserInfo";
export const addy = "http://localhost:8080";

function App() {
  return (
    <>
      <UserInfo userId={"234"} />
      <UserInfo userId={"123"} />
      <UserInfo userId={"345"} />
      <ProductInfo productId={"1234"} />
      <ProductInfo productId={"2345"} />
    </>
  );
}

export default App;
