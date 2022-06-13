import { Container, ListGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs";

const Homepage = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?limit=10&search=${search}`
      );
      if (response.ok) {
        const data = await response.json();
        setState(data.data);
        console.log("gsgsgsg", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  return (
    <Container className="mt-5">
      <Form.Group>
        <Form.Label>Search</Form.Label>

        <Form.Control
          type="search"
          placeholder="search job"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchData}>Search</button>
      </Form.Group>

      <h1>JOB LISTS</h1>
      <ListGroup>
        {state.map((job) => (
          <SingleJobs key={job._id} job={job} />
        ))}
      </ListGroup>
    </Container>
  );
};

export default Homepage;
