import React, { Component } from 'react';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ResumeEduAndWork =(props)=> {
  console.log( props);
  console.log( props.educations);
  console.log( props.experiences);
  const VerticalTimelineEduAndWork = (
      <VerticalTimeline>
      {props.experiences.map((experience,key) =>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          key={key}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      )}
      {props.educations.map((education,key) =>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
          key={key}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      )}
      </VerticalTimeline>
  );
  /*experiences.map((experience) =>
      console.log( experience)
      )
  educations.map((education) =>
      console.log( education)
      )*/
  
	return (

	<div className="ResumeEduAndWork" style={{ background: 'red' }}>
		I'm EduWork.
    {VerticalTimelineEduAndWork}
	</div>
	)
};


export default ResumeEduAndWork;
