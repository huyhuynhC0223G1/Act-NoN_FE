import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as LoginService from '../../service/LoginService';
import Swal from "sweetalert2";

import '../login/Login.css'
import {Field, Form, Formik} from "formik";

export default function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'ActNoN - Login'
    }, [])

    const loginByUserName = async (user) => {
        try {
            const result = await LoginService.loginByUserName(user);
            LoginService.addJwtTokenToLocalStorage(result.data.token);
            const tempURL = localStorage.getItem("tempURL");
            console.log(tempURL)
            if (tempURL) {
                navigate(tempURL);
            } else {
                navigate('/');
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in successfully',
                })
            }
        } catch (e) {
            Swal.fire({
                icon: 'error',
                title: 'System maintenance. Please check back later.',
            })
        }
    }

    return (
        <>
            <Formik initialValues={{
                username: "",
                password: ""
            }}
                    onSubmit={(values,
                               {setSubmitting}) => {
                        setSubmitting(false);
                        let cloneValues = {
                            ...values,
                        }
                        console.log(cloneValues)
                        loginByUserName(cloneValues);
                    }}>
                <Form>
                    <section className="login">
                        <div className="login_box">
                            <div className="left">
                                <div className="top_link">
                                    <Link to={"/"}><a href=""><img
                                        src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                                        alt=""/>Return home</a></Link>
                                </div>
                                <div className="contact">
                                    <div>
                                        <h3>SIGN IN</h3>
                                        <Field type="text" className="form-control border border-primary"
                                               placeholder="User Name"
                                               name="username"/>
                                        <Field type="password" className="form-control border border-primary"
                                               placeholder="Password"
                                               name="password"/>
                                        <button className="submit_login" type="submit">LET'S GO</button>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-text">
                                    <h2 style={{color: '#fdc449'}}>RaiNoN</h2>
                                    <br/>
                                    <h5 style={{color: "white"}}>If you don't try.</h5>
                                    <h5 style={{color: "white"}}> You will never know what you can do.</h5>
                                </div>
                                <div className="right-inductor"><img
                                    src="https://lh3.googleusercontent.com/fife/ABSRlIoGiXn2r0SBm7bjFHea6iCUOyY0N2SrvhNUT-orJfyGNRSMO2vfqar3R-xs5Z4xbeqYwrEMq2FXKGXm-l_H6QAlwCBk9uceKBfG-FjacfftM0WM_aoUC_oxRSXXYspQE3tCMHGvMBlb2K1NAdU6qWv3VAQAPdCo8VwTgdnyWv08CmeZ8hX_6Ty8FzetXYKnfXb0CTEFQOVF4p3R58LksVUd73FU6564OsrJt918LPEwqIPAPQ4dMgiH73sgLXnDndUDCdLSDHMSirr4uUaqbiWQq-X1SNdkh-3jzjhW4keeNt1TgQHSrzW3maYO3ryueQzYoMEhts8MP8HH5gs2NkCar9cr_guunglU7Zqaede4cLFhsCZWBLVHY4cKHgk8SzfH_0Rn3St2AQen9MaiT38L5QXsaq6zFMuGiT8M2Md50eS0JdRTdlWLJApbgAUqI3zltUXce-MaCrDtp_UiI6x3IR4fEZiCo0XDyoAesFjXZg9cIuSsLTiKkSAGzzledJU3crgSHjAIycQN2PH2_dBIa3ibAJLphqq6zLh0qiQn_dHh83ru2y7MgxRU85ithgjdIk3PgplREbW9_PLv5j9juYc1WXFNW9ML80UlTaC9D2rP3i80zESJJY56faKsA5GVCIFiUtc3EewSM_C0bkJSMiobIWiXFz7pMcadgZlweUdjBcjvaepHBe8wou0ZtDM9TKom0hs_nx_AKy0dnXGNWI1qftTjAg=w1920-h979-ft"
                                    alt=""/></div>
                            </div>
                        </div>
                    </section>
                </Form>
            </Formik>

        </>
    )
}