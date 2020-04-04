import React from 'react';
import classes from './FurKid.module.css';

import Roof from '../../../assets/images/Roof.png';
import Cute from '../../../assets/images/Cute.png';
import Wolf from '../../../assets/images/Wolf.png';
import Sheep from '../../../assets/images/Sheep.png';
import FlatFace from '../../../assets/images/FlatFace.png';


const furKid = (props) => {
    let kid = null;

    switch (props.type) {
        case ('roof') :
            kid = <div><img src={Roof} alt='roof' className={classes.Roof}/></div>;
            break;
        case('cute') :
            kid = <img src={Cute} alt='cute' className={classes.Cute} />;
            break;
        case('wolfPupps') :
            kid = <img src={Wolf} alt='wolf' className={classes.Wolf} />;
            break;
        case('sheepPupps') :
            kid = <img src={Sheep} alt='sheep' className={classes.Sheep} />;
            break;
        case('flatFacePupps') :
            kid = <img src={FlatFace} alt='flatFace' className={classes.FlatFace} />;
            break;
        default: 
            kid = null;
    }

    return kid;
};

export default furKid;