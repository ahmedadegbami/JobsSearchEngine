import { Container, ListGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import SingleJobs from "./SingleJobs";

const Homepage = () => {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("");

  useEffect(() => {
    fetchData();
  }, [searchBy]);

  const fetchData = async () => {
    let url;
    if (searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&limit=10`;
    }
    if (search !== "") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`;
    }
    if (search === "" && searchBy === "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?limit=10`;
    }
    if (search !== "" && searchBy !== "Search by") {
      url = `https://strive-jobs-api.herokuapp.com/jobs?category=${searchBy}&search=${search}&limit=10`;
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setState(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  return (
    <Container className="mt-5">
      <Form.Group
        controlId="exampleForm.ControlSelect1"
        onChange={(e) => setSearchBy(e.target.value)}
      >
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          <option>Search by</option>
          <option value={"All others"}>All others</option>
          <option value={"Business"}>Data</option>
          <option value={"Customer Service"}>Service</option>
          <option value={"Data"}>Data</option>
          <option value={"Design"}>Design</option>
          <option value={"DevOps / Sysadmin"}>DevOps / Sysadmin</option>
          <option value={"Finance / Legal"}>Finance / Legal</option>
          <option value={"Human Resources"}>Human Resources</option>
          <option value={"Marketing"}>Marketing</option>
          <option value={"Product"}>Product</option>
          <option value={"QA"}>QA</option>
          <option value={"Sales"}>Sales</option>
          <option value={"Software Development"}>Software Development</option>
          <option value={"Teaching"}>Teaching</option>
          <option value={"Writing"}>Writing</option>
        </Form.Control>
      </Form.Group>
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
