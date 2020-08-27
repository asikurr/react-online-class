import React, {Fragment, useState } from 'react';
import CourseData from '../../courseData/courseData.js'
import { Container, Row, Col } from 'react-bootstrap'
import CourseDetails from '../course-details/CourseDetails.jsx';
import CartCourse from '../cartCourse/CartCourse.jsx';
import './course-style.css'

const Course = () => {
    const [courses, setCourses] = useState(CourseData);
    const [cartCourse, setCartCourse] = useState([]);

    const handelAddCourse = (course) => {
       const newCourse = [...cartCourse, course]
    //    console.log(newCourse)
       setCartCourse(newCourse)
    }
   

    return (
        <Fragment>
            <Container>
                <Row>
                    <Col>
                        <div className="cart-design p-3 bg-warning  text-white">
                            <h2 className="mr-auto bg-success border p-2 width-full">
                            <span className="text-danger ">BD</span> Online Class <br/>
                            <span className="font-size">Total Courses : {courses.length}</span>
                            </h2>
                            <CartCourse cartCourse={cartCourse}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="d-flex flex-wrap">
                        {
                            courses.map(course => <CourseDetails 
                            handelAddCourse={handelAddCourse}
                            key={course.id} 
                            course={course} />)
                        }
                    </div>
                </Row>
            </Container>
        </Fragment>
    );
};

export default Course;