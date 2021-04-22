import React from 'react';
import './styles.css';

function Social(props)
{
    return(
        <ul
            style={{'--socialSize': !!props.width ? props.width + 'px' : '50px'}}
             className={`socialShare ${props.className !== undefined ? props.className : null}`} >
           {props.children}
        </ul>
    )
}

function SocialLink(props)
{
    return(
        <li 
            style={{'--socialIcon': `url(${props.icon})`}}
            onClick={() => !!props.link ? window.open(props.link) : props.onClick()} 
            className={`ico  ${props.className !== undefined ? props.className : null}`}>
        </li>
    )
}

export {Social, SocialLink};
