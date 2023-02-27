import React from 'react'
import { Button, Tab, TabList } from '@fluentui/react-components'
import { Formik, Form, FormikProps } from 'formik'
import IncidentFields from './IncidentFields';
import { registerIncidentSchema } from './validationSchema';
import { useRequestAPIHooks } from '../api/requestAPIHooks';
import { navigateHome } from '../RoutesApp';
import { useParams } from 'react-router-dom';
import { RegisterIncident } from './CreateIncidentPage';
import {
  bundleIcon, Attach16Filled, AttachArrowRightRegular
} from "@fluentui/react-icons";

type MaintainIncident =  RegisterIncident & {Id:number};

const initialValues:  MaintainIncident = {
  Id:0,
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


const MaintainIncidentPage: React.FC = () => {
  const { incidentId } = useParams<{ incidentId: string }>();
  const [incidentDto, setIncidentDto] = React.useState<MaintainIncident>(initialValues);
  const [personInvolved, setPersonInvolved] = React.useState<string>('');
  const {getIncident, updateIncident, removeIncident} = useRequestAPIHooks();

  React.useEffect(() => {
    if (incidentId) {
      getIncident(+incidentId).then((response) =>{setIncidentDto(response);setPersonInvolved(response.PersonInvolved)});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incidentId]);

  const handleSubmit = (values: RegisterIncident) => {
    console.log('SubmitForm '+ JSON.stringify(values)); 
    updateIncident(values)
      .then(ret=>{console.log('Maintain incident Succesfull'+ JSON.stringify(ret)); navigateHome();} )
      .catch(err => (console.log('Was an error to maintain an incident'+ JSON.stringify(err))) );
  }
  const handleDelete = (id : number) => {
    removeIncident(id).then((res)=>navigateHome())

  }

  const AttachmentIcon = bundleIcon(Attach16Filled,AttachArrowRightRegular);
  
  return ( 
    <>
     <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-ms9 ms-lg10"><h1>Incident: {incidentId} | {personInvolved}</h1></div>
      <div className="ms-Grid-col ms-sm12 ms-ms3 ms-lg2">
        <TabList defaultSelectedValue="detailsTab">
          <Tab value="detailsTab">
            Details
          </Tab>
          <Tab icon={<AttachmentIcon />} value="attachmentTab">
            Attachments
          </Tab>
        </TabList>
      </div>
    </div>
      <Formik<MaintainIncident>
            initialValues={incidentDto}
            enableReinitialize
            onSubmit={handleSubmit}
            validationSchema={registerIncidentSchema}
            validateOnBlur
        >
          { (props:FormikProps<any>) => (
            <Form>
              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-ms9 ms-lg10"></div>
                <div className="ms-Grid-col ms-sm12 ms-ms3 ms-lg1">
                  <Button appearance="secondary" onClick={()=>handleDelete(incidentDto.Id)} >Delete</Button>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-ms3 ms-lg1">
                  <Button appearance="primary" onClick={()=>props.handleSubmit()}>Save</Button>
                </div>
              </div>
              <IncidentFields />
            </Form>
          )}
    </Formik>
    </>
  )
}

export default MaintainIncidentPage