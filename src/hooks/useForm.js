import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const handleInput = e => {
    const { name, value } = e.target;

    setForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileInput = e => {
    const { name, files } = e.target;
    setForm(prevState => ({ ...prevState, [name]: files }));
  };

  const removeKey = key => {
    const updatedForm = { ...form };
    delete updatedForm[key];

    setForm({ ...updatedForm });
  };

  const removeKeyWithIndex = (key, index) => {
    const updatedForm = { ...form };
    delete updatedForm[key];
    updatedForm.route.splice(index, 1);
    setForm({ ...updatedForm });
  };

  return {
    form,
    setForm,
    handleInput,
    handleFileInput,
    removeKey,

    removeKeyWithIndex
  };
};

export default useForm;
