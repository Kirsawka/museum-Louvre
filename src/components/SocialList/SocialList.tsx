import { SocialListProps } from "../../types";
import "./SocialList.css";

function SocialList({ socials }: SocialListProps) {
  return (
    <ul className='social-list'>
      {socials.map((social) => {
        return (
          <li key={social.id}>
            <a href={social.link} className='social-list__link'>
              <img src={social.icon} alt={`icon: ${social.title}`} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialList;
