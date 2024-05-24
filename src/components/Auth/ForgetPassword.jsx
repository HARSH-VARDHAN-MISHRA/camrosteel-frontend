import React, { useEffect } from 'react'
import './Login.css'
import bg from './bg.jpg'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);
    const [loading, setLoading] = useState(false)
    const CartItems = sessionStorage.getItem('cart');
    const [formData, setFormData] = useState({
        Email: "",
        Password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        try {
            const response = await axios.post("https://api.camrosteel.com/api/v1/Login", formData)
            console.log(response.data);
            toast.success('Login SuccessFull')
            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('user', JSON.stringify(response.data.login))
            if(CartItems.length > 0){
                window.location.href="/Make-Order-Complete"
            }else{

                window.location.href = "/"
            }

            setLoading(false)
        }
        catch (err) {
            console.log(err.response.data.
                message

            );
            toast.error(err.response.data.
                message)

            setLoading(false)

        }
    }
  return (
    <>
        <ToastContainer />
            {loading ? (
                <Loading />
            ) : (<section className='login-account'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 mx-auto p-0">
                            <div className="form">
                                <h3>Forget Password </h3>
                                <form >
                                    <input required type="email" name="Email" onChange={handleChange} value={formData.Email} placeholder='Email Id' />
                                    <input required type="password" name="Password" value={formData.Password} onChange={handleChange} placeholder='Confirm Password' />

                                    <div className="flex">
                                        <div className="keep">
                                            
                                        </div>
                                        <div className="member">
                                            <Link to="/sign-up">Create New Account</Link>
                                        </div>
                                    </div>

                                    <input onClick={handleSubmit} type="submit" value="SIGN IN " />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)}
    </>
  )
}

export default ForgetPassword