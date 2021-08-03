import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function EditCatPage() {
    const location = useLocation();

    const [invalidForm, setValidForm] = useState(true);
    const[formData, setFormData] = useSate(location.state.cat);

    const formRef = useRef();

    useEffect(() => {
        formRef.current.checkValidity()
        ? setValidForm(false)
        : setValidForm(true);
    }, [formData])
   
    const handleSubmit = e => {
        e.preventDefault();
    }
}

export default EditCatPage;