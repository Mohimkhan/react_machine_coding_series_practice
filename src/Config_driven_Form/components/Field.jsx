const Field = (props) => {
  const { formName, handleChange, ...rest } = props;

  const render = () => {
    const inputTypes = ["text", "email", "checkbox"];

    if (inputTypes.includes(rest.type)) {
      return (
        <label htmlFor={rest.id}>
          {rest.label}
          <input
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
      );
    } else if (rest.type === "radio") {
      return (
        <div>
          {rest?.options?.length > 0 &&
            rest.options.map((option) => {
              return (
                <div key={option}>
                  <label
                    key={option}
                    htmlFor={rest.id}
                  >
                    {option}
                    <input
                      {...rest}
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
                </div>
              );
            })}
        </div>
      );
    } else if (rest.type === "textarea") {
      return (
        <textarea
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
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
          <option value="Banana">Banana</option>
        </select>
      );
    } else {
      return null;
    }
  };
  return render();
};
export default Field;
