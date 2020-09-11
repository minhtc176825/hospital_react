import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import { HOSPITAL_ABI, HOSPITAL_ADDRESS } from './config';
import Hospital from './Hospital';
import {Button} from 'react-bootstrap'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    //const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    
    const hospital = new web3.eth.Contract(HOSPITAL_ABI, HOSPITAL_ADDRESS)
    this.setState({ hospital })
    
    const doctorsCount = await hospital.methods.doctorsCount().call()
    this.setState({ doctorsCount })

    const patientsCount = await hospital.methods.patientsCount().call()
    this.setState({ patientsCount })

    for (var i = 1; i <= doctorsCount; i++) {
      const doctor = await hospital.methods.doctors(i).call()
      this.setState({
        doctors: [...this.state.doctors, doctor]
      })
    }

    for (var i = 1; i <= patientsCount; i++) {
      const patient = await hospital.methods.patients(i).call()
      this.setState({
        patients: [...this.state.patients, patient]
      })
    }

    this.setState({ loading: false })


  }

  constructor(props) {
    super(props)
    this.state = { 
      account: '',
      doctorsCount: 0,
      patientsCount: 0,
      doctors: [],
      patients: [],
      loading: true
      }
  }


  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="http://www.dappuniversity.com/free-download" target="_blank">Dapp | Hospital Management</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account"></span></a></small>
            </li>
          </ul>
          <div>
          <Button variant="primary" active>Change to patient</Button>
          <Button variant="secondary" active>Sign out</Button>
          </div>
        </nav>
        <hr />
        <br />
        <

        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">

              { this.state.loading 
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>  
                : <Hospital doctors={ this.state.doctors }/>}


              

            </main>
          </div>
        </div>
        <p className="text-center">Your account : {this.state.account}</p>
      </div>
    );
  }
}

export default App;
