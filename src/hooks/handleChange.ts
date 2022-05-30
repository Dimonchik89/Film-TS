import { useState } from "react";

const useCustomHandleChange = (defaultArg: string) => {
    const [ value, setValue ] = useState(defaultArg)
    const handleChange = (newValue: string) => {
        setValue(newValue)
    }
    return { value, handleChange }
}
export default useCustomHandleChange;