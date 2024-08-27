import React from "react";
import "./SideBar.css";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="intro">
                <img src="/Coatimg.jpg" /> <br />
                <p>&nbsp;&nbsp;Hey, Gaurav</p>
            </div>
            <br />
            <div className="tasks">
                <br />
                <ul>
                    <li><AssignmentOutlinedIcon className="icon"/> All Tasks</li><br />
                    <li><CalendarTodayOutlinedIcon className="icon"/> Today</li><br />
                    <li><StarBorderOutlinedIcon className="icon"/> Important</li><br />
                    <li><MapOutlinedIcon className="icon"/> Planned</li>
                </ul>
                <br />

                <div className="progressbar">
                <div className="today">
                    <h3>Today's Tasks: 14</h3>
                </div>
                <hr />
                <div className="progress">
                    <CircularProgressbar value={60}  strokeWidth={10}/>
                </div>
                <br /><br />
            </div>
            </div>
            
        </div>
    );
}