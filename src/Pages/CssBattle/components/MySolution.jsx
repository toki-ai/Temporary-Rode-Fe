import { AccordionItem, AccordionBody, AccordionButton } from '../styled';

import Accordion from 'react-bootstrap/Accordion';

const MySolution = ({ data }) => {
    return (
        <Accordion>
            {data.map((solution, id) => {
                return (
                    <AccordionItem key={solution.id} eventKey={id}>
                        <AccordionButton>{solution.record}</AccordionButton>
                        <AccordionBody>{solution.code}</AccordionBody>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
};

export default MySolution;
