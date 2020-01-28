import React from 'react'
import { axiosWithAuth } from '../tools/axiosWithAuth'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Container, Jumbotron, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const AddFriend = props => {

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
        },
        validationSchema: Yup.object({
           name: Yup.string()
           .required('Required'),
           age: Yup.string()
           .required('Required'),
           email: Yup.string()
           .required('Required')
        }),
        onSubmit: values => {
            axiosWithAuth()
                .post('/api/friends', values)
        },
    })

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <div className='center'>
                    <h1>Add A Friend!</h1>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='name'>Name</Label>
                                <Input
                                    id='name'
                                    name='name'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                    className={formik.touched.name && !formik.errors.name ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.name && formik.errors.name ? <div className='invalid-feedback'>{formik.errors.name}</div> : null}
                            </FormGroup>
                        </Col>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='age'>Age</Label>
                                <Input
                                    id='age'
                                    name='age'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.age}
                                    className={formik.touched.age && !formik.errors.age ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.age && formik.errors.age ? <div className='invalid-feedback'>{formik.errors.age}</div> : null}
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='6'>
                            <FormGroup>
                                <Label for='email'>Email</Label>
                                <Input
                                    id='email'
                                    name='email'
                                    type='text'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    className={formik.touched.email && !formik.errors.email ? 'form-control is-valid' : 'form-control is-invalid'}
                                />
                                {formik.touched.email && formik.errors.email ? <div className='invalid-feedback'>{formik.errors.email}</div> : null}
                            </FormGroup>
                        </Col>
                        <Col xs='6'>
                        <Label for='submit'>&nbsp;</Label>
                            <Button type='submit' style={{width: '100%'}} className='btn-info'>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default AddFriend