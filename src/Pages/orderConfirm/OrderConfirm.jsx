import React from 'react'
import './OrderConfirm.css'
import { Link } from 'react-router-dom'
import order from './7778129.webp'
const OrderConfirm = () => {
    const orderData = JSON.parse(sessionStorage.getItem('orderData'));
    const userData = JSON.parse(sessionStorage.getItem('user'));
    return (
        <>
            {/* <div className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light">
                <h1 className="display-4 text-success mb-4">Order Successful!</h1>
                <p className="lead text-secondary mb-4">Your order has been placed successfully.</p>
                <img src={order} alt="Order Success" className="mb-4" style={{ width: '16rem', height: '16rem' }} />
                <Link to="/shop" className="text-primary">Continue Shopping</Link>
            </div> */}

            {/* <section class="order-confirm my-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <h3>Your Trusted CAMRO  </h3>
                        <div class="flex-row">
                            <div class="icon"><i class="fa-regular fa-circle-check"></i></div>
                            <div class="content">
                                <p>Order #78994HF</p>
                                <strong>Thank You Tanishq</strong>
                            </div>
                        </div>

                        <div class="bordered-box">
                            <h4>Your Order is Confirmed</h4>
                            <p class="text">You'll recieve a confirmed email with your order number shortly.</p>
                        </div>
                        <div class="bordered-box">
                            <h4>Customer information</h4>
                            <div class="row table-inner">
                                <div class="col-md-6">
                                    <div class="strong">Contact Information</div>
                                    <p>customer@example.com</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Payment method</div>
                                    <p>COD</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Shipping address</div>
                                    <p>Customer Name</p>
                                    <p>Address Rohini -21 , New Delhi</p>
                                    <p>Delhi , India</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Billing address</div>
                                    <p>Customer Name</p>
                                    <p>Address Rohini -21 , New Delhi</p>
                                    <p>Delhi , India</p>
                                </div>
                                <div class="col-md-6">
                                    <div class="strong">Shipping method</div>
                                    <p>First Class Package</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-md-5 ">
                        <div class="bordered-box cart-subtotal">
                            <div class="font-semibold mb-2" style={{color:'var(--color-red)'}}>Cart Subtotal</div>
                            <ul>
                                <li class="flex justify-between mb-1"><span>Sub-Total:</span>₹1161.00</li>
                                <li class="flex justify-between mb-1"><span>Tax (-4.00):</span>₹11.00</li>
                                <li class="flex justify-between mb-1"><span>Shipping Cost:</span>₹00.00</li>
                                <li class="flex justify-between font-bold"><span>TOTAL:</span>₹1172.00</li>
                            </ul>
                        </div>

                        <div className="text-center go-to bg-slate-200">
                            <Link to='/'>GO TO HOMEPAGE</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

            <section className="order-confirm my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Your Trusted CAMRO</h3>
                            <div className="flex-row">
                                <div className="icon"><i className="fa-regular fa-circle-check"></i></div>
                                <div className="content">
                                    <strong>Thank You</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                        <div className="bordered-box">
                                <h4 className='h4'>Order Information</h4>
                                <div className="row table-inner">
                                    <div className="col-md-6">
                                        <div className="strong">Contact Information</div>
                                        <p>{userData.Name || "N/A"}</p>
                                        <p>{userData.Email || "N/A"}</p>
                                        <p>{userData.ContactNumber || "N/A"}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="strong">Billing address</div>
                                        <p>{orderData.address.street}</p>
                                        <p>{orderData.address.city}, {orderData.address.state}</p>
                                        <p>{orderData.address.pincode}</p>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="strong">Payment method</div>
                                        <p>{orderData.PyamentType}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="strong">Total Amount</div>
                                        <p>₹{orderData.TotalAmount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 ">
                            <div className="bordered-box cart-subtotal">
                                <div className="font-semibold h5 mb-2" style={{ color: 'var(--color-red)' }}>Cart Subtotal</div>
                                <ul>
                                    <li className="flex justify-between mb-1"><span>Sub-Total:</span>₹{orderData.TotalAmount}</li>
                                    <li className="flex justify-between mb-1"><span>Shipping Cost:</span>₹0.00</li>
                                    <li className="flex justify-between border-top pt-2 h6 font-bold"><span>TOTAL:</span>₹{orderData.TotalAmount}</li>
                                </ul>
                            </div>

                            <div className="text-center go-to bg-slate-200">
                                <Link to='/'>CONTINUE SHOPPING</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderConfirm