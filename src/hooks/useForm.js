import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formsState, setformsState] = useState(initialForm);
    
      const onInpuntChange = ({ target }) => {
        //del name extraigo lo que es el username o email, el value es el valor que esta teniendo en ese target
        const { name, value } = target;
    
        //seteamos el valor
        setformsState({
          ...formsState,
          [name]: value,
        });
      };

      const onResetForm = () =>{       
        setformsState(initialForm)        
      }

    return {
       ...formsState, formsState, onInpuntChange, onResetForm
    }
}


