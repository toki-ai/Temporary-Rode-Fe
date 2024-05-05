import React from 'react';

import { TextStyled, LabelStyled } from '../styled';

import Stack from 'react-bootstrap/Stack';

function OutPutHeader({
    slideChecked,
    changeSlideCheckBoxValue,
    diffChecked,
    changeDiffCheckBoxValue,
}) {
    return (
        <Stack direction="horizontal" className="justify-content-between mb-3">
            <TextStyled>output</TextStyled>
            <Stack direction="horizontal" gap={4}>
                <input
                    type="checkbox"
                    id="slide-checkbox"
                    checked={slideChecked}
                    onChange={changeSlideCheckBoxValue}
                />
                <LabelStyled htmlFor="slide-checkbox">Slide &amp; Compare</LabelStyled>
                <input
                    type="checkbox"
                    id="diff-checkbox"
                    checked={diffChecked}
                    onChange={changeDiffCheckBoxValue}
                />
                <LabelStyled htmlFor="diff-checkbox">Diff</LabelStyled>
            </Stack>
        </Stack>
    );
}

export default OutPutHeader;
