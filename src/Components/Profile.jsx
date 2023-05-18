import React from "react";

function Profile(){
    return <div className="profile">
    <img className="avatar" src="images/avatar-michelle.jpg" alt="avatar"/>
    <div className="info-container">
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
    </div>
    <div className="share-container">
    <img className="share" src="images/icon-share.svg" alt="share"/>
    </div>
    
    </div>
}

export default Profile;