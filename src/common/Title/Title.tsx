import React from 'react';
import s from "./Title.module.scss";



export const Title = (props: { title: string }) => {
    return (
        <div>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    );
};
