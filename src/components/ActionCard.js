import '@/css/actionCard.css';

export function ActionCard({ icon: Icon, title, href }) {
  return (
    <a href={href} className="actionCard">
      <div className="actionCardContent">
        <Icon className="actionCardIcon" />
        <span className="actionCardTitle">{title}</span>
      </div>
    </a>
  );
}
