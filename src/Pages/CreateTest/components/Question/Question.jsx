import "./question.scss"
import { Col, Row } from 'react-bootstrap';

const Question = () => {
    return (
        <>
            <div className='container-fluid'>
                <Col >
                    <Row className="border-b mb-3 ">
                        <h3>Create Test</h3>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <h4>Question 1:</h4>
                            </Row>
                           <Row>
                           <Col>
                                <Row>
                                    <div>
                                        hehe
                                    </div>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <div>Hihi</div>
                                </Row>
                            </Col>
                           </Row>
                        </Col>
                    </Row>
                </Col>
            </div>
        </>
    )
}

export default Question; 