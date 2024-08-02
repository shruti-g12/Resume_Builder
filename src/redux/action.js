export const templete = (template) => ({
    type: 'TEMPLATE',
    payload: template
  });
  
  export const personalinfoData = (personalInfo) => ({
    type: 'PERSONAL_INFO_DATA',
    payload: personalInfo
  });


export const experienceData = (experienceInfo) => ({
  type: 'EXPERIENCE_DATA',
  payload: experienceInfo
});

export const educationData = (educationInfo) =>({
  type:'EDUCATION_DATA',
  payload:educationInfo
})

export const skillData = (skillInfo) =>({
  type:'SKILL_DATA',
  payload:skillInfo
})