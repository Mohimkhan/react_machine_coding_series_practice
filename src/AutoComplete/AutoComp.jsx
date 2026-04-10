import { useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { useEffect } from "react";
import Suggestions from "./components/Suggestions";
import Loading from "./components/Loading";
import TextField from "./components/TextField";
import WrapperWithHeader from "../components/common/WrapperWithHeader";

const AutoComp = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(inputValue, 250);

  const handleSuggestionSelect = (sug, index) => {
    setInputValue(sug);
    setSelectedIndex(index);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(["apple", "orange", "pineapple", "kiwi", "banana", "grapes"]);
      }, 3500);
    }).then((data) => {
      setIsLoading(false);
      setSuggestions(data);
    });
  }, []);

  const filteredSuggestions = suggestions.filter((sug) =>
    debouncedValue === ""
      ? false
      : sug.toLowerCase().includes(debouncedValue.toLowerCase()),
  );
  return (
    <WrapperWithHeader heading="AutoComplete Component 🔎">
      <div>
        {/* // input field */}
        <TextField
          inputValue={inputValue}
          onChange={handleInputValue}
          onClear={handleInputValue}
        />
        {/* // suggestions box */}
        {isLoading && inputValue !== "" ? (
          <Loading />
        ) : (
          <Suggestions
            selectedIndex={selectedIndex}
            debouncedValue={debouncedValue}
            filteredSuggestions={filteredSuggestions}
            onSelect={handleSuggestionSelect}
          />
        )}
      </div>
    </WrapperWithHeader>
  );
};
export default AutoComp;
