import React, { Component } from 'react';
import Social from './Social';

const ResumeHome =({name,address,avatar,social,job})=> {
	//console.log("ResumeHome " + name);
	return (

	<div className="ResumeHome" style={{ background: 'lightblue' }}>
		I'm home.
		<div className='avatar'>
        	<img src={avatar} alt={name} />
     	 </div>
		<h2>
          	{name}
        </h2>
        <p>
          	{address}
        </p>
        <p>
          	{job}
        </p>
        <Social social={social}/>
	</div>
	)
};


export default ResumeHome;
