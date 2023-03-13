import React from "react";

function Index()
{
    return(
       <div>
            <div className="main">
                <h2>Projects</h2>
                <button type="button" className="btn">Start a new project</button>

                <div className="nav">
                    <ul>
                        <li><a href="clients">Clients</a></li>
                        <li><a href="progrss">Progress</a></li>
                        <li><a href="internal">Internal</a></li>
                        <li><a href="activity">Activity</a></li>
                    </ul>

                <div className="box">
                    <div className="video">
                        <h1>Video</h1>
                        <p> website concept</p>
                        <p>Apps Devlopment</p>
                    </div>

                    <div className="video">
                        <h1>Nps</h1>
                        <p> website concept</p>
                        <p>Apps Devlopment</p>
                    </div>

                    <div className="video">
                        <h1>Internal</h1>
                        <p> Team Work</p>
                        <p>Support</p>
                    </div>

                    <div className="video">
                        <h1>Growth Hacking</h1>
                        <p> Ideas , Checks</p>
                        <p> Helps To Team</p>
                    </div>
                </div>

                
                <div className="box">
                    <div className="video">
                        <h1>Product Devlop</h1>
                        <p> All Things</p>
                        <p>Marketing</p>
                    </div>

                    <div className="video">
                        <h1>Mobile Desing</h1>
                        <p> Prototype</p>
                        <p>Clients</p>
                    </div>

                    <div className="video">
                        <h1>Softwate</h1>
                        <p> Website Design</p>
                        <p> Debug find Error</p>
                    </div>

                    <div className="video">
                        <h1>Activity</h1>
                        <p> FeedBack </p>
                        <p> Resolve Error</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
    )
}


export default Index;