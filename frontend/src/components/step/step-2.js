import React from "react";

class StepTwo extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content col-12">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 2</span>
                                <div className="step-progress float-right">
                                    <span>2 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Ordering</h2>
                                <div className="form-inner-area">
                                    <input type="text" name="custom_order" class="form-control valid" aria-invalid="false" />
                                    <input type="date" name="order_date"/>
                                    <input type="time" id="hour" name="hour" min="09:00" max="24:00" />
                                    <div className="comment-box">
                                        <div>
                                            <p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <input type="number" id="give_away" name="give_away" min="0" max="100"
                                                    placeholder="Give Away (S)" />
                                            </div>
                                            <div className="col-4">
                                                <input type="number" id="vip" name="vip" min="0" max="100"
                                                    placeholder="V.I.P. (M)" />
                                            </div>
                                            <div className="col-4">
                                                <input type="number" id="show_baskets" name="show_baskets" min="0" max="100"
                                                    placeholder="Show Basket (L)" />                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="comment-box">
                                        <p><i class="far fa-comment-alt"></i> Notes</p>
                                        <textarea name="full_comments" placeholder="Write here"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- /.inner -->*/}
                    <div className="actions">
                        <ul>
                            <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                            <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right"></i></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepTwo;