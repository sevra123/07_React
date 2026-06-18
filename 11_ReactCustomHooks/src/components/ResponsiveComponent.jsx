import { useWindowWidth } from "../hooks/useWindowWidth";

function ResponsiveComponent() {
  const width = useWindowWidth();

  return <p>Window width: {width}px </p>;
}

export default ResponsiveComponent;
