import classNames from "@/lib/utils";
import React from "react";

const TeamMemberTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({className, ...props}, ref) => (
  <h3
    ref={ref}
    className={classNames("team-member-title", className)}
    {...props}
  />
));

TeamMemberTitle.displayName = "TeamMemberTitle";

const TeamMemberDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={classNames("team-member-description", className)}
    {...props}
  />
));

TeamMemberDescription.displayName = "TeamMemberDescription";

export {TeamMemberTitle, TeamMemberDescription};