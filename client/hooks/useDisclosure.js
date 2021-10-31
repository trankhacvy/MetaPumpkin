const { useCallback, useState } = require("react");

const useDisclosure = (isOpenDefault = false) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen((state) => !state), []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
