import React, { useState } from 'react';
import CourseData from '../../courseData/courseData.js'
import { Container, Row } from 'react-bootstrap'

const Course = () => {
    const [course, setCourse] = useState(CourseData);

    return (
        <fragment>
            <Container>
                <Row>

                </Row>
            </Container>
        </fragment>
    );
};

export default Course;