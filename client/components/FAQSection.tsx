import React from "react";
import cx from "classname";
import ArrowDownIcon from "../components/icons/ArrowDownIcon";
import ArrowUpIcon from "../components/icons/ArrowUpIcon";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useAccordionItemContext,
} from "@reach/accordion";

const FQAList = [
  {
    question: "What is MetaPumpkins?",
    answer: `Meta Pumpkin are a collection of ${process.env.TOTAL_PUMPKINS} randomly generated and unique creatures living on the BSC blockchain in the form of ERC-721 tokens`,
  },
  {
    question: "How do I buy a MetaPumpkin?",
    answer:
      "To buy a MetaPumpkin you will need a crypto wallet with BNB inside of it; add a little extra for gas fees.",
  },
  {
    question: "What is the price of a MetaPumpkin?",
    answer: "Mint price will be 0.031 BNB plus little extra for gas fees.",
  },
  {
    question: "How many MetaPumpkin can I mint?",
    answer:
      "You can mint as many MetaPumpkins as you want but you can only mint 10 at a time",
  },
];

const FAQSection = () => {
  return (
    <section
      className={cx("w-full bg-center bg-cover bg-no-repeat bg-gray-900")}
      id="faq"
    >
      <div className="text-white px-4 md:px-8 max-w-screen-lg xl:max-w-screen-xl mx-auto pt-32 pb-20">
        <h3 className="text-2xl md:text-4xl font-bold text-center">FAQ</h3>
        <Accordion collapsible className="mt-10 space-y-8">
          {FQAList.map(({ question, answer }, index) => (
            <AccordionItem
              className="border border-white rounded-md p-6"
              key={question}
              data-aos="flip-up"
              data-aos-duration={200 + (index + 1) * 200}
            >
              <CustomAccordionItem question={question} answer={answer} />
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const CustomAccordionItem = ({ question, answer }: any) => {
  const { isExpanded } = useAccordionItemContext();
  return (
    <>
      <h3 className="text-xl md:text-3xl">
        <AccordionButton className="flex justify-between text-left w-full">
          {question}
          {isExpanded ? (
            <ArrowUpIcon width="32px" height="32px" />
          ) : (
            <ArrowDownIcon width="32px" height="32px" />
          )}
        </AccordionButton>
      </h3>
      <AccordionPanel className="mt-6 text-base md:text-lg">
        {answer}
      </AccordionPanel>
    </>
  );
};

export default FAQSection;
