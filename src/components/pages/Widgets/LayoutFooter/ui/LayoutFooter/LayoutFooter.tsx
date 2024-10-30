import { FC } from "react";
import { LayoutFooter1 } from "./something1";

const LayoutFooter: FC = () => {

  const footerClassname = "footer bg-base-300 p-10 text-base-content";
  const spanClassName = "link-hover link";
  const anchorClassname = "link-hover link";
  const socialsSpanClassname = "grid grid-flow-col gap-4";

  const socialsSection_FirstSvgXMLNS = "http://www.w3.org/2000/svg";
  const firstSvgWidth  = "24";
  const firstSvgHeight = "24";
  const firstSvgViewbox = " 0 0 24 24";
  const firstSvgClassname = "fill-current";

  const servicesSpanName = "Services";
  const servicesAnchorName1 = "Branding";
  const servicesAnchorName2 = "Design";
  const servicesAnchorName3 = "Marketing";
  const servicesAnchorName4 = "Advertisement";

  const CompanySpanName = "Company";
  const CompanyAnchorName1 = "About us";
  const CompanyAnchorName2 = "Contact";
  const CompanyAnchorName3 = "Jobs";
  const CompanyAnchorName4 = "Press kit";

  const socialsSpanName = "Social";

  const socialsPathD1 = "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z";
  const socialsPathD2 = "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z";
  const socialsPathD3 = "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z";

  return (
    <>
      <LayoutFooter1
          footerClassname={footerClassname}
          spanClassName={spanClassName}
          anchorClassname={anchorClassname}
          socialsSpanClassname={socialsSpanClassname}

          socialsSection_FirstSvgXMLNS={socialsSection_FirstSvgXMLNS}
          firstSvgWidth ={firstSvgWidth}
          firstSvgHeight={firstSvgHeight}
          firstSvgViewbox={firstSvgViewbox}
          firstSvgClassname={firstSvgClassname}

          servicesSpanName={servicesSpanName}
          servicesAnchorName1={servicesAnchorName1}
          servicesAnchorName2={servicesAnchorName2}
          servicesAnchorName3={servicesAnchorName3}
          servicesAnchorName4={servicesAnchorName4}

          CompanySpanName={CompanySpanName}
          CompanyAnchorName1={CompanyAnchorName1}
          CompanyAnchorName2={CompanyAnchorName2}
          CompanyAnchorName3={CompanyAnchorName3}
          CompanyAnchorName4={CompanyAnchorName4}

          socialsSpanName={socialsSpanName}

          socialsPathD1={socialsPathD1}
          socialsPathD2={socialsPathD2}    
          socialsPathD3={socialsPathD3}
          />
    </>  
  );
};

export default LayoutFooter;
