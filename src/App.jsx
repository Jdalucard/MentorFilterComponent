import { ProgramerUser } from "./components/ProgramerUser.jsx";
import ContextUser from "./context/ContextUser.jsx";

const App = () => {
  return (
    <>
      {/* envuelvo el contexto */}
      <ContextUser>
        <ProgramerUser />
      </ContextUser>
    </>
  );
};

export default App;
