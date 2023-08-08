import React from 'react';

export default function Section(props) {
    return (
        <div>
        <p>{props.content}</p>
        <img src={props.imageSrc} alt={props.alt} />
        </div>
    )
}