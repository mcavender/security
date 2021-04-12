import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../controls/Controls";
import { useForm, Form } from '../../controls/useForm';
import UsersService from '../../../services/UsersService';

const initialFValues = {
    id: 0,
    email: '',
    fullname: '',
    phonenumber: '',
    role: '',
    username: '',
}

export default function UserForm(props) {

    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('phonenumber' in fieldValues)
            temp.phonenumber = fieldValues.phonenumber.length > 9 ? "" : "Minimum 10 numbers required."
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            UsersService.addUsers(values)
            resetForm()
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullname}
                        onChange={handleInputChange}
                        error={errors.fullname}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="phonenumber"
                        name="phonenumber"
                        value={values.phonenumber}
                        onChange={handleInputChange}
                        error={errors.phonenumber}
                    />
                    <Controls.Input
                        label="role"
                        name="role"
                        value={values.role}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="username"
                        name="username"
                        value={values.username}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}