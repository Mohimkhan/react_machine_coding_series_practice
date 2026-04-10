import { useState } from "react";
import TabList from "./components/TabList";
import { autoIncrement } from "../../utils/tabs";
import WrapperWithHeader from "../components/common/WrapperWithHeader";

const generateID = autoIncrement();

function TabOne() {
  return <p>Tab One</p>;
}

function TabTwo() {
  return <p>Tab Two</p>;
}

function TabThree() {
  return <p>Tab Three</p>;
}

function TabFour() {
  return <p>Tab Four</p>;
}

const TabContainer = () => {
  const [tabs, setTabs] = useState([
    {
      id: generateID(),
      label: "Tab one",
      Component: TabOne,
      isSelected: true,
    },
    {
      id: generateID(),
      label: "Tab two",
      Component: TabTwo,
      isSelected: false,
    },
    {
      id: generateID(),
      label: "Tab three",
      Component: TabThree,
      isSelected: false,
    },
    {
      id: generateID(),
      label: "Tab Four",
      Component: TabFour,
      isSelected: false,
    },
  ]);

  const handleSelect = (id) => {
    setTabs((prev) => {
      return prev.map((prevTab) => {
        if (prevTab.id === id) {
          return {
            ...prevTab,
            isSelected: true,
          };
        } else {
          return { ...prevTab, isSelected: false };
        }
      });
    });
  };

  return (
    <WrapperWithHeader heading="Tab Container 💻">
      {/* tab List */}
      <TabList
        tabs={tabs}
        onSelect={handleSelect}
      />
    </WrapperWithHeader>
  );
};
export default TabContainer;
