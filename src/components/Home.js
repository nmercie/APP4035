import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
    return <div className='box-content'>
        <div className='content'>
            <h1>WEB</h1>
            <h1 className="pt-3" style={{ color: 'orange' }}>DEVELOPMENT</h1>
            <h1 className="pt-3">FRAMEWORKS</h1>
        </div>
        <LinkContainer to='/course-material'>
            <Button variant="primary" size="lg">
                Let's Get Started
            </Button>
        </LinkContainer>
    </div>


}

export default Home;
