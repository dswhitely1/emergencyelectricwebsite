import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { validate } from '../../js';
const Contact = props => {
	const renderField = ({
		input,
		label,
		type,
		meta  : { touched, error },
	}) => (
		<div>
			<input
				{...input}
				placeholder={label}
				type={type}
				className='form-control mb-2'
			/>
			{touched &&
				(error && <span className='alert-danger'>{error}</span>)}
		</div>
	);

	const { handleSubmit, pristine, reset, submitting, valid } = props;
	return (
		<section className='content-section bg-light' id='contact'>
			<Container>
				<div className='content-section-heading text-center'>
					<h3 className='mb-0'>Contact Us</h3>
					<h2 className='mb-5'>Send us a message!</h2>
				</div>
				<Form onSubmit={handleSubmit}>
					{/* <Form
					onSubmit={() => {
						handleSubmit().then(reset);
					}}> */}
					<Form.Group controlId='formContact'>
						<Row>
							<Col>
								<Form.Label>First Name</Form.Label>
								<Field
									name='firstName'
									component={renderField}
									type='text'
									label='First Name'
									// validate={[ required ]}
								/>
							</Col>
							<Col>
								<Form.Label>Last Name</Form.Label>
								<Field
									name='lastName'
									component={renderField}
									type='text'
									label='Last Name'
									// validate={[ required ]}
								/>
							</Col>
						</Row>
						<Form.Label>Email address</Form.Label>
						<Field
							name='email'
							component={renderField}
							type='email'
							label='email address'
							// validate={[ required, email ]}
						/>
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
						<Form.Label>Message</Form.Label>
						<Field
							name='message'
							component='textarea'
							rows={4}
							placeholder='Message'
							className='form-control'
							// validate={[ required ]}
						/>
					</Form.Group>
					<Button
						variant='danger'
						size='lg'
						type='submit'
						className='mr-2'
						disabled={!valid || pristine || submitting}>
						Send
					</Button>
					<Button
						variant='outline-danger'
						size='lg'
						type='button'
						disabled={pristine || submitting}
						onClick={reset}>
						Reset
					</Button>
				</Form>
			</Container>
		</section>
	);
};

export default reduxForm({ form: 'contact', validate: validate })(Contact);
