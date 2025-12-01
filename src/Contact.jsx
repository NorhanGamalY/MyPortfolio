import React, { useRef, useState }  from 'react'
import emailjs from "emailjs-com";


export default function Contact({id}) {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "success", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast((t) => ({ ...t, show: false }));
    }, 3000); 
  };

  const nameRegex = /^[\p{L}\s]{3,30}$/u;          
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });

    const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    const newErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!nameRegex.test(name)) {
      newErrors.name = "Please enter a valid name.";
      hasError = true;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
      hasError = true;
    }

    if (message.length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("success", "Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        showToast("error", "Something went wrong, please try again.");
      });
  };


  return (
    <>
    <section id="contact">
    <div className="container min-h-screen mx-auto py-1 md:py-5 text-center text-white">
     <div className="my-5 pt-10 pb-5">
        <h1 className="text-4xl font-bold bg-linear-to-r from-purple-500  to-red-500 bg-clip-text text-transparent pb-3">Let's Work Together</h1>
      </div>
        
        {toast.show && (
        <div
          className={`fixed top-5 md:top-10 left-[23%] md:left-[43%] w-1/2 md:w-1/6 mx-auto z-50 px-4 py-3 rounded-lg shadow-lg text-sm
          ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-[80%] md:w-[70%] rounded-2xl mx-auto p-5 flex flex-col items-center justify-center bg-[#111827]" style={{ height: '500px' }}>
                <form className="w-[90%] mx-auto"  ref={form} onSubmit={sendEmail}> 
                <input type="text" name="user_name"  placeholder="Your Name" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <span className="text-red-500">{errors.name}</span>
                <input  name="user_email"  type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                <span className="text-red-500 py-2">{errors.email}</span>
                <textarea  name="message" placeholder="Your Message" className="w-full p-3 mb-4 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"></textarea>
                <span className="text-red-500 block">{errors.message}</span>
                <button type="submit" className="px-4 py-2 mt-2 bg-purple-600 text-white rounded-md hover:bg-pink-500 transition-colors">Send Message</button>
                </form>

    </div>
    </div>
    </section>
    </>
  )
}
