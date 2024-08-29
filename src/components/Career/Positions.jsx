import PropTypes from 'prop-types';
import './Career.css'; 
import { useState } from 'react';

function Positions({ data, index, expandedIndex, setExpandedIndex }) {
    const [Clicked, setClicked] = useState(false);
    const isExpanded = index === expandedIndex;

    const expandMainReqContainer = () => {
        setExpandedIndex(isExpanded ? null : index); 
        setClicked(!Clicked)
    };

    return (
        <div className={`Positions_container ${isExpanded ? 'expanded' : ''}`} >
            <div className="post">
                <p className="post_name">{data.postName}  </p>
                <button className="Apply_button" onClick={()=>window.open("https://docs.google.com/forms/d/e/1FAIpQLSenYTZKEShcDepz2PJ9trgYGyftdyOJseNsvp6wrVwMpckS-Q/viewform","_blank")}>Apply Now</button>
            </div>
            <p className="post_desc pd">{data.postDesc} <span onClick={expandMainReqContainer} className='read_more'>{Clicked ? 'Read Less' : 'Read more'}</span></p>
            
            {isExpanded && (
                <div className="main_req_container">
                    <p className="topic">Required Skills</p>
                    <ul>
                        {data.requiredSkills.map((skill, idx) => (
                            <li className='skills_list' key={idx}>{skill}</li>
                        ))}
                    </ul>

                    {data.preferredSkills && data.preferredSkills.length > 0 && (
                        <>
                            <p className="topic">Preferred Skills</p>
                            <ul>
                                {data.preferredSkills.map((skill, idx) => (
                                    <li className='skills_list' key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </>
                    )}

                    {/* {data.workingConditions && (
                        <p className="topic">Working Conditions</p>
                    )}

                    <p className="working_conditions">{data.workingConditions}</p> */}
                </div>
            )}
            
            <div className="pre_reqs">
                <div className="reqs"><p>{data.onsiteRemote}</p></div>
                <div className="reqs"><p>{data.yearsExp}</p></div>
                <div className="reqs"><p>{data.fullTime}</p></div>
            </div>
        </div>
    );
}

Positions.propTypes = {
    data: PropTypes.shape({
        postName: PropTypes.string.isRequired,
        postDesc: PropTypes.string.isRequired,
        requiredSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
        preferredSkills: PropTypes.arrayOf(PropTypes.string),
        onsiteRemote: PropTypes.string.isRequired,
        yearsExp: PropTypes.string.isRequired,
        fullTime: PropTypes.string.isRequired,
        workingConditions: PropTypes.string
    }).isRequired,
    index: PropTypes.number.isRequired,
    expandedIndex: PropTypes.number,
    setExpandedIndex: PropTypes.func.isRequired,
};

export default Positions;
