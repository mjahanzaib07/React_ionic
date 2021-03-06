import React  from "react";
import {IonContent, IonLabel, IonItem, IonInput} from "@ionic/react";
import Image from "../assets/img/artboard_2.png"

const Login: React.FC = () => {

    return (
        <IonContent>
            <div className="login_page height100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="login_page_inside">
                                <h3>Register and never lose your progress</h3>
                                <div className="man_image">
                                    <img src={Image}/>
                                </div>
                                <div className="button_div google">
                                    <a href="#" className="btn btn-outline-primary btn-lg">
                                        <span><i className="fab fa-google"></i></span>Sign in via
                                        google</a>
                                </div>
                                <div className="button_div facebook">
                                    <a href="#" className="btn btn-outline-primary btn-lg">
                                        <span><i className="fab fa-facebook-f"></i></span>Sign in
                                        via Facebook</a>
                                </div>
                                <div className="button_div email">
                                    <a href="#" className="btn btn-outline-primary btn-lg">
                                        <span><i className="far fa-envelope"></i></span>Sign in
                                        via Email</a>
                                </div>
                                <div className="already_account">
                                    <p>i already have an account. <a href="#">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </IonContent>
    );
};

export default Login;