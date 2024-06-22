import React from 'react';

const Widget = ({ title, value }) => {
    return (
        <div className="card mb-3 border border-success" style={{ backgroundColor: '#e9ecef' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{value}</p>
            </div>
        </div>
    );
}

export default Widget;
