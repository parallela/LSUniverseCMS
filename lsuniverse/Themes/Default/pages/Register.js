import React, {useState} from "react";
import Logo from "../assets/img/logo.png";
import {Link, Redirect} from "react-router-dom";
import {useTranslation} from "react-multi-lang";
import {connect} from "react-redux";
import {Action_Register} from "../../../JSScripts/reducers/actions/Action_Register";
import {getToken} from "../../../JSScripts/services/Auth";
import Alert_Message from "../components/alerts/Alert_Message";

const Register = props => {
    const t = useTranslation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");


    const [errors, setErrors] = useState([]);
    const [serverError, setServerError] = useState([]);
    const [message, setMessage] = useState([]);
    const [loading, setLoading] = useState(false);
    const data = {name: name, email: email, password: password, re_password: rePassword}

    const _handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const register = props.Action_Register(data)
            .then(res => {
                // There's server error here.
                if (res.status === 500 || res.status >= 511) {
                    setServerError({"server": res.statusText});
                    setTimeout(() => {
                        setServerError("");
                    }, 5000);

                    setLoading(false);
                    return false;
                }
                // If there's no any server errors or etc. We can continue with response as json format
                return res.json();
            });

        // Await the request
        const res = await register;

        // Check if the request is valid and not return false
        if (res) {
            setLoading(false);
            if (res.errors) {
                setErrors(res.errors);

                // Remove errors after 5 seconds
                setTimeout(() => {
                    setErrors("");
                }, 5000)

                return false;
            }
            if (res.message) {
                setMessage({"success": t("auth.success")});
                setLoading(false);

                return true;
            } else {
                // The response is not the same as the api suppose to return
                throw new Error(t("app.invalid-response"));
            }

        }
    }

    return !getToken() ? (
        <>
            <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-8 lg:px-8">
                <div className="max-w-xs w-full">
                    <div>
                        <img className="mx-auto h-24 w-auto"
                             src={Logo} alt="Workflow"/>
                        {errors.length !== 0 && <Alert_Message type={"error"} data={errors}/>}
                        {serverError.length !== 0 && <Alert_Message type={"server_error"} data={serverError}/>}
                        {message.length !== 0 && <Alert_Message type={"success"} data={message}/>}
                        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
                            {t("home.register-2")}
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
                                <input aria-label="Password" name="name" type="text" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Full name"
                                       onChange={e => setName(e.target.value)} minLength={4}/>
                            </div>

                            <div className="mt-2">
                                <input aria-label="Password" name="password" type="password" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Password"
                                       onChange={e => setPassword(e.target.value)} minLength={8}/>
                            </div>


                            <div className="mt-2">
                                <input aria-label="Password" name="re_password" type="password" required
                                       className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                                       placeholder="Confirm password"
                                       onChange={e => setRePassword(e.target.value)} minLength={8}/>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm leading-5">
                                <Link to={'/login'}
                                      className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                    {t("home.already-have-account")}
                                </Link>
                            </div>
                        </div>


                        <div className="mt-6">
                            <button type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white _bg-light_gray hover:bg-gray-800 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    disabled={loading}>
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                 fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"/>
            </svg>
          </span>
                                {!loading ? t("home.register-2") : <i className="fas fa-circle-notch fa-spin"></i>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    ) : <Redirect to={'/'}/>
}


export default connect(null, {Action_Register})(Register);
