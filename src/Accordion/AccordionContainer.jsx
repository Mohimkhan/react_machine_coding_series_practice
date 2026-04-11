import { useState } from "react";
import AccordionList from "./components/AccordionList";
import { autoIncrement } from "../../utils/tabs";
import WrapperWithHeader from "../components/common/WrapperWithHeader";

const AccordionContainer = () => {
  const ID = autoIncrement();
  const [accordionsData, setAccordionsData] = useState([
    {
      id: ID(),
      title: "Great Humans Era",
      content: `Key Aspects of Freelancing Independence: Freelancers function as their own business, acting as independent contractors. Multiple Clients: Instead of one employer, freelancers often manage several clients simultaneously.
Project-Based Income: Earnings are typically tied to specific projects or hourly rates, which can be inconsistent compared to a salary.
Responsibility: Freelancers handle their own marketing, lead generation, and tax filings. 
YouTube
YouTube`,
      expand: false,
    },
    {
      id: ID(),
      title: "Civilization Is The New Trend",
      content: `Usage Examples & Common Roles
Freelancing covers a broad range of industries, particularly in fields that allow for remote work or project-based tasks: 
Coursera
Coursera
 +1
Creative Services: Graphic design, copywriting, video editing, and content creation.
Technology: Web development, software programming, and IT consulting.
Marketing: Social media management, search engine optimization (SEO), and digital marketing.
Administration & Finance: Virtual assistance, bookkeeping, and project management. 
YouTube
YouTube
 +4`,
      expand: false,
    },
    {
      id: ID(),
      title: "Do Whatever Is Right",
      content: `Synonyms and Similar Terms
Independent Contractor
Self-employed worker
Freelance worker
Contractor
Independent Professional (iPro) 
Upwork
Upwork
 +4
Common Platforms to Find Work
Upwork
Fiverr
Contra
LinkedIn 
YouTube
YouTube
 +1
Freelancing is a popular career choice for those seeking to escape the 9-to-5 structure in favor of freedom and control over their work environment. 
N26
N26
 +1`,
      expand: false,
    },
  ]);

  return (
    <>
      {/* Custom Accordion */}
      <WrapperWithHeader heading="Custom Accordion">
        <AccordionList
          accordionsData={accordionsData}
          setAccordionsData={setAccordionsData}
        />
      </WrapperWithHeader>
      {/* Native Accordion */}
      <WrapperWithHeader heading="Custom Accordion">
        <div className="w-full flex flex-col items-stretch gap-2">
          {accordionsData.map((accordion, index) => (
            <details
              key={index}
              className="w-full border border-white/50 p-2 rounded-md"
            >
              <summary className="cursor-pointer font-semibold">
                {accordion?.title ?? "No Title"}
              </summary>

              <p className="mt-2">{accordion?.content ?? "No Content"}</p>
            </details>
          ))}
        </div>
      </WrapperWithHeader>
    </>
  );
};
export default AccordionContainer;
