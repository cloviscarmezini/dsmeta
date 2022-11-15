import './styles.css';
import logoIcon from '../../assets/logo.svg';

export function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logoIcon} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  );
}