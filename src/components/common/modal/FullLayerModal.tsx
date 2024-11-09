import { Dialog } from "@mui/material";
import { ReactNode } from "react";

interface FullLayerModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

const FullLayerModal = ({ open, onClose, children }: FullLayerModalProps) => (
    <Dialog
        open={open}
        onClose={onClose}
        transitionDuration={0}
        fullScreen
    >
        {children}
    </Dialog>
);

export default FullLayerModal;
