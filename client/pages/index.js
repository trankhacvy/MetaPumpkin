import React, { useRef, useState, useEffect } from "react";
import InfoModal from "../components/InfoModal";
import MintModal from "../components/MintModal";
import SuccessModal from "../components/SuccessModal";
import ComingSoonModal from "../components/ComingSoonModal";
import FAQModal from "../components/FAQModal";
import Header from "../components/Header";
import SlideMenu from "../components/SlideMenu";
import gsap from "gsap";
import styles from "../styles/home.module.css";
import useDisclosure from "../hooks/useDisclosure";

export default () => {
  const ref = useRef();
  const [tx, setTx] = useState("");
  const {
    isOpen: isInfoModalOpen,
    onClose: onCloseInfoModal,
    onOpen: onOpenInfoModal,
  } = useDisclosure();
  const {
    isOpen: isMintModalOpen,
    onClose: onMintModalClose,
    onOpen: onOpenMintModal,
  } = useDisclosure();

  const {
    isOpen: isSuccessModalOpen,
    onClose: onSuccessModalClose,
    onOpen: onOpenSuccessModal,
  } = useDisclosure();

  const {
    isOpen: isCSModalOpen,
    onClose: onCSModalClose,
    onOpen: onOpenCSModal,
  } = useDisclosure();

  const {
    isOpen: isFQAModalOpen,
    onClose: onFQAModalClose,
    onOpen: onOpenFQAModal,
  } = useDisclosure();

  const openMintModal = () => {
    onCloseInfoModal();
    onOpenMintModal();
  };

  const handleSuccess = (hash) => {
    setTx(hash);
    onOpenSuccessModal();
  };

  const handleMouseMove = (e) => {
    if (ref.current) {
      const flashLight = ref.current;
      const left = flashLight.offsetLeft;
      const top = flashLight.offsetTop;
      const cursorX =
        (e.type === "touchmove" && e.changedTouches
          ? e.changedTouches[0].clientX
          : e.clientX) - left;

      const cursorY =
        (e.type === "touchmove" && e.changedTouches
          ? e.changedTouches[0].clientY
          : e.clientY) - top;

      gsap.set(ref.current, {
        background: `radial-gradient(circle at ${cursorX}px ${cursorY}px, transparent 0, rgba(0,0,0,0.3) 2vw, rgba(0,0,0,0.5) 3vw, rgba(0,0,0,0.7) 4vw, rgba(0,0,0,0.85) 7vw, rgba(0,0,0,0.95) 15vw )`,
      });
    }
  };

  useEffect(() => {
    // if (ref) {
    //   gsap.to(ref.current, 3, { opacity: "1" });
    // }

    // window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("touchmove", handleMouseMove);

    setTimeout(() => {
      onOpenInfoModal();
    }, 2300);

    // return () => {
    //   window.removeEventListener("mousemove");
    //   window.removeEventListener("touchmove");
    // };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <Header onClick={openMintModal} />
      </div>
      <div ref={ref} className={styles.darkLayer}></div>
      <InfoModal
        onClick={openMintModal}
        isOpen={isInfoModalOpen}
        onDismiss={onCloseInfoModal}
      />
      <MintModal
        onSuccess={handleSuccess}
        isOpen={isMintModalOpen}
        onDismiss={onMintModalClose}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onDismiss={() => {
          onSuccessModalClose();
          setTx("");
        }}
        hash={tx}
      />
      <ComingSoonModal isOpen={isCSModalOpen} onDismiss={onCSModalClose} />
      <FAQModal isOpen={isFQAModalOpen} onDismiss={onFQAModalClose} />
      <SlideMenu
        onInfoClick={onOpenInfoModal}
        onRoadmapClick={onOpenCSModal}
        onFAQClick={onOpenFQAModal}
      />
      {/* <div className={cx(styles.pumpkin, styles.pumpkin1)} />
      <div className={cx(styles.pumpkin, styles.pumpkin2)} />
      <div className={cx(styles.pumpkin, styles.pumpkin3)} />
      <div className={cx(styles.pumpkin, styles.pumpkin3)} />
      <div className={cx(styles.pumpkin, styles.pumpkin4)} />
      <div className={cx(styles.pumpkin, styles.pumpkin5)} />
      <div className={cx(styles.pumpkin, styles.pumpkin6)} />

      <audio id="click-sound" controls={false} preload muted={false}>
        <source src="/assets/click-sound.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio controls={false} loop preload autoPlay muted={false}>
        <source src="/assets/rain.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}

      <audio id="click-sound" controls={false} preload muted={false}>
        <source src="/assets/click-sound.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
