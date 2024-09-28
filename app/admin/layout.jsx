const AuthLayout = ({children}) => {
    return (
        <div className="text-black min-h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    )
}

export default AuthLayout;