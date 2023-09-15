import { ReactComponent as CheckSVG } from './assets/check.svg'
import { ReactComponent as DeleteSVG } from './assets/delete.svg'


const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

export const TodoIcon = ({ type, color, onClick }) => {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}