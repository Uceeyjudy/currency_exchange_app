import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


function TooltipIcon({ svg, title }) {
    return (
        <Tooltip title={title}>
            <IconButton>
                {svg}
            </IconButton>
        </Tooltip>
    )
}

TooltipIcon.propTypes = {
    title: PropTypes.string.isRequired,
    svg: PropTypes.element.isRequired,
};

export default TooltipIcon