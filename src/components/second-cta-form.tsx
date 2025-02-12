import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ctaSchema } from "@/lib/schemas"
import InputField from "./common/input-field"
import Label from "./common/label"
import TextArea from "./common/textarea"

const SecondCtaForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof ctaSchema>>({
    resolver: zodResolver(ctaSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      subject: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof ctaSchema>) => {
    console.log(values);
    reset();
  };

  return (
    <div className="second-cta-form-main-container">
      <h3 className="second-cta-form-title">Contact Us</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="second-cta-form-content-container">
        <div className="second-cta-form-input-container">
          <Label
            label="Name"
            className="second-cta-form-label"
          />
          <InputField
            register={register}
            name="name"
            placeholder="Name"
            error={errors.name}
            className="second-cta-form-input"
          />
        </div>
        <div className="second-cta-form-input-container">
          <Label
            label="Email"
            className="second-cta-form-label"
          />
          <InputField
            register={register}
            name="email"
            placeholder="example@email.com"
            error={errors.email}
            className="second-cta-form-input"
          />
        </div>
        <div className="second-cta-form-input-container">
          <Label
            label="Subject"
            className="second-cta-form-label"
          />
          <InputField
            register={register}
            name="subject"
            placeholder="Job"
            error={errors.subject}
            className="second-cta-form-input"
          />
        </div>
        <div className="second-cta-form-input-container">
          <Label
            label="Subject"
            className="second-cta-form-label"
          />
          <TextArea
            register={register}
            name="message"
            placeholder="Your message"
            error={errors.message}
            className="second-cta-form-message-input"
          />
        </div>
        <button type="submit" className="second-cta-form-button">Send</button>
        </div>
      </form>
    </div>
  )
}

export default SecondCtaForm