export function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export const roles = {
  employer: "employer",
  applicant: "applicant",
  mentor: "mentor",
  customer: "customer",
};
