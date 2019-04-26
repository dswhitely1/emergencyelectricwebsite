import React, { Component } from 'react';
import { Container, Form, Col, Button } from 'react-bootstrap';
import {
	formPersonalData,
	schedule,
	shift,
	formPersonalData2,
	auth,
	over,
	permit,
	formCompany,
	CompanyContact,
	EducationSection,
	ReferenceSection,
} from '../js/constants';
import './ContentSection.css';

class Application extends Component {
	renderFormsRows(value, index) {
		const renderFormList = value.map((obj, i) => {
			if (obj.require) {
				return (
					<Form.Group
						as={Col}
						md={`${obj.width}`}
						key={`${obj.toCamelCase()}-row-${index}-col-${i}`}>
						<Form.Control
							type={`${obj.type}`}
							id={`${obj.toCamelCase()}${index}`}
							required
							placeholder={`${obj.name}*`}
						/>
					</Form.Group>
				);
			} else {
				return (
					<Form.Group
						as={Col}
						md={`${obj.width}`}
						key={`${obj.toCamelCase()}-row-${index}-col-${i}`}>
						<Form.Control
							type={`${obj.type}`}
							id={`${obj.toCamelCase()}`}
							placeholder={`${obj.name}`}
						/>
					</Form.Group>
				);
			}
		});
		return renderFormList;
	}
	renderCheckList(value, index) {
		const renderedCheckList = value.map((obj, i) => {
			return (
				<Form.Check
					custom
					inline
					label={`${obj.label}`}
					id={`${obj.toCamelCase()}`}
					key={`${obj.toCamelCase()}-${i}}`}
				/>
			);
		});
		return renderedCheckList;
	}
	render() {
		return (
			<div>
				<section
					className='content-section bg-light text-center'
					id='introduction'>
					<Container>
						<div className='content-section-heading'>
							<h3 className='mb-0'>Employment Application</h3>
							<h2 className='mb-5'>Introduction</h2>
						</div>
						<div className='col-lg-10 mx-auto'>
							<p className='lead text-justify'>
								<strong className='font-weight-bold text-uppercase'>
									Emergency Electric Inc
								</strong>, is an equal opportunity employer and does not
								discriminate against any applicant or employee based on race,
								color, religion, sex, national origin, disability, age, or
								military or veteran status in accordance with federal law. In
								addition,{' '}
								<strong className='font-weight-bold text-uppercase'>
									Emergency Electric Inc
								</strong>, complies with applicable state and local laws
								governing non-discrimination in employment in every jurisdiction
								in which it maintains facilities.{' '}
								<strong className='font-weight-bold text-uppercase'>
									Emergency Electric Inc
								</strong>, also provides reasonable accommodation to qualified
								individuals with disabilities in accordance with applicable
								laws.
							</p>
						</div>
					</Container>
				</section>
				<section className='content-section bg-danger text-light'>
					<Container>
						<Form>
							<div className='p-2 border border-bottom-0'>
								<h2 className='content-section-heading text-center'>
									Personal Data
								</h2>
								{formPersonalData.map((rows, i) => (
									<Form.Row key={`personaldata1-${i}`}>
										{this.renderFormsRows(rows, i)}
									</Form.Row>
								))}
							</div>
							<div className='p-2 border border-bottom-0 text-center'>
								<Form.Row className='mb-3'>
									<Col md={6}>
										<p>Are you interest in?</p>
										{this.renderCheckList(schedule)}
									</Col>
									<Col md={6}>
										<p>What schedule would you prefer?</p>
										{this.renderCheckList(shift)}
									</Col>
								</Form.Row>
								{formPersonalData2.map((rows, i) => (
									<Form.Row key={`personaldata2-${i}`}>
										{this.renderFormsRows(rows, i)}
									</Form.Row>
								))}
								<Form.Row className='mb-3'>
									<Col md={4}>
										<p>Are you authorized to work in the United States?</p>
										{this.renderCheckList(auth)}
									</Col>
									<Col md={4}>
										<p>Are you under 18 years of age?</p>
										{this.renderCheckList(over)}
									</Col>
									<Col md={4}>
										<p>If so, can you furnish a work permit?</p>
										{this.renderCheckList(permit)}
									</Col>
								</Form.Row>
								<p className='text-justify lead'>
									Federal law requires that employers hire only individuals who
									are authorized to be lawfully employed in the United States.
									In compliance with these laws,{' '}
									<strong class='text-uppercase font-weight-bold'>
										Emergency Electric Inc
									</strong>, will verify the status of every individual offered
									employment with the Company. In this connection, all offers of
									employment are subject to verification of the applicant's
									identity and employment authorization, and it will be
									necessary for you to submit such documents as are required by
									law to verify your identification and employment
									authorization.{' '}
								</p>
							</div>
							<div className='p-2 border border-bottom-0'>
								<h2 className='content-section-heading text-center'>
									Employment History
								</h2>
								{formCompany.map((rows, i) => (
									<Form.Row key={`company-row-${i}-1`}>
										{this.renderFormsRows(rows, i)}
									</Form.Row>
								))}
								<div className='text-center'>
									<p>May we Contact?</p>
									{this.renderCheckList(CompanyContact)}
								</div>
								<hr className='border' />
								{formCompany.map((rows, i) => (
									<Form.Row key={`company-row-${i}-2`}>
										{this.renderFormsRows(rows, i + 1)}
									</Form.Row>
								))}
								<div className='text-center'>
									<p>May we Contact?</p>
									{this.renderCheckList(CompanyContact)}
								</div>
								<hr className='border' />
								{formCompany.map((rows, i) => (
									<Form.Row key={`company-row-${i}-3`}>
										{this.renderFormsRows(rows, i + 2)}
									</Form.Row>
								))}
								<div className='text-center'>
									<p>May we Contact?</p>
									{this.renderCheckList(CompanyContact)}
								</div>
								<hr className='border' />
								{formCompany.map((rows, i) => (
									<Form.Row key={`company-row-${i}-4`}>
										{this.renderFormsRows(rows, i + 3)}
									</Form.Row>
								))}
								<div className='text-center'>
									<p>May we Contact?</p>
									{this.renderCheckList(CompanyContact)}
								</div>
								<hr className='border' />
							</div>
							<div className='p-2 border border-bottom-0'>
								<h2 className='content-section-heading text-center'>
									Education
								</h2>
								{EducationSection.map((rows, i) => (
									<Form.Row key={`education-row-${i}`}>
										{this.renderFormsRows(rows, i)}
									</Form.Row>
								))}
							</div>
							<div className='p-2 border border-bottom-0'>
								<h2 className='content-section-heading text-center'>
									References
								</h2>
								{ReferenceSection.map((rows, i) => (
									<Form.Row key={`reference-row-${i}`}>
										{this.renderFormsRows(rows, i)}
									</Form.Row>
								))}
							</div>
							<div className='p-2 border'>
								<h2 className='content-section-heading text-center'>
									Please read carefully before submitting the Application
								</h2>
								<div className='lead text-justify'>
									<p className='p-1'>
										I have submitted the application to{' '}
										<strong className='font-weight-bold text-uppercase'>
											Emergency Electric Inc
										</strong>, for the sole purpose of obtaining employment. I
										acknowledge that the use of this application, and my filling
										it out, does not indicate that any positions are open, nor
										does it obligate{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, to further process my application.
									</p>
									<p className='p-1'>
										By clicking Submit below attests to the fact that the
										information that I have provided on my application, resume,
										given verbally, or provided in any other marerials, is true
										and complete to the best of my knowledge and also
										constitutes authority to verify any and all information
										submitted on this application. I understand that any
										misrepresentation or omission of any fact in my application,
										resume, or any other materials, or doing any interviews, can
										be justification fro refusal of employment, or if employed,
										termination from{' '}
										<strong className='font-weight-bold text-uppercase'>
											Emergency Electric Inc
										</strong>, employ.
									</p>
									<p className='bg-light text-dark p-1'>
										I understand that this application is not an employment
										contract for any specific length of time between{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, and me, and that in the event I am hired, my
										employment will be "at will" and either{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, or I can terminate my employment with or without
										cause and with or without notice at any time. Nothing
										contained in any handbook, manual, policy and the like,
										distributed by{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, to its employees is intended to or can create an
										employment contract, an offer of employment or any
										obligation on{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, part.{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>{' '}
										may, at its sole discretion, hold in abeyance or revoke,
										amend or modify, abridge or change any benefit, policy
										practice, condtion or process affecting its employees.
									</p>
									<p className='p-1'>
										<u>References</u>: I hereby authorize{' '}
										<strong className='text-uppercase font-weight-bold'>
											Emergency Electric Inc
										</strong>, and its agents to make such investigations and
										inquiries into my employment and education history and other
										related matters as may be necessary in arriving at an
										employment decision. I hereby release employers, schools,
										and other persons from all liability in responding to
										inquires connected with my application and I specifically
										authorize the release of information by any schools,
										businesses, individuals, services or other entities listed
										by me in this form. Furthermore, I authorize the company and
										its agents to release any reference information to clients
										who request such information for purposes of evaluating my
										credentials and qualifications.
									</p>
									<p className='p-1'>
										<u>Temporary/Contract Employment</u>: YOU NEED TO REVIEW THE
										SECTION ON THE APPLICATION AND MAKE SURE THAT THIS IS THE
										CORRECT WORDING THAT YOU WANT TO USE
									</p>
									<Form.Check
										custom
										inline
										label='Check Here if you have read the conditions of the application'
										id='terms'
									/>
									<Button variant='outline-light' type='submit'>
										Submit Application
									</Button>
								</div>
							</div>
						</Form>
					</Container>
				</section>
			</div>
		);
	}
}
export default Application;
