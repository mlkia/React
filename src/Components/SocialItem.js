import React from 'react'

function SocialItem(props){

    return(
        <li className="list-group-item">
                   <img src={props.img} alt={`Icon of ${props.id}`}/>
                   <input type="checkbox" id={props.id} />
                   <label htmlFor={props.id}>{props.media}</label>
                </li>

    )
}

export default SocialItem


