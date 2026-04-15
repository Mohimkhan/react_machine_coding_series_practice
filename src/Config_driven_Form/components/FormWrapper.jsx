import { formatText } from "../utils/text";
import Field from "./Field";

const FormWrapper = ({
  form = {},
  formName,
  handleChange = () => {},
  handleSubmit = () => {},
  handleReset = () => {},
}) => {
  return (
    <div>
      <h1 className="font-bold text-xs mb-5">{formatText(formName)}</h1>

      <form
        action=""
        className="max-w-2xs space-y-2"
        onSubmit={(e) => handleSubmit(e, formName)}
      >
        <div className="flex flex-col justify-center items-start gap-2.5">
          {!!form?.fields?.length &&
            form.fields.map((field) => (
              <Field
                key={field.id}
                {...field}
                className={field.className}
                formName={formName}
                handleChange={handleChange}
              />
            ))}
        </div>
        <div className="flex justify-center items-center gap-2 flex-wrap sm:flex-nowrap">
          {/* Reset Button */}
          <button
            type="button"
            className="w-full cursor-pointer bg-blue-600 text-white p-1 text-xs hover:bg-blue-800 rounded-md"
            onClick={() => handleReset(formName)}
          >
            Reset
          </button>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white p-1 text-xs hover:bg-blue-800 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormWrapper;
