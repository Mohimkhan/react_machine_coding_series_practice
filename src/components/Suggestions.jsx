const Suggestions = ({
  selectedIndex,
  debouncedValue,
  filteredSuggestions,
  onSelect,
}) => {
  return (
    <ul
      className={`flex w-full flex-col mt-3 ${
        selectedIndex !== -1 && "hidden"
      }`}
    >
      {filteredSuggestions.length > 0
        ? filteredSuggestions.map((sug, index) => (
            <SuggestionItem
              key={index}
              sug={sug}
              index={index}
              selectedIndex={selectedIndex}
              onSelect={() => onSelect(sug, index)}
            />
          ))
        : debouncedValue !== "" && <p>No Suggestions found!!</p>}
    </ul>
  );
};

const SuggestionItem = ({ sug, selectedIndex, index, onSelect }) => {
  return (
    <li
      onClick={() => onSelect(sug, index)}
      className={`p-1 bg-gray-700 mb-1 rounded-sm hover:bg-gray-500 ${
        selectedIndex === index
          ? "bg-gray-900 text-white brightness-150"
          : selectedIndex !== -1 && "opacity-15"
      }`}
    >
      {sug}
    </li>
  );
};

export default Suggestions;
