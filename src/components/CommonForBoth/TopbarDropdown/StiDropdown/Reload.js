import React from 'react'
import * as str  from  'common/strings'
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col, Media } from "reactstrap"

export const Reload = () => {
  return (
    <div className="p-3">
    <Row className="align-items-center">
        <Col>
            <h6 className="m-0">{str.REPORTS.REPORTS}</h6>
        </Col>
        <div className="col-auto">
            <a href="#!" className="small">
                {str.PUBLIC.RELOAD}
            </a>
        </div>
    </Row>
</div>
  )
}
