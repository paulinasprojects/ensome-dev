import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ctaSchema } from "@/lib/schemas";
import InputField from "./common/input-field";
import Label from "./common/label";
import TextArea from "./common/textarea";

import "@/styles/contact-us-form.scss";


const ContactUsForm = () => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm<z.infer<typeof ctaSchema>>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof ctaSchema>) => {
    console.log(values);
    reset();
  };

  return (
    <div className="contact-us-form-main-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-us-form-content-container">
        <div className="contact-us-form-input-container">
          <Label
            label="Name"
            className="contact-us-form-label"
          />
          <InputField
            register={register}
            name="name"
            placeholder="Name"
            error={errors.name}
            className="contact-us-form-input"
          />
        </div>
        <div className="contact-us-form-input-container">
          <Label
            label="Email"
            className="contact-us-form-label"
          />
          <InputField
            register={register}
            name="email"
            placeholder="example@mail.com"
            error={errors.email}
            className="contact-us-form-input"
          />
        </div>
        <div className="contact-us-form-input-container">
          <Label
            label="Subject"
            className="contact-us-form-label"
          />
          <InputField
            register={register}
            name="subject"
            placeholder="Job"
            error={errors.subject}
            className="contact-us-form-input"
          />
        </div>
        <div className="contact-us-form-input-container">
          <Label
            label="Message"
            className="contact-us-form-label"
          />
         <TextArea
          register={register}
          name="message"
          placeholder="Your message"
          error={errors.message}
          className="contact-us-form-message-input"
         />
        </div>
          <button className="contact-us-form-button-container">Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm