import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        document.title = "blog"
    })
    return (
        <div className='blog  lg:grid lg:grid-cols-3 gap-6 p-10'>
            <div className="card card-compact w-80 bg-base-100 shadow-xl mb-6">
                <figure><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--3xXHbMyd--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/gedn65jh83oew6hb1391.png" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>Local (UI) state – Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src='https://miro.medium.com/max/1042/1*ULmG2uiAlgQksjj-brp2fw.jpeg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src='https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p>
                        If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready. </p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;