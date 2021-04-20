import React from 'react';
import './ContactSection.css';
import ContactContent from './ContactContent';

function ContactSection() {
  return (
    <div className='contactsection'>
      <h1>See Resume Below</h1>
      <div className='contactsection__container'>
        <div className='contactsection__wrapper'>
          <div className='contact__section'>
            <ContactContent
              h1 ='ABOUT ME'
              text='As a detail-oriented and outside-the-box thinker,
              I am very confident in my personal and professional abilities.
              I see education as a way of life rather tahn a means to and end.
              Developing the ability to teach myself has proven valuable in
              all areas of life and gives me the confidence that I can accomplish
              any task given to me.'
              h11 ='EXPERIENCE'
              h2 = 'System Administration Officer'
              h3 = 'Bank OZK / Little Rock / 2018-Present'
              text1='Responsible for the majority of all Treasury Systems
              and their ability to run and comply with audit standards.'
              text2 ='Developed and implamented systems such as Remote Official Check, SWIFT, company Intranet, Dovetail, Escrow and Commercial
              Center through Quality Assurance testing and required assessment
              of weaknesses/issues.'
              text3 ='Development of raw-data SQL queries for automation of reports
              and processes'
              text4 ='Analysis of current processes and procedures for improvements.'
              text5 ='Served as part of the Technical Change Committee and consulted
              for the Enterprise Risk Management Group'
              text6 ='Developed new Power Platform applications to improve the Onboarding/
              Offboarding of customers as well as applications to manage the wire
              transfer process.'
              h21 ='Treasury Management Specialist'
              h31 ='Bank OZK / Little Rock / 2017 - 2018'
              text7 ='Managed time between wire transactions and new projects
              that lead into the role created above.'
              text8 ='Manged roles in three projects simultaneously while 
              performing the managment of the flow and process of outgoing
              wires by all commercial customers.'
              text9 ='Conducted training and development of procedures for the
              Trerasury Management Department.'
              h13 ='SKILLS'
              text10 ='Pandas, Sklearn, Tensorflow, Keras'
              text11 ='Mechine Learning'
              text12 ='Prediction/Forcasting and Classification'
              text13 ='SQL, DAX'
              text14 ='JavaScript, Python, CSS, HTML'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;