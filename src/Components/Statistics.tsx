import {Accordion,Col} from 'react-bootstrap';

interface PropsType {
    totalItems? : number;
    commonAuthor? : string;
    EarlyPublishedDate?:  string;
    LatestPublishedDate?: string;
    serverResponseTime? : string;
}

export default function Statistics(props: PropsType) {
    return (
        <Col lg="12">
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><b>Statistics</b></Accordion.Header>
                            <Accordion.Body>
                                <p>Total Items: {props.totalItems}</p>
                                <p>Most Common Author: {props.commonAuthor}</p>
                                <p>Earliest Published Date: {props.EarlyPublishedDate}</p>
                                <p>Latest Published Date: {props.LatestPublishedDate}</p>
                                <p>Server Response Time: {props.serverResponseTime}</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
        </Col>
    )
}