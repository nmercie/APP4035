import React from 'react';
import { Container } from 'react-bootstrap';

function ContactInstructor() {
    return <Container>
        <div class="two alt-two pt-5">
            <h1>CONTACT INSTRUCTOR
                <span>Web development frameworks</span>
            </h1>

            <section id="contact">
                <div class="contact-box">
                    <div class="contact-links">
                        <h2>SOCIALS</h2>
                        <div class="links">
                            <div class="link">
                                <a><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
                            </div>
                            <div class="link">
                                <a><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form-wrapper">
                        <form>
                            <div class="form-item pb-4">
                                <input type="text" name="sender" required />
                                <label>Name:</label>
                            </div>
                            <div class="form-item pb-4">
                                <input type="text" name="email" required />
                                <label>Email:</label>
                            </div>
                            <div class="form-item">
                                <textarea class="" name="message" rows="5" cols="40" required></textarea>
                                <label>Message:</label>
                            </div>
                            <button class="submit-btn">Send</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    </Container>;
}

export default ContactInstructor;
