import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <div>Такой страницы не существует</div>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
