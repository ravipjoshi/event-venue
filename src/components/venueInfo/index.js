import React from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueInfo = () => {
    return (
    <Zoom duration={500}>    
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red"></div>
                                <div className="vn_icon"
                                     style={{
                                          background:`url(${icon_calendar})`
                                     }}   
                                ></div> 
                                <div className="vn_title">
                                        Event Date & Time
                                </div>
                                <div className="vn_desc">
                                      6th July 2020 @ 07:00 PM
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                            <div className="vn_icon_square bck_yellow"></div>
                                <div className="vn_icon"
                                     style={{
                                          background:`url(${icon_location})`
                                     }}   
                                ></div> 
                                <div className="vn_title">
                                        Location
                                </div>
                                <div className="vn_desc">
                                        City Center, Hamilton, L8R 3Y3
                                </div>  
                            </div>
                        </div>
                    </div>

                </div>
            </div>            
        </div>
    </Zoom>                                 
    );
};

export default VenueInfo;