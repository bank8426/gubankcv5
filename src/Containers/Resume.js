import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResumeHome from '../Components/ResumeHome';
import ResumeEduAndWork from '../Components/ResumeEduAndWork';
const Resume =({person})=> {
	//console.log(person.about);
	/*const asd={props.name};*/
	//console.log(person.name);

	return (
	<div className="Resume"  style={{ background: 'green' }}>
		I'm resume container.
		<ResumeHome name={person.about.name} 
		address ={person.about.address}  
		avatar= {person.about.avatar}
		social={person.about.social}
		job = {person.about.job}
		/>

		<ResumeEduAndWork educations={person.education} experiences={person.experience}/>
	</div>)
};

Resume.PropTypes = {

  name: PropTypes.string

};
export default Resume;
