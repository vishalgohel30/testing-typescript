/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/g1.jpg';
import UserObj from '../../demojson'

interface Props {

}

const Home = (props: Props) => {


  const renderSkill = () => {
    return (UserObj.skill || []).map((a, b) => {
      return (
        <div key={b} className="col-lg-4 col-md-6 off-testi-2">
          <div className="card editContent">
            <div className="icon editContent" style={{ outline: "none", cursor: "inherit" }}>
              <span className={a.icon} aria-hidden="true" style={{ outline: "none", cursor: "inherit" }} />
            </div>
            <div className="icon-info editContent" style={{ outline: "none", cursor: "inherit" }}>
              <h5><a className="editContent" href="#" style={{ outline: "none", cursor: "inherit" }}>
                {a.skillName}</a></h5>
              <p className="editContent" style={{ outline: "none", cursor: "inherit" }}>{a.skillDec}</p>
            </div>
          </div>
        </div>)
    })
  }

  return (
    <div id="page" className="page">

      {/* <!-- Headers-4 block -->  */}{/* <!--  Main banner section -->  */}
      <section className="w3l-main-banner" id="home">
        <div className="companies20-content">
          <div className="companies-wrapper">
            <div className="item">
              <div className="slider-info banner-view text-center bg bg2">
                <div className="banner-info container">
                  {/* <img src={logo} height="200" width="200" alt="about image" className="img-fluid" /> */}
                  <img src={logo} height="200" width="200" alt="vishal gohel" className="img-fluid" />
                  <h3 className="banner-text mt-5 editContent">Hello, I’m Vishal Gohel
                  </h3>
                  <p className="my-4 mb-5 editContent" style={{ outline: "none", cursor: "inherit" }}>I'm Web Developer</p><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--  //Main banner section -->  */}

      <section className="w3l-testimonials" id="testimonials">
        <div className="customers-6-content py-5 editContent">
          <div className="container py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="head editContent" style={{ outline: "none", cursor: "inherit" }}>May Skill</h3>
              <p className="my-3 head editContent"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            {/* <!-- Carousel items -->  */}
            <div className="carousel-inner pb-5">

              <div className="carousel-item active">
                <div className="red mt-3 customer row py-5 mt-3">
                  {renderSkill()}
                </div>
              </div>
              {/* <!--.item-->  */}
            </div>
            <div className="heading text-center mx-auto">
              <Link className="red mt-3 editContent" style={{ outline: "none", cursor: "inherit" }} to={"/skills"}>Read More <span className="fa fa-angle-right pl-1" style={{ outline: "none", cursor: "inherit" }}></span></Link>
            </div>

          </div>
        </div>
        {/* <!--//customers -->  */}
      </section>
      <section className="services-12" id="experience">
        <div className="form-12-content bg bg2">
          <div className="container">
            <div className="column2">
              <h3 className="mb-5 editContent" style={{ outline: "none", cursor: "inherit" }}>Education</h3>
              
              {
                UserObj.education.map((a,b)=>
                <div key={b} className="experience-top">
                <h5 className="editContent" style={{ outline: "none", cursor: "inherit" }}>{a.clgYer}</h5>
              <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>{a.clgName}</h4>
              <p className="my-3 text-white editContent" style={{ outline: "none", cursor: "inherit" }}>{a.clgDec}</p>
              </div>)
              }
              {/* <div className="experience-top editContent" style={{ outline: "none", cursor: "inherit" }}>
                <h5 className="editContent" style={{ outline: "none", cursor: "inherit" }}>2007</h5>
                <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>Bachelor of Arts, Standford University</h4>
                <p className="my-3 text-white editContent" style={{ outline: "none", cursor: "inherit" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
              </div>
              <div className="experience-top editContent" style={{ outline: "none", cursor: "inherit" }}>
                <h5 className="editContent" style={{ outline: "none", cursor: "inherit" }}>2004</h5>
                <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>Specialize App Design, Harvard University</h4>
                <p className="my-3 text-white editContent" style={{ outline: "none", cursor: "inherit" }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
              </div> */}
            </div>
          </div>
        </div>
      </section><section className="w3l-testimonials" id="testimonials">
        <div className="customers-6-content py-5 editContent">
          <div className="container py-lg-3">
            <div className="heading text-center mx-auto">
              <h3 className="head editContent" style={{ outline: "none", cursor: "inherit" }}>Hobbies</h3>
              <p className="my-3 head editContent"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            {/* <!-- Carousel items -->  */}

            <div className="row mt-5 pt-3" style={{marginLeft: "150px"}}>
              {UserObj.hobbies.map((a, index) =>
                <div key={index} className="col-lg-4 col-md-4 col-sm-6 skills-bar-grids mb-4 pb-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                  <div>
                    <div className="icon editContent" >
                      {/* <span className={a.hobIcon} aria-hidden="true" style={{ outline: "none", cursor: "inherit" }} /> */}
                      <img src={a.hobIcon} height="100px" width="100px" alt="hob icon" className="img-fluid" />
                      {a.hobName}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* <div className="carousel-inner pb-5">

              <div className="carousel-item active">
                <div className="customer row py-5 mt-3">
                  <div className="col-lg-4 col-md-6">
                    <div className="card editContent" style={{ outline: "none", cursor: "inherit" }}>

                      <div className="card-body">
                        <img className="card-img-top img-responsive" src="bundles/images/c1.jpg" alt="" style={{ outline: "none", cursor: "inherit" }} />
                        <h3 className="card-title mt-2 editContent" style={{ outline: "none", cursor: "inherit" }}>Henry Nicholas</h3>
                        <p className="sub-title mb-3 editContent" style={{ outline: "none", cursor: "inherit" }}>Photographer</p>
                        <p className="card-text editContent" style={{ outline: "none", cursor: "inherit" }}>  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"
                    </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 off-testi-2">
                    <div className="card editContent">

                      <div className="card-body">
                        <img className="card-img-top img-responsive" src="bundles/images/c2.jpg" alt="" style={{ outline: "none", cursor: "inherit" }} />
                        <h3 className="card-title mt-2 editContent" style={{ outline: "none", cursor: "inherit" }}>Mark Waugh</h3>
                        <p className="sub-title mb-3 editContent" style={{ outline: "none", cursor: "inherit" }}>Web Designer</p>
                        <p className="card-text editContent">  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"
                    </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 offset-md-3 offset-lg-0 col-md-6 off-testi">
                    <div className="card editContent" style={{ outline: "none", cursor: "inherit" }}>

                      <div className="card-body">
                        <img className="card-img-top img-responsive" src="bundles/images/c3.jpg" alt="" style={{ outline: "none", cursor: "inherit" }} />
                        <h3 className="card-title mt-2 editContent" style={{ outline: "none", cursor: "inherit" }}>Sarina Willams</h3>
                        <p className="sub-title mb-3 editContent" style={{ outline: "none", cursor: "inherit" }}>Graphic Designer</p>
                        <p className="card-text editContent" style={{ outline: "none", cursor: "inherit" }}>  "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore"
                     </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}



          </div>
        </div>
        {/* <!--//customers -->  */}
      </section>{/* <!-- grids block 5 -->  */}
    </div>

  )
}
export default Home;