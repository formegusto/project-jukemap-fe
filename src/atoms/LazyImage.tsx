import React from 'react';

type Props = {
    src: string;
    alt: string;
}

function LazyImage(props: Props) {
    return(
        <img
            src={props.src}
            alt={props.alt} />

    );
}

export default LazyImage;