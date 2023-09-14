import { ReactComponent as CheckSVG } from './assets/check.svg'
import { ReactComponent as DeleteSVG } from './assets/delete.svg'


const iconTypes = {
    "check":<CheckSVG />,
    "delete":<DeleteSVG/>,
};

export const TodoIcon = ({ type }) => {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}>
            
            {iconTypes[type]}
            
        </span>
    )
}