import React, { useEffect } from 'react'
import UserObj from '../../demojson'

interface Props {

}

const Services = (props: Props) => {

    useEffect(() => {


        return () => {
            console.log('hello')
        }
    }, [])

    const renderSkill = () => {
     return   UserObj.skillList.map((a, b) => {
            return (
                <div key={b} className="col-lg-4 col-md-4 col-sm-6 skills-bar-grids mb-4 pb-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                    <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>{a.skillName}</h4>
                    <div className="progress editContent" style={{ outline: "none", height: "13px", cursor: "inherit" }}>
                        <div className="progress-bar  editContent" role="progressbar" style={{ width: `${a.parangat}%`, outline: "none", cursor: "inherit" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{a.parangat+"%"}</div></div>
                </div>
            )
        })
    }

    return (
        <div id="page" className="page">
            <section className="w3l-features-4">
                <div className="features py-5 editContent" id="services">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head editContent">My Skills</h3>
                            <p className="my-3 head editContent" style={{ outline: "none", cursor: "inherit" }}> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                      turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div className="row mt-5 pt-3">
                            {renderSkill()}
                            {/* <div className="col-lg-4 col-md-4 col-sm-6 skills-bar-grids mb-4 pb-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>React</h4>
                                <div className="progress editContent" style={{ outline: "none;", height: "8px", cursor: "inherit;" }}>
                                    <div className="progress-bar progress-bar-striped bg-color editContent" role="progressbar" style={{ width: "10%", outline: "none", cursor: "inherit" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 skills-bar-grids mb-4 pb-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>Node</h4>
                                <div className="progress editContent" style={{ outline: "none;", height: "8px", cursor: "inherit;" }}>
                                    <div className="progress-bar progress-bar-striped bg-color editContent" role="progressbar" style={{ width: "50%", outline: "none", cursor: "inherit" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 skills-bar-grids mb-4 pb-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                <h4 className="editContent" style={{ outline: "none", cursor: "inherit" }}>Test case</h4>
                                <div className="progress editContent" style={{ outline: "none;", height: "8px", cursor: "inherit;" }}>
                                    <div className="progress-bar progress-bar-striped bg-color editContent" role="progressbar" style={{ width: "50%", outline: "none", cursor: "inherit" }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <!-- //features --> */}
            </section><section className="w3l-pricing-7" id="pricing">
                <div className="w3l-pricing-7_sur py-5 editContent" style={{ outline: "none", cursor: "inherit" }}>
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head editContent" style={{ outline: "none", cursor: "inherit" }}>See Our Packages</h3>
                            <p className="my-3 head editContent" style={{ outline: "none", cursor: "inherit" }}> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
            turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div className="row w3l-pricing-7-gd-top pt-3 mt-5">

                        </div>
                    </div>
                </div>
            </section>{/* <!-- grids block 5 --> */}
        </div>

    )
}
export default Services;