import React, { Component } from 'react';
import '../style/App.css';
import place from 'places.js';
import Navigation from './Navigation'


class App extends Component {
  
  componentDidMount(){
    const placesAutocomplete = place({
      container: document.querySelector('#address-input')
    });
  }
  
  render(){
    return(
      <div>
        <div className="App-header">
          <Navigation />
          <div className="container address-search">
            <h2> We Deliver Dumpsters </h2>
            <input className="form-control" type="search" placeholder="Enter your address" id="address-input" />
          </div> 
        </div>
        <div className="content container-fluid" id="service">
          <main className="d-flex flex-column">
            <h1> How It Works </h1>
            <article className="d-flex flex-row mr-auto">
              <i className="fas fa-phone-volume fa-5x p-2"></i>
              <p className="p-2"> 
                  We received your order, info and payment.
              </p>
            </article>
            <article className="d-flex flex-row ml-auto">
              <i className="fas fa-truck-pickup fa-5x p-2"></i>
              <p className="p-2">
                  We deliver the dumpster to your place.
              </p>
            </article>
            <article className="d-flex flex-row mr-auto">
              <i className="fas fa-trash fa-5x p-2"></i> 
              <p className="p-2">
                  You dump all the general debris into the dumpster.
              </p>
            </article>
            <article className="d-flex flex-row ml-auto">
              <i className="fas fa-truck-loading fa-5x p-2"></i>
              <p className="p-2">
                  We pick up the dumpster and weigh it.
              </p>
            </article>
            <article className="d-flex flex-row mr-auto">
              <i className="fas fa-dollar-sign fa-5x p-2"></i> 
              <p className="p-2">
                  We charge the credit card on file for extra weight or bulky items. ($0 if your dumpster does not exceed weight limit and no bulkty items)
              </p>
            </article>
          </main>
        </div>
        <div className="container-fluid pricing" id="price"> 
          <h1>Rental Price</h1>
          <h3> Price is for San Jose only. For more info please call: ...</h3>
          <div className="row price-container">
            <article className="col-3 price-box border border-success rounded align-items-center">
              <h1>$315</h1>
              <h4>10 cubic yard</h4>
              <ul>
                <li> Weight limit: 1.5 tons</li>
                <li> Rental Period: 10 days</li>
              </ul>
              <button className="btn btn-success form-control">Order 10YD</button>
            </article>
            <article className="col-3 price-box border border-success rounded">
              <h1>$450</h1>
              <h4>20 cubic yard</h4>
              <ul>
                <li> Weight limit: 3 tons</li>
                <li> Rental Period: 10 days</li>
              </ul>
              <button className="btn btn-success form-control">Order 20YD</button>

            </article>
            <article className="col-3 price-box border border-success rounded">
              <h1>$600</h1>
              <h4>30 cubic yard</h4>
              <ul>
                <li> Weight limit: 4 tons</li>
                <li> Rental Period: 10 days</li>
              </ul>
              <button className="btn btn-success form-control">Order 30YD</button>
            </article>
            <article className="col-3 price-box border border-success rounded">
              <h1>$725</h1>
              <h4>40 cubic yard</h4>
              <ul>
                <li> Weight limit: 5 tons</li>
                <li> Rental Period: 10 days</li>
              </ul>
              <button className="btn btn-success form-control">Order 40YD</button>
            </article>
          </div>
        </div>
        <div className="container-fluid bg-dark" id="Contact">
          <h2>Contact Details</h2>
          <div className="row">
            <div className="col-2">Email: </div>
          
          
    
    
          </div>
        </div>
      </div>
      );
  }
}

export default App;
