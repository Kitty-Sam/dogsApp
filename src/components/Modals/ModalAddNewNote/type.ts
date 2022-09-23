export type ModalAddNewNoteType = {
  isOpen: boolean;
  setTitle: (title: string) => void;
  setIsOpen: (isOpen: boolean) => void;
  title: string;
  pinnedDay: string;
  savePress: () => void;
};
