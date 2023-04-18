import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    const onChange = <K extends Object>( value: K, field: keyof T ) => { //La K puede ser cualquier letra, ademas eso se usa 
                                                                            // Para que extienda las propiedades que le pasan y se maneje
                                                                            //como booleano, string o la propiedad que necesite en el momento
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        ...state,
        form: state,
        onChange,
    }

}