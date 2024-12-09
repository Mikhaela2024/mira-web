import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Innovative IT Solutions for Modern Businesses"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {
            clearInterval(ticker);
        }
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xt={7}>
                        <span className="tagline">Welcome to MIRA</span>
                        <h1>{``}<span className="wrap">{text}</span></h1>
                        <p>At MIRA, we combine cutting-edge technology with tailored strategies to help businesses grow. We specialize in web development, AI-powered platforms, and custom IT solutions that enhance your operations, customer engagement, and overall efficiency.</p>
                    </Col>
                    <Col xs={12} md={6} xt={5}>
                        <img src={headerImg} alt="Header IMG" />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}