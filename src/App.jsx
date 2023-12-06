import { Header } from "./components/Header/Header";
import { Section } from "./components/Section/Section";
import style from "./App.module.css";
import { user } from "./data/data";

function App() {
  return (
    <div>
      <Header
        firstName={user.firstName}
        lastName={user.lastName}
        role={user.role}
      />
      <Section user={user} />
    </div>
  );
}

export default App;
