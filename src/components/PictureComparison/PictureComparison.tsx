import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { PictureComparisonProps } from "../../types";

function PictureComparison({
  imageBefore,
  imageAfter,
}: PictureComparisonProps) {
  return (
    <>
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={imageBefore}
            srcSet={imageBefore}
            alt='Meninas before'
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={imageAfter}
            srcSet={imageAfter}
            alt='Meninas after'
          />
        }
      />
    </>
  );
}

export default PictureComparison;
