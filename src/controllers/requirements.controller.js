const moment = require("moment");
const nodemailer = require("nodemailer");
const EMAIL_SERVICE = "gmail";
const EMAIL_USER = "wevibeinc@gmail.com";
const EMAIL_PASSWORD = "hpaqgfqxhpayakhs";

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE, // 메일 보내는 곳
  prot: 465,
  host: "smtp.gmail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: EMAIL_USER, // 보내는 메일의 주소
    pass: EMAIL_PASSWORD, // 보내는 메일의 비밀번호
  },
});

exports.requirementsCompleted = async (req, res) => {
  try {
    const {
      email,
      category,
      subCategory,
      projectProgress,
      planningStatus,
      desc,
      budget,
      budgetTuning,
      startDate,
      progressPeriod,
      progressPeriodTuning,
      preMeeting,
      meeting,
      meetingCycle,
      city,
      district,
      deadlineDate,
      supportProject,
      applicantRequirements,
      question,
      manpower,
      managingExperience,
      futurePlans,
      projectPriorities,
    } = req.body.requirements;

    await transporter.sendMail({
      from: EMAIL_USER, // sender address
      to: email, // list of receivers
      subject: "WeVibe 요구사항 명세서", // Subject line
      html: `
      <p>
        email : ${email}
      </p>
      <p>
        #category
      </p>
      <p>
        develop: ${category.develop}
      </p>
      <p>
        design: ${category.design}
      </p>
      <p>
        planning: ${category.planning}
      </p>
      <p>
        #subCategory
      </p>
      <p>
        web: ${subCategory.web}
      </p>
      <p>
        application: ${subCategory.application}
      </p>
      <p>
        commerce: ${subCategory.commerce}
      </p>
      <p>
        software: ${subCategory.software}
      </p>
      <p>
        publishing: ${subCategory.publishing}
      </p>
      <p>
        wordpress: ${subCategory.wordpress}
      </p>
      <p>
        embedded: ${subCategory.embedded}
      </p>
      <p>
        game: ${subCategory.game}
      </p>
      <p>
        etc: ${subCategory.etc}
      </p>
      <p>
        projectProgress : ${projectProgress}
      </p>
      <p>
        planningStatus : ${planningStatus}
      </p>
      <p>
        desc : ${desc}
      </p>
      <p>
        budget : ${budget}
      </p>
      <p>
        budgetTuning : ${budgetTuning}
      </p>
      <p>
        startDate : ${startDate}
      </p>
      <p>
        progressPeriod : ${progressPeriod}
      </p>
      <p>
        progressPeriodTuning : ${progressPeriodTuning}
      </p>
      <p>
        preMeeting : ${preMeeting}
      </p>

      <p>
        meeting : ${meeting}
      </p>
      <p>  
        meetingCycle : ${meetingCycle}
      </p>
      <p>
        city : ${city}
      </p>
      <p>
        district : ${district}
      </p>
      <p>
        deadlineDate : ${deadlineDate}
      </p>
      <p>
        supportProject : ${supportProject}
      </p>
      <p>
        #applicantRequirements
      </p>
      <p>
        applicantRequirements01 : ${applicantRequirements.applicantRequirements01}
      </p>
      <p>
        applicantRequirements02 : ${applicantRequirements.applicantRequirements02}
      </p>
      <p>
        applicantRequirements03 : ${applicantRequirements.applicantRequirements03}
      </p>
      <p>
        applicantRequirements04 : ${applicantRequirements.applicantRequirements04}
      </p>
      <p>
        applicantRequirements05 : ${applicantRequirements.applicantRequirements05}
      </p>
      <p>
        applicantRequirementsDesc : ${applicantRequirements.applicantRequirementsDesc}
      </p>
      <p>
        question : ${question}
      </p>
      <p>
        manpower : ${manpower}
      </p>
      <p>
        managingExperience : ${managingExperience}
      </p>
      <p>
        #futurePlans
      </p>
      <p>
        month: ${futurePlans.month}
      </p>
      <p>
        update: ${futurePlans.update}
      </p>
      <p>
        projectPriorities
      </p>
      <p>
        first : ${projectPriorities.first}
      </p>
      <p>
        second : ${projectPriorities.second}
      </p>
      <p>
        third : ${projectPriorities.third}
      </p>
      `,
    });
    res.status(200).json({ message: "Compeleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
