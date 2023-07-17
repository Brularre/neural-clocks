import { createContext, useState } from 'react';

export const FormContext = createContext<any>(null);

interface FormProviderProps {
  children: React.ReactNode;
}

export default function FormProvider({ children }: FormProviderProps) {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});

  return (
    <FormContext.Provider
      value={{ inputValues, setInputValues, errors, setErrors }}
    >
      {children}
    </FormContext.Provider>
  );
}
