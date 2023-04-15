import ApplicantHome from "../components/ApplicantHome";
import UnauthorizedHome from "../components/UnauthorizedHome";
import { getUser, roles } from "../helpers/user";

export default function Home() {
  const user = getUser();
  return (
    <div>
      {user?.role == roles.applicant && <ApplicantHome />}
      {!user && <UnauthorizedHome />}
    </div>
  );
}
