import { useState, useEffect } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import NavList from "./components/NavList";
import ViewForYou from "./components/main/ViewForYou";
import ViewFollowing from "./components/main/ViewFollowing";

const tabs = ["Para ti", "Siguiendo"];

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [loading]);

  const handleSelected = (index: number) => {
    setSelectedTab(index);
    setLoading(true);
  };

  return (
    <main className="bg-primary">
      <div className="bg-primary min-h-screen xl:max-w-7xl max-w-3xl mx-auto flex xl:gap-6 pr-2">
        <NavList />
        <div className="w-full border-x border-borderColor bg-primary">
          <Header
            tabs={tabs}
            handleSelected={handleSelected}
            selectedTab={selectedTab}
          />
          {selectedTab === 0 && <ViewForYou loading={loading} />}
          {selectedTab === 1 && <ViewFollowing loading={loading} />}
        </div>
        <Aside />
      </div>
    </main>
  );
}

export default App;
