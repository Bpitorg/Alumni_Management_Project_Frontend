export const DEFAULT_SECTION = "A";
export const DEFAULT_ROLE = "STUDENT";
export const DEFAULT_FACULTY_ID = "1062434238989500417";
export const DEFAULT_SOCIETY_ID = 1;
export const CURRENT_YEAR = new Date().getFullYear();
export const FIRST_BATCH_YEAR = 2011;
export const MIN_YEAR = FIRST_BATCH_YEAR;
export const MAX_YEAR = CURRENT_YEAR + 4;
export const PASSWORD_MIN_LENGTH = 8;
export const PHONE_NUMBER_LENGTH = 10;

export const SECTIONS = ["A", "B", "C", "D"];

export const INPUT_FIELDS = [
  { id: "firstName", name: "firstName", placeholder: "First Name", type: "text" },
  { id: "lastName", name: "lastName", placeholder: "Last Name", type: "text" },
  { id: "email", name: "email", placeholder: "Email Address", type: "email" },
  { id: "mobile", name: "mobile", placeholder: "Phone Number", type: "tel" },
  { id: "branch", name: "branch", placeholder: "Branch", type: "text" },
  { id: "enrollmentNumber", name: "enrollmentNumber", placeholder: "Enrollment Number", type: "number" },
  { id: "password", name: "password", placeholder: "Password", type: "password" },
  { id: "confirmPassword", name: "confirmPassword", placeholder: "Confirm Password", type: "password" },
];