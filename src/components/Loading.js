import React from 'react';

const Loading = () => {
    return (
        <div style={{ minHeight: "500px" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;