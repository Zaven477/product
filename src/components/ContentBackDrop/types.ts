export interface ICountsImages {
    countsImages: string[];
    onClickImages: (index: number) => void;
    activeIndex: number;
    onCloseBackdrop: () => void;
}