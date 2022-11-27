import {IUser} from "../../types";

const avatarColors = ['bg-green-300', 'bg-yellow-300', 'bg-red-300', 'bg-blue-300'];

export const Avatar = ({id, firstName, lastName, avatar}: IUser) => {
    const initials = firstName[0] + lastName[0];
    const randomColor = avatarColors[initials.charCodeAt(1) % avatarColors.length];
    const style = `flex justify-center items-center rounded-full w-6 h-6 -ml-2 text-xs border border-white ${randomColor}`;
    return (
        <div className={style}>
            {avatar !== "" ? <img src={avatar} alt="avatar" className="rounded-full w-6 h-6"/> : initials.toUpperCase()}
        </div>
    )
}

