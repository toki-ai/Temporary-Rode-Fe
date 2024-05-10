import { Col, Container, Row } from 'react-bootstrap';

import grid_img from '../../assets/Login/Gird.svg';
import logo from '../../assets/Login/Logo.svg';
import arrow_login from '../../assets/Login/arrow.svg';
import circle from '../../assets/Login/circle.svg';
import footer_left from '../../assets/Login/footer_left.svg';
import footer_right from '../../assets/Login/footer_right.svg';
import header from '../../assets/Login/header.svg';
import hexagonal from '../../assets/Login/hexagonal.svg';
import signal from '../../assets/Login/signal.svg';
import x_blue from '../../assets/Login/x-blue.svg';
import x_green from '../../assets/Login/x-green.svg';
import GoogleSignInButton from '../../components/GoogleBtn';
import GoogleSignUpButton from '../../components/GoogleSignUp';
import { LoginStyle } from './style';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxPaperPlane } from "react-icons/rx";
import authApi from '../../utils/api/authApi';
import './Login.scss';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const defaultValid = {
        isValidUsername : true,
        isValidPassword : true,
    }
    const [isValidInput, setIsValidInput] = useState(defaultValid)

    const handleSubmit = async(event) => {
        event.preventDefault();
        setIsValidInput(defaultValid);
        if(!username){
            setIsValidInput({...defaultValid, isValidUsername: false});
            toast.error("Please enter your username.");
            return;
        }
        if(!password){
            setIsValidInput({...defaultValid, isValidPassword: false});
            toast.error("Please enter your password.");
            return;
        }
        // const res = await authApi.login(response.credential);

        // if (res.data.status === 400) {
        //     navigate('/register', { state: res.credential });
        // } else if (res.data.status === 200) {
        //     Localstorage.setItem('token', res.data.data);
        //     navigate('/');
        // }
    }

    return (
        <LoginStyle>
            <Container className="d-flex justify-content-center align-items-center">
                <Row
                    lg={10}
                    className="w-80 bg-dark-secondary rounded-3 box-shadow-primary border border-2 border-dark"
                >
                    <Col
                        sm={12}
                        md={12}
                        lg={6}
                        className="text-light d-flex flex-column justify-content-center align-items-center flex-grow-1 rounded-3 bc-primary"
                    >
                        <Row className="">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </Row>
                        <Row className="text-center justify-content-center ">
                            <p className="mt-4 text-center fs-1 mb-4 fw-bold text-break w-75 ls-2">
                                WELCOME BACK
                            </p>
                        </Row>
                        {/* em style đoạn này ha  */}
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <FaRegUserCircle className={isValidInput.isValidUsername ? '' : 'unValid'}/>
                                <input placeholder='Username' type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
                                <br />
                                <RiLockPasswordFill className={isValidInput.isValidPassword ? '' : 'unValid'}/>
                                <input placeholder='Password' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                                <br />
                                    <button type="submit">
                                <RxPaperPlane />
                                </button>
                            </form>
                            {/* {error && <div style={{ color: 'ed' }}>{error}</div>} */}
                            {/* <GoogleSignInButton /> */}
                        </div>
                        {/*-------------------------------------------------*/}
                    </Col>
                    
                    <Col
                        sm={0}
                        md={0}
                        lg={6}
                        className="text-light d-flex flex-column justify-content-center align-items-center position-relative d-none d-lg-flex"
                        style={{ minHeight: '65vh' }}
                    >
                        <div className="BgScrolling"></div>
                        <Row className=" position-absolute top-0 end-0">
                            <img className="img-fluid" src={header} alt="header" />
                        </Row>
                        <Row className=" position-absolute top-10 end-2">
                            <img className="img-fluid si-2" src={signal} alt="signal" />
                        </Row>
                        <Row className="position-absolute top-18 left-3">
                            <svg className="si-1">
                                <circle cx="1em" cy="1em" r="0.9em" fill="#00e7aa"></circle>
                            </svg>
                        </Row>
                        <Row className="position-absolute top-25 left-1">
                            <svg className="si-1">
                                <circle cx="1em" cy="1em" r="0.3em" fill="#00e7aa"></circle>
                            </svg>
                        </Row>
                        <Row className="position-absolute top-10 end-4">
                            <svg className="si-1">
                                <circle cx="1em" cy="1em" r="0.45em" fill="#2e7dff"></circle>
                            </svg>
                        </Row>
                        <Row className="position-absolute top-30 end-3">
                            <svg className="si-1">
                                <circle cx="1em" cy="1em" r="0.45em" fill="#2e7dff"></circle>
                            </svg>
                        </Row>
                        <Row className="position-absolute top-5 left-1">
                            <img className="img-fluid si-2" src={hexagonal} alt="hexagonal" />
                        </Row>
                        <Row className="position-absolute top-28 left-2">
                            <img className="img-fluid si-1" src={circle} alt="circle" />
                        </Row>
                        <Row className="position-absolute top-25 ">
                            <img className="img-fluid si-4" src={x_green} alt="x" />
                        </Row>

                        <Row className="d-flex align-items-center justify-content-between position-absolute">
                            <Col xs={2} lg={1} className="d-flex justify-content-center">
                                <img src={arrow_login} alt="arrow" className="si-1 mt-3" />
                            </Col>

                            <Col
                                xs={10}
                                lg={11}
                                className="d-flex flex-column justify-content-center align-items-center"
                            >
                                <div className="w-100 d-flex align-items-center justify-content-around">
                                    <Row className="fw-bold fs-0 color-primary ls-1 text-effect">
                                        R.ODE
                                    </Row>
                                </div>
                                <Row className="ls-2 fw-bolder fs-0 text-stroke-1 text-effect">
                                    BATTLE
                                </Row>
                            </Col>
                        </Row>

                        <Row className="position-absolute left-2 bottom-23 rotate-1">
                            <div className="color-primary fs-1 fw-bold">2</div>
                        </Row>
                        <Row className="position-absolute left-4 bottom-13 rotate-3">
                            <div className="color-secondary fs-1 fw-bold">0</div>
                        </Row>
                        <Row className="position-absolute bottom-25 rotate-2">
                            <div className="color-secondary fs-1 fw-bold">2</div>
                        </Row>
                        <Row className="position-absolute end-5 bottom-15 rotate-4">
                            <div className="color-third fs-1 fw-bold">4</div>
                        </Row>
                        <Row className="position-absolute bottom-0 start-0">
                            <img className="img-fluid" src={footer_left} alt="footer-left" />
                        </Row>
                        <Row className="position-absolute bottom-24 end-2">
                            <img className="img-fluid si-2" src={hexagonal} alt="hexagonal" />
                        </Row>
                        <Row className="position-absolute bottom-5 end-2">
                            <svg className="si-1">
                                <circle cx="1em" cy="1em" r="0.9em" fill="#2e7dff"></circle>
                            </svg>
                        </Row>
                        <Row className="position-absolute bottom-0 end-1">
                            <img className="img-fluid si-2" src={footer_right} alt="footer-right" />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </LoginStyle>
    );
};

export default Login;
