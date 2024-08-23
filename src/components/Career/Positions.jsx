
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
                <button className="Apply_button">Apply Now</button>
            </div>
            <p className="post_desc pd">{data.postDesc} <span onClick={expandMainReqContainer} className='read_more'>{Clicked? 'Read Less' :'Read more'}</span></p>
            <div className="main_req_container">
                <p className="topic">Required Skills</p>
                <ul>
                    {data.requiredSkills.map((skill, idx) => (
                        <li className='skills_list' key={idx}>{skill} </li>
                    ))}
                </ul>
            </div>
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
        onsiteRemote: PropTypes.string.isRequired,
        yearsExp: PropTypes.string.isRequired,
        fullTime: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    expandedIndex: PropTypes.number,
    setExpandedIndex: PropTypes.func.isRequired,
};

export default Positions;
