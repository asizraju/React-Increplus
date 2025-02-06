// import React from "react";
// import styled from "styled-components";
// // Assets
// import ContactImg1 from "../../assets/img/projects/istock-1412950890_0.jpg";
// import ContactImg2 from "../../assets/img/projects/ec18190c-fd81-4b02-9b4c-9036c1510c65.jpg";
// // import ContactImg3 from "../../assets/img/contact-3.png";

// export default function Contact() {
//   return (
//     <Wrapper id="contact">
//       <div className="lightBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Let's get in touch</h1>
//             {/* <p className="font13">
//               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
//               <br />
//               labore et dolore magna aliquyam erat, sed diam voluptua.
//             </p> */}
//           </HeaderInfo>
//           <div className="row" style={{ paddingBottom: "30px" }}>
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
//               <Form>
//                 <label className="font13">Name:</label>
//                 <input type="text" id="fname" name="fname" className="font20 extraBold" />
//                 <label className="font13">Email ID:</label>
//                 <input type="text" id="email" name="email" className="font20 extraBold" />
//                 <label className="font13">Contact No:</label>
//                 <input type="text" id="contact" name="contact" className="font20 extraBold" />
//                 <label className="font13">Subject:</label>
//                 <input type="text" id="subject" name="subject" className="font20 extraBold" />
//                 {/* <label className="font13">Message:</label> */}
//                 <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold" />
//               </Form>
//               <SumbitWrapper className="flex">
//                 <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
//               </SumbitWrapper>
//             </div>
//             {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
//               <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
//                 <ContactImgBox>
//                   <img src={ContactImg1} alt="office" className="radius6" />
//                 </ContactImgBox>
//                 <ContactImgBox>
//                   <img src={ContactImg2} alt="office" className="radius6" />
//                 </ContactImgBox>
//               </div>
//               <div style={{ width: "50%" }}>
//                 <div style={{ marginTop: "100px" }}>
//                   <img src={ContactImg3} alt="office" className="radius6" />
//                 </div>
//               </div>
//             </div> */}
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
//               <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
//                 <ContactImgBox>
//                   <img src={ContactImg1} width="180"
//                     height="204" alt="office" className="radius6" />
//                 </ContactImgBox>
//                 <ContactImgBox>
//                   <img src={ContactImg2}
//                   width="180"
//                   height="295" alt="office" className="radius6" />
//                 </ContactImgBox>
//               </div>
//               <div style={{ width: "50%" }}>
//                 {/* <div style={{ marginTop: "100px" }}>
//                   <img src={ContactImg3} alt="office" className="radius6" />
//                 </div> */}
//                 <Form>
//                   <div class="footer__logo wow fadeInUp">
//                     <img src="src/images/logo.png" alt="Increplus Logo" />
//                     <h1 class="fw-bold">Increplus Technologies</h1>
//                   </div>
//                   <div class="footer__info wow fadeInUp" data-wow-delay="0.2s">
//                     {/* <h3>Get In Touch</h3> */}
//                     {/* <!-- <a href="https://goo.gl/maps/GMGa5nPr4q5suyzU9"
//             >View on Google Maps</a
//           > --> */}
//                     {/* <address> */}
//                     <h5>Opening Hours : 
//                       9.00 AM To 8.00 PM</h5>
//                     <p>
//                       28,Kumaraguru Avenue,<br></br>
//                       3rd Street,<br></br>
//                       Thuraipakkam,<br></br>
//                       {/* <span class="d-block"></span> */}
//                       Chennai-600097,<br></br>
//                       {/* India */}
//                     </p>
//                     <p class="mobile">
//                       Contact No: +919578151685
//                       {/* <span class="d-block"></span>
//             Mobile: +91 7200510350 */}
//                     </p>
//                     <h5 className="font10 extraBold">
                      
//                         <StyleP className="blackColor font13">
//                         Email ID: <br></br>
//                         <a href="mailto:increplustechnologies@gmail.com" > 
//                         <span className="purpleColor font13">
//                 increplustechnologies@gmail.com</span></a>
//             </StyleP>
            
//                       {/* <span class="d-block"></span> */}
//                       {/* <a href="contact">
//               Contact No: +919578151685
//             </a> */}
//                     </h5>
//                     {/* </address> */}
//                   </div>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
// `;
// const HeaderInfo = styled.div`
//   padding: 70px 0 30px 0;
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;
// const Form = styled.form`
//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;


// const StyleP = styled.p`
//   @media (max-width: 550px) {
//     margin: 20px 0;
//   }
// `;

import React from "react";
import styled from "styled-components";
import LogoIcon from "../../assets/svg/Logo";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
// import "../Sections/"

// Assets
import ContactImg1 from "../../assets/img/projects/istock-1412950890_0.jpg";
import ContactImg2 from "../../assets/img/projects/ec18190c-fd81-4b02-9b4c-9036c1510c65.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mobileRegExp = /^[0-9]{10}$/;

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(emailRegExp, "Invalid email address")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(mobileRegExp, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});


const toastNotifySuccess = () => {
  toast.success('Send Successfully!', {
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

const sendEmail = (values, resetForm) => {
  const serviceID = "service_142a46n";
  const templateID = "template_hfpl405";
  const userID = "slqfq33oJv3vF7-Rq";

  emailjs
    .send(serviceID, templateID, values, userID)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      toastNotifySuccess();
      resetForm();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Email sending failed");
    });
};

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Formik
                initialValues={{
                  name: "",
                  mobile: "",
                  email: "",
                  subject: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  sendEmail(values, resetForm);
                }}
              >
                {({ isSubmitting }) => (
                 <FormikForm style={{ padding: '70px 0 30px 0' }}>
                 <label
                   className="font13"
                   htmlFor="name"
                   style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}
                 >
                   Name:
                 </label>
                 <Field
                   type="text"
                   id="name"
                   name="name"
                   className="font20 extraBold"
                   style={{
                     width: '100%',
                     backgroundColor: 'transparent',
                     border: '0px',
                     outline: 'none',
                     boxShadow: 'none',
                     borderBottom: '1px solid #707070',
                     height: '30px',
                     marginBottom: '15px',
                     fontSize: '1rem',
                     padding: '8px',
                     transition: 'border-color 0.3s ease',
                   }}
                 />
                 <ErrorMessage
                   name="name"
                   component="div"
                   className="error"
                   style={{
                     color: 'red',
                     fontSize: '0.875rem',
                     marginTop: '-15px',
                     marginBottom: '15px',
                     fontWeight: '500',
                   }}
                 />
                 <label
                   className="font13"
                   htmlFor="email"
                   style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}
                 >
                   Email-ID:
                 </label>
                 <Field
                   type="text"
                   id="email"
                   name="email"
                   className="font20 extraBold"
                   style={{
                     width: '100%',
                     backgroundColor: 'transparent',
                     border: '0px',
                     outline: 'none',
                     boxShadow: 'none',
                     borderBottom: '1px solid #707070',
                     height: '30px',
                     marginBottom: '15px',
                     fontSize: '1rem',
                     padding: '8px',
                     transition: 'border-color 0.3s ease',
                   }}
                 />
                 <ErrorMessage
                   name="email"
                   component="div"
                   className="error"
                   style={{
                     color: 'red',
                     fontSize: '0.875rem',
                     marginTop: '-15px',
                     marginBottom: '15px',
                     fontWeight: '500',
                   }}
                 />
               
                 <label
                   className="font13"
                   htmlFor="mobile"
                   style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}
                 >
                   Contact-No:
                 </label>
                 <Field
                   type="text"
                   id="mobile"
                   name="mobile"
                   className="font20 extraBold"
                   style={{
                     width: '100%',
                     backgroundColor: 'transparent',
                     border: '0px',
                     outline: 'none',
                     boxShadow: 'none',
                     borderBottom: '1px solid #707070',
                     height: '30px',
                     marginBottom: '15px',
                     fontSize: '1rem',
                     padding: '8px',
                     transition: 'border-color 0.3s ease',
                   }}
                 />
                 <ErrorMessage
                   name="mobile"
                   component="div"
                   className="error"
                   style={{
                     color: 'red',
                     fontSize: '0.875rem',
                     marginTop: '-15px',
                     marginBottom: '15px',
                     fontWeight: '500',
                   }}
                 />
               
                 <label
                   className="font13"
                   htmlFor="subject"
                   style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}
                 >
                   Subject:
                 </label>
                 <Field
                   type="text"
                   id="subject"
                   name="subject"
                   className="font20 extraBold"
                   style={{
                     width: '100%',
                     backgroundColor: 'transparent',
                     border: '0px',
                     outline: 'none',
                     boxShadow: 'none',
                     borderBottom: '1px solid #707070',
                     height: '30px',
                     marginBottom: '15px',
                     fontSize: '1rem',
                     padding: '8px',
                     transition: 'border-color 0.3s ease',
                   }}
                 />
                 <ErrorMessage
                   name="subject"
                   component="div"
                   className="error"
                   style={{
                     color: 'red',
                     fontSize: '0.875rem',
                     marginTop: '-15px',
                     marginBottom: '15px',
                     fontWeight: '500',
                   }}
                 />
               
                 <label
                   className="font13"
                   htmlFor="message"
                   style={{ fontSize: '1rem', marginBottom: '5px', display: 'block' }}
                 >
                   Message:
                 </label>
                 <Field
                   as="textarea"
                   rows="4"
                   cols="50"
                   id="message"
                   name="message"
                   className="font20 extraBold"
                   style={{
                     width: '100%',
                     backgroundColor: 'transparent',
                     border: '0px',
                     outline: 'none',
                     boxShadow: 'none',
                     borderBottom: '1px solid #707070',
                     minHeight: '100px',
                     resize: 'vertical',
                     fontSize: '1rem',
                     padding: '8px',
                     transition: 'border-color 0.3s ease',
                   }}
                 />
                 <ErrorMessage
                   name="message"
                   component="div"
                   className="error"
                   style={{
                     color: 'red',
                     fontSize: '0.875rem',
                     marginTop: '-15px',
                     marginBottom: '15px',
                     fontWeight: '500',
                   }}
                 />
               
                 <div
                   className="submitWrapper flex"
                   style={{
                     display: 'flex',
                     justifyContent: 'center',
                     marginTop: '20px',
                   }}
                 >
                   <button
                     type="submit"
                     className="buttonInput pointer animate radius8"
                     disabled={isSubmitting}
                     style={{
                       backgroundColor: '#7620ff',
                       color: '#fff',
                       border: 'none',
                       padding: '10px 20px',
                       borderRadius: '8px',
                       cursor: 'pointer',
                       transition: 'background-color 0.3s ease',
                     }}
                     onMouseOver={(e) => (e.target.style.backgroundColor = '#7620ff')}
                     onMouseOut={(e) => (e.target.style.backgroundColor = '#4a90e2')}
                     onDisabled={(e) => (e.target.style.backgroundColor = '#a5c4e8')}
                   >
                     Send Message
                   </button>
                 </div>
                 <ToastContainer />
               </FormikForm>
               
                
                )}
              </Formik>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img
                    src={ContactImg1}
                    width="180"
                    height="204"
                    alt="office"
                    className="radius6"
                  />
                </ContactImgBox>
                <ContactImgBox>
                  <img
                    src={ContactImg2}
                    width="180"
                    height="295"
                    alt="office"
                    className="radius6"
                  />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div className="footer__logo wow fadeInUp">
                <LogoIcon />
                  <h1 className="fw-bold">Increplus Technologies</h1>
                </div>
                <div className="footer__info wow fadeInUp" data-wow-delay="0.2s">
                  <h5>Opening Hours: 9.00 AM To 8.00 PM</h5>
                  <p>
                    28, Kumaraguru Avenue,
                    <br />
                    3rd Street,
                    <br />
                    Thuraipakkam,
                    <br />
                    Chennai-600097,
                    <br />
                  </p>
                  <p className="mobile">
                    Contact No: +919578151685
                  </p>
                  <h5 className="font10 extraBold">
                    <StyleP className="blueColor font13">
                      <a href="mailto:support@increplus.com">
                      EmailID:support@increplus.com
                      </a>
                    </StyleP>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

// const FormikForm = styled.form`
//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;

const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;

const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const StyleP = styled.p`
  font-size: 13px;  /* Default font size */
  color: blue;     /* Text color */
  margin: 10px 0;   /* Default margin for all screen sizes */
  
  /* Mobile screens (max-width: 550px) */
  @media (max-width: 550px) {
    font-size: 10px;  /* Adjust font size for small screens */
    margin: 15px 0;   /* Adjust margin for small screens */
  }

  /* Tablets and small laptops (min-width: 551px and max-width: 768px) */
  @media (min-width: 551px) and (max-width: 768px) {
    font-size: 14px;  /* Slightly bigger font for tablets */
    margin: 20px 0;   /* More margin for tablets */
  }

  /* Laptops and larger screens (min-width: 769px) */
  @media (min-width: 769px) {
    font-size: 16px;  /* Standard font size for laptops and bigger */
    margin: 25px 0;   /* Larger margin for bigger screens */
  }
`;




// import React from "react";
// import styled from "styled-components";
// import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik'; // Import Form as FormikForm to avoid naming conflict
// import * as Yup from 'yup';
// // Assets
// import ContactImg1 from "../../assets/img/projects/istock-1412950890_0.jpg";
// import ContactImg2 from "../../assets/img/projects/ec18190c-fd81-4b02-9b4c-9036c1510c65.jpg";
// // import ContactImg3 from "../../assets/img/contact-3.png";
// import emailjs from 'emailjs-com';

// let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let mobileRegExp = /^[0-9]{10}$/;

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('Name is required'),
//   email: Yup.string()
//     .matches(emailRegExp, 'Invalid email address')
//     .required('Email is required'),
//   mobile: Yup.string()
//     .matches(mobileRegExp, 'Mobile number must be exactly 10 digits')
//     .required('Mobile number is required'),
//   subject: Yup.string()
//     .required('Subject is required'),
//   message: Yup.string()
//     .required('Message is required'),
// });

// const sendEmail = (values, resetForm) => {
//   const serviceID = 'service_142a46n';
//   const templateID = 'template_hfpl405';
//   const userID = 'slqfq33oJv3vF7-Rq';

//   emailjs.send(serviceID, templateID, values, userID)
//     .then((response) => {
//       console.log('SUCCESS!', response.status, response.text);
//       resetForm();
//     })
//     .catch((error) => {
//       console.error('FAILED...', error);
//       alert('Email sending failed');
//     });
// };

// export default function Contact() {
//   return (
//     <Wrapper id="contact">
//       <div className="lightBg">
//         <div className="container">
//           <HeaderInfo>
//             <h1 className="font40 extraBold">Let's get in touch</h1>
//           </HeaderInfo>
//           <div className="row" style={{ paddingBottom: "30px" }}>
//             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
//               <Formik
//                 initialValues={{ name: '', mobile: '', email: '', subject: '', message: '' }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, { resetForm }) => {
//                   sendEmail(values, resetForm);
//                 }}
//               >
//                 {({ isSubmitting }) => (
//                   <FormikForm>
//                     <label className="font13" htmlFor="name">Name:</label>
//                     <Field type="text" id="name" name="name" className="font20 extraBold" />
//                     <ErrorMessage name="name" component="div" className="error" />

//                     <label className="font13" htmlFor="email">Email-ID:</label>
//                     <Field type="text" id="email" name="email" className="font20 extraBold" />
//                     <ErrorMessage name="email" component="div" className="error" />

//                     <label className="font13" htmlFor="mobile">Contact-No:</label>
//                     <Field type="text" id="mobile" name="mobile" className="font20 extraBold" />
//                     <ErrorMessage name="mobile" component="div" className="error" />

//                     <label className="font13" htmlFor="subject">Subject:</label>
//                     <Field type="text" id="subject" name="subject" className="font20 extraBold" />
//                     <ErrorMessage name="subject" component="div" className="error" />

//                     <label className="font13" htmlFor="message">Message:</label>
//                     <Field as="textarea" rows="4" cols="50" id="message" name="message" className="font20 extraBold" />
//                     <ErrorMessage name="message" component="div" className="error" />

//                     <SumbitWrapper className="flex">
//                       <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" disabled={isSubmitting} style={{ maxWidth: "600px" }} />
//                     </SumbitWrapper>
//                   </FormikForm>
//                 )}
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.section`
//   width: 100%;
// `;

// const HeaderInfo = styled.div`
//   padding: 70px 0 30px 0;
//   @media (max-width: 860px) {
//     text-align: center;
//   }
// `;

// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;

// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;

// const StyleP = styled.p`
//   @media (max-width: 550px) {
//     margin: 20px 0;
//   }
// `;













