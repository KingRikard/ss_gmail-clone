import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "./Mail.css";
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function Mail() {
    const history = useHistory();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                <IconButton onClick={() => history.push("/")}>
                    <ArrowBackIcon />
                </IconButton>
                
                <IconButton>
                    <MoveToInboxIcon />
                </IconButton>
                
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                
                <IconButton>
                    <DeleteIcon />
                </IconButton>

                <IconButton>
                    <EmailIcon />
                </IconButton>
                
                <IconButton>
                    <WatchLaterIcon />
                </IconButton>
                
                <IconButton>
                    <CheckCircleIcon />
                </IconButton>
                
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
                
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>[New Dates] Webclass - How To Consistently Get Good Off-Market Deals</h2>
                    <LabelImportantIcon className="mail__important" /> 
                    <p>Lifestyles Unlimited</p>
                    <p className="mail__time">Sun Jan 21, 10:03PM</p>
                </div>
                <div className="mail__message">
                    <p>
                        this is the body of the email message.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default Mail