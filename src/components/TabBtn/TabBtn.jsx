export default function TabBtn ({onClick, children}){

    return(
        <>
            <li>
                <button 
                    onClick={onClick}
                >
                    {children}
                </button>
            </li>
        </>
    )
}