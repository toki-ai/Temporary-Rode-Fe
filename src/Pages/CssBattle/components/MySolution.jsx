import { AccordionItem, AccordionBody, AccordionButton } from '../styled';

import Accordion from 'react-bootstrap/Accordion';

const MySolution = ({ data }) => {
    return (
        <Accordion>
            {data.length !== 0 ? (
                data.map((solution, id) => {
                    return (
                        <AccordionItem key={solution.id} eventKey={id}>
                            <AccordionButton>
                                Score: {solution.score} {`{${solution.space}}`}
                            </AccordionButton>
                            <AccordionBody>{solution.submissions}</AccordionBody>
                        </AccordionItem>
                    );
                })
            ) : (
                <div className="text-danger">You haven't submitted yet</div>
            )}
        </Accordion>
    );
};

export default MySolution;
