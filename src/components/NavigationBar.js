import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function NavigationBar() {
    return <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand>
                <LinkContainer to='/'>
                    <div className='logo-text'>
                        <h1> APP4035</h1>
                    </div>
                </LinkContainer>
            </Navbar.Brand>
            <Nav className='me-auto nav-links'>
                <LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to='/about'><Nav.Link>About Course</Nav.Link></LinkContainer>
                <LinkContainer to='/course-material'><Nav.Link>Course Materials</Nav.Link></LinkContainer>
                <LinkContainer to='/contact-instructor'><Nav.Link>Contact Instructor</Nav.Link></LinkContainer>
            </Nav>
        </Container>
    </Navbar>
}

export default NavigationBar;
