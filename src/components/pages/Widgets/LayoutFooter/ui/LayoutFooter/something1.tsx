interface LayoutFooterProps {
  footerClassname: string;
  spanClassName: string;
  anchorClassname: string;
  socialsSpanClassname: string;

  socialsSection_FirstSvgXMLNS: string;
  firstSvgWidth: string;
  firstSvgHeight: string;
  firstSvgViewbox: string;
  firstSvgClassname: string;

  servicesSpanName: string;
  servicesAnchorName1: string;
  servicesAnchorName2: string;
  servicesAnchorName3: string;
  servicesAnchorName4: string;

  CompanySpanName: string;
  CompanyAnchorName1: string;
  CompanyAnchorName2: string;
  CompanyAnchorName3: string;
  CompanyAnchorName4: string;

  socialsSpanName: string;

  socialsPathD1: string;
  socialsPathD2: string;
  socialsPathD3: string;
}

export const LayoutFooter1: React.FC<LayoutFooterProps> = ({
  footerClassname,
  spanClassName,
  anchorClassname,
  socialsSpanClassname,

  socialsSection_FirstSvgXMLNS,
  firstSvgWidth,
  firstSvgHeight,
  firstSvgViewbox,
  firstSvgClassname,

  servicesSpanName,
  servicesAnchorName1,
  servicesAnchorName2,
  servicesAnchorName3,
  servicesAnchorName4,

  CompanySpanName,
  CompanyAnchorName1,
  CompanyAnchorName2,
  CompanyAnchorName3,
  CompanyAnchorName4,

  socialsSpanName,

  socialsPathD1,
  socialsPathD2,
  socialsPathD3,
}) => {
  return (
    <>
      <footer className={footerClassname}>
        {/* Services section */}
        <div>
          <span className={spanClassName}>{servicesSpanName}</span>
          <a className={anchorClassname}>{servicesAnchorName1}</a>
          <a className={anchorClassname}>{servicesAnchorName2}</a>
          <a className={anchorClassname}>{servicesAnchorName3}</a>
          <a className={anchorClassname}>{servicesAnchorName4}</a>
        </div>

        {/* Company section */}
        <div>
          <span className={spanClassName}>{CompanySpanName}</span>
          <a className={anchorClassname}>{CompanyAnchorName1}</a>
          <a className={anchorClassname}>{CompanyAnchorName2}</a>
          <a className={anchorClassname}>{CompanyAnchorName3}</a>
          <a className={anchorClassname}>{CompanyAnchorName4}</a>
        </div>

        {/* Socials logos section*/}
        <div>
          <span className={spanClassName}>{socialsSpanName}</span>
          <div className={socialsSpanClassname}>
            <a>
              <svg
                xmlns={socialsSection_FirstSvgXMLNS}
                width={firstSvgWidth}
                height={firstSvgHeight}
                viewBox={firstSvgViewbox}
                className={firstSvgClassname}
              >
                <path d={socialsPathD1}></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns={socialsSection_FirstSvgXMLNS}
                width={firstSvgWidth}
                height={firstSvgHeight}
                viewBox={firstSvgViewbox}
                className={firstSvgClassname}
              >
                <path d={socialsPathD2}></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns={socialsSection_FirstSvgXMLNS}
                width={firstSvgWidth}
                height={firstSvgHeight}
                viewBox={firstSvgViewbox}
                className={firstSvgClassname}
              >
                <path d={socialsPathD3}></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default LayoutFooter1;
