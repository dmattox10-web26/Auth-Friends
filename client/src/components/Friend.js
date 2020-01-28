import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Row, Col, Card, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const Friend = props => {

    const { name, age, email, id } = props.friend
    const { deleteFriend, editFriend } = props
    
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)
    
    const formik = useFormik({
        initialValues: {
            name: name,
            age: age,
            email: email,
            id: id
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
            editFriend(values)
            toggle()
        },
    })

    return (
        <Row>
            <Col xs='1'></Col>
            <Col xs='10'>
                <Card>
                    <CardBody>
                        <CardTitle>Name: { name }</CardTitle>
                        <CardText>Age: { age }</CardText>
                        <CardText>Email: { email }</CardText>
                        <Button onClick={() => deleteFriend(id)}>Unfriend</Button><Button onClick={toggle}>Edit</Button>
                    </CardBody>
                </Card>
            </Col>
            <Col xs='1'></Col>
            <Modal isOpen={modal} toggle={toggle} className='alert alert-dissmissible alert-warning'>
                <ModalHeader toggle={toggle}>Edit { name }</ModalHeader>
                <ModalBody>
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
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Row>
    )
}

export default Friend