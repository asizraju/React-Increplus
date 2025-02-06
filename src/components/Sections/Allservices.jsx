import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Allservices() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Advantages of a company</h1>
            <h4 className="font20 extraBold">Benefits of Choosing Increplus Technologies as Your Managed Service provider</h4>

            <p className="font13">
            Increplus Technologies brings a comprehensive suite of Managed Services tailored to meet the unique needs of businesses across industries
              <br />
              {/* labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Proactive IT Management"
                text="With 24/7 monitoring and swift issue resolution,we prevent problem before they impact your business."
                tag="Minimized Downtime:"
                tags = "Real-Time Alerts:"
                texts="Receive instant notifications of potential threats or system bottlenecks."
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Cost Efficiency"
                text="Fixed monthly pricing ensures no unexpected expenses, helping on your budget effectively."
                tag="Predictable IT Costs:"
                tags = "Optimized Resources:"
                texts="Reduce wasted spending by aligning IT resources with business needs."
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <BlogBox
                title="Scalable Solutions"
                text="Easily scale IT services as your business expands, from small startups to large enterprises."
                tag="Flexible Growth:"
                 tags="Cloud Integration:"
                texts="Seamlessly transition to or expand cloud services to meet evolving business demands"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Enhanced Cybersecurity"
                text="Safeguard your systems with cutting-edge security solutions, including firewalls,endpoint protection."
                tag="Comprehensive Protection:"
                tags="Regulatory Compliance:"
                texts="Stay compliant with industry standards like GDPR, HIPAA,PCI-DSS,reducing legal and financial risks."
                // author="Luke Skywalker, 2 days ago"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Increased Productivity"
                text="Let us handle your IT needs, freeing your team to concentrate on strategic goals."
                tag="Focus on Core Business:"
                tags="Streamlined Operations:"
                texts="Automate routine tasks and enhance collaboration with optimized IT systems"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="End-to-End IT Solutions"
                text="From infrastructure setup to ongoing support, we cover all aspects of IT management."
                tag="One-Stop Shop:"
                 tags="Customized Services: "
                texts="Tailored solutions ensure our services align with your specific business objectives"
                // author="Luke Skywalker, 2 days ago"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          {/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;