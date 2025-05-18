import { STYLE_BLUR_GRADIENT } from "../data/data_styles";

function getGradientColor(index: number) {
  if (index === 0 || index === 3) {
    return 'rgba(0,0,0,0)';
  }
  else if (index === 1 || index === 2) {
    return 'rgba(0,0,0,1)';
  }
}

export default function BlurGradient({ direction = 'top' }) {
  const gradients = [
    { blur: '0.140625px', stops: ['0%', '12.5%', '25%', '37.5%'] },
    { blur: '0.28125px', stops: ['12.5%', '25%', '37.5%', '50%'] },
    { blur: '0.5625px', stops: ['25%', '37.5%', '50%', '62.5%'] },
    { blur: '1.125px', stops: ['37.5%', '50%', '62.5%', '75%'] },
    { blur: '2.25px', stops: ['50%', '62.5%', '75%', '87.5%'] },
    { blur: '4.5px', stops: ['62.5%', '75%', '87.5%', '100%'] },
    { blur: '9px', stops: ['75%', '87.5%', '100%'] },
    { blur: '18px', stops: ['87.5%', '100%'] },
  ];

  return (
    <>
      {gradients.map((gradient, index) => (
        <div
          key={index}
          className={`z-${index + 1} ${STYLE_BLUR_GRADIENT}`}
          style={{
            backdropFilter: `blur(${gradient.blur})`,
            WebkitBackdropFilter: `blur(${gradient.blur})`,
            maskImage: `linear-gradient(to ${direction}, ${gradient.stops.map((stop, index) => `${getGradientColor(index)} ${stop}`)})`
          }}
        >
        </div>
      ))}
    </>
  );
}