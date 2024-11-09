import { ReactNode } from "react";
import { Drawer } from "@mui/material";
import classNames from "classnames";

interface BottomSheetProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

const BottomSheet = ({ open, onClose, children, className }: BottomSheetProps) => {
    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            className={classNames("bottomSheet", className)}
            ModalProps={{
                keepMounted: true,
                disableEscapeKeyDown: true,
                hideBackdrop: true,
                disablePortal: true,
            }}
        >
            {children}
        </Drawer>
    );
};

export default BottomSheet;
