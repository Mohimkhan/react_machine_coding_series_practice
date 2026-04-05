import Button from "../../AutoComplete/components/Button";

const TabList = ({ tabs = [], onSelect = () => {} }) => {
  const SelectedTabComponent = tabs.filter((tab) => tab.isSelected)[0]
    .Component;

  return (
    <>
      <div
        role="tablist"
        className="flex justify-center gap-2"
      >
        {tabs.map((tab) => (
          <Button
            className={`text-xs p-1 uppercase rounded-sm cursor-pointer bg-black ${
              tab?.isSelected ? "border-b-1 border-blue-600" : ""
            }`}
            key={tab.id}
            onClick={() => onSelect(tab.id)}
            role="tab"
            label={tab.label}
            aria-selected={tab?.isSelected}
          />
        ))}
      </div>
      {/* selected tab */}
      <div role="tabpanel">
        <SelectedTabComponent />
      </div>
    </>
  );
};
export default TabList;
