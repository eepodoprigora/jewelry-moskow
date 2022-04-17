import React from "react"
import s from "./Header.module.css"
import  PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";

class Header extends React.Component{
    state = {
        photo: '',
        user: '',
        redirect:null,
    }
    redirect = () => {
        this.setState({...this.state, redirect:'/' })
    }
    authHandler = async authData => {
        const { email, photoURL } = authData.user;
        this.setState({ user: email, photo: photoURL });
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.authHandler({ user });
            }
        });
    }


    render(){
        const {user, photo} = this.state
        const avatar = photo ? photo : '/images/avatar.png'
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className={s.header}>
                <div className={s.wrapper}>
                    <div className={s.content}>
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
                <div className={s.navigation}>
                {user ?
                    <div className={s.user}>
                        <div className={s.avatar}>
                            <img src={avatar} alt='user'/>
                        </div>
                        <button className={s.buttonLogout} onClick={this.props.handleLogout}>Выйти</button>
                    </div> : null}
                <button className={s.backToChoice} onClick={this.redirect}>К выбору филиала</button>
            </div>
    </div>
        )
    }

}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header