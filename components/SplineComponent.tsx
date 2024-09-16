// SplineComponent.js - Separate Server Component to handle Spline
import Spline from '@splinetool/react-spline/next';

const SplineComponent = () => {
  return (
    <Spline
      scene="https://prod.spline.design/tfiaMWCfTnu1e1KB/scene.splinecode"
      width={512}
      height={512}
      className="md:scale-125 md:flex hidden"
    />
  );
};

export default SplineComponent;
