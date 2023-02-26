import React from 'react'
import "./login.module.scss"



export default function Login() {
    const [values, setValues] = React.useState({ email: "", value: "", showPassword: false })

    const handleChange = (event) => {
        setValues({ ...values, value: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChangeEmail = (event) => {
        setValues({ ...values, email: event.target.value });
    };
    return (
        <main className='flex xs-responsive'>

            <section id="auth-section-img" />

            <section id="auth-form-section" className='flex-c-c' >
                <div>
                    <div
                        className="auth-content-container"
                    >
                        <h5 className='bold' >
                            Welcome To
                        </h5>
                        <span varient="subtitle1" className='mb-20' >
                            Worry-Free Home Comfort!
                        </span>

                        <form>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                value={values.email}
                                onChange={handleChangeEmail}
                            />
                            
                            <label htmlFor="password">Email address</label>
                            <div className='relative'>
                                <input
                                    id="password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange}
                                />
                                <span 
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword} 
                                    style={{
                                        fontSize:"10px", 
                                        fontWeight:900, 
                                        left:10, 
                                        top:"50%", 
                                        transform: "translateY(-50)"
                                    }} 
                                >
                                    { values.showPassword ? "HIDE" : "SHOW" }
                                </span>
                            </div>
                            
                        </form>
                       
                        <div className='text-end mb-20' >
                            Forgot Password?
                        </div>


                        {/* <MyButton fullWidth variant="contained" type="success">
                            Login
                            </MyButton>
                            <MyButton fullWidth variant="contained" type="hard-warn">
                            Login
                        </MyButton> */}
                        <button
                            className={`my-btn success`}
                        >
                            Login
                        </button>
                        <div className='mb-18 mt-8' >
                            New to PremierProgram? <span className='signup-text'>Sign up here!</span>
                        </div>
                        <div variant='caption' className='mb-18' color="ButtonShadow" >
                            OR
                        </div>
                        <div className='flex-sb' >
                            <button className='signup-with-btn1' >
                                G
                            </button>
                            <button className='signup-with-btn2' >
                                F
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}