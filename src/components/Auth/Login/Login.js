import React from 'react';
import PropTypes from 'prop-types';
import './Login.css'

const Login = props => {
    return (
        <div className='container'>
            <nav className='login'>
                <h2 className='loginHeader'>Для проверки прав доступа, пожалуйста, авторизуйтесь с помощью Google aккаунта </h2>
                <button className='github' onClick={() => props.authenticate()}>
                    Перейти к заполению данных
                </button>
            </nav>
        </div>
    );
};

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;