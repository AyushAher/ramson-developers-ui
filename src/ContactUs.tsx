import { useForm } from "react-hook-form";

export function ContactUs() {
  type ContactFormProps = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  const contactForm = useForm<ContactFormProps>();
  function SubmitForm(formData: ContactFormProps) {
    console.log(formData);
  }
  return (
    <>
      <div id="contactUs">
        <h4 className="theme-color text-center">
          Contact <span className="fw-bold">US</span>
        </h4>
        <form
          className="contact-form"
          onSubmit={contactForm.handleSubmit(SubmitForm)}
        >
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              {...contactForm.register("name")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              required
              {...contactForm.register("phone")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input
              required
              type="email"
              className="form-control"
              {...contactForm.register("email")}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              {...contactForm.register("message")}
            />
          </div>
          <div className="my-4">
            <a
              href="mailto:ayushaher118@gmail.com"
              className="btn btn-light"
            >
              Submit
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
