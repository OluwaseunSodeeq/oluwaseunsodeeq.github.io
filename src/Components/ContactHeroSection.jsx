// import { useRef } from "react";
// import env from "../config/env";
// import ContentContainer from "../Ui/ContentContainer";
// import Error from "../Ui/Error";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";

// function ContactHeroSection() {
//   const form = useRef(null);

//   const textRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm();

//   const onSubmit = async () => {
//     try {
//       await emailjs.sendForm(
//         env.emailJsServiceId,
//         env.emailJsTemplateId,
//         form.current,
//         env.emailJsPublicKey
//       );

//       toast.success("Form submitted successfully!");
//       reset();
//     } catch (error) {
//       console.error("EmailJS Error:", error);
//       toast.error("Failed to send message. Please try again.");
//     }
//   };

//   const onError = () => {
//     toast.error("Please fill the form correctly.");
//   };

//   return (
//     <ContentContainer background="#ffffff">
//       <div className="lg:pt-[145px] md:px-[60px] px-4 pt-24 lg:pb-[104px]">
//         <h3 className="font-bold font-outfit text-2xl text-center">
//           Get In Touch
//         </h3>

//         <p className="text-center mt-2 lg:w-[649px] mx-auto text-gray-600">
//           Contact me for projects, collaborations, or inquiries. Let&apos;s
//           create something amazing!
//         </p>

//         <form
//           ref={form}
//           className="lg:w-[644px] mx-auto mt-8"
//           onSubmit={handleSubmit(onSubmit, onError)}
//         >
//           {/* Name */}
//           <input
//             className="w-full py-3 px-2 rounded-lg bg-gray-100"
//             placeholder="Name"
//             {...register("name", {
//               required: "Name is required",
//               minLength: { value: 2, message: "Name is too short" },
//               validate: (value) =>
//                 textRegex.test(value) || "Only letters allowed",
//             })}
//           />
//           {errors.name && <Error>{errors.name.message}</Error>}

//           {/* Email */}
//           <input
//             className="w-full py-3 px-2 rounded-lg bg-gray-100 mt-3"
//             placeholder="Email"
//             {...register("email", {
//               required: "Email is required",
//               validate: (value) =>
//                 emailRegex.test(value) || "Invalid email address",
//             })}
//           />
//           {errors.email && <Error>{errors.email.message}</Error>}

//           {/* Subject */}
//           <input
//             className="w-full py-3 px-2 rounded-lg bg-gray-100 mt-3"
//             placeholder="Subject"
//             {...register("subject", {
//               required: "Subject is required",
//             })}
//           />
//           {errors.subject && <Error>{errors.subject.message}</Error>}

//           {/* Message */}
//           <textarea
//             rows="5"
//             className="w-full py-3 px-2 rounded-lg bg-gray-100 mt-3"
//             placeholder="Message"
//             {...register("message", {
//               required: "Message is required",
//               minLength: {
//                 value: 5,
//                 message: "Message must be at least 5 characters",
//               },
//             })}
//           />
//           {errors.message && <Error>{errors.message.message}</Error>}

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full mt-4 py-3 bg-blue-600 text-white rounded-full hover:tracking-widest transition-all duration-300"
//           >
//             {isSubmitting ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </ContentContainer>
//   );
// }

// export default ContactHeroSection;

import { useRef } from "react";
import env from "../config/env";
import ContentContainer from "../Ui/ContentContainer";
import Error from "../Ui/Error";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function ContactHeroSection() {
  const form = useRef();
  const textRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameLength = 2;

  const contactArray = [
    {
      icon: (
        <svg
          width="18px"
          height="19px"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8"
        >
          <path
            d="M11.25 17.4247V12.9247C11.25 12.7258 11.171 12.535 11.0303 12.3943C10.8897 12.2537 10.6989 12.1747 10.5 12.1747H7.5C7.30109 12.1747 7.11032 12.2537 6.96967 12.3943C6.82902 12.535 6.75 12.7258 6.75 12.9247V17.4247C6.75 17.6236 6.67098 17.8143 6.53033 17.955C6.38968 18.0957 6.19891 18.1747 6 18.1747H1.5C1.30109 18.1747 1.11032 18.0957 0.96967 17.955C0.829018 17.8143 0.75 17.6236 0.75 17.4247V8.75654C0.75001 8.65203 0.771866 8.54867 0.814165 8.45309C0.856463 8.35751 0.918272 8.27183 0.995625 8.20155L8.49563 1.11967C8.63372 0.993976 8.81374 0.924316 9.00047 0.924316C9.1872 0.924316 9.36722 0.993976 9.50531 1.11967L17.0053 8.20155C17.0827 8.27183 17.1445 8.35751 17.1868 8.45309C17.2291 8.54867 17.2509 8.65203 17.2509 8.75654V17.4247C17.2509 17.6236 17.1719 17.8143 17.0313 17.955C16.8906 18.0957 16.6998 18.1747 16.5009 18.1747H12C11.8011 18.1747 11.6103 18.0957 11.4697 17.955C11.329 17.8143 11.25 17.6236 11.25 17.4247Z"
            stroke="#005CB7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      heading: "Home",
      text: ["78 Bode Thomas, Surulere, Lagos State"],
    },
    {
      icon: (
        <svg
          width="18px"
          height="19px"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8"
        >
          <path
            d="M12.4116 11.5505C12.5154 11.4814 12.6349 11.4393 12.7591 11.428C12.8834 11.4167 13.0085 11.4366 13.1231 11.4858L17.5444 13.4668C17.6934 13.5305 17.8177 13.6407 17.8989 13.781C17.98 13.9212 18.0135 14.084 17.9944 14.2449C17.8487 15.3334 17.3127 16.3319 16.486 17.0548C15.6593 17.7777 14.5982 18.1757 13.5 18.1749C10.1185 18.1749 6.87548 16.8316 4.48439 14.4405C2.0933 12.0494 0.750001 8.80642 0.750001 5.42491C0.749161 4.32672 1.1472 3.26561 1.87009 2.43891C2.59298 1.6122 3.59152 1.07618 4.68 0.930531C4.84091 0.911416 5.00368 0.944925 5.14395 1.02605C5.28422 1.10717 5.39444 1.23153 5.45813 1.38053L7.43906 5.80553C7.48774 5.91918 7.50756 6.04311 7.49676 6.16627C7.48596 6.28943 7.44489 6.40802 7.37719 6.51147L5.37375 8.89366C5.30269 9.00089 5.26066 9.12473 5.25179 9.25307C5.24291 9.38141 5.26749 9.50985 5.32313 9.62584C6.09844 11.213 7.73906 12.834 9.33094 13.6018C9.44755 13.6572 9.57658 13.6812 9.70531 13.6715C9.83404 13.6618 9.95801 13.6187 10.065 13.5465L12.4116 11.5505Z"
            stroke="#005CB7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      heading: "Phone",
      text: ["+2348149428278", "+2347081104745"],
    },
    {
      icon: (
        <svg
          width="18px"
          height="19px"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:w-8 lg:h-8"
        >
          <g clipPath="url(#clip0_1319_2687)">
            <path
              d="M3 9.9248V19.6748C3 19.8737 3.07902 20.0645 3.21967 20.2051C3.36032 20.3458 3.55109 20.4248 3.75 20.4248H20.25C20.4489 20.4248 20.6397 20.3458 20.7803 20.2051C20.921 20.0645 21 19.8737 21 19.6748V9.9248L12 3.9248L3 9.9248Z"
              stroke="#005CB7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.363 15.1748L3.23047 20.2129"
              stroke="#005CB7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.7692 20.2129L13.6367 15.1748"
              stroke="#005CB7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9.9248L13.6369 15.1748H10.3641L3 9.9248"
              stroke="#005CB7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1319_2687">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.924805)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Emails:",
      text: [
        "ademolaoluwaseun90@gmail.com",
        "ademola.oluwaseun.sodeeq@gmail.com",
      ],
    },
  ];

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isSubmitting } = formState;

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        env.emailJsServiceId,
        env.emailJsTemplateId,
        form.current,
        env.emailJsPublicKey
      );

      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const onError = (error) => {
    toast.error(error.message || "Kindly fill the form correctly");
  };
  return (
    <ContentContainer background="#ffffff">
      <div className="lg:pt-[145px] md:px-[60px] px-4 pt-24 lg:pb-[104px]">
        <h3 className="font-bold font-outfit text-2xl leading-8 text-text-color text-center">
          Get In Touch
        </h3>
        <p className="w-full text-base leading-6 font-normal font-outfit text-center mx-auto mt-2 lg:w-[649px]  lg:px-10 lg:text-[18px] lg:leading-9 text-btn-text-color">
          Contact me for projects, collaborations, or inquiries. Let&apos;s
          create something amazing!
        </p>
        <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:gap-x-8">
          <div className="w-full  py-[30px]  pl-[28px]  bg-text-color-two rounded-[16px] mt-8 lg:w-[397px] lg:h-[357px] lg:flex lg:flex-col lg:gap-y-4">
            {contactArray.map((each) => (
              <div
                key={each.heading}
                className="flex gap-x-[16px] lg:gap-x-[36px] mt-2"
              >
                <span className="w-[18px] h-[19px]">{each.icon}</span>
                <div className="-mt-1">
                  <h6 className="font-outfit leading-7 text-[18px] font-[600] tracking-widest text-btn-text-color">
                    {each.heading}
                  </h6>
                  <p className="w-full font-normal text-base leading-8 text-btn-text-color mt-0">
                    <span className=" block text-wrap">{each.text[0]}</span>
                    <span className=" block text-wrap">{each.text[1]}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <form
            ref={form}
            className="lg:w-[644px]"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <div className="w-full ">
              <div className="mt-8">
                <div>
                  <input
                    className="outline-none border w-full py-2 lg:py-4  focus:border-blue-text  pl-2 bg-text-color-two rounded-[8px] block "
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    style={{
                      outlineColor: errors.name ? "red" : "",
                    }}
                    {...register("name", {
                      required: "This field is required",
                      validate: (value) =>
                        (value.trim() &&
                          value.trim().length > nameLength &&
                          textRegex.test(value)) ||
                        "Please enter only letters (no numbers or symbols).",
                    })}
                  />
                  {errors?.name?.message && (
                    <Error>{errors.name.message}</Error>
                  )}
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-y-4 lg:gap-y-0 lg:gap-x-3 lg:flex-row">
                <div className="lg:w-[50%]">
                  <input
                    className="w-full  py-2 lg:py-4  pl-2 focus:outline-blue-text bg-text-color-two rounded-[8px] block "
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    {...register("email", {
                      // required: "This field is required",

                      validate: (value) =>
                        (value.trim().endsWith("@gmail.com") && emailRegex) ||
                        "Please input a valid email",
                    })}
                  />
                  {errors?.email?.message && (
                    <Error>{errors.email.message}</Error>
                  )}
                </div>
                <div className="lg:w-[50%]">
                  <input
                    className="w-full py-2 lg:py-4  pl-2 focus:outline-blue-text bg-text-color-two rounded-[8px] block "
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    style={{
                      outlineColor: errors.name ? "red" : "",
                    }}
                    {...register("subject", {
                      required: "This field is required",
                      validate: (value) =>
                        (value.trim() && textRegex.test(value)) ||
                        "Please enter only letters (no numbers or symbols).",
                    })}
                  />
                  {errors?.subject?.message && (
                    <Error>{errors.subject.message}</Error>
                  )}
                </div>
              </div>
              <textarea
                id="message"
                name="message"
                rows="5"
                cols="50"
                style={{
                  outlineColor: errors.message ? "red" : "",
                }}
                {...register("message", {
                  required: "This field is required",
                  minLength: {
                    value: 4,
                    message: "This field cannot be empty",
                  },
                })}
                className="w-full bg-text-color-two mt-2 lg:h-[150px] focus:outline-blue-text "
              />
              {errors?.message?.message && (
                <Error>{errors.message.message}</Error>
              )}
            </div>
            <div className="mt-3 lg:mt-5">
              <button
                className="w-full py-2 lg:py-3 lg:text-[18px] bg-blue-text border-2 hover:border-white text-white rounded-full block cursor-pointer hover:tracking-widest  transition-all duration-500 "
                type="submit"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContentContainer>
  );
}

export default ContactHeroSection;
// ============Initila Code Below for Form spree version==============
// import { useForm } from "react-hook-form";
// import { useSubmit } from "@formspree/react";
// import ContentContainer from "../Ui/ContentContainer";
// import Error from "../Ui/Error";
// import toast from "react-hot-toast";

// function ContactHeroSection() {
//   const textRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   const formID = "xkndzqra";
//   const nameLength = 2;

//   const contactArray = [
//     {
//       icon: (
//         <svg
//           width="18px"
//           height="19px"
//           viewBox="0 0 18 19"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="lg:w-8 lg:h-8"
//         >
//           <path
//             d="M11.25 17.4247V12.9247C11.25 12.7258 11.171 12.535 11.0303 12.3943C10.8897 12.2537 10.6989 12.1747 10.5 12.1747H7.5C7.30109 12.1747 7.11032 12.2537 6.96967 12.3943C6.82902 12.535 6.75 12.7258 6.75 12.9247V17.4247C6.75 17.6236 6.67098 17.8143 6.53033 17.955C6.38968 18.0957 6.19891 18.1747 6 18.1747H1.5C1.30109 18.1747 1.11032 18.0957 0.96967 17.955C0.829018 17.8143 0.75 17.6236 0.75 17.4247V8.75654C0.75001 8.65203 0.771866 8.54867 0.814165 8.45309C0.856463 8.35751 0.918272 8.27183 0.995625 8.20155L8.49563 1.11967C8.63372 0.993976 8.81374 0.924316 9.00047 0.924316C9.1872 0.924316 9.36722 0.993976 9.50531 1.11967L17.0053 8.20155C17.0827 8.27183 17.1445 8.35751 17.1868 8.45309C17.2291 8.54867 17.2509 8.65203 17.2509 8.75654V17.4247C17.2509 17.6236 17.1719 17.8143 17.0313 17.955C16.8906 18.0957 16.6998 18.1747 16.5009 18.1747H12C11.8011 18.1747 11.6103 18.0957 11.4697 17.955C11.329 17.8143 11.25 17.6236 11.25 17.4247Z"
//             stroke="#005CB7"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//       heading: "Home",
//       text: ["78 Bode Thomas, Surulere, Lagos State"],
//     },
//     {
//       icon: (
//         <svg
//           width="18px"
//           height="19px"
//           viewBox="0 0 19 19"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="lg:w-8 lg:h-8"
//         >
//           <path
//             d="M12.4116 11.5505C12.5154 11.4814 12.6349 11.4393 12.7591 11.428C12.8834 11.4167 13.0085 11.4366 13.1231 11.4858L17.5444 13.4668C17.6934 13.5305 17.8177 13.6407 17.8989 13.781C17.98 13.9212 18.0135 14.084 17.9944 14.2449C17.8487 15.3334 17.3127 16.3319 16.486 17.0548C15.6593 17.7777 14.5982 18.1757 13.5 18.1749C10.1185 18.1749 6.87548 16.8316 4.48439 14.4405C2.0933 12.0494 0.750001 8.80642 0.750001 5.42491C0.749161 4.32672 1.1472 3.26561 1.87009 2.43891C2.59298 1.6122 3.59152 1.07618 4.68 0.930531C4.84091 0.911416 5.00368 0.944925 5.14395 1.02605C5.28422 1.10717 5.39444 1.23153 5.45813 1.38053L7.43906 5.80553C7.48774 5.91918 7.50756 6.04311 7.49676 6.16627C7.48596 6.28943 7.44489 6.40802 7.37719 6.51147L5.37375 8.89366C5.30269 9.00089 5.26066 9.12473 5.25179 9.25307C5.24291 9.38141 5.26749 9.50985 5.32313 9.62584C6.09844 11.213 7.73906 12.834 9.33094 13.6018C9.44755 13.6572 9.57658 13.6812 9.70531 13.6715C9.83404 13.6618 9.95801 13.6187 10.065 13.5465L12.4116 11.5505Z"
//             stroke="#005CB7"
//             strokeWidth="1.5"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       ),
//       heading: "Phone",
//       text: ["+2348149428278", "+2347081104745"],
//     },
//     {
//       icon: (
//         <svg
//           width="18px"
//           height="19px"
//           viewBox="0 0 24 25"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="lg:w-8 lg:h-8"
//         >
//           <g clipPath="url(#clip0_1319_2687)">
//             <path
//               d="M3 9.9248V19.6748C3 19.8737 3.07902 20.0645 3.21967 20.2051C3.36032 20.3458 3.55109 20.4248 3.75 20.4248H20.25C20.4489 20.4248 20.6397 20.3458 20.7803 20.2051C20.921 20.0645 21 19.8737 21 19.6748V9.9248L12 3.9248L3 9.9248Z"
//               stroke="#005CB7"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M10.363 15.1748L3.23047 20.2129"
//               stroke="#005CB7"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M20.7692 20.2129L13.6367 15.1748"
//               stroke="#005CB7"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M21 9.9248L13.6369 15.1748H10.3641L3 9.9248"
//               stroke="#005CB7"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </g>
//           <defs>
//             <clipPath id="clip0_1319_2687">
//               <rect
//                 width="24"
//                 height="24"
//                 fill="white"
//                 transform="translate(0 0.924805)"
//               />
//             </clipPath>
//           </defs>
//         </svg>
//       ),
//       heading: "Emails:",
//       text: [
//         "ademola.oluwaseun.sodeeq@gmail.com",
//         "ademolaoluwaseun90@gmail.com",
//       ],
//     },
//   ];

//   const { register, handleSubmit, reset, formState } = useForm();
//   const { errors, isSubmitting } = formState;
//   const submitForm = useSubmit(formID);
//   // https://formspree.io/f/xkndzqra
//   const contactDatahandler = function (data) {
//     console.log(data);
//     if (!data) return;
//     submitForm(data);
//     reset();
//     toast.success("Form submitted successfully");
//   };
//   const onError = (error) => {
//     toast.error(error.message || "Kindly fill the form correctly");
//   };
//   return (
//     <ContentContainer background="#ffffff">
//       <div className="lg:pt-[145px] md:px-[60px] px-4 pt-24 lg:pb-[104px]">
//         <h3 className="font-bold font-outfit text-2xl leading-8 text-text-color text-center">
//           Get In Touch
//         </h3>
//         <p className="w-full text-base leading-6 font-normal font-outfit text-center mx-auto mt-2 lg:w-[649px]  lg:px-10 lg:text-[18px] lg:leading-9 text-btn-text-color">
//           Contact me for projects, collaborations, or inquiries. Let&apos;s
//           create something amazing!
//         </p>
//         <div className="lg:flex lg:flex-row-reverse lg:justify-center lg:gap-x-8">
//           <div className="w-full  py-[30px]  pl-[28px]  bg-text-color-two rounded-[16px] mt-8 lg:w-[397px] lg:h-[357px] lg:flex lg:flex-col lg:gap-y-4">
//             {contactArray.map((each) => (
//               <div
//                 key={each.heading}
//                 className="flex gap-x-[16px] lg:gap-x-[36px] mt-2"
//               >
//                 <span className="w-[18px] h-[19px]">{each.icon}</span>
//                 <div className="-mt-1">
//                   <h6 className="font-outfit leading-7 text-[18px] font-[600] tracking-widest text-btn-text-color">
//                     {each.heading}
//                   </h6>
//                   <p className="w-full font-normal text-base leading-8 text-btn-text-color mt-0">
//                     <span className=" block text-wrap">{each.text[0]}</span>
//                     <span className=" block text-wrap">{each.text[1]}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <form
//             className="lg:w-[644px]"
//             onSubmit={handleSubmit(contactDatahandler, onError)}
//           >
//             <div className="w-full ">
//               <div className="mt-8">
//                 <div>
//                   <input
//                     className="outline-none border w-full py-2 lg:py-4  focus:border-blue-text  pl-2 bg-text-color-two rounded-[8px] block "
//                     type="text"
//                     placeholder="Name"
//                     name="name"
//                     id="name"
//                     style={{
//                       outlineColor: errors.name ? "red" : "",
//                     }}
//                     {...register("name", {
//                       required: "This field is required",
//                       validate: (value) =>
//                         (value.trim() &&
//                           value.trim().length > nameLength &&
//                           textRegex.test(value)) ||
//                         "Please enter only letters (no numbers or symbols).",
//                     })}
//                   />
//                   {errors?.name?.message && (
//                     <Error>{errors.name.message}</Error>
//                   )}
//                 </div>
//               </div>
//               <div className="mt-2 flex flex-col gap-y-4 lg:gap-y-0 lg:gap-x-3 lg:flex-row">
//                 <div className="lg:w-[50%]">
//                   <input
//                     className="w-full  py-2 lg:py-4  pl-2 focus:outline-blue-text bg-text-color-two rounded-[8px] block "
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     id="email"
//                     {...register("email", {
//                       // required: "This field is required",

//                       validate: (value) =>
//                         (value.trim().endsWith("@gmail.com") && emailRegex) ||
//                         "Please input a valid email",
//                     })}
//                   />
//                   {errors?.email?.message && (
//                     <Error>{errors.email.message}</Error>
//                   )}
//                 </div>
//                 <div className="lg:w-[50%]">
//                   <input
//                     className="w-full py-2 lg:py-4  pl-2 focus:outline-blue-text bg-text-color-two rounded-[8px] block "
//                     type="text"
//                     placeholder="Subject"
//                     name="subject"
//                     id="subject"
//                     style={{
//                       outlineColor: errors.name ? "red" : "",
//                     }}
//                     {...register("subject", {
//                       required: "This field is required",
//                       validate: (value) =>
//                         (value.trim() && textRegex.test(value)) ||
//                         "Please enter only letters (no numbers or symbols).",
//                     })}
//                   />
//                   {errors?.subject?.message && (
//                     <Error>{errors.subject.message}</Error>
//                   )}
//                 </div>
//               </div>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="5"
//                 cols="50"
//                 style={{
//                   outlineColor: errors.userMessage ? "red" : "",
//                 }}
//                 {...register("userMessage", {
//                   required: "This field is required",
//                   minLength: {
//                     value: 4,
//                     message: "This field cannot be empty",
//                   },
//                 })}
//                 className="w-full bg-text-color-two mt-2 lg:h-[150px] focus:outline-blue-text "
//               />
//               {errors?.userMessage?.message && (
//                 <Error>{errors.userMessage.message}</Error>
//               )}
//             </div>
//             <div className="mt-3 lg:mt-5">
//               <button
//                 className="w-full py-2 lg:py-3 lg:text-[18px] bg-blue-text border-2 hover:border-white text-white rounded-full block cursor-pointer hover:tracking-widest  transition-all duration-500 "
//                 type="submit"
//               >
//                 {isSubmitting ? "Submitting..." : "Send Message"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </ContentContainer>
//   );
// }

// export default ContactHeroSection;
