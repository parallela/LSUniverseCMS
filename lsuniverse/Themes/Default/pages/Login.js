import React, {useState} from "react";
import Logo from "../assets/img/logo.png";
import {Redirect} from "react-router-dom";
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux";
import {Action_Login} from "../../../JSScripts/reducers/actions/Action_Login";
import {getToken} from "../../../JSScripts/services/Auth";

const Login = props => {
    const t = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [requestAmount, setRequestAmount] = useState(0);
    const [errors, setErrors] = useState([]);
    const data = {email: email, password: password}

    const _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: implementing error messages
        // TODO: Implement request spamming check with cookies
        props.Action_Login(data)
            .then(res => {
                if (!res.ok) {
                    // TODO: Implement this in custom error message field (server error message)
                    throw new Error(res.statusText);
                }
            })
            .then(res => {
                if (res.errors) {
                    console.log(res.errors)
                    setErrors(res.errors);
                    return false;
                }
                localStorage.setItem('auth_token', res.access_token);
            }).catch(error => {
            // TODO
            throw new Error(error)
        });
        setRequestAmount(requestAmount + 1);

    }

    return !getToken() ? (
        <>
            <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8">
                <div className="max-w-xs w-full">
                    <div>
                        <img className="mx-auto h-24 w-auto"
                             src={Logo} alt="Workflow"/>
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            {t("home.login")}
                        </h2>
                    </div>
                    <form onSubmit={_handleSubmit} className="mt-8" action="#" method="POST">
                        <input type="hidden" name="remember" value="true"/>
                        <div className="rounded-md shadow-sm">
                            <div>
                                <input aria-label="Email address" name="email" type="email" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Email address"
                                       onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="mt-2">
                                <input aria-label="Password" name="password" type="password" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Password"
                                       onChange={e => setPassword(e.target.value)}/>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <a href="#"
                                   className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white _bg-light_gray hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                 fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"/>
            </svg>
          </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
        // TODO: REDIRECT TO DASHBOARD
    ) : <Redirect to={'/'}/>
}


export default connect(null, {Action_Login})(Login);
