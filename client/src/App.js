import "./reset.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequirementsPage from "./pages/Requirements/Requirements";
import Main from "./pages/Main/Main";
import { useSelector } from "react-redux";
import { createContext, useEffect, useState } from "react";
import Confirm from "./components/Confirm/Confirm";
import Sending from "./pages/Sending/Sending";

const SendingContext = createContext();

function App() {
  const [confirm, setConfirm] = useState(false);
  const [requirementsModal, setRequirementsModal] = useState(false);
  const [sending, setSending] = useState(false);
  const state = useSelector((state) => state.requirementsSlice.value);

  useEffect(() => {
    if (
      Object.values(state.category).some((value) => value === true) &&
      !requirementsModal
    ) {
      setConfirm(true);
    }
  }, [state, requirementsModal]);

  return (
    <div className="App">
      {sending && <Sending />}
      {confirm && (
        <Confirm
          setRequirementsModal={setRequirementsModal}
          setConfirm={setConfirm}
        />
      )}
      {requirementsModal && (
        <RequirementsPage
          requirementsModal={requirementsModal}
          setRequirementsModal={setRequirementsModal}
          setSending={setSending}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Main
              requirementsModal={requirementsModal}
              setRequirementsModal={setRequirementsModal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
