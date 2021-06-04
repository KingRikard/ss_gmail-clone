import React from 'react';
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from "./Section";
import EmailRow from "./EmailRow";
import "./EmailList.css";


function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <KeyboardArrowLeftIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Offers" color="green" />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Twitch"
                    subject="Hello fellow goosebumpster"
                    description="This is the description for testing"
                    time="10PM" />
                <EmailRow
                    title="Tom Fitton"
                    subject="THis is  amust see video! You won't believe Number 9!"
                    description="This is the description for testing"
                    time="10PM" />
                <EmailRow
                    title="Lifestyles Unlimited"
                    subject="[New Dates] Webclass - How To Consistently Get Good Off-Market Deals"
                    description="This is the description for testing"
                    time="10PM" />
            </div>
        </div>
    )
}

export default EmailList
