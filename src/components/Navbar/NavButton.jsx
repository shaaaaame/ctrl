import React, { Component } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import classnames from 'classnames';
import '../../stylesheet.css';

function NavButton(props){
    return(
        <ScrollIntoView selector={props.to} smooth='true'>
            <div className={classnames('nav-btn icon ', props.icon)} />
        </ScrollIntoView>
    )
}

export default NavButton;