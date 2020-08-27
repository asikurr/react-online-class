import React from 'react';
import './course-details-style.css'
import { Card, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const CourseDetails = (props) => {
    const { courseName, instructorName, imgUrl, coursePrice } = props.course;
    const handelAddCourse = props.handelAddCourse;
    return (

        <Card className="card">
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{courseName}</Card.Title>
                <p className="text-dark">Instructor Name : <span className="text-muted">{instructorName}</span></p>
                <h4 className="mt-auto text-danger">Course Price $ {coursePrice} </h4>
                <Button
                className="btn btn-warning btn-block" 
                onClick={() => handelAddCourse(props.course)}>
                <FontAwesomeIcon icon={faCartPlus} /> Enroll Now</Button>
          
            </Card.Body>
        </Card>

    );
};

export default CourseDetails;