import PageHome from "./components/pages/PageHome";
import SuperHeader from "./components/SuperHeader";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <SuperHeader />
      <PageHome />
    </RecoilRoot>
  );
}

export default App;
