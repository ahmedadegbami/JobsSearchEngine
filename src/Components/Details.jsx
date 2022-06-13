import { Card, Button, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanySingleJob from "./CompanySingleJob";

const Details = () => {
  const params = useParams().company;
  console.log("parms", params);

  const [companyJobs, setCompanyJobs] = useState([]);

  const handleCompanyDetails = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=` + params
      );
      if (response.ok) {
        const data = await response.json();
        setCompanyJobs(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCompanyDetails();
  }, []);

  return (
    <Container className="mt-5">
      <h3>All jobs @ {params}</h3>
      <>
        {companyJobs.map((job) => (
          <CompanySingleJob key={job._id} job={job} />
        ))}
      </>
    </Container>
  );
};

export default Details;
