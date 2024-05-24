import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TermCondition = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <>

            <section class="bread">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <h2>Terms & Condition</h2>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Terms & Condition</li>
                        </ol>
                    </nav>
                </div>
            </section>


            <div class="container py-4">
                <h1 class="display-4 mb-4">Terms & Conditions</h1>
                <p class="mb-4">
                    Welcome to CAMRO - Stainless Steel World. These terms and conditions outline the rules and regulations for the use of our website.
                </p>
                <p class="mb-4">
                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use CAMRO's website if you do not accept all of the terms and conditions stated on this page.
                </p>
                <h2 class="h4 mb-2">1. Website Use</h2>
                <p class="mb-4">
                    The use of this website is subject to the following terms of use:
                </p>
                <ul class="list-unstyled pl-3 mb-4">
                    <li class="mb-2">• Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                    <li class="mb-2">• It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
                    <li class="mb-2">• This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                </ul>
                <h2 class="h4 mb-2">2. Intellectual Property</h2>
                <p class="mb-4">
                    All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.
                </p>
                <h2 class="h4 mb-2">3. Changes to Terms & Conditions</h2>
                <p class="mb-4">
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>

            </div>

        </>
    )
}

export default TermCondition