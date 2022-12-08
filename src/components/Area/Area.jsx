import './Area.css'

import SelectorWorker from '../selectorWorker/SelectorWorker';
import Box from '../Box/Box';

function Area({ locs }) {
    return (
        <div className='area1'>
            {
                locs.map((loc) => {
                    return (
                        <Box key={loc.id}>
                            <SelectorWorker />
                        </Box>
                    );
                })
            }
        </div>
    )
}

export default Area;