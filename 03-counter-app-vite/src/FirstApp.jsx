import PropTypes from 'prop-types';

export const FirstApp = ({
    title, subTitle, name
}) => {

    return (
        <>
            {/* <code> {JSON.stringify(newMessage)}</code> */}
            <h1 data-testid="test-title">{title}</h1>
            <h2>{subTitle}</h2>
            <h2>{name}</h2>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    // title: "No hay titulo",
    subTitle: "1321",
    name: "No hay nombres"

}