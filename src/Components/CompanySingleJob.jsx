import { Card, Container } from "react-bootstrap";
import { parseISO, format } from "date-fns";
import moment from "moment";

const CompanySingleJob = ({ job }) => {
  const ago = moment(job.publication_date).fromNow();

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Text>{job.type}</Card.Text>
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
          </Card.Text>
          <h5>{job.job_type}</h5>
          <h6>
            {format(parseISO(job.publication_date), "MMMM do yyyy  || HH:mm ")}
          </h6>{" "}
          <span>{ago}</span>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CompanySingleJob;
