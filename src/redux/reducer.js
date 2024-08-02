const INITIAL_STATE = {
  template: "",
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    objective: "",
  },
  workexperience: {},
  educationInfo: {
    graduation: "",
    university: "",
    degree: "",
    startYear: "",
    endYear: "",
  },
  education: {},
  skills: {}, // Add skills state
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TEMPLATE": {
      return {
        ...state,
        template: action.payload,
      };
    }
    case "PERSONAL_INFO_DATA": {
      return {
        ...state,
        personalInfo: action.payload,
      };
    }
    case "EXPERIENCE_DATA": {
      const experiences = action.payload;
      const workexperience = experiences.reduce((acc, exp) => {
        acc[exp.id] = exp;
        return acc;
      }, {});
      return {
        ...state,
        workexperience,
      };
    }
    case "EDUCATION_DATA": {
      return {
        ...state,
        educationInfo: action.payload,
      };
    }
    case "SKILL_DATA": {
      // Handle SKILL_DATA action
      return {
        ...state,
        skills: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
