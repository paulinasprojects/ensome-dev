import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ctaSchema } from "@/lib/schemas";
import InputField from "./common/input-field";
import Label from "./common/label";
import TextArea from "./common/textarea";

import "@/styles/cta-form.scss";

const CtaForm = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm<z.infer<typeof ctaSchema>>({
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="cta-form-content-container">
          <div className="cta-form-container">
            <Label
              label="Name"
              className="cta-form-label"
            />
            <InputField
              register={register}
              name="name"
              placeholder="Name"
              error={errors.name}
              className="cta-form-input"
            />
          </div>
          <div className="cta-form-container">
            <Label
                label="Email"
                className="cta-form-label"
              />
              <InputField
                register={register}
                name="email"
                placeholder="example@email.com"
                error={errors.email}
                className="cta-form-input"
              />
          </div>
        </div>
        <div className="cta-form-subject-container">
          <Label
            label="Subject"
            className="cta-form-label"
          />
          <InputField
            register={register}
            name="subject"
            placeholder="Job"
            error={errors.subject}
            className="cta-form-subject-input"
          />
        </div>
        <div className="cta-form-message-container">
          <Label
            label="Message"
            className="cta-form-label"
          />
          <TextArea
            register={register}
            name="message"
            placeholder="Your message"
            error={errors.message}
            className="cta-form-message-input"
          />
        <button type="submit" className="cta-button">Send</button>
        </div>
      </form>
    </div>
  )
}

export default CtaForm