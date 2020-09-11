import React, { Component } from 'react';
import {Form} from 'react-bootstrap';


class Hospital extends Component {



  // Render Doctor Data
  renderDoctorData() {
    return this.props.doctors.map((doctor, index) => {
      const { id, name, birth, gender} = doctor
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{birth}</td>
          <td>{gender}</td>
        </tr>
        )
    })
  }

  /* Render Patient Data */ 
  renderPatientData() {
    return this.props.patients.map((patient, index) => {
      const { id, name, birth, gender, insuranceCode, medicRecord} = patient
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{birth}</td>
          <td>{gender}</td>
          <td>{insuranceCode}</td>
          <td>{medicRecord}</td>
        </tr>
        )
    })
  }


  showDoctorData() {
    return (
      <div id="content" striped bordered hover>
        <h1 id="title"> Doctor Data </h1>
        <table id="doctors" className="table" style={{width: "50em"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.renderDoctorData()}
          </tbody>
        </table>
      </div>
    )
  }

  showPatientData() {
    return (
      <div id="content" striped bordered hover>
        <h1 id="title"> Patient Data </h1>
        <table id="patients" className="table" style={{width: "50em"}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Birthday</th>
              <th scope="col">Gender</th>
              <th scope="col">Insurance Code</th>
              <th scope="col">Medical Record</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPatientData()}
          </tbody>
        </table>
      </div>
    );
  }

  showDoctorForm() {
    return (
      <div id="form" style={{width: "50em"}}>
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label style={{fontWeight: "bold"}}>Doctor ID</Form.Label>
            <Form.Control placeholder="You do not need to enter this field." />
            <Form.Text className="text-muted">This field will be automatically incremented.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Ex : Dao Hong Quan" />
          </Form.Group>

          <Form.Group controlId="formBasicAge">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control placeholder="Ex : 21/09/1999" />
          </Form.Group>

          <Form.Group controlId="formBasicGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control placeholder="Male or Female" />
          </Form.Group>

          <Button variant="primary" type="submit">Add</Button>
        </Form>

      </div>
    )
  }
  
  render() {
    return (
      <div>
        {this.showDoctorForm()}
      </div>
    );
  }
}

export default Hospital;
