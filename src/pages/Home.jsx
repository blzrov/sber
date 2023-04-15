import ApplicantHome from "../components/ApplicantHome";
import EmployerHome from "../components/EmployerHome";
import UnauthorizedHome from "../components/UnauthorizedHome";
import { getUser, roles } from "../helpers/user";

export default function Home() {
  const user = getUser();
  return (
    <div>
      {user?.role == roles.applicant && <ApplicantHome />}
      {user?.role == roles.employer && <EmployerHome/>}
      {!user && <UnauthorizedHome />}
    </div>
  );
}
