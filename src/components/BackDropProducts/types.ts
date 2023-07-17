export interface IBackDropProps {
    open: boolean;
    onClose: () => void;
    images: string[];
    onImages: (index: number) => void;
    imagesActive: number;
}