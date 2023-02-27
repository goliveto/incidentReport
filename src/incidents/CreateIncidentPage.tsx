import React from 'react'
import { DialogContent,DialogActions, DialogTrigger, Button, DialogBody, DialogTitle } from '@fluentui/react-components'
import { Formik, Form, FormikProps } from 'formik'
import CreateIncidentFields from './CreateIncidentFields';
import * as Yup from 'yup';

export type RegisterIncident = {
  personsInvolved: string;
  incidentTime: Date;
  location: string;
  incidentType: string;
  injuryType: string;
  treatmentType: string;
  description: string;
  assignedTo: number | undefined;
  incidentStatus: number | undefined;
  timeOffInDays: number | undefined;
  reportedBy: number | undefined;
  stopFromHappening: string;
  cause: string;
};

const initialValues: RegisterIncident = {
  personsInvolved: '',
  location: '',
  incidentType: '',
  injuryType: '',
  treatmentType: '',
  description: '',
  incidentTime: new Date(), 
  assignedTo: undefined,
  incidentStatus: undefined,
  timeOffInDays: undefined,
  reportedBy: undefined,
  stopFromHappening: '',
  cause: ''
}


const CreateIncidentPage: React.FC = () => {
  
  return ( <DialogBody>
      <DialogTitle>Report New Incident</DialogTitle>
      <DialogContent>
        <Formik<RegisterIncident>
            initialValues={initialValues}
            onSubmit={() => {alert('submit')}}
            validationSchema={ Yup.object({
                personsInvolved: Yup.string()
                  .required('Required'),
                assignedTo: Yup.string()
                  .required('Required')                
              })
            }
            validateOnBlur
        >
          { (props: FormikProps<any>) => (
            <Form id={'createIncidentForm'}>
              <CreateIncidentFields />
            </Form>)
          }
        </Formik>

      </DialogContent>
      <DialogActions>
        <DialogTrigger disableButtonEnhancement>
          <Button appearance="secondary">Close</Button>
      </DialogTrigger>
      <Button appearance="primary">Create</Button>
      </DialogActions>
    </DialogBody>
  )

}

export default CreateIncidentPage