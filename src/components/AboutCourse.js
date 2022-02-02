import { Container } from 'react-bootstrap';

function AboutCourse() {
    return <Container>
        <div class="two alt-two pt-5">
            <h1>ABOUT COURSE
                <span>Web development frameworks</span>
            </h1>

            <p style={{ textAlign: 'center' }} className='px-5 mx-5'>
            Web application frameworks’ or ‘web frameworks’ as “a software framework that is designed to support the development of web applications including web services, web resources and web APIs”. In simple words, web frameworks are a piece of software that offers a way to create and run web applications. Thus, you don’t need to code on your own and look for probable miscalculations and faults.
In earlier days of web app development, web frameworks were introduced as a means to end hand-coding of applications where just the developer of a particular app could change it. That was long ago, now we have web-specific languages and the trouble with changing an app’s structure is resolved because of the arrival of a general performance. Now, depending upon your task you may choose one web framework that fulfills all your requirements or converges multiple frameworks.</p>
        </div>
    </Container>;
}

export default AboutCourse;
