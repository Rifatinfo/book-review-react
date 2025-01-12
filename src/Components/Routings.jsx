import Billings from "./Billings";
import Logout from "./Logout";
import Preregistration from "./Preregistration";
import Schedule from "./Schedule";
import Teacher from "./Teacher";

const Routings = ({ handleIsActive, isActive ,subjects, handleSelectedSubject, selectedSubject}) => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Teacher"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Teacher")}
                    >
                        Teacher
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "EvaluationCourse"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("EvaluationCourse")}
                    >
                        EvaluationCourse
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Evaluation"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Evaluation")}
                    >
                        Evaluation
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Preregistration"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Preregistration")}
                    >
                        Preregistration
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Schedule"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Schedule")}
                    >
                        Schedule
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Billing"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Billing")}
                    >
                        Billing
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Result"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Result")}
                    >
                        Result
                    </button>
                </div>
                <div>
                    <button
                        className={`border btn border-gray-300 ${isActive.status === "Profile"
                                ? "bg-blue-400 text-[#efbf04] font-bold scale-110"
                                : ""
                            }`}
                        onClick={() => handleIsActive("Profile")}
                    >
                        Profile
                    </button>
                </div>
            </div>

            {isActive.status === "Teacher" ? (
                <Teacher />
            ) : isActive.status === "Billing" ? (
                <Billings />
            ) : isActive.status === "Preregistration" ? (
                <Preregistration
                handleSelectedSubject={handleSelectedSubject}
                 subjects={subjects}></Preregistration>
            ) :
            isActive.status === "Schedule" ? (
                <Schedule selectedSubject={selectedSubject} />
            ) : (
                <Logout />
            )}

        </div>
    );
}

export default Routings;
