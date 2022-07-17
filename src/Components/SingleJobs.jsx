import { ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const SingleJobs = ({ job }) => {
  return (
    <ListGroup.Item key={job._id}>
      <Row>
        <Col md={8}>
          <Link to={"/" + job.company_name}>
            <p className="text-primary">Position: {job.title}</p>
            <p className="text-dark">Job Type: {job.job_type}</p>
          </Link>
        </Col>
        <Col>
          <a href={job.url} className="text-primary">
            {" "}
            APPLY NOW{" "}
          </a>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default SingleJobs;
