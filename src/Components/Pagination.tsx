
import { Col, Button } from 'react-bootstrap';
import '../Styles/Pagination.css';

interface PaginationProps {
    setPaginationResults: (value : number) => void;
    paginateResults: number [] | undefined;
}

export default function Pagination(props: PaginationProps) {

    return <Col lg="12">
            <div className="paginationBox">
                <center>
                    {
                        props.paginateResults?.map((value)=>
                            <Button key={value} onClick={()=>{
                                let size = value*10;
                                props.setPaginationResults(size);
                            }}>{value*10}</Button>
                        )
                    }
                </center>
            </div>
        </Col>
}