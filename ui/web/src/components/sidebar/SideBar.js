import React from "react";
import './Sidebar.scss';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function SideBar(){
    return (
        <Container>
            <Typography component="div" style={{ backgroundColor: '#F5F5F5', height: '100vh', width: '30vh' }}>
                <h1>Menu</h1>
                <a href="" target="">Post</a><br/><br/>
                <a href="">Calender</a><br/><br/>
                <a href="">Weather</a><br/><br/>
                <a href="">Contact Us</a><br/><br/>
            </Typography>
        </Container>
    )
}

export default SideBar;