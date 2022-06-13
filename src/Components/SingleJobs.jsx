import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const SingleJobs = ({ job }) => {
  return (
    <Link to={"/" + job.company_name}>
      <ListGroup.Item key={job._id}>{job.title}</ListGroup.Item>
    </Link>
  );
};

export default SingleJobs;
