# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mobileRegExp = /^[0-9]{10}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Invalid email address')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(mobileRegExp, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  subject: Yup.string()
    .required('Subject is required'),
  message: Yup.string()
    .required('Message is required'),
});

const Contact = () => {

  const toastNotifySuccess = () => {
    toast.success('Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
  }

  // let notify = () => toast("Wow so easy!");

  const sendEmail = (values, resetForm) => {
    const serviceID = 'service_0dsmeju';
    const templateID = 'template_xuifv3k';
    const userID = 'ZWMzMOxc_SR0sJ5wt';

    emailjs.send(serviceID, templateID, values, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toastNotifySuccess();
        // alert('Email sent successfully');
        resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Email sending failed');
      });
  };

  return (
    <>
      {/===== contact us banner start =====/}
      <section className="contact-image">
        <div className="contact-overlay"></div>
        <div className="contact-image-content">
          <h1 className="contact-image-details-1" data-aos="fade-down" data-aos-duration="1000">Contact</h1>
          <h2 className="contact-image-details-2" data-aos="fade-down" data-aos-duration="1000">Contact Us for Expert Solutions</h2>
          <p className="contact-image-details-3" data-aos="fade-down" data-aos-duration="1000">Reach out to us for tailored solutions and expert support.<br /> We're here to help with any inquiries or project needs you may have.</p>
        </div>
      </section>
      {/===== contact us  banner end =====/}

      {/===== contact form content start =====/}
      <section class="contact-part-2">

        <div class="contact-col-left">
          <h3 ><i class="ri-subtract-fill"></i>GET IN TOUCH</h3>
          <h1 >Drop a Message</h1>

          <Formik
            initialValues={{ name: '', mobile: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // alert(JSON.stringify(values, null, 2));
              sendEmail(values, resetForm);
            }}
          >
            {({ isSubmitting }) => (

              <Form class="contactForm" /data-aos="fade-right"/ data-aos-duration="1000">

                <div class="contact-name-number">
                  <div class="contact-form-group1 name">
                    <Field type="text" name="name" placeholder="Your Name" /><br />
                    <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                  </div>

                  <div class="contact-form-group2 mobile">
                    <Field type="text" name="mobile" placeholder="Mobile Number" /><br />
                    <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />
                  </div>
                </div>

                <div class="contact-form-group email">
                  <Field type="text" name="email" placeholder="Your Email" /><br />
                  <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                </div>

                <div class="contact-form-group subject">
                  <Field type="text" name="subject" placeholder="Your Subject" /><br />
                  <ErrorMessage name="subject" component="div" style={{ color: "red" }} />
                </div>

                <div class="contact-form-group message">
                  <Field as="textarea" name="message" placeholder="Message" /><br />
                  <ErrorMessage name="message" component="div" style={{ color: "red" }} />
                </div>

                <div class="contact-form-group-end submit-btn">
                  <button type="submit" disabled={isSubmitting}>SUBMIT NOW
                    <FaArrowRight className="submit-icons" /></button>
                </div>
                <ToastContainer />

              </Form>
            )}
          </Formik>
          {/* <iframe width="600"
            height="315" allowfullscreen=""
            src="https://hinzah.com/test1/contact.aspx"
            title="contactForm" ></iframe> */}
        </div>

        <div class="contact-col-right" data-aos="fade-left">
          <h2 >Our Address</h2>
          <p>Completely synergize resource taxing relationships<br /> via
            premier niche markets. Professionally cultivate<br />
            one-to-one
            customer service.</p>

          <div class="contact-col-right-1">
            <FaWhatsapp className='contact-icons' />
            <div class="contact-phone-content">
              <h3>Phone :</h3>
              <Link to="https://wa.me/917200510350" style={{ textDecoration: "none", color: "#000000" }}>
                <p>+91 72005 10350</p>
              </Link>
            </div>
          </div>

          <div class="contact-col-right-1">
            <FaPhoneAlt className='contact-icons' />
            <div class="contact-phone-content">
              <h3>Phone :</h3>
              <p>+91 9629527914</p>
            </div>
          </div>

          <div class="contact-col-right-1">
            <FaMapMarkerAlt className='contact-icons' />
            <div class="contact-map-content">
              <h3>Address :</h3>
              <p>No.10, EMG Nagar, 3rd Street, K.Puthur,<br /> Madurai-625 007.</p>
            </div>
          </div>

          <div class="contact-col-right-1">
            <IoIosMail className='contact-icons' />
            <div class="email-content">
              <h3>Email :</h3>
              <Link to="mailto:gmail.com" style={{ textDecoration: 'none', color: "#000000" }}>
                <p>info@hinzah.com</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
      {/===== contact form content end =====/}


      {/===== contact google map content start =====/}
      <section class="contact-map">
        <div class="contact-map-part" data-aos-duration="1000">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.868046095573!2d78.15924031490154!3d9.944935342742452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c074935155%3A0x227ab047bcd2af97!2sHinzah%20Solutions!5e0!3m2!1sen!2sin!4v1722842934607!5m2!1sen!2sin"
            className='map-details' allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      {/===== contact google map content end =====/}

      {/===== contact project position start =====/}
      <section className="contact-project">
        <div className="contact-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="contact-project-text-1">Would you like to start a project with us?</h1>
          <p className="contact-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>
          <Link to="https://wa.me/917200510350">
            <button className="contact-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/===== contact project position end =====/}
    </>
#   R e a c t - I n c r e p l u s  
 