import React from "react";

function Profile(){

    function handleClick(){
        const clicked = document.getElementById("share-container");
        const buttonClicked = document.getElementById("click-button");
        const profile = document.getElementById("profile");
        const shareTab = document.getElementById("share-tab");

        buttonClicked.addEventListener("click", ()=>{
            shareTab.classList.toggle("show");
            clicked.style.visibility = "visible";
            buttonClicked.classList.toggle("button-clicked");
            clicked.classList.toggle("background-change");
            if(window.outerWidth< 700){
                profile.classList.toggle("hide");

            }else{
                profile.style.visibility = "visible";

            }
        })

    }


    return <div id="profile" className="profile">
    <img className="avatar" src="images/avatar-michelle.jpg" alt="avatar"/>
    <div className="info-container">
        <h2>Michelle Appleton</h2>
        <p>28 Jun 2020</p>
    </div>
    <div className="share-container" id="share-container">
    <button id="click-button" className="share" onClick={handleClick} title="share-button"/>
    </div>
    
    </div>
}

export default Profile;