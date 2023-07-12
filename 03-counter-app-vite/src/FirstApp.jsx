import PropTypes from 'prop-types';

export const FirstApp = ({
    title, subTitle
}) => {

    return (
        <>
            {/* <code> {JSON.stringify(newMessage)}</code> */}
            <h1>{title} </h1>
            <h2>{subTitle}</h2>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}