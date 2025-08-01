import Link from "next/link";

const SingleFooter = ({ classOne, footerType }) => {
  return (
    <div className={classOne}>
      <div className="footer-widget">
        <ul className="ft-link">
          {footerType.map((value, innerIndex) => (
            <li key={innerIndex}>
              <Link className="description" href={value.link}>
                {value.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleFooter;
