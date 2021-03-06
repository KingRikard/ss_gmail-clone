import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon font-size="large"/>}  className="sidebar__compose">
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarOption Icon={StarIcon} title="Starred" number={54} selected={false}/>
            <SidebarOption Icon={ScheduleIcon} title="Snoozed" number={54} selected={false}/>
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} selected={false}/>
            <SidebarOption Icon={NearMeIcon} title="Sent" number={54} selected={false}/>
            <SidebarOption Icon={NoteIcon} title="Drafts" number={54} selected={false}/>
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} selected={false}/>
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">  
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar

