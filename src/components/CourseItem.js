import { Card } from 'react-bootstrap';


function CourseItem({ name, desc, img }) {
    return <Card style={{ width: '22rem' }} className='card-custom'>
        <Card.Img variant="top" src={img} style={{ height: '40vh' }} />
        <Card.Body>
            <Card.Title className='card-title-custom'>{name}</Card.Title>
            <Card.Text>
                {desc}
            </Card.Text>

        </Card.Body>
    </Card>
}

export default CourseItem;
