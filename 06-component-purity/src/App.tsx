// import "@/learn/about-purity";
// import "@/learn/about-side-effect";

import { avatarData } from "./data/data";
import AvatarListPage from "./pages/AvatarList";
import "@/styles/main.css";

function App() {
  return (
    <div>
      <AvatarListPage list={avatarData} />
    </div>
  );
}

export default App;
