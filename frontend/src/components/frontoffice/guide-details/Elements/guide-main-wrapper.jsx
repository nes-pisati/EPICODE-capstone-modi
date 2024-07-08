import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FrontofficeBtn from '../../../reusable/frontoffice button/frontoffice-button'

export default function GuideMainWrapper() {
  return (
    <Container>
        <Row></Row>
        <Row>
            <Col xs={12}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada a mauris at blandit. Pellentesque tristique justo diam, 
                et laoreet leo placerat quis. Pellentesque nisi ligula, posuere id tincidunt eget, consectetur tempus diam. Ut eget dolor nec quam aliquam vulputate. Sed nulla nibh, elementum ut rhoncus in, tempor nec ipsum.</p>
            </Col>
        </Row>
        <Row>
            <Col xs={8} md={6}>
                <h4>In questo percorso troverai:</h4>
            </Col>
            <Col xs={3} md={6}>
                <ul>
                    <li>Artist</li>
                    <li>Artist</li>
                    <li>Artist</li>
                </ul>
            </Col>
        </Row>
        <FrontofficeBtn text={"inizia"}/>
    </Container>
  )
}
