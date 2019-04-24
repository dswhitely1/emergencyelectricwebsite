import * as yup from 'yup';

export const personalDataSchema = yup.object({
	firstName      : yup.string().required('Required'),
	lastName       : yup.string().required('Required'),
	prefName       : yup.string(),
	address1       : yup.string().required('Required'),
	address2       : yup.string(),
	city           : yup.string().required('Required'),
	state          : yup.string().required('Required'),
	zipCode        : yup
		.string()
		.matches(/^[0-9]{5}(?:-[0-9]{4})?$/, { message: 'Invalid Zip Code' })
		.required('Required'),
	phoneNumber    : yup
		.string()
		.matches(/^[0-9]{10}$/, { message: 'Invalid Phone Number' })
		.required('Required'),
	altPhoneNumber : yup.string().matches(/^[0-9]{10}$/, {
		message            : 'Invalid Phone Number',
		excludeEmptyString : true,
	}),
	email          : yup
		.string()
		.email('Invalid Email Address')
		.required('Required'),
});

export const personalDataSchema2 = yup.object({
	chkFullTime : yup.string(),
});
class PersonalData {
	constructor(attributes) {
		this.type = attributes.type;
		this.name = attributes.name;
		this.width = attributes.width;
		this.require = attributes.require;
	}

	toCamelCase() {
		return this.name
			.toLowerCase()
			.replace(/[\W_]+(.)/g, letter => {
				return letter.toUpperCase();
			})
			.split(/[\W_]+(.)/g)
			.join('');
	}
}

const FirstName = new PersonalData({
	type    : 'text',
	name    : 'First Name',
	width   : '4',
	require : true,
});

const MiddleName = new PersonalData({
	type    : 'text',
	name    : 'Middle Name',
	width   : '2',
	require : false,
});

const LastName = new PersonalData({
	type    : 'text',
	name    : 'Last Name',
	width   : '4',
	require : true,
});

const PreferredName = new PersonalData({
	type    : 'text',
	name    : 'Preferred Name',
	width   : '2',
	require : false,
});
const Address = new PersonalData({
	type    : 'text',
	name    : 'Address',
	width   : '8',
	require : true,
});
const Apartment = new PersonalData({
	type    : 'text',
	name    : 'Apartment #',
	width   : '4',
	require : false,
});
const City = new PersonalData({
	type    : 'text',
	name    : 'City',
	width   : '4',
	require : true,
});
const State = new PersonalData({
	type    : 'text',
	name    : 'State',
	width   : '4',
	require : true,
});
const ZipCode = new PersonalData({
	type    : 'text',
	name    : 'Zipcode',
	width   : '4',
	require : true,
});
const PhoneNumber = new PersonalData({
	type    : 'text',
	name    : 'Phone Number',
	width   : '4',
	require : true,
});
const AlternateNumber = new PersonalData({
	type    : 'text',
	name    : 'Alternate Phone Number',
	width   : '4',
	require : false,
});
const Email = new PersonalData({
	type    : 'email',
	name    : 'Email Address',
	width   : '4',
	require : true,
});
const Referral = new PersonalData({
	type    : 'text',
	name    : 'How Did You Hear about us?',
	width   : '6',
	require : false,
});
const DesiredPay = new PersonalData({
	type     : 'text',
	name     : 'Desired Pay',
	width    : '6',
	required : true,
});
const StartDate = new PersonalData({
	type     : 'text',
	name     : 'When are you able to start work?',
	width    : '6',
	required : true,
});
const Position = new PersonalData({
	type     : 'text',
	name     : 'Position Desired',
	width    : '6',
	required : true,
});

const personalDataRow1 = [ FirstName, MiddleName, LastName, PreferredName ];
const personalDataRow2 = [ Address, Apartment ];
const personalDataRow3 = [ City, State, ZipCode ];
const personalDataRow4 = [ PhoneNumber, AlternateNumber, Email ];
const personalDataRow5 = [ Referral, DesiredPay ];
const personalDataRow6 = [ StartDate, Position ];
export const formPersonalData = [
	personalDataRow1,
	personalDataRow2,
	personalDataRow3,
	personalDataRow4,
];
export const formPersonalData2 = [ personalDataRow5, personalDataRow6 ];
class CheckBoxes extends PersonalData {
	constructor(attributes) {
		super(attributes);
		this.label = attributes.label;
		this.parent = attributes.parent;
		this.name = `${this.parent} ${this.label}`;
	}
}

const checkBoxDefault = { type: null, width: '0', require: false };

const FullTime = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Schedule',
	label           : 'Full Time',
});
const PartTime = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Schedule',
	label           : 'Part Time',
});
const Temporary = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Schedule',
	label           : 'Temporary',
});
const Weekdays = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Shift',
	label           : 'Weekdays',
});
const Weekends = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Shift',
	label           : 'Weekends',
});
const Evenings = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Shift',
	label           : 'Evenings',
});
const Nights = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Shift',
	label           : 'Nights',
});

const AuthYes = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Auth',
	label           : 'Yes',
});
const AuthNo = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Auth',
	label           : 'No',
});
const OverYes = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Over',
	label           : 'Yes',
});
const OverNo = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Over',
	label           : 'No',
});
const PermitYes = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Permit',
	label           : 'Yes',
});
const PermitNo = new CheckBoxes({
	checkBoxDefault,
	parent          : 'Permit',
	label           : 'No',
});

export const schedule = [ FullTime, PartTime, Temporary ];
export const shift = [ Weekdays, Weekends, Evenings, Nights ];
export const auth = [ AuthYes, AuthNo ];
export const over = [ OverYes, OverNo ];
export const permit = [ PermitYes, PermitNo ];

class Employment extends PersonalData {
	constructor(attributes) {
		super(attributes);
	}
}

const CompanyName = new Employment({
	type    : 'text',
	name    : 'Company Name',
	width   : '8',
	require : true,
});
const CompanyPhone = new Employment({
	type    : 'text',
	name    : 'Company Phone Number',
	width   : '4',
	require : true,
});
const CompanyCityState = new Employment({
	type    : 'text',
	name    : 'City State',
	width   : '6',
	require : true,
});
const CompanySupervisor = new Employment({
	type    : 'text',
	name    : 'Supervisor Name and Title',
	width   : '6',
	require : true,
});
const CompanyDateStarted = new Employment({
	type    : 'text',
	name    : 'Date Started',
	width   : '3',
	require : true,
});
const CompanyDateEnded = new Employment({
	type    : 'text',
	name    : 'Date Ended',
	width   : '3',
	require : true,
});
const CompanyReasonforLeaving = new Employment({
	type    : 'text',
	name    : 'Reason for Leaving',
	width   : '6',
	require : true,
});

const CompanyRow1 = [ CompanyName, CompanyPhone ];
const CompanyRow2 = [ CompanyCityState, CompanySupervisor ];
const CompanyRow3 = [
	CompanyDateStarted,
	CompanyDateEnded,
	CompanyReasonforLeaving,
];
const CompanyContactYes = new CheckBoxes({
	checkBoxDefault,
	label           : 'Yes',
	parent          : 'Company Contact',
});
const CompanyContactNo = new CheckBoxes({
	checkBoxDefault,
	label           : 'No',
	parent          : 'Company Contact',
});

export const formCompany = [ CompanyRow1, CompanyRow2, CompanyRow3 ];
export const CompanyContact = [ CompanyContactYes, CompanyContactNo ];

class Education extends PersonalData {
	constructor(attributes) {
		super(attributes);
	}
}

const High_School = new Education({
	type    : 'text',
	name    : 'High School',
	width   : '3',
	require : true,
});

const College = new Education({
	type    : 'text',
	name    : 'College',
	width   : '3',
	require : false,
});

const Technical = new Education({
	type    : 'text',
	name    : 'Technical School',
	width   : '3',
	require : false,
});

const Other = new Education({
	type    : 'text',
	name    : 'Other',
	width   : '3',
	require : false,
});

const Subject = new Education({
	type    : 'text',
	name    : 'Other',
	width   : '3',
	require : false,
});

const Graduate = new Education({
	type    : 'text',
	name    : 'Graduate',
	width   : '3',
	require : false,
});

const Diploma = new Education({
	type    : 'text',
	name    : 'Diploma',
	width   : '3',
	require : false,
});

const SubjectR = new Education({
	type    : 'text',
	name    : 'Other',
	width   : '3',
	require : true,
});

const GraduateR = new Education({
	type    : 'text',
	name    : 'Graduate',
	width   : '3',
	require : true,
});

const DiplomaR = new Education({
	type    : 'text',
	name    : 'Diploma',
	width   : '3',
	require : true,
});

const EducationRow1 = [ High_School, SubjectR, GraduateR, DiplomaR ];
const EducationRow2 = [ College, Subject, Graduate, Diploma ];
const EducationRow3 = [ Technical, Subject, Graduate, Diploma ];
const EducationRow4 = [ Other, Subject, Graduate, Diploma ];

export const EducationSection = [
	EducationRow1,
	EducationRow2,
	EducationRow3,
	EducationRow4,
];

class References extends PersonalData {
	constructor(attributes) {
		super(attributes);
	}
}

const ReferenceName = new References({
	type     : 'text',
	name     : 'Reference Name',
	width    : '3',
	required : true,
});

const ReferenceRelationship = new References({
	type     : 'text',
	name     : 'Relationship',
	width    : '3',
	required : true,
});

const ReferenceYearsKnown = new References({
	type     : 'text',
	name     : 'Years Known',
	width    : '3',
	required : true,
});

const ReferencePhone = new References({
	type     : 'text',
	name     : 'Reference Phone Number',
	width    : '3',
	required : true,
});

const ReferenceRow1 = [
	ReferenceName,
	ReferenceRelationship,
	ReferenceYearsKnown,
	ReferencePhone,
];
const ReferenceRow2 = [
	ReferenceName,
	ReferenceRelationship,
	ReferenceYearsKnown,
	ReferencePhone,
];
const ReferenceRow3 = [
	ReferenceName,
	ReferenceRelationship,
	ReferenceYearsKnown,
	ReferencePhone,
];

export const ReferenceSection = [ ReferenceRow1, ReferenceRow2, ReferenceRow3 ];
