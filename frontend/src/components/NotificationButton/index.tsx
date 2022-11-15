import './styles.css';
import notificationIcon from '../../assets/notification-icon.svg';

export function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={notificationIcon} alt="" />
        </div>
    );
}