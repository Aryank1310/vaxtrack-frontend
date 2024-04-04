import React from 'react';
import './ViewMore.css'; 
import VaccinationByGenderImage from "../../assets/ss1.png"
import VaccinationByType from "../../assets/ss2.png"
import VaccinationByAge from "../../assets/ss3.png"

const ViewMore = () => {
    return (
        <div id="view-more">
            <div className="header">
                <h1>View More</h1>
            </div>
            <div className="card-container">
                <div className="card">
                    <h2>Total Vaccination Doses</h2>
                    <p>2,20,68,65,918</p>
                   
                </div>
                <div className="card">
                    <h2>Sites Conducting Vaccination</h2>
                    <p>25</p>
                    
                </div>
                <div className="card">
                    <h2>Total Registrations</h2>
                    <p>1,10,94,74,807</p>
                  
                </div>
            </div>
            <div className="image-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/India_Vaccination_Map.jpg" alt="India Vaccination Map" style={{ maxHeight: '600px', margin: '20px auto', display: 'block' }} />
            </div>
            <div className="card-container">
            <div className="card2">
                    <h2>Vaccination By Gender</h2>
                    <img src={VaccinationByGenderImage} alt="Vaccination By Gender" />
                </div>
                <div className="card2">
                    <h2>Vaccination By Type</h2>
                    <img src={VaccinationByType} alt="Vaccination By Type" />
                </div>
                <div className="card2">
                    <h2>Vaccination By Age</h2>
                    <img src={VaccinationByAge} alt="Vaccination By Age" />
                </div>
                </div>
        </div>
    );
};

export default ViewMore;
