import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'

export const Switcher = ({ change }) => {
    return (
        <div className="d-flex justify-content-center py-5">
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => change('regular')}>Regular</Button>
                <Button variant="secondary" onClick={() => change('zoom')}>Zoom</Button>
                <Button variant="secondary" onClick={() => change('grid')}>Grid</Button>
            </ButtonGroup>
        </div>
    )
}