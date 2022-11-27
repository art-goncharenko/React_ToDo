import {ReactElement} from "react";

export const Card = ({children}: {children: ReactElement}) => {
    return (
        <div className="bg-white p-5 rounded-2xl w-64 my-4">
            {children}
        </div>
    )
}