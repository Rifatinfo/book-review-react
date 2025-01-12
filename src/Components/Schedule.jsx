import React, { useState } from "react";

const Schedule = ({ selectedSubject }) => {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedScheduleAppend, setSelectedScheduleAppend] = useState();
  const handleScheduleData = (sub) => {
    setSelectedData(sub);
  };
  const handleAppend = (data) =>{
    console.log(data);
  }
  return (
    <div>
      <div>
        <div>
          <div className="mt-32 flex justify-center mb-16">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Course ID
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Course Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Section
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Day
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Time
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Room No
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left"></th>
                  </tr>
                </thead>
                <tbody id="IdCourseContainer">
                  {selectedSubject.map((selectedSub) => (
                    <>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">
                          {selectedSub.course_id}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {selectedSub.course_name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td className="border border-gray-300 px-4 py-2"></td>
                        <td
                          onClick={() =>
                            handleScheduleData(selectedSub.schedule)
                          }
                          className="border border-gray-300 px-4 py-2 text-gray-500 hover:underline font-semibold cursor-pointer"
                        >
                          Select
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          {/*  append section  select Button  */}
          <div className="flex flex-col max-w-3xl mx-auto  mt-12">
            <div className="flex justify-center">
              <table className="table-auto border-collapse border border-gray-300 w-full text-center">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Choose</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Section
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Day</th>
                    <th className="border border-gray-300 px-4 py-2">Time</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Room No
                    </th>
                  </tr>
                </thead>
                <tbody id="select-container">
                  {Object.entries(
                    selectedData.reduce((acc, curr) => {
                      if (!acc[curr.section]) acc[curr.section] = [];
                      acc[curr.section].push(curr);
                      return acc;
                    }, {})
                  ).map(([section, entries]) => (
                    <React.Fragment key={section}>
                      {entries.map((entry, index) => (
                        <tr key={`${section}-${index}`}>
                          {index === 0 && (
                            <>
                              {/* Checkbox and Section */}
                              <td
                                rowSpan={entries.length}
                                className="border border-gray-300 px-4 py-2"
                              >
                                <label className="swap swap-rotate inline-flex items-center cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="hidden peer"
                                  />
                                  <div className="swap-on hidden peer-checked:block">
                                    <img
                                      className="w-5 h-5"
                                      src="https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png"
                                      alt="Checked"
                                    />
                                  </div>
                                  <div className="swap-off block peer-checked:hidden">
                                    <img
                                    onClick={()=> handleAppend(entries)}
                                      className="w-4 h-4"
                                      src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
                                      alt="Unchecked"
                                    />
                                  </div>
                                </label>
                              </td>
                              <td
                                rowSpan={entries.length}
                                className="border border-gray-300 px-4 py-2"
                              >
                                {section}
                              </td>
                            </>
                          )}
                          {/* Day and Time */}
                          <td className="border border-gray-300 px-4 py-2">
                            {entry.day}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {entry.time}
                          </td>
                          {index === 0 && (
                            <td
                              rowSpan={entries.length}
                              className="border border-gray-300 px-4 py-2"
                            >
                              {entry.room}
                            </td>
                          )}
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
