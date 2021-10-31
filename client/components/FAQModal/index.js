import React from "react";
import Image from "next/image";
import Modal from "../Modal";
import styles from "./FAQModal.module.css";

const FQAList = [
  {
    question: "What is Meta Pumpkin?",
    answer: `Meta Pumpkin are a collection of ${process.env.TOTAL_PUMPKINS} randomly generated and unique creatures living on the BSC blockchain in the form of ERC-721 tokens`,
  },
  {
    question: "How do I buy a Meta Pumpkin?",
    answer:
      "To buy a Meta Pumpkin you will need a crypto wallet with BNB inside of it; add a little extra for gas fees.",
  },
  {
    question: "What is the price of a Meta Pumpkin?",
    answer: "Mint price will be 0.031 BNB plus little extra for gas fees.",
  },
  {
    question: "How many Meta Pumpkin can I mint?",
    answer:
      "You can mint as many Meta Pumpkins as you want but you can only mint 10 at a time",
  },
];

const FAQModal = (props) => {
  return (
    <Modal {...props}>
      <div className={styles.container}>
        <h3 className={styles.title}>Frequently Asked Questions</h3>
        {FQAList.map(({ question, answer }) => (
          <div className={styles.row} key={question}>
            <p className={styles.question}>{question}</p>
            <p className={styles.answer}>{answer}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default FAQModal;
