import { useState } from "react";
import WrapperWithHeader from "../../components/common/WrapperWithHeader";
import FormWrapper from "./FormWrapper";
import { autoIncrement } from "../../../utils/tabs";

const FormContainer = () => {
  const ID = autoIncrement();
  const [forms, setForms] = useState({
    student_registration: {
      fields: [
        {
          id: ID(),
          type: "text",
          label: "Name: ",
          placeholder: "Enter you're name",
          disabled: false,
          name: "student_name",
          value: "",
          className: "border border-white/50 rounded-md p-0.5",
          required: false,
        },
        {
          id: ID(),
          type: "email",
          label: "Email: ",
          placeholder: "Enter you're email",
          disabled: false,
          name: "student_email",
          value: "",
          className: "border border-white/50 rounded-md p-0.5",
          required: false,
        },
        {
          id: ID(),
          type: "checkbox",
          label: "Have you got the token? ",
          placeholder: "",
          disabled: false,
          name: "student_info_check",
          value: false,
          className: "border border-white/50 rounded-md p-0.5",
          required: true,
        },
        {
          id: ID(),
          type: "radio",
          label: "Male",
          placeholder: "",
          disabled: false,
          name: "student_gender",
          options: ["male", "female"],
          value: "",
          className: "border border-white/50 rounded-md p-0.5",
          required: false,
        },
      ],
      submittedValue: {},
    },
    user_info: {
      fields: [
        {
          id: ID(),
          type: "text",
          label: "Name",
          placeholder: "Enter you're name",
          disabled: false,
          name: "student_name",
          value: "",
          className: "",
        },
        {
          id: ID(),
          type: "email",
          label: "Email",
          placeholder: "Enter you're email",
          disabled: false,
          name: "student_email",
          value: "",
          className: "",
        },
        {
          id: ID(),
          type: "checkbox",
          label: "Have you got the token?",
          placeholder: "",
          disabled: false,
          name: "student_info_check",
          value: "",
          className: "",
        },
        {
          id: ID(),
          type: "radio",
          label: "Gender",
          placeholder: "",
          disabled: false,
          name: "student_gender",
          value: "",
          className: "",
        },
      ],
      submittedValue: {},
    },
  });

  const formName = Object.keys(forms)[0];

  const handleSubmit = (e, formName) => {
    e.preventDefault();
    console.log("formName ", forms[formName].submittedValue);
  };

  const handleChange = (fieldID, fieldName, value, formName) => {
    console.log({ fieldName, value });
    const updateChange = (arr) => {
      return arr.map((field) => {
        if (fieldID === String(field.id) && field.name === fieldName) {
          return { ...field, value };
        } else {
          return field;
        }
      });
    };

    const finalSubmittedValue = (arr) => {
      return arr.reduce((acc, cur) => {
        acc[cur.name] = cur.value;
        return acc;
      }, {});
    };

    setForms((prevForms) => ({
      ...prevForms,
      student_registration: {
        ...prevForms[formName],
        fields: updateChange(prevForms[formName].fields),
        submittedValue: finalSubmittedValue(
          updateChange(prevForms[formName].fields),
        ),
      },
    }));
  };

  return (
    <WrapperWithHeader heading="Config Driven Form">
      <FormWrapper
        form={forms?.student_registration}
        formName={formName}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </WrapperWithHeader>
  );
};
export default FormContainer;
