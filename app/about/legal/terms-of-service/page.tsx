import { Fragment } from "react/jsx-runtime";
import { termsOfService } from "../../assets/legal";


const TermsOfService = () => {
  return (
    <div>
      {termsOfService.en.split('\n').map((item, index) => (
        <Fragment key={index}>
          {item} <br />
        </Fragment>
      ))}
    </div>
  )
};

export default TermsOfService;