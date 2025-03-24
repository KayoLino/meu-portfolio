import './background.css';

export default function Background() {
  const iconStyles = [
    8, 7, 11, 9, 3, 5, 4, 6,
    10, 2, 12, 1, 8, 7, 6, 9,
    4, 5, 2, 5, 6, 10, 4, 9,
    8, 7, 11, 9, 3, 5, 4, 6,
    10, 2, 12, 1, 8, 7, 6, 9,
    4, 5, 2, 5, 6, 10, 4, 9,
    8, 7, 11, 9, 3, 5, 4, 6,
    10, 2, 12, 1, 8, 7, 6, 9,
  ];

  return (
    <div className="background">
      <div className="container-particles">
        {iconStyles.map((value, index) => (
          <span
            key={index}
            className="icone"
            style={{ '--i': value }}
          />
        ))}
      </div>
    </div>
  );
}
