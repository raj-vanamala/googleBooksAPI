import {Accordion,Col} from 'react-bootstrap';

export default function SearchResults(searchResults: any[]) {

    return  <>
        {
            Object.entries(searchResults).map((result: any,id: string | number) => 

                <Col lg="12" key={id}>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey={id.toString()}>
                            <Accordion.Header>{result[1].volumeInfo.authors && result[1].volumeInfo.authors.join(',') } { "-" + result[1].volumeInfo.title}</Accordion.Header>
                            <Accordion.Body>
                                {result[1].volumeInfo.description ? result[1].volumeInfo.description : "Description not available for this volume"}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            )
        }
    </>
}