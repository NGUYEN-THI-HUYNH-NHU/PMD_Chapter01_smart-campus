export interface ProfileFormValues {
  studentId: string;
  fullName: string;
  email: string;
  program: string;
  bio: string;
}

export type ProfileErrors = Partial<Record<keyof ProfileFormValues, string>>;

const validateProfile = (values: ProfileFormValues): ProfileErrors => {
  const errors: ProfileErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Fullname must not be empty";
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = "Fullname must contains at least 3 characters";
  }

  const studentIdRegex = /^\d{8}$/;
  if (!values.studentId.trim()) {
    errors.studentId = "Student ID must not be empty";
  } else if (!studentIdRegex.test(values.studentId.trim())) {
    errors.studentId =
      "The student ID number must follow the format xxxxxxxx (e.g., 23638921)";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!values.email.trim()) {
    errors.email = "Email must not be empty";
  } else if (!emailRegex.test(values.email.trim())) {
    errors.email = "Email format is invalid (e.g., sid.student@school.edu.vn)";
  }

  if (!values.program.trim()) {
    errors.program = "Major must not be empty";
  }

  if (values.bio.trim().length > 240) {
    errors.bio = "Self-description should not exceed 240 characters";
  }

  return errors;
};

export default validateProfile;
