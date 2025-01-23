import { useState } from 'react';

const setTextMessege = () => {
    const [selectForm, setSelectForm] = useState("login");
    return { selectForm, setSelectForm };
};

export default useLFormSelect;