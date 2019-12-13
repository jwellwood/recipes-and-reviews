import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidationService {
  constructor() {}

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: "Required",
      invalidEmailAddress: "Invalid email address",
      invalidPassword:
        "Invalid password. Password must be at least 6 characters long, and contain a number.",
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      max: `Max ${validatorValue.max}`,
      min: `Min ${validatorValue.min}`,

    };

    return config[validatorName];
  }
}
