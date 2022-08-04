import React from 'react';
import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { FormStyled, FieldStyled, Button } from './Form.styled';
const id = nanoid(5);

const SignupSchema = Yup.object().shape({
name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter a name')
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Must be only letters"),
number: Yup.string()
    .min(5, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Please enter a number')
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Must be only digits"),
});

const ContactForm  = ({addContact}) => {
    return (
        <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(value, { resetForm }) => {
                addContact(value);
                resetForm();
            }}
    >

    {({ errors, touched }) => (
        <FormStyled>
        <label htmlFor="name">Name</label>
        <FieldStyled
            id={id}
            type="text"
            name="name"
            placeholder="enter name"/>
        {errors.name && touched.name ? (
            <div>{errors.name}</div>
        ) : null}
        
        <label htmlFor="number">Number</label>
        <FieldStyled
            id={id}
            type="number"
            name="number"
            placeholder="enter number" />
        {errors.number && touched.number ? (
            <div>{errors.number}</div>
        ) : null}
        
        <Button type="submit">Add contact</Button>
        </FormStyled>
    )}
    </Formik>
    )
};

ContactForm.propTypes = {
    initialValues: PropTypes.object,
    validationSchema: PropTypes.object,
    onSubmit:PropTypes.func,
}

export default ContactForm;