const Button = ({ type, children, className }) => {

    return (

        <>
            <button type={type} className={className}>{children}</button>
        </>
    )
}
export default Button