import { Container, Row, Col } from 'react-bootstrap';
import CourseItem from './CourseItem';
import webf1 from '../imgs/webf1.png'
import internet from '../imgs/internet.jpg'
import hosting from '../imgs/hosting.jpg'
import restapi from '../imgs/restapi.png'
import frontback from '../imgs/frontBack.png'
import fullstack from '../imgs/fullstack.png'

function CourseMaterial() {
    return <Container>
        <div class="two alt-two pt-5">
            <h1>MATERIALS
                <span>Happy learning with your peers!</span>
            </h1>
        </div>
        <Row className='pt-5'>
            <Col>
                <CourseItem name='Lesson 1' desc=" History. The World Wide Web (often known as the web) was created in 1990  In the beginning the web was very static. The user could not interact much with the content, and to update a piece of text (or something else as well) in a published material on the web, the author had to edit the page locally and upload it to the server. " img={internet} />
            </Col>
            <Col>
                <CourseItem name='Lesson 2' desc=" Most web frameworks are based on the model–view–controller (MVC) pattern.
Model–view–controller (MVC), Three-tier organization, general-purpose website frameworks, discussion forums, wikis and weblogs,web template system, caching,Security,Database access, mapping and configuration.
                " img={webf1} />
            </Col>
            <Col>
                <CourseItem name='Lesson 3' desc=" Front-end Frameworks	Back-end Frameworks
Frontend Languages – HTML, CSS, JavaScript, JQuery	Backend Languages – Python, JavaScript, PHP, Ruby, .NET
Frontend Frameworks- React, Vue, BootStrap, Ember, Angular	Backend frameworks- Django, Ruby On Rails, Express, Spring, ASP.NET Core
                " img={frontback} />
            </Col>

        </Row>
        <Row className='pt-5 mb-5'>
            <Col>
                <CourseItem name='Lesson 4' desc=" A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer and was created by computer scientist Roy Fielding." img={restapi} />
            </Col>
            <Col>
                <CourseItem name='Lesson 5' desc=" Full-stack refers to a group of programming languages and tools a developer learns to handle both the front-end and back-end development of a website. MEAN stack, on the other hand, is a popular full-stack framework, which consists of MongoDB, Express. js, AngularJS, and NodeJS" img={fullstack} />
            </Col>
            <Col>
                <CourseItem name='Lesson 6' desc=" Web hosting is the activity of providing storage space for a website that is connected to the Internet. When you have a company that has space on servers and people buy space to store their websites so they can appear on the Internet, this is an example of web hosting." img={hosting} />
            </Col>

        </Row>
    </Container>;
}

export default CourseMaterial;
