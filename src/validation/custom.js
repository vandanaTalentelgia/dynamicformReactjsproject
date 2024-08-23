import { useEffect, useRef } from "react";
import { validateInputs } from "./Validation";

export const convertToString = (input) => {
  if (input) {
    if (typeof input === "string") {
      return input;
    }
    return String(input);
  }
  return "";
};

// camelcase to
export const toWords = (input) => {
  input = convertToString(input);
  if (input === "rfpName") {
    return "RFP Name"
  }
  else {
    var regex =
      /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    return input.match(regex).join(" ").toLowerCase();
  }
};

// validation function
export const fieldValidator = (
  field,
  value,
  type,
  maxLength = null,
  minLength = null,
  password = null,
  currentPassword = null,
  fieldType = null
) => {
  let getError = false,
    fieldNameErr = field + "Err",
    errorMsg = "",
    fieldCls = field + "Cls";
  let newField = toWords(field);
  if (validateInputs(type, value) === "empty") {
    if (fieldType === "select") {
      errorMsg = `Select ${newField}.`;
    } else if (field === "operatorEmail") {
      errorMsg = ""
    }
    else {
      errorMsg = `Enter ${newField}.`;
    }
    getError = true;
  } else if (validateInputs(type, value) === false) {
    if (
      field === "newPassword" ||
      field === "password" ||
      field === "currentPassword" ||
      field === "confirmPassword"
    ) {
      if (maxLength !== null && value.trim().length > maxLength) {
        errorMsg = `Maximum ${maxLength} ${type === "string" ||
          type === "required" ||
          type === "Alphanumeric" ||
          type === "password"
          ? "characters"
          : "digits"
          } are allowed.`;
        getError = true;
      }
      if (minLength !== null && value.trim().length < minLength) {
        errorMsg = `Minimum ${minLength} ${type === "string" ||
          type === "required" ||
          type === "Alphanumeric" ||
          type === "password"
          ? "characters"
          : "digits"
          } are required.`;
        getError = true;
      }
      if (
        value.trim().length >= minLength &&
        value.trim().length <= maxLength
      ) {
        if (/[a-z]/.test(value.trim()) === false) {
          errorMsg = `A lowercase ${type === "string" ||
            type === "required" ||
            type === "Alphanumeric" ||
            type === "password"
            ? "letter"
            : "digit"
            } is required.`;
          getError = true;
        } else if (/[A-Z]/.test(value.trim()) === false) {
          errorMsg = `A uppercase ${type === "string" ||
            type === "required" ||
            type === "Alphanumeric" ||
            type === "password"
            ? "letter"
            : "digit"
            } is required.`;
          getError = true;
        } else if (/[0-9]/.test(value.trim()) === false) {
          errorMsg = `A  ${type === "string" || type === "required" || type === "Alphanumeric"
            ? "characters"
            : "digit"
            } is required.`;
          getError = true;
        } else if (
          /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(
            value.trim()
          ) === false
        ) {
          errorMsg = `A special character is required.`;
          getError = true;
        } else if (/^\S*$/.test(value) === false) {
          errorMsg = `Password must not contain whitespaces.`;
          getError = true;
        }
      }
      // errorMsg = `A special character, an upper case, a lower case, a number ${type === 'string' || type === 'required' || type === 'Alphanumeric' ? 'characters' : 'digits'} are required.`;
      // getError = true;
    }

    else {
      if (type === "email" && newField === "search") {
        errorMsg = `Enter valid ${type} to search.`;
      }
      if (type === "symbolWithOneAlphabatics") {
        errorMsg = "Enter symbol with alphabets only."
      }
      if (type === "symbolWithOneAlphanumeric") {
        errorMsg = "Input can start with a special character (excluding %) followed by an alphanumeric character"
      }if (type === "symbolWithOneAlphanumericName") {
        errorMsg = "Enter alphabet or numeric character along with Only the special characters (space), _ (underscore), and - (hyphen)."
      }
      else {
        errorMsg = `Enter valid ${newField}.`;
      }
    }
    getError = true;
  } else if (validateInputs("consecsutivespace", value) === true) {
    if (field === "alertName") {
      errorMsg = `Not more than two space allowed between character.`;
      getError = true;
    }

  } else if (field === "newPassword" && value === currentPassword) {
    errorMsg = "New password should not be same as current password.";
    getError = true;
  } else if (field === "confirmPassword" && value !== password) {
    errorMsg = "Password and confirm password does not match.";
    getError = true;
  } else if (maxLength !== null && value.trim().length > maxLength) {
    errorMsg = `Enter less than ${maxLength} ${type === "string" ||
      type === "required" ||
      type === "Alphanumeric" ||
      type === "symbolWithOneAlphanumeric" || type === "symbolWithOneAlphabatics" || type === "symbolWithOneAlphanumericName" || type === "text"
      ? "characters"
      : "digits"
      }.`;
    getError = true;
  } else if (minLength !== null && value.trim().length < minLength) {
    errorMsg = `Enter atleast ${minLength} ${type === "string" || type === "required" || type === "Alphanumeric" || type === "symbolWithOneAlphanumeric" || type === "symbolWithOneAlphabatics" || type === "symbolWithOneAlphanumericName"
      ? "characters"
      : "digits"
      }.`;
    getError = true;
  }
  return {
    getError,
    fieldNameErr,
    errorMsg,
    fieldCls,
    setClassName: getError 
    ? "error" : "",
  };
};

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
