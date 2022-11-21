import { Row, Col, Card, Image, Media, CardGroup } from "react-bootstrap";

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      <CardGroup className="mb-4  admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://avatars.githubusercontent.com/u/79613927?v=4"
          alt="Generic placeholder"
        />
        <Card className="p-4">
          <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
          <p className="welcome-text">
            My name is Riko airlan and I am an experienced software engineer and
            freelance developer. and this is my blog page.
          </p>
        </Card>
      </CardGroup>
    </Col>
  </Row>
);

export default AuthorIntro;
