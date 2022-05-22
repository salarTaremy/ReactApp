import React from 'react'
import {
    Col,
    Row,
    Card,
    CardBody,
    Spinner,
} from "reactstrap"
//Import Images
import errorImage from "../../assets/images/loading.webp"
const Loading = () => {
    return (
            <div className="page-content">
                <Row className="justify-content-center">
                    <Col md={8} lg={6} xl={5}>
                        <Card className="overflow-hidden">
                            <CardBody>
                                <div className="text-center p-3">
                                    <div className="img">
                                        <Spinner className="m-1" color="primary" />
                                    </div>
                                    <h5 className="mb-4 mt-5"> لطفا کمی صبر کنید </h5>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
    )
}

export default Loading