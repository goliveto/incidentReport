import React from 'react'
import { shorthands, makeStyles, mergeClasses} from '@fluentui/react-components'
import {  useFormikContext, Field } from 'formik'
import { RegisterIncident } from './CreateIncidentPage';


const labelAboveField = makeStyles({
    root: {
      // Stack the label above the field
      display: "flex",
      flexDirection: "column",
      // Use 2px gap below the label (per the design system)
      ...shorthands.gap("2px")
    },
  });

const CreateIncidentFields: React.FC = () => {
    const styles = labelAboveField();
    const { values } = useFormikContext<RegisterIncident>()

    return (
        <div className="ms-Grid"> 
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-ms9 ms-lg8"><h3 className='sectionText'>Incident Details</h3></div>
            <div className="ms-Grid-col ms-sm12 ms-ms3 ms-lg4"><h3 className='sectionText'>Office Admin</h3></div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'personsInvolved'}>Person(s) Involved</label>
              <Field name='personsInvolved' />
            </div> 
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'incidentTime'}>Incident Time</label>
              <Field name='incidentTime' />
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'assignedTo'}>Assigned To</label>
              <Field name='assignedTo' />
            </div>
          </div>
           <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,'ms-Grid-col ms-sm12 ms-ms6 ms-lg8')} >
              <label className='required' htmlFor={'location'}>Location</label>
              <Field id={'location'} name='location'/>
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'incidentStatus'}>Incident Status</label>
              <Field as='Select' id={'incidentStatus'} name='incidentStatus'>
                <option value={'new'}>New</option>
                <option value={'inProgress'} >In Progress</option>
                <option value={'close'} >Close</option>
              </Field>
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'incidentType'}>Incident Type</label>
              <Field as='select' id={'incidentType'} name='incidentType'>
                <option>Near Miss</option>
                <option>Not Serious</option>
                <option>Serious</option>
              </Field>
            </div>
            <div className="ms-Grid-col ms-sm12 ms-ms6 ms-lg5"></div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'timeOffDueToTheIncident'}>Time Off Due to the Incident (in Days)</label>
              <Field id={'timeOffDueToTheIncident'} name='timeOffDueToTheIncident' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'injuryType'}>Injury Type</label>
              <Field as='select' id={'injuryType'} name='injuryType' >
                <option>None</option>
                <option>Bruise</option>
                <option>Sprain</option>
                <option>Other</option>
              </Field>
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg5")}>
            { values.injuryType === 'Other' && <label className='required' htmlFor={'injuryOther'}>Injury Other</label> }
            { values.injuryType === 'Other' && <Field id={'injuryOther'} name='injuryOther'/>  }
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'stopFromHappening'}>How do we stop this happening again?</label>
              <Field as='textarea' id={'stopFromHappening'} resize="both" name='stopFromHappening' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'treatmentType'}>Treatment Type</label>
              <Field as='select' id={'treatmentType'} name='treatmentType'>
                <option value='paramedic'>Paramedic</option>
                <option value='firstAid' >First Aid</option>
                <option value='hospitalTreatment'>Hospital Treatment</option>
                <option value='none'>None</option>
                <option value='other'>Other</option>
              </Field>
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg5")}>
              { values.treatmentType === 'other' && <label className='required' htmlFor={'treatmentTypeOther'}>Treatment Type Other</label>}
              { values.treatmentType === 'other' && <Field id={'treatmentTypeOther'} name='treatmentTypeOther' />}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'cause'}>What is the primary cause?</label>
              <Field type='textarea' id={'cause'} resize="both" name='cause' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg8")}>
              <label className='required' htmlFor={'description'}>Description</label>
              <Field type='textarea' id={'description'} resize="both" name='description' />
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'reportedBy'}>Reported By:</label>
              <Field id={'reportedBy'} name='reportedBy' />
            </div>
          </div> 
        </div>
    )
};


export default CreateIncidentFields;