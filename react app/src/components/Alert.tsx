import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
}

export default Alert;
