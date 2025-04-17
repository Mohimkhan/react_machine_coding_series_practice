import Button from "../components/Button";

const TextField = ({ inputValue, onChange, onClear }) => {
  return (
    <div className="relative w-fit">
      <input
        type="text"
        name="textField"
        id=""
        autoFocus
        className="outline-1 outline-amber-300 rounded-sm caret-amber-700 pl-0.5"
        value={inputValue}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button
        className="absolute top-0 right-1 cursor-pointer scale-80 hover:scale-100"
        onClick={() => onClear("")}
        label="❌"
      />
    </div>
  );
};
export default TextField;
