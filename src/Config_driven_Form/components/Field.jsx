import { cn } from "../../../utils/cn";

const Field = (props) => {
  const { formName, handleChange, className, ...rest } = props;

  const render = () => {
    const inputTypes = ["text", "email", "checkbox"];

    if (inputTypes.includes(rest.type)) {
      return (
        <>
          <label htmlFor={rest.id}>
            {rest.label}
            <input
              className={cn(
                className,
                `${rest?.error ? "focus-visible:ring-1 focus-visible:ring-red-500" : ""}`,
              )}
              onChange={(e) =>
                handleChange(
                  e.target.id,
                  e?.target?.name ?? rest?.name,
                  rest.type === "checkbox" ? e.target.checked : e.target.value,
                  formName,
                )
              }
              {...rest}
            ></input>
          </label>
          {rest?.error && (
            <span className="font-normal text-xs text-red-500">
              {rest.error}
            </span>
          )}
        </>
      );
    } else if (rest.type === "radio") {
      return (
        <div>
          <fieldset>
            <legend>Chose Gender</legend>
            {Object.keys(rest?.options)?.length > 0 &&
              Object.keys(rest?.options).map((option) => {
                return (
                  <label
                    key={option}
                    htmlFor={rest.id}
                  >
                    {option}
                    <input
                      className={cn(
                        className,
                        `${rest?.error ? "focus-visible:ring-1 focus-visible:ring-red-500" : ""}`,
                      )}
                      {...rest}
                      checked={rest.options[option].checked}
                      onChange={(e) =>
                        handleChange(
                          e.target.id,
                          e?.target?.name ?? rest?.name,
                          option,
                          formName,
                        )
                      }
                    ></input>
                  </label>
                );
              })}
          </fieldset>
        </div>
      );
    } else if (rest.type === "textarea") {
      return (
        <textarea
          className={cn(
            className,
            `${rest?.error ? "focus-visible:ring-1 focus-visible:ring-red-500" : ""}`,
          )}
          onChange={(e) =>
            handleChange(
              e.target.id,
              e?.target?.name ?? rest?.name,
              e.target.value,
              formName,
            )
          }
          {...rest}
        ></textarea>
      );
    } else if (rest.type === "select") {
      return (
        <select
          className={cn(
            className,
            `${rest?.error ? "focus-visible:ring-1 focus-visible:ring-red-500" : ""}`,
          )}
          onChange={(e) =>
            handleChange(
              e.target.id,
              e?.target?.name ?? rest?.name,
              e.target.value,
              formName,
            )
          }
          {...rest}
        >
          {Object.keys(rest?.options ?? {}).length > 0 &&
            Object.keys(rest.options).map((option) => (
              <option
                key={option}
                {...(rest?.options?.[option] ?? {})}
                value={option}
              >
                {option !== ""
                  ? option[0].toUpperCase() + option.slice(1)
                  : rest?.options[option].value}
              </option>
            ))}
        </select>
      );
    } else {
      return null;
    }
  };
  return render();
};
export default Field;
