import { useState, useEffect } from "react";
import headerImg from "../assets/img/nasa-5e9CmF-Ge9Y-unsplash.jpg";
import 'animate.css';
import {Col} from "react-bootstrap";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "QA Engineer" ,"Inspiring Web Developer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <img src={headerImg} alt="Header Img"/>
                    <div className="top-left" >
                        <Col xs={12} md={6} xl={7}>
                        <h1>{`Hi there! I'm Angelina,`} <span className="txt-rotate"  data-rotate='[ " QA Engineer", "QA Engineer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        {/*<h2>I'm a self-taught, life-learner QA Engineer that's always open to new opportunities. </h2>*/}
                        </Col>
                    </div>
        </section>
    )
}
