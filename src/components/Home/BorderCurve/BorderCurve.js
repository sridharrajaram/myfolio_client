import React from 'react';
import './BorderCurve.css';

function BorderCurve() {
    return (
        <div className="bordercurve_container">
            <div className="bordercurve_parent">
                <img src={require ('../../../assets/Home/shape-bg.png').default} alt="No Internet"/>
            </div>
        </div>
    )
}

export default BorderCurve