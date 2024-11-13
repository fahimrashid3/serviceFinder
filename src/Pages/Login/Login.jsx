import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

// for captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

// import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Compunents/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { signIn } = useAuth();

  // privet route navigate
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in successfully ",
          showConfirmButton: false,
          timer: 1000,
        });
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // privet route navigate when user available
        navigate(from, { replace: true });
        scrollTo(0, 0);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div
      className="hero  min-h-screen "
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <Helmet>
        <title>Service | Login</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row lg:gap-48 md:gap-16">
        <div className="text-center lg:text-left flex-1">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-1 shrink-0">
          <form onSubmit={handelLogin} className="card-body">
            <div className=" font-bold text-center lg:text-5xl md:text-4xl text-3xl md:mb-10 mb-5 text-dark-900 dark:text-white">
              Sign In
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/*TODO: add show password using useState change */}
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <p className="text-red-500">{errorMessage}</p>
            </div>
            <div className="form-control space-y-2">
              <LoadCanvasTemplate />
              <input
                onBlur={handelValidateCaptcha}
                type="text"
                placeholder="type the above characters "
                name="captcha"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                disabled={disabled}
                className="btn btn-warning btn-outline border-1 border-b-8"
              >
                Login
              </button>
            </div>
          </form>
          <div className="space-y-5">
            <p className="text-[#D1A054] text-lg text-center">
              New here ?
              <span className="font-semibold">
                <Link to="/registration">Create a New Account</Link>
              </span>
            </p>
            <p className="text-center text-lg">Or sign in with</p>
            <div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
