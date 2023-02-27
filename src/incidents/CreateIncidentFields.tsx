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
    const { values, errors, touched } = useFormikContext<RegisterIncident>()

    return (
        <div className="ms-Grid"> 
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm12 ms-ms9 ms-lg8"><h3 className='sectionText'>Incident Details</h3></div>
            <div className="ms-Grid-col ms-sm12 ms-ms3 ms-lg4"><h3 className='sectionText'>Office Admin</h3></div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'PersonInvolved'}>Person(s) Involved</label>
              <Field name='PersonInvolved' />
              { errors.PersonInvolved && touched.PersonInvolved ? ( <div className='errorField'>{errors.PersonInvolved}</div>) : null}
            </div> 
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'IncidentDate'}>Incident Time</label>
              <Field name='IncidentDate' />
              { errors.IncidentDate && touched.IncidentDate ? ( <div className='errorField'>{errors.IncidentDate}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'AssignedTo'}>Assigned To</label>
              <Field name='AssignedTo' />
            </div>
          </div>
           <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,'ms-Grid-col ms-sm12 ms-ms6 ms-lg8')} >
              <label className='required' htmlFor={'Location'}>Location</label>
              <Field id={'Location'} name='Location'/>
              { errors.Location && touched.Location ? ( <div className='errorField'>{errors.Location}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label className='required' htmlFor={'IncidentStatus'}>Incident Status</label>
              <Field as='select' id={'IncidentStatus'} name='IncidentStatus'>
                <option key={2} value={2}>New</option>
                <option key={1} value={1} >In Progress</option>
                <option key={3} value={3} >Close</option>
              </Field>
              { errors.IncidentStatus && touched.IncidentStatus ? ( <div className='errorField'>{errors.IncidentStatus}</div>) : null}
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'IncidentType'}>Incident Type</label>
              <Field as='select' id={'IncidentType'} name='IncidentType'>
                <option value={3}>Near Miss</option>
                <option value={1}>Not Serious</option>
                <option value={2}>Serious</option>
              </Field>
              { errors.IncidentType && touched.IncidentType ? ( <div className='errorField'>{errors.IncidentType}</div>) : null}
            </div>
            <div className="ms-Grid-col ms-sm12 ms-ms6 ms-lg5"></div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'TimeOffInDays'}>Time Off Due to the Incident (in Days)</label>
              <Field id={'TimeOffInDays'} name='TimeOffInDays' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'InjuryType'}>Injury Type</label>
              <Field as='select' id={'InjuryType'} name='InjuryType' >
                <option value={1}>None</option>
                <option value={3}>Bruise</option>
                <option value={4}>Sprain</option>
                <option value={2}>Other</option>
              </Field>
              { errors.InjuryType && touched.InjuryType ? ( <div className='errorField'>{errors.InjuryType}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg5")}>
            { values.InjuryType === "2" && <label className='required' htmlFor={'OtherInjuryType'}>Injury Other</label> }
            { values.InjuryType === "2" && <Field id={'OtherInjuryType'} name='OtherInjuryType'/>  }
            { errors.OtherInjuryType && touched.OtherInjuryType ? ( <div className='errorField'>{errors.OtherInjuryType}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'HowToStop'}>How do we stop this happening again?</label>
              <Field as='textarea' id={'HowToStop'} resize="both" name='HowToStop' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg3")}>
              <label className='required' htmlFor={'TreatmentType'}>Treatment Type</label>
              <Field as='select' id={'TreatmentType'} name='TreatmentType'>
                <option value={3}>Paramedic</option>
                <option value={4}>First Aid</option>
                <option value={2}>Hospital Treatment</option>
                <option value={5}>None</option>
                <option value={1}>Other</option>
              </Field>
              { errors.TreatmentType && touched.TreatmentType ? ( <div className='errorField'>{errors.TreatmentType}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg5")}>
              { values.TreatmentType === "1" && <label className='required' htmlFor={'OtherTreatmentType'}>Treatment Type Other</label>}
              { values.TreatmentType === "1" && <Field id={'OtherTreatmentType'} name='OtherTreatmentType' />}
              { values.TreatmentType === "1" && errors.OtherTreatmentType && touched.OtherTreatmentType ? ( <div className='errorField'>{errors.OtherTreatmentType}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'PrimaryCause'}>What is the primary cause?</label>
              <Field type='textarea' id={'PrimaryCause'} resize="both" name='PrimaryCause' />
            </div>
          </div>
          <div className="ms-Grid-row">
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg8")}>
              <label className='required' htmlFor={'Description'}>Description</label>
              <Field type='textarea' id={'Description'} resize="both" name='Description' />
              { errors.Description && touched.Description ? ( <div className='errorField'>{errors.Description}</div>) : null}
            </div>
            <div className={mergeClasses(styles.root,"ms-Grid-col ms-sm12 ms-ms6 ms-lg4")}>
              <label htmlFor={'ReportedBy'}>Reported By:</label>
              <Field id={'ReportedBy'} name='ReportedBy' />
            </div>
          </div> 
        </div>
    )
};


export default CreateIncidentFields;