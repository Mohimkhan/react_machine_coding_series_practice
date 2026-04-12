const AccordionList = ({
  accordionsData = [],
  setAccordionsData = () => {},
}) => {
  const handleAccordionExpansion = (id) => {
    setAccordionsData((prev) => {
      return prev.map((accordion) => {
        if (accordion.id === id) {
          return { ...accordion, expand: !accordion.expand };
        } else {
          return { ...accordion, expand: false };
        }
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-start gap-2">
      {accordionsData?.map((accordion) => (
        <div
          className={`cursor-pointer border border-white/50 p-1 pb-2 rounded-md ${accordion.expand ? "space-y-3" : ""}`}
          tabIndex={0}
          key={accordion.id}
          onClick={() => handleAccordionExpansion(accordion.id)}
        >
          <div
            className={`flex justify-start items-baseline gap-4 ${accordion.expand ? "pb-0.5 border-b border-blue-800" : ""}`}
          >
            <h3>{accordion?.title ?? "No Title"}</h3>
            <span
              className={`inline-block text-blue-500 ${accordion.expand ? "rotate-90" : "rotate-[270deg]"} font-bold`}
            >
              {">"}
            </span>
          </div>
          <div
            className="grid"
            style={{
              gridTemplateRows: accordion.expand ? "1fr" : "0",
              overflow: "hidden",
              transition: "grid-template-rows 200ms linear",
            }}
          >
            <div className="border-b-[1px] border-b-blue-500 pb-1">
              {accordion?.content ?? "No Content"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AccordionList;
