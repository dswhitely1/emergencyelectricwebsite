import React, {Component} from 'react';
import {connect} from 'react-redux'
import Container from "react-bootstrap/Container";
import {personalDataSchema} from "../../js/constants";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";


class WorkHistory extends Component {

	render() {
		return (<section className='content-section bg-danger' id='contact'>
			<Container>
				<div className='content-section-heading text-center'>
					<h3 className='mb-0'>Employment Application</h3>
					<h2 className='mb-0'>Employment History</h2>
					<p className='lead'>Please complete for all full-time or part-time employment beginning with most recent employer.  You may include as part of your employment history any verified work performed on a volunteer basis.  All applicants should start with their most recent job, include military assignments and voluntary employment.</p>
				</div>
				</Container>
			<Formik validation={personalDataSchema}>
				{({handleSubmit, handleChange, handleBlur, values, touched, isValid, errors})=> (
					<Form noValidate onSubmit={handleSubmit}>

					</Form>
				)}
			</Formik>
		</section>)
	}
}

export default connect(null)(WorkHistory)