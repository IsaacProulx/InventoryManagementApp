import { Auth } from 'aws-amplify';

export const LogoutButton = props => {
    const handleClick = () => {
        Auth.signOut()
    }
    return (
        <button
            className="button"
            onClick={handleClick}
            style={{
                margin:2.5
            }}
        >
        Logout
        </button>
    )
}