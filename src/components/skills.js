import * as React from 'react';
import {useRef, useState} from 'react';
import {Container} from "react-bootstrap";

export const Skills = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

        return (
            <Container className={'skills'} id="skills">
                <h2>Skills</h2>
            </Container>


    )
}

