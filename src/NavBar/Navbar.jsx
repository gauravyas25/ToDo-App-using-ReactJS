import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import StreamIcon from '@mui/icons-material/Stream';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default function Navbar(){
    return(
        <div className="Nav">
            <div className="logo">
                <MenuIcon className="logo"/> &nbsp; &nbsp;
                <StreamIcon className="logo"/>&nbsp; &nbsp;&nbsp; 
                <SearchOutlinedIcon  className="logo"/> &nbsp; &nbsp;&nbsp;
                <DashboardOutlinedIcon className="logo"/>&nbsp; &nbsp;&nbsp; 
                <NightsStayOutlinedIcon className="logo"/>&nbsp; &nbsp;&nbsp; 
            </div>
        </div>
    );
}