import { useForm } from "react-hook-form";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
function NewJob({ isOpen, setIsOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };
  const onSubmit = async (data) => {
    const cleanedData = {
      ...data,
      title: data.title.trim(),
      company: data.company.trim(),
      location: data.location,
      type: data.type,
      mode: data.mode,
      experience: data.experience,
      description: data.description.trim(),
      selectedDate: data.selectedDate,
      minsalary: Number(data.minsalary),
      maxsalary: Number(data.maxsalary),
    };
    await delay(2);
    await axios.post("https://job-management-admin-interface-backend.onrender.com/add", {
      data: cleanedData,
    });
    toast.success("Job Listed Successfully");
    reset();
    setIsOpen(false);
  };
  return (
    <section>
      <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
        <div className="bg-white rounded-xl w-full max-w-xl p-8 shadow-lg">
          <div className="flex justify-between items-center mb-3 relative">
            <h2 className="text-2xl font-bold text-center w-full">
              Create Job Opening
            </h2>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute right-0 bg-blue-600 cursor-pointer text-white p-2 rounded-lg"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {isSubmitting && (
            <div className="flex justify-center items-center my-2 ">
              <CircularProgress />
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-[600] text-gray-700">
                  Job Title<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("title", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Full Stack Developer"
                />
                {errors.title && (
                  <div className="text-red-500 font-semibold">
                    {errors.title.message}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name<span className="text-red-500">*</span>
                </label>
                <input
                  {...register("company", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Amazon"
                />
                {errors.company && (
                  <div className="text-red-500 font-semibold">
                    {errors.company.message}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Location<span className="text-red-500">*</span>
                </label>
                <select
                  {...register("location", {
                    required: "Please select a location",
                  })}
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                </select>
                {errors.location && (
                  <p className="text-red-500 font-medium mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Type<span className="text-red-500">*</span>
                </label>
                <select
                  {...register("type", {
                    required: "Please Select Job type",
                  })}
                  defaultValue=""
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Job type
                  </option>
                  <option value="Internship">Internship</option>
                  <option value="FullTime">Full Time</option>
                  <option value="Partime">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
                {errors.type && (
                  <p className="text-red-500 font-medium mt-1">
                    {errors.type.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Job Mode<span className="text-red-500">*</span>
                </label>
                <select
                  {...register("mode", {
                    required: "Please Select Job mode",
                  })}
                  defaultValue=""
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select Job Mode
                  </option>
                  <option value="onsite">Onsite</option>
                  <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                </select>
                {errors.mode && (
                  <p className="text-red-500 font-medium mt-1">
                    {errors.mode.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Experience<span className="text-red-500">*</span>
                </label>
                <select
                  {...register("experience", {
                    required: "Please Choose Required experience",
                  })}
                  defaultValue=""
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Choose required experience
                  </option>
                  <option value="fresher">Frehser</option>
                  <option value="1 yr Exp">1 yr Exp</option>
                  <option value="2 yr Exp">3 yr Exp</option>
                  <option value="3 yr Exp">4 yr Exp</option>
                  <option value="5+ yr Exp">5+ yr Exp</option>
                </select>
                {errors.experience && (
                  <p className="text-red-500 font-medium mt-1">
                    {errors.experience.message}
                  </p>
                )}
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Salary Range<span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    {...register("minsalary", {
                      required: {
                        value: true,
                        message: "Please enter salary range",
                      },
                      min: {
                        value: 0,
                        message: "Salary can't be negative",
                      },
                    })}
                    type="number"
                    className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="₹0"
                  />
                  <input
                    type="number"
                    {...register("maxsalary", {
                      required: {
                        value: true,
                        message: "Please enter salary range",
                      },
                      min: {
                        value: 0,
                        message: "Salary can't be negative",
                      },
                    })}
                    className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="₹12,00,000"
                  />
                </div>
                {(errors.maxsalary || errors.minsalary) && (
                  <div className="text-red-500 font-semibold">
                    {errors.maxsalary?.message || errors.minsalary?.message}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Application Deadline<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  {...register("selectedDate", {
                    required: {
                      value: true,
                      message: "Please select a date",
                    },
                  })}
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.selectedDate && (
                  <div className="text-red-500 font-semibold mt-1">
                    {errors.selectedDate.message}
                  </div>
                )}
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Job Description<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please share a description to let the candidate know more..."
                ></textarea>
                {errors.description && (
                  <div className="text-red-500 font-semibold">
                    {errors.description.message}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="px-6  cursor-pointer py-2 border border-black rounded-md text-gray-700 hover:bg-gray-100">
                <span className="flex text-black">
                  Save Draft
                  <img src="/img/savedraft.svg" className="ms-3" />
                </span>
              </button>
              <button
                disabled={isSubmitting}
                className="flex my-auto px-10 py-2 bg-[#00AAFF] cursor-pointer text-white rounded-md"
              >
                <span className="flex">
                  Publish
                  <img src="/img/publish.svg" className="ms-3" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NewJob;
