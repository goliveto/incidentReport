import React from 'react'
import { DialogContent,DialogActions, DialogTrigger, Button, DialogBody, DialogTitle } from '@fluentui/react-components'
import { Formik, Form, FormikProps } from 'formik'
import IncidentFields from './IncidentFields';
import { registerIncidentSchema } from './validationSchema';
import { useRequestAPIHooks } from '../api/requestAPIHooks';
import { navigateHome } from '../RoutesApp';

export type RegisterIncident = {
  PersonInvolved: string;
  IncidentDate: Date;
  Location: string;
  IncidentType?: number;
  InjuryType: string;
  TreatmentType: string;
  Description: string;
  AssignedTo?: number ;
  IncidentStatus?: number;
  TimeOffInDays?: number ;
  ReportedBy?: number ;
  HowToStop: string;
  PrimaryCause: string;
  OtherTreatmentType: string;
  OtherInjuryType: string;
};

const initialValues: RegisterIncident = {
  PersonInvolved: '',
  Location: '',
  Description: '',
  IncidentDate: new Date(), 
  TreatmentType: '3',
  InjuryType:'1',
  IncidentStatus:2,
  IncidentType:3,
  HowToStop: '',
  PrimaryCause: '',
  OtherTreatmentType:'',
  OtherInjuryType: ''
}


const CreateIncidentPage: React.FC = () => {
  
  const {createIncident} = useRequestAPIHooks();

  const handleSubmit = (values: RegisterIncident) => {
    console.log('SubmitForm '+ JSON.stringify(values)); 
    createIncident(values)
      .then(ret=>{console.log('Create incident Succesfull'+ JSON.stringify(ret)); navigateHome();} )
      .catch(err => (console.log('Was an error to register an incident'+ JSON.stringify(err))) );
  }
  
  return ( 
      <Formik<RegisterIncident>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={registerIncidentSchema}
            validateOnBlur
        >
          { (props:FormikProps<any>) => (
            <Form>
              <DialogBody>
                <DialogTitle>Report New Incident</DialogTitle>
                <DialogContent>
                  <IncidentFields />
                </DialogContent>
                <DialogActions>
                  <DialogTrigger disableButtonEnhancement>
                    <Button appearance="secondary">Close</Button>
                  </DialogTrigger>
                  <Button appearance="primary" onClick={()=>props.handleSubmit()}>Create</Button>
                </DialogActions>
              </DialogBody>
            </Form>
          )}
    </Formik>
  )

}

export default CreateIncidentPage